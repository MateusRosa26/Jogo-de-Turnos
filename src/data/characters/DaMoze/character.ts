import type { Character } from '@/types/game';
import { damozeMoves } from './moves';
import { EXP_PER_LEVEL } from '@/types/game';

export const DaMoze: Character = {
    id: 'damoze',
    name: 'DaMoze',
    level: 1,
    experience: 0,
    maxHealth: 100,
    currentHealth: 100,
    attack: 10,
    moves: damozeMoves,
    moveLevels: {
        'nevoeiro': 0,
        'do': 0,
        'barrigada': 0,
        'alt-f4-lanchinho': 0,
    },
    sprite: '/assets/personagens/daMoze.png',
    statusEffects: [],
    buffs: [],
    nextLevelExp: EXP_PER_LEVEL[2]
}; 