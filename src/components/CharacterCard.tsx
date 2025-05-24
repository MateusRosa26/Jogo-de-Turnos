import React from 'react';
import type { Character } from '@/types/game';
import '@/styles/shared.css';

interface CharacterCardProps {
  character: Character;
  animation?: string;
  onClick?: () => void;
  selected?: boolean;
  showStats?: boolean;
  showMoves?: boolean;
  className?: string;
  variant?: 'selection' | 'battle';
}

export default function CharacterCard({ 
  character, 
  animation = '', 
  onClick, 
  selected = false,
  showStats = false,
  showMoves = false,
  className = '',
  variant = 'selection'
}: CharacterCardProps) {
  return (
    <div 
      className={`card character-card ${animation} ${selected ? 'selected' : ''} ${className} ${variant}`}
      onClick={onClick}
    >
      <img src={character.sprite} alt={character.name} />
      
      {variant === 'battle' && (
        <>
          <h2 className="subtitle">{character.name}</h2>
          <div className="status-effects">
            {character.statusEffects.map((status) => (
              <span key={status.id} className={`status-effect ${status.id}`}>
                {status.name}
              </span>
            ))}
          </div>

          <div className="health-bar">
            <div
              className="health-fill"
              style={{
                width: `${(character.currentHealth / character.maxHealth) * 100}%`,
              }}
            />
            <span>
              {character.currentHealth}/{character.maxHealth}
            </span>
          </div>
        </>
      )}

      {variant === 'selection' && (
        <>
          <div className="name-tooltip">
            {character.name}
          </div>
          {showMoves && (
            <div className="moves-tooltip">
              <div className="moves-list">
                {character.moves.map((move) => (
                  <div key={move.id} className="move">
                    {move.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
} 