import type { Character } from '@/types/game';
import { markinMoves } from './moves';
import { EXP_PER_LEVEL } from '@/types/game';

export const Markin: Character = {
    id: 'markin',
    name: 'Markin',
    level: 1,
    experience: 0,
    maxHealth: 100,
    currentHealth: 100,
    attack: 10,
    moves: markinMoves,
    moveLevels: {
        'julius': 0,
        'convocação': 0,
        'voo-da-aguia-manca': 0,
        'call-rapido': 0,
    },
    sprite: '/assets/personagens/Markin.png',
    statusEffects: [],
    buffs: [],
    nextLevelExp: EXP_PER_LEVEL[2]
}; 