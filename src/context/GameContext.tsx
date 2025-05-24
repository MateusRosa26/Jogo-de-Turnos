import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Character, Move, StatusEffect, Gym, Item } from '@/types/game';
import { GenericoDuto } from '@/data/characters/GenericoDuto/character';
import { YanJ } from '@/data/characters/YanJ/character';
import { Tana } from '@/data/characters/Tana/character';
import { DaMoze } from '@/data/characters/DaMoze/character';
import { Markin } from '@/data/characters/Markin/character';
import { Zaion } from '@/data/characters/Zaion/character';
import { GYMS } from '@/data/gyms';
import { CRAFTING_RECIPES, ALL_ITEMS } from '@/data/items';
import { EXP_PER_LEVEL, STATS_PER_LEVEL } from '@/types/game';

type GameContextType = {
  player: Character | null;
  currentEnemy: Character | null;
  currentEnemyIndex: number;
  currentGym: Gym;
  currentGymIndex: number;
  experience: number;
  level: number;
  inventory: Item[];
  showItemReward: boolean;
  showCrafting: boolean;
  showCraftedItem: boolean;
  craftedItem: Item | null;
  nextEnemy: () => void;
  nextGym: () => void;
  resetGame: () => void;
  gainExperience: (amount: number) => void;
  levelUpMove: (moveId: string) => void;
  addItemToInventory: (item: Item) => void;
  canCraftItem: (recipeId: string) => boolean;
  craftItem: (recipeId: string) => Item | null;
  showLevelUp: boolean;
  setShowLevelUp: (show: boolean) => void;
  setShowItemReward: (show: boolean) => void;
  setShowCrafting: (show: boolean) => void;
  setShowCraftedItem: (show: boolean) => void;
};

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [player, setPlayer] = useState<Character | null>(null);
  const [currentEnemy, setCurrentEnemy] = useState<Character | null>(null);
  const [currentEnemyIndex, setCurrentEnemyIndex] = useState(0);
  const [currentGymIndex, setCurrentGymIndex] = useState(0);
  const [experience, setExperience] = useState(0);
  const [level, setLevel] = useState(1);
  const [inventory, setInventory] = useState<Item[]>([]);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [showItemReward, setShowItemReward] = useState(false);
  const [showCrafting, setShowCrafting] = useState(false);
  const [showCraftedItem, setShowCraftedItem] = useState(false);
  const [craftedItem, setCraftedItem] = useState<Item | null>(null);

  const currentGym = GYMS[currentGymIndex];

  const resetGame = useCallback(() => {
    const savedCharacter = localStorage.getItem('selectedCharacter');
    let selectedPlayer: Character;
    
    if (savedCharacter === 'yanj') {
      selectedPlayer = { ...YanJ };
    } else if (savedCharacter === 'tana') {
      selectedPlayer = { ...Tana };
    } else if (savedCharacter === 'damoze') {
      selectedPlayer = { ...DaMoze };
    } else if (savedCharacter === 'markin') {
      selectedPlayer = { ...Markin };
    } else if (savedCharacter === 'zaion') {
      selectedPlayer = { ...Zaion };
    } else {
      selectedPlayer = { ...GenericoDuto };
    }
    
    // Garante que o player está com vida cheia e sem efeitos
    selectedPlayer.currentHealth = selectedPlayer.maxHealth;
    selectedPlayer.statusEffects = [];
    selectedPlayer.buffs = [];
    selectedPlayer.inventory = [];
    
    setPlayer(selectedPlayer);
    setCurrentGymIndex(0);
    setCurrentEnemyIndex(0);
    setCurrentEnemy(GYMS[0].enemies[0]);
    setExperience(0);
    setLevel(1);
    setInventory([]);
    setShowLevelUp(false);
    setShowItemReward(false);
    setShowCrafting(false);
    setShowCraftedItem(false);
    setCraftedItem(null);
  }, []);

  const gainExperience = useCallback((amount: number) => {
    // Calcula a experiência baseada no nível do inimigo
    const enemyLevel = currentEnemy?.level ?? 1;
    const totalExp = currentGym.baseExpReward + (currentGym.expPerLevel * enemyLevel);

    setExperience((prevExp) => {
      const newExp = prevExp + totalExp;
      
      // Verifica se deve fazer level up
      setLevel((prevLevel) => {
        const nextLevelExp = EXP_PER_LEVEL[prevLevel + 1] ?? Infinity;
        
        if (newExp >= nextLevelExp) {
          const newLevel = prevLevel + 1;
          
          // Atualiza os stats do personagem
          setPlayer((prev) => {
            if (!prev) return null;
            return {
              ...prev,
              maxHealth: prev.maxHealth + STATS_PER_LEVEL.health,
              currentHealth: prev.maxHealth + STATS_PER_LEVEL.health,
              attack: prev.attack + STATS_PER_LEVEL.attack,
              level: newLevel,
              nextLevelExp: EXP_PER_LEVEL[newLevel + 1] ?? Infinity
            };
          });
          
          // Mostra a tela de level up em níveis pares
          if (newLevel % 2 === 0) {
            setShowLevelUp(true);
          }
          
          return newLevel;
        }
        
        return prevLevel;
      });
      
      return newExp;
    });
  }, [currentEnemy?.level, currentGym.baseExpReward, currentGym.expPerLevel]);

  const levelUpMove = useCallback((moveId: string) => {
    setPlayer(prev => {
      if (!prev) return null;
      
      const currentLevel = prev.moveLevels[moveId] || 0;
      if (currentLevel >= 5) return prev;
      
      const move = prev.moves.find(m => m.id === moveId);
      if (!move) return prev;
      
      // Simplified logic: just increase by 25% from current damage
      const newLevel = currentLevel + 1;
      const newDamage = Math.floor(move.damage * 1.25);
      
      console.log(`Skill Evolution: ${move.name} Level ${currentLevel} -> ${newLevel}, Damage ${move.damage} -> ${newDamage} (+25%)`);
      
      return {
        ...prev,
        moveLevels: {
          ...prev.moveLevels,
          [moveId]: newLevel
        },
        moves: prev.moves.map(m => {
          if (m.id === moveId) {
            return {
              ...m,
              damage: newDamage
            };
          }
          return m;
        })
      };
    });
  }, []);

  const addItemToInventory = useCallback((item: Item) => {
    setInventory(prev => [...prev, item]);
    
    // Aplica efeito do item se for imediato
    if (item.effect) {
      const effect = item.effect;
      setPlayer(prev => {
        if (!prev) return null;
        
        const newPlayer = { ...prev };
        
        // Todos os efeitos são meramente descritivos agora
        // Os stats de molho, sagacidade e onda não afetam gameplay
        console.log(`Item aplicado: ${item.name} - ${effect.type} +${effect.value}`);
        
        return newPlayer;
      });
    }
  }, []);

  const canCraftItem = useCallback((recipeId: string) => {
    const recipe = CRAFTING_RECIPES.find(r => r.id === recipeId);
    if (!recipe) return false;
    
    return recipe.requiredItems.every(itemId => 
      inventory.some(item => item.id === itemId)
    );
  }, [inventory]);

  const craftItem = useCallback((recipeId: string) => {
    const recipe = CRAFTING_RECIPES.find(r => r.id === recipeId);
    if (!recipe || !canCraftItem(recipeId)) return null;
    
    // Remove itens necessários do inventário
    setInventory(prev => {
      let newInventory = [...prev];
      recipe.requiredItems.forEach(itemId => {
        const itemIndex = newInventory.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
          newInventory.splice(itemIndex, 1);
        }
      });
      return newInventory;
    });
    
    // Adiciona item resultante
    const resultItem = ALL_ITEMS.find(item => item.id === recipe.resultItem);
    if (resultItem) {
      addItemToInventory(resultItem);
      setCraftedItem(resultItem);
      setShowCraftedItem(true);
      return resultItem;
    }
    
    return null;
  }, [canCraftItem, addItemToInventory]);

  const nextEnemy = useCallback(() => {
    const nextEnemyIndex = currentEnemyIndex + 1;
    
    // Se ainda há inimigos no ginásio atual
    if (nextEnemyIndex < currentGym.enemies.length) {
      setCurrentEnemyIndex(nextEnemyIndex);
      setCurrentEnemy(currentGym.enemies[nextEnemyIndex]);
    } else {
      // Se não há mais inimigos no ginásio atual, mostra tela de recompensa
      // MAS NÃO muda o ginásio ainda - só muda quando o item for selecionado
      setShowItemReward(true);
    }
  }, [currentEnemyIndex, currentGym]);

  const nextGym = useCallback(() => {
    // Vai para o próximo ginásio
    const nextGymIndex = currentGymIndex + 1;
    
    if (nextGymIndex < GYMS.length) {
      // Próximo ginásio
      setCurrentGymIndex(nextGymIndex);
      setCurrentEnemyIndex(0);
      setCurrentEnemy(GYMS[nextGymIndex].enemies[0]);
    } else {
      // Se completou todos os ginásios, mostra tela de crafting
      setShowCrafting(true);
    }
  }, [currentGymIndex]);

  return (
    <GameContext.Provider
      value={{
        player,
        currentEnemy,
        currentEnemyIndex,
        currentGym,
        currentGymIndex,
        experience,
        level,
        inventory,
        showItemReward,
        showCrafting,
        showCraftedItem,
        craftedItem,
        nextEnemy,
        nextGym,
        resetGame,
        gainExperience,
        levelUpMove,
        addItemToInventory,
        canCraftItem,
        craftItem,
        showLevelUp,
        setShowLevelUp,
        setShowItemReward,
        setShowCrafting,
        setShowCraftedItem
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
