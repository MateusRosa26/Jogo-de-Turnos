export interface Move {
    id: string;
    name: string;
    power: number;
    accuracy: number;
    description: string;
    statusEffect?: 'CONFUSION' | 'CRIT' | 'BUFF_NEXT' | 'FATIGUE' | 'RAGEBAIT';
    critChance?: number;       // Para habilidades com chance de crítico
    fatigueChance?: number;    // Para habilidades com chance de fadiga
    effectChance?: number;     // Chance do statusEffect acontecer
}
