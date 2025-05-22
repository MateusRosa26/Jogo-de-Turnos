import React from 'react';
import type { Character, Move } from '@/types/game';
import MoveButton from './MoveButton';

interface BattleControlsProps {
  player: Character;
  message: string;
  turn: 'PLAYER' | 'ENEMY';
  disabled: boolean;
  onMoveSelect: (move: Move) => void;
}

export default function BattleControls({ player, message, turn, disabled, onMoveSelect }: BattleControlsProps) {
  return (
    <div className="battle-controls">
      <div className="battle-log">
        <p>{message}</p>
      </div>

      <div className="moves">
        {player.moves.map((move) => (
          <MoveButton
            key={move.id}
            move={move}
            currentLevel={player.moveLevels[move.id] || 0}
            disabled={turn !== 'PLAYER' || disabled}
            onClick={() => onMoveSelect(move)}
          />
        ))}
      </div>
    </div>
  );
} 