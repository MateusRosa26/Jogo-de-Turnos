import { useState, useCallback, useEffect } from 'react';
import type { Character, Move, StatusEffect } from '@/types/game';

interface UseBattleProps {
  initialPlayer: Character;
  initialEnemy: Character;
  onBattleEnd: (winner: 'PLAYER' | 'ENEMY') => void;
  gainExperience: (amount: number) => void;
  showLevelUp: boolean;
  setShowLevelUp: (show: boolean) => void;
  levelUpMove: (moveId: string) => void;
}

export function useBattle({
  initialPlayer,
  initialEnemy,
  onBattleEnd,
  gainExperience,
  showLevelUp,
  setShowLevelUp,
  levelUpMove
}: UseBattleProps) {
  const [player, setPlayer] = useState(initialPlayer);
  const [enemy, setEnemy] = useState(initialEnemy);
  const [turn, setTurn] = useState<'PLAYER' | 'ENEMY'>(initialPlayer.level >= initialEnemy.level ? 'PLAYER' : 'ENEMY');
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [playerAnimation, setPlayerAnimation] = useState('');
  const [enemyAnimation, setEnemyAnimation] = useState('');

  const addMessage = useCallback((newMessage: string) => {
    setMessage(newMessage);
  }, []);

  const applyStatusEffects = useCallback((character: Character, setCharacter: React.Dispatch<React.SetStateAction<Character>>) => {
    const newStatusEffects: StatusEffect[] = [];
    let skipTurn = false;
    let totalDamage = 0;

    character.statusEffects.forEach((status) => {
      if (status.duration > 0) {
        if (status.effect) {
          const effectResult = status.effect(character);
          if (typeof effectResult === 'number') {
            totalDamage += effectResult;
          }
        }

        newStatusEffects.push({
          ...status,
          duration: status.duration - 1,
        });

        if (status.id === 'skipTurn' || (status.id === 'sedoso' && Math.random() < 0.25)) {
          skipTurn = true;
        }
      }
    });

    if (totalDamage > 0) {
      setCharacter((prev) => ({
        ...prev,
        currentHealth: Math.max(0, prev.currentHealth - totalDamage),
        statusEffects: newStatusEffects,
        skipNextTurn: skipTurn
      }));
    } else {
      setCharacter((prev) => ({
        ...prev,
        statusEffects: newStatusEffects,
        skipNextTurn: skipTurn
      }));
    }

    return skipTurn;
  }, []);

  const handleAttack = useCallback((move: Move, attacker: Character, target: Character) => {
    let totalDamage = 0;
    const hits = move.multiHit || 1;
    
    for (let i = 0; i < hits; i++) {
      const damage = move.damage;
      totalDamage += damage;
      
      if (move.effects && move.effectChance) {
        move.effects.forEach(effect => {
          if (Math.random() < move.effectChance!) {
            target.statusEffects.push({ ...effect });
          }
        });
      } else if (move.effects) {
        move.effects.forEach(effect => {
          target.statusEffects.push({ ...effect });
        });
      }
      
      if (move.buffs) {
        move.buffs.forEach(buff => {
          attacker.buffs.push({ ...buff });
        });
      }
    }
    
    target.currentHealth = Math.max(0, target.currentHealth - totalDamage);
    
    if (attacker === player) {
      setPlayer({ ...player });
      setEnemy({ ...target });
      setPlayerAnimation('attacking');
      setEnemyAnimation('receiving-attack');
    } else {
      setPlayer({ ...target });
      setEnemy({ ...enemy });
      setEnemyAnimation('attacking');
      setPlayerAnimation('receiving-attack');
    }
    
    addMessage(`${attacker.name} usou ${move.name} e causou ${totalDamage} de dano!`);
    
    if (target.currentHealth <= 0) {
      if (target === enemy) {
        addMessage(`${target.name} foi derrotado!`);
        onBattleEnd('PLAYER');
      } else {
        addMessage(`${target.name} foi derrotado!`);
        onBattleEnd('ENEMY');
      }
    } else {
      setTimeout(() => {
        setPlayerAnimation('');
        setEnemyAnimation('');
        setTurn(turn === 'PLAYER' ? 'ENEMY' : 'PLAYER');
        setDisabled(false);
      }, 1000);
    }
  }, [player, enemy, addMessage, onBattleEnd, turn]);

  const handleMoveSelect = useCallback((move: Move) => {
    handleAttack(move, player, enemy);
  }, [handleAttack, player, enemy]);

  const handleLevelUpMove = useCallback((moveId: string) => {
    if (player.moveLevels[moveId] >= 3) return;
    
    levelUpMove(moveId);
    setShowLevelUp(false);
    
    if (enemy.currentHealth <= 0) {
      setTimeout(() => onBattleEnd('PLAYER'), 500);
    }
  }, [player.moveLevels, levelUpMove, setShowLevelUp, enemy.currentHealth, onBattleEnd]);

  // Reset enemy health when opponent changes
  useEffect(() => {
    setEnemy({
      ...initialEnemy,
      currentHealth: initialEnemy.maxHealth,
      statusEffects: [],
      buffs: []
    });
    setTurn(initialPlayer.level >= initialEnemy.level ? 'PLAYER' : 'ENEMY');
  }, [initialEnemy, initialPlayer.level]);

  // Reset player health when player changes
  useEffect(() => {
    setPlayer({
      ...initialPlayer,
      currentHealth: initialPlayer.maxHealth,
      statusEffects: [],
      buffs: []
    });
  }, [initialPlayer]);

  // Check for battle end
  useEffect(() => {
    if (player.currentHealth <= 0) {
      setMessage(`${player.name} foi derrotado!`);
      setTimeout(() => onBattleEnd('ENEMY'), 2000);
    } else if (enemy.currentHealth <= 0) {
      setMessage(`${enemy.name} foi derrotado!`);
      gainExperience(enemy.level * 10);
      setTimeout(() => {
        if (showLevelUp) {
          return;
        }
        onBattleEnd('PLAYER');
      }, 2000);
    }
  }, [player.currentHealth, enemy.currentHealth, onBattleEnd, player.name, enemy.name, enemy.level, gainExperience, showLevelUp]);

  // Enemy turn effect
  useEffect(() => {
    if (turn === 'ENEMY' && enemy.currentHealth > 0 && !disabled) {
      setDisabled(true);
      setTimeout(() => {
        const skipTurn = applyStatusEffects(enemy, setEnemy);
        if (skipTurn) {
          setMessage(`${enemy.name} está confuso e perdeu o turno!`);
          setTurn('PLAYER');
          setDisabled(false);
          return;
        }

        const randomMove = enemy.moves[Math.floor(Math.random() * enemy.moves.length)];
        handleAttack(randomMove, enemy, player);
      }, 1000);
    }
  }, [turn, enemy, player, handleAttack, disabled, applyStatusEffects]);

  // Apply status effects at turn start
  useEffect(() => {
    if (turn === 'PLAYER') {
      const skipTurn = applyStatusEffects(player, setPlayer);
      if (skipTurn) {
        setMessage(`${player.name} está confuso e perdeu o turno!`);
        setTurn('ENEMY');
        return;
      }
      setDisabled(false);
    } else {
      applyStatusEffects(enemy, setEnemy);
    }
  }, [turn, player, enemy, applyStatusEffects]);

  return {
    player,
    enemy,
    turn,
    message,
    disabled,
    playerAnimation,
    enemyAnimation,
    handleMoveSelect,
    handleLevelUpMove
  };
} 