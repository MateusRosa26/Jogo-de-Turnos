import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/context/GameContext';
import { GenericoDuto } from '@/data/characters/GenericoDuto/character';
import { YanJ } from '@/data/characters/YanJ/character';
import { Tana } from '@/data/characters/Tana/character';
import { DaMoze } from '@/data/characters/DaMoze/character';
import { Markin } from '@/data/characters/Markin/character';
import { Zaion } from '@/data/characters/Zaion/character';
import CharacterCard from '@/components/CharacterCard.tsx';
import '@/styles/shared.css';

export default function CharacterSelectPage() {
  const navigate = useNavigate();
  const { resetGame } = useGame();
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  const characters = [GenericoDuto, YanJ, Tana, DaMoze, Markin, Zaion];

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
    <div className="container">
      <h1 className="title">Selecione seu personagem</h1>
      
      <div className="grid">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            selected={selectedCharacter === character.id}
            onClick={() => handleSelect(character.id)}
            showMoves={true}
            variant="selection"
          />
        ))}
      </div>

      <button
        className="button"
        onClick={handleStartBattle}
        disabled={!selectedCharacter}
      >
        Começar Partida
      </button>
    </div>
  );
}
