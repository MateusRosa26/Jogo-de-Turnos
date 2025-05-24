import React from 'react';
import type { Move } from '@/types/game';

interface MoveButtonProps {
  move: Move;
  currentLevel: number;
  disabled: boolean;
  onClick: () => void;
}

export default function MoveButton({ move, currentLevel, disabled, onClick }: MoveButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="move-button"
    >
      <h3>{move.name}</h3>
      <p>Dano: {move.damage}</p>
      <p>Nível: {currentLevel}/5</p>
      <div className="move-tooltip">
        <p>{move.description}</p>
        {move.effects && move.effects.length > 0 && (
          <p>Efeitos: {move.effects.map(effect => effect.name).join(', ')}</p>
        )}
      </div>
    </button>
  );
} 