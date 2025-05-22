import React, { createContext, useContext, useState, useCallback } from 'react';
import type { Character, Move, StatusEffect } from '@/types/game';
import { GenericoDuto } from '@/data/characters/GenericoDuto/character';
import { YanJ } from '@/data/characters/YanJ/character';
import { Tana } from '@/data/characters/Tana/character';
import { faClubeDoPericles } from '@/data/gyms/faClubeDoPericles';
import { EXP_PER_LEVEL, STATS_PER_LEVEL } from '@/types/game';

type GameContextType = {
  player: Character | null;
  currentEnemy: Character | null;
  currentEnemyIndex: number;
  experience: number;
  level: number;
  nextEnemy: () => void;
  resetGame: () => void;
  gainExperience: (amount: number) => void;
  levelUpMove: (moveId: string) => void;
  showLevelUp: boolean;
  setShowLevelUp: (show: boolean) => void;
};

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [player, setPlayer] = useState<Character | null>(null);
  const [currentEnemy, setCurrentEnemy] = useState<Character | null>(null);
  const [currentEnemyIndex, setCurrentEnemyIndex] = useState(0);
  const [experience, setExperience] = useState(0);
  const [level, setLevel] = useState(1);
  const [showLevelUp, setShowLevelUp] = useState(false);

  const resetGame = useCallback(() => {
    const savedCharacter = localStorage.getItem('selectedCharacter');
    if (savedCharacter === 'yanj') {
      setPlayer({ ...YanJ });
    } else if (savedCharacter === 'tana') {
      setPlayer({ ...Tana });
    } else {
      setPlayer({ ...GenericoDuto });
    }
    setCurrentEnemyIndex(0);
    setCurrentEnemy(faClubeDoPericles.enemies[0]);
    setExperience(0);
    setLevel(1);
    setShowLevelUp(false);
  }, []);

  const gainExperience = useCallback((amount: number) => {
    // Calcula a experiência baseada no nível do inimigo
    const enemyLevel = currentEnemy?.level ?? 1;
    const totalExp = faClubeDoPericles.baseExpReward + (faClubeDoPericles.expPerLevel * enemyLevel);

    setExperience((prevExp) => {
      const newExp = prevExp + totalExp;
      const nextLevelExp = EXP_PER_LEVEL[level + 1] ?? Infinity;
      
      if (newExp >= nextLevelExp) {
        setLevel((prevLevel) => {
          const newLevel = prevLevel + 1;
          
          // Atualiza os stats do personagem
          if (player) {
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
          }
          
          // Mostra a tela de level up em níveis pares
          if (newLevel % 2 === 0) {
            setShowLevelUp(true);
          }
          
          return newLevel;
        });
      }
      
      return newExp;
    });
  }, [level, player, currentEnemy]);

  const levelUpMove = useCallback((moveId: string) => {
    if (!player) return;
    
    const currentLevel = player.moveLevels[moveId] || 0;
    if (currentLevel >= 3) return;
    
    const move = player.moves.find(m => m.id === moveId);
    if (!move) return;
    
    // Calcula o dano base (revertendo os aumentos anteriores)
    const baseDamage = Math.floor(move.damage / Math.pow(1.15, currentLevel));
    // Calcula o novo dano com o próximo nível
    const newDamage = Math.floor(baseDamage * Math.pow(1.15, currentLevel + 1));
    
    // Atualiza o nível da habilidade
    setPlayer(prev => {
      if (!prev) return null;
      return {
        ...prev,
        moveLevels: {
          ...prev.moveLevels,
          [moveId]: currentLevel + 1
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
  }, [player]);

  const nextEnemy = useCallback(() => {
    const nextEnemyIndex = currentEnemyIndex + 1;
    
    // Se ainda há inimigos no ginásio
    if (nextEnemyIndex < faClubeDoPericles.enemies.length) {
      setCurrentEnemyIndex(nextEnemyIndex);
      setCurrentEnemy(faClubeDoPericles.enemies[nextEnemyIndex]);
    } else {
      // Se não há mais inimigos, volta para o primeiro inimigo
      setCurrentEnemyIndex(0);
      setCurrentEnemy(faClubeDoPericles.enemies[0]);
    }
  }, [currentEnemyIndex]);

  return (
    <GameContext.Provider
      value={{
        player,
        currentEnemy,
        currentEnemyIndex,
        experience,
        level,
        nextEnemy,
        resetGame,
        gainExperience,
        levelUpMove,
        showLevelUp,
        setShowLevelUp
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
