import React from 'react';
import type { Character } from '@/types/game';

interface CharacterCardProps {
  character: Character;
  animation: string;
}

export default function CharacterCard({ character, animation }: CharacterCardProps) {
  return (
    <div className={`character-card ${animation}`}>
      <img src={character.sprite} alt={character.name} />
      <h2>{character.name}</h2>
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
    </div>
  );
} 