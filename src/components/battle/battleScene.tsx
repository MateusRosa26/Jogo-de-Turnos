import React from 'react';
import type { Character } from '@/types/game';
import { useGame } from '@/context/GameContext';
import { useBattle } from '@/hooks/useBattle';
import { GYM_BACKGROUNDS } from '@/data/gyms';
import CharacterCard from '@/components/CharacterCard';
import BattleControls from './BattleControls';
import LevelUpScreen from './LevelUpScreen';
import ItemRewardScreen from '@/components/ItemRewardScreen';
import CraftingScreen from '@/components/CraftingScreen';
import CraftedItemDisplay from '@/components/CraftedItemDisplay';
import '@/styles/shared.css';
import '@/styles/battleScene.css';

interface BattleSceneProps {
  playerCharacter: Character;
  opponentCharacter: Character;
  onBattleEnd: (winner: 'PLAYER' | 'ENEMY') => void;
}

export default function BattleScene({ playerCharacter, opponentCharacter, onBattleEnd }: BattleSceneProps) {
    const {     gainExperience,     levelUpMove,     showLevelUp,     setShowLevelUp,     currentGym,    showItemReward,    setShowItemReward,    addItemToInventory,    nextGym,    showCrafting,    setShowCrafting,    showCraftedItem,    craftedItem,    setShowCraftedItem,    inventory,    canCraftItem,    craftItem,    resetGame  } = useGame();

  const {
    player,
    enemy,
    turn,
    message,
    disabled,
    playerAnimation,
    enemyAnimation,
    handleMoveSelect,
    handleLevelUpMove
  } = useBattle({
    initialPlayer: playerCharacter,
    initialEnemy: opponentCharacter,
    onBattleEnd,
    gainExperience,
    showLevelUp,
    setShowLevelUp,
    levelUpMove
  });

  if (showLevelUp) {
    return <LevelUpScreen player={player} onMoveLevelUp={handleLevelUpMove} />;
  }

  if (showItemReward) {
    return (
      <ItemRewardScreen        
        gymName={currentGym.name}        
        availableItems={currentGym.rewardItems}        
        onItemSelect={(item) => {          
          addItemToInventory(item);          
          setShowItemReward(false);          
          nextGym();        
        }}      
      />
    );
  }

  if (showCraftedItem && craftedItem) {
    return (
      <CraftedItemDisplay
        item={craftedItem}
        onBackToMenu={() => {
          setShowCraftedItem(false);
          resetGame();
        }}
      />
    );
  }

  if (showCrafting) {
    return (
      <CraftingScreen
        inventory={inventory}
        onCraftItem={craftItem}
        canCraftItem={canCraftItem}
        onBackToGame={() => setShowCrafting(false)}
      />
    );
  }

  // Obtém o background do ginásio atual
  const backgroundImage = GYM_BACKGROUNDS[currentGym.id as keyof typeof GYM_BACKGROUNDS] || '/assets/cenarios/fundoPericles.jpg';

  return (
    <div 
      className="battle-scene"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="gym-title">
        <h1>{currentGym.name}</h1>
      </div>

      <div className="opponent">
        <CharacterCard 
          character={enemy} 
          animation={enemyAnimation}
          variant="battle"
        />
      </div>

      <div className="combatants">
        <CharacterCard 
          character={player} 
          animation={playerAnimation}
          variant="battle"
        />
      </div>

      <BattleControls
        player={player}
        message={message}
        turn={turn}
        disabled={disabled}
        onMoveSelect={handleMoveSelect}
      />
    </div>
  );
} 