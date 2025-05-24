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

export type Item = {
  id: string;
  name: string;
  description: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  type: 'consumable' | 'equipment' | 'key' | 'crafting';
  effect?: {
    type: 'drip' | 'vivencia' | 'estourar-o-cone';
    value: number;
  };
  sprite: string;
};

export type CraftingRecipe = {
  id: string;
  name: string;
  description: string;
  requiredItems: string[]; // IDs dos 3 itens necessários (um de cada ginásio)
  resultItem: string; // ID do item final criado
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
  evasion?: number;
  inventory?: Item[];
};

export type Gym = {
  id: string;
  name: string;
  description: string;
  enemies: Character[];
  requiredLevel: number;
  baseExpReward: number;
  expPerLevel: number;
  rewardItems: Item[]; // Itens disponíveis para escolha após derrotar o ginásio
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
  10: 2700,
  11: 3250,
  12: 3850,
  13: 4500,
  14: 5200,
  15: 5950,
  16: 6750,
  17: 7600,
  18: 8500,
  19: 9450,
  20: 10450,
  21: 11500,
  22: 12600,
  23: 13750,
  24: 14950,
  25: 16200
};

// Aumentos de status por nível
export const STATS_PER_LEVEL = {
  health: 40,
  attack: 5
};
