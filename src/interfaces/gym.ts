import type { Trainer } from './trainer';

export interface Gym {
    id: string;
    name: string;
    level: number;
    trainers: Trainer[];
    badge: string;
}
