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

  const applyStatusEffects = useCallback((character: Character, isPlayer: boolean) => {
    const newStatusEffects: StatusEffect[] = [];
    let skipTurn = false;
    let totalDamage = 0;

    character.statusEffects.forEach((status) => {
      if (status.duration > 0) {
        if (status.effect) {
          const effectResult = status.effect(character);
          if (typeof effectResult === 'number') {
            totalDamage += effectResult;
            if (effectResult > 0) {
              addMessage(`${character.name} sofreu ${effectResult} de dano por ${status.name}!`);
            }
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

    const newCharacter = {
      ...character,
      statusEffects: newStatusEffects,
      skipNextTurn: skipTurn
    };

    if (totalDamage > 0) {
      newCharacter.currentHealth = Math.max(0, character.currentHealth - totalDamage);
    }

    if (isPlayer) {
      setPlayer(newCharacter);
    } else {
      setEnemy(newCharacter);
    }
    
    return skipTurn;
  }, [addMessage]);

  const handleAttack = useCallback((move: Move, attacker: Character, target: Character, currentTurn: 'PLAYER' | 'ENEMY') => {
    setDisabled(true);
    let totalDamage = 0;
    const hits = move.multiHit || 1;
    
    if (target.evasion && Math.random() < target.evasion) {
      addMessage(`${target.name} esquivou do ataque!`);
      setTimeout(() => {
        setPlayerAnimation('');
        setEnemyAnimation('');
        setTurn(currentTurn === 'PLAYER' ? 'ENEMY' : 'PLAYER');
        setDisabled(false);
      }, 1000);
      return;
    }
    
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
    
    const newTarget = {
      ...target,
      currentHealth: Math.max(0, target.currentHealth - totalDamage)
    };
    
    const isPlayerAttacking = currentTurn === 'PLAYER';
    
    if (isPlayerAttacking) {
      setEnemy(newTarget);
      setPlayerAnimation('attacking');
      setEnemyAnimation('receiving-attack');
    } else {
      setPlayer(newTarget);
      setEnemyAnimation('attacking');
      setPlayerAnimation('receiving-attack');
    }
    
    addMessage(`${attacker.name} usou ${move.name} e causou ${totalDamage} de dano!`);
    
    if (newTarget.currentHealth <= 0) {
      if (isPlayerAttacking) {
        addMessage(`${target.name} foi derrotado!`);
        setTimeout(() => {
          gainExperience(target.level * 10);
          setTimeout(() => onBattleEnd('PLAYER'), 500);
        }, 1500);
      } else {
        addMessage(`${target.name} foi derrotado!`);
        setTimeout(() => onBattleEnd('ENEMY'), 1500);
      }
    } else {
      setTimeout(() => {
        setPlayerAnimation('');
        setEnemyAnimation('');
        setTurn(currentTurn === 'PLAYER' ? 'ENEMY' : 'PLAYER');
        setDisabled(false);
      }, 1000);
    }
  }, [addMessage, onBattleEnd, gainExperience]);

  const handleMoveSelect = useCallback((move: Move) => {
    if (turn === 'PLAYER' && !disabled) {
      handleAttack(move, player, enemy, turn);
    }
  }, [handleAttack, player, enemy, turn, disabled]);

  const handleLevelUpMove = useCallback((moveId: string) => {
    // First update the local player state
    setPlayer(prev => {
      const currentLevel = prev.moveLevels[moveId] || 0;
      if (currentLevel >= 5) return prev;
      
      const move = prev.moves.find(m => m.id === moveId);
      if (!move) return prev;
      
      const newLevel = currentLevel + 1;
      const newDamage = Math.floor(move.damage * 1.25);
      
      console.log(`Local Skill Evolution: ${move.name} Level ${currentLevel} -> ${newLevel}, Damage ${move.damage} -> ${newDamage} (+25%)`);
      
      return {
        ...prev,
        moveLevels: {
          ...prev.moveLevels,
          [moveId]: newLevel
        },
        moves: prev.moves.map(m => {
          if (m.id === moveId) {
            return {
              ...m,
              damage: newDamage
            };
          }
          return m;
        })
      };
    });
    
    // Then update the global state
    levelUpMove(moveId);
    setShowLevelUp(false);
    
    // Check if battle should end after level up
    setTimeout(() => {
      if (enemy.currentHealth <= 0) {
        onBattleEnd('PLAYER');
      }
    }, 100);
  }, [levelUpMove, setShowLevelUp, enemy.currentHealth, onBattleEnd]);

  // Reset both player and enemy when a new battle starts
  useEffect(() => {
    // Reset player to full health at start of every battle
    setPlayer({
      ...initialPlayer,
      currentHealth: initialPlayer.maxHealth,
      statusEffects: [],
      buffs: []
    });
    
    // Reset enemy
    setEnemy({
      ...initialEnemy,
      currentHealth: initialEnemy.maxHealth,
      statusEffects: [],
      buffs: []
    });
    
    setTurn(initialPlayer.level >= initialEnemy.level ? 'PLAYER' : 'ENEMY');
    setMessage('');
    setDisabled(false);
    setPlayerAnimation('');
    setEnemyAnimation('');
  }, [initialEnemy.id, initialPlayer.level, initialEnemy.maxHealth, initialPlayer.maxHealth]);

  // Update player when player stats change (level up, etc.) but keep current health
  useEffect(() => {
    setPlayer(prev => ({
      ...initialPlayer,
      currentHealth: prev.currentHealth, // Preserve current health during battle
      statusEffects: prev.statusEffects,
      buffs: prev.buffs
    }));
  }, [initialPlayer.moves, initialPlayer.moveLevels]);

  // Handle enemy turn
  useEffect(() => {
    if (turn === 'ENEMY' && enemy.currentHealth > 0 && !disabled && !showLevelUp) {
      setDisabled(true);
      setTimeout(() => {
        const skipTurn = applyStatusEffects(enemy, false);
        if (skipTurn) {
          setMessage(`${enemy.name} está confuso e perdeu o turno!`);
          setTurn('PLAYER');
          setDisabled(false);
          return;
        }

        const randomMove = enemy.moves[Math.floor(Math.random() * enemy.moves.length)];
        handleAttack(randomMove, enemy, player, turn);
      }, 1000);
    }
  }, [turn, enemy.currentHealth, disabled, showLevelUp]);

  // Handle player turn status effects
  useEffect(() => {
    if (turn === 'PLAYER' && !showLevelUp) {
      const skipTurn = applyStatusEffects(player, true);
      if (skipTurn) {
        setMessage(`${player.name} está confuso e perdeu o turno!`);
        setTurn('ENEMY');
        return;
      }
      setDisabled(false);
    }
  }, [turn, showLevelUp]);

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