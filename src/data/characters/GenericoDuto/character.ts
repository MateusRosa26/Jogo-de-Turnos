import type { Character } from '@/types/game';
import { genericoDutoMoves } from './moves.ts';
import { EXP_PER_LEVEL } from '@/types/game';

export const GenericoDuto: Character = {
    id: 'generico-duto',
    name: 'GenericoDuto',
    level: 1,
    experience: 0,
    maxHealth: 100,
    currentHealth: 100,
    attack: 10,
    moves: genericoDutoMoves,
    moveLevels: {
        'cagacao-de-regra': 0,
        'baitar-full': 0,
        'espumar': 0,
        'trolladinha-de-cria': 0,
    },
    sprite: `${import.meta.env.BASE_URL}assets/personagens/generico-duto.png`,
    statusEffects: [],
    buffs: [],
    nextLevelExp: EXP_PER_LEVEL[2]
};
