import React from 'react';
import type { Character } from '@/types/game';
import { useGame } from '@/context/GameContext';
import { useBattle } from '@/hooks/useBattle';
import CharacterCard from './CharacterCard';
import BattleControls from './BattleControls';
import LevelUpScreen from './LevelUpScreen';
import '@/styles/battleScene.css';

interface BattleSceneProps {
  playerCharacter: Character;
  opponentCharacter: Character;
  onBattleEnd: (winner: 'PLAYER' | 'ENEMY') => void;
}

export default function BattleScene({ playerCharacter, opponentCharacter, onBattleEnd }: BattleSceneProps) {
  const { gainExperience, levelUpMove, showLevelUp, setShowLevelUp } = useGame();

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

  return (
    <div className="battle-scene">
      <div className="opponent">
        <CharacterCard character={enemy} animation={enemyAnimation} />
      </div>

      <div className="combatants">
        <CharacterCard character={player} animation={playerAnimation} />
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
