import type { Character } from '@/types/game';
import { zaionMoves } from './moves';
import { EXP_PER_LEVEL } from '@/types/game';

export const Zaion: Character = {
  id: 'zaion',
  name: 'Zaion',
  level: 1,
  experience: 0,
  maxHealth: 100,
  currentHealth: 100,
  attack: 10,
  moves: zaionMoves,
  moveLevels: {
    'esporro': 0,
    'call-rapido': 0,
    'gingadinha-de-cria': 0,
    'apaga-de-cigarro': 0,
  },
  sprite: '/assets/personagens/Zaion.png',
  statusEffects: [],
  buffs: [],
  nextLevelExp: EXP_PER_LEVEL[2]
}; 