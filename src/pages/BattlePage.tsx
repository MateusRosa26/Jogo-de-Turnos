import { useNavigate } from 'react-router-dom';
import { useGame } from '@/context/GameContext';
import BattleScene from '@/components/battle/battleScene';

export default function BattlePage() {
  const { player, currentEnemy, nextEnemy, resetGame } = useGame();
  const navigate = useNavigate();

  if (!player || !currentEnemy) {
    navigate('/');
    return null;
  }

  const handleBattleEnd = (winner: 'PLAYER' | 'ENEMY') => {
    if (winner === 'PLAYER') {
      setTimeout(() => {
        nextEnemy();
        setTimeout(() => {
          navigate('/battle');
        }, 500);
      }, 1000);
    } else {
      resetGame();
      navigate('/');
    }
  };

  return (
    <BattleScene
      playerCharacter={player}
      opponentCharacter={currentEnemy}
      onBattleEnd={handleBattleEnd}
    />
  );
}
