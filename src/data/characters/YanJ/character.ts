import type { Character } from '@/types/game';
import { yanJMoves } from './moves.ts';
import { EXP_PER_LEVEL } from '@/types/game';

export const YanJ: Character = {
  id: 'yanj',
  name: 'YanJ',
  level: 1,
  experience: 0,
  maxHealth: 100,
  currentHealth: 100,
  attack: 10,
  moves: yanJMoves,
  moveLevels: {
    'cortina-de-fumaca': 0,
    'ritual-rasta': 0,
    'gingadinha-de-cria': 0,
    'apaga-de-cigarro': 0,
  },
  sprite: '/assets/personagens/YanJ4Real.png',
  statusEffects: [],
  buffs: [],
  nextLevelExp: EXP_PER_LEVEL[2]
}; 