import type { Character } from '@/types/game';
import { tanaMoves } from './moves.ts';
import { EXP_PER_LEVEL } from '@/types/game';

export const Tana: Character = {
    id: 'tana',
    name: 'Tana',
    level: 1,
    experience: 0,
    maxHealth: 100,
    currentHealth: 100,
    attack: 10,
    moves: tanaMoves,
    moveLevels: {
        'pedalada': 0,
        'cagacao-de-regra': 0,
        'zaga': 0,
        'call-rapido': 0,
    },
    sprite: '/assets/personagens/tana.png',
    statusEffects: [],
    buffs: [],
    nextLevelExp: EXP_PER_LEVEL[2]
}; 