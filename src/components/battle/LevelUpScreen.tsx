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
          
          // Simplified calculation: next damage is always +25% from current
          const nextDamage = Math.floor(move.damage * 1.25);
          
          return (
            <div key={move.id} className="move-level-up-card">
              <MoveButton
                move={move}
                currentLevel={currentLevel}
                disabled={currentLevel >= 5}
                onClick={() => onMoveLevelUp(move.id)}
              />
              {currentLevel < 5 && (
                <div className="level-up-preview">
                  <p>Next Level: {move.damage} → {nextDamage} (+25%)</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
} 