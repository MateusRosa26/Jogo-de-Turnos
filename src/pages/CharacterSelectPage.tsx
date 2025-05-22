import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/context/GameContext';
import { GenericoDuto } from '@/data/characters/GenericoDuto/character';
import { YanJ } from '@/data/characters/YanJ/character';
import { Tana } from '@/data/characters/Tana/character';
import '@/styles/CharacterSelectPage.css';

export default function CharacterSelectPage() {
  const navigate = useNavigate();
  const { resetGame } = useGame();
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  const characters = [GenericoDuto, YanJ, Tana];

  const handleSelect = (characterId: string) => {
    setSelectedCharacter(characterId);
    localStorage.setItem('selectedCharacter', characterId);
  };

  const handleStartBattle = () => {
    if (!selectedCharacter) return;
    
    const character = characters.find(char => char.id === selectedCharacter);
    if (character) {
      resetGame();
      navigate('/battle');
    }
  };

  return (
    <div className="character-select">
      <h1>Selecione seu personagem</h1>
      
      <div className="character-list">
        {characters.map((character) => (
          <div
            key={character.id}
            className={`character-card ${selectedCharacter === character.id ? 'selected' : ''}`}
            onClick={() => handleSelect(character.id)}
          >
            <img src={character.sprite} alt={character.name} />
            <h2>{character.name}</h2>
            
            <div className="character-stats">
              <div className="stat">
                <span>Nível</span>
                <span>{character.level}</span>
              </div>
              <div className="stat">
                <span>HP</span>
                <span>{character.maxHealth}</span>
              </div>
              <div className="stat">
                <span>Ataque</span>
                <span>{character.attack}</span>
              </div>
            </div>

            <div className="moves-list">
              <h3>Movimentos</h3>
              {character.moves.map((move) => (
                <div key={move.id} className="move">
                  <div className="move-name">{move.name}</div>
                  <div className="move-damage">Dano: {move.damage}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button 
        className="start-battle-button"
        onClick={handleStartBattle}
        disabled={!selectedCharacter}
      >
        Começar Partida
      </button>
    </div>
  );
}
