import type { Move } from './move';

export interface Character {
    id: string;
    name: string;
    level: number;
    experience: number;
    maxHealth: number;
    currentHealth: number;
    attack: number;
    moves: Move[];
    sprite: string;
}
