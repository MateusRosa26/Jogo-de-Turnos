import type { Character } from './Character';
import type { Item } from './item';

export interface Trainer {
    id: string;
    name: string;
    characters: Character[];
    reward: {
        experience: number;
        items: Item[];
    };
}
