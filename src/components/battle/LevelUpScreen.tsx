import React from 'react';
import type { Character, Move } from '@/types/game';
import MoveButton from './MoveButton';

interface LevelUpScreenProps {
  player: Character;
  onMoveLevelUp: (moveId: string) => void;
}

export default function LevelUpScreen({ player, onMoveLevelUp }: LevelUpScreenProps) {
  return (
    <div className="level-up-screen">
      <h2>Level Up!</h2>
      <p>Escolha uma habilidade para melhorar:</p>
      <div className="moves-grid">
        {player.moves.map((move) => {
          const currentLevel = player.moveLevels[move.id] || 0;
          const baseDamage = move.damage / Math.pow(1.15, currentLevel);
          const nextDamage = Math.floor(baseDamage * Math.pow(1.15, currentLevel + 1));
          
          return (
            <MoveButton
              key={move.id}
              move={move}
              currentLevel={currentLevel}
              disabled={currentLevel >= 3}
              onClick={() => onMoveLevelUp(move.id)}
            />
          );
        })}
      </div>
    </div>
  );
} 