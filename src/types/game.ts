export type MoveEffect = 'confusion' | 'critical' | 'double-next-hit' | 'fatigue' | 'ragebait';

export type StatusEffect = {
  id: string;
  name: string;
  description: string;
  duration: number;
  effect: (target: Character) => void;
};

export type Move = {
  id: string;
  name: string;
  description: string;
  damage: number;
  effects?: StatusEffect[];
  buffs?: StatusEffect[];
  debuffs?: StatusEffect[];
  level: number;
  multiHit?: number;
  effectChance?: number;
};

export type Character = {
  id: string;
  name: string;
  sprite: string;
  level: number;
  experience: number;
  nextLevelExp: number;
  maxHealth: number;
  currentHealth: number;
  attack: number;
  moves: Move[];
  statusEffects: StatusEffect[];
  buffs: StatusEffect[];
  moveLevels: Record<string, number>;
  skipNextTurn?: boolean;
  accuracy?: number;
  confusion?: boolean;
};

export type Gym = {
  id: string;
  name: string;
  description: string;
  enemies: Character[];
  requiredLevel: number;
  baseExpReward: number;
  expPerLevel: number;
};

// Experiência necessária para cada nível
export const EXP_PER_LEVEL: Record<number, number> = {
  1: 0,
  2: 100,
  3: 250,
  4: 450,
  5: 700,
  6: 1000,
  7: 1350,
  8: 1750,
  9: 2200,
  10: 2700
};

// Aumentos de status por nível
export const STATS_PER_LEVEL = {
  health: 20,
  attack: 5
};
