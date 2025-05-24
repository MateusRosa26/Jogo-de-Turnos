import type { Gym, Character, Move } from '@/types/game';import { STATUS_EFFECTS } from '@/data/statusEffects';import { CHARACTER_SPRITES } from '@/data/config/sprites';import { BUYHOLD_ITEMS } from '@/data/items';

// Moves do Cohen
const cohenMoves: Move[] = [
  {
    id: 'buy-and-hold',
    name: 'Buy and Hold',
    description: 'Cohen aplica sua estratégia favorita, causando 30 de dano e aumentando sua defesa em 25% por 2 turnos.',
    damage: 30,
    buffs: [STATUS_EFFECTS.defesa],
    level: 1
  },
  {
    id: 'diamond-hands',
    name: 'Diamond Hands',
    description: 'Cohen mostra sua resiliência, causando 25 de dano e aumentando sua vida máxima em 20% por 3 turnos.',
    damage: 25,
    buffs: [STATUS_EFFECTS['acumulo-de-odio']],
    level: 1
  }
];

// Moves do Rod
const rodMoves: Move[] = [
  {
    id: 'market-analysis',
    name: 'Market Analysis',
    description: 'Rod analisa o mercado, causando 35 de dano e reduzindo a precisão do inimigo em 30% por 2 turnos.',
    damage: 35,
    effects: [STATUS_EFFECTS.cegueira],
    level: 1
  },
  {
    id: 'technical-indicator',
    name: 'Technical Indicator',
    description: 'Rod usa seus indicadores técnicos, causando 40 de dano e aumentando sua chance de crítico em 50% por 1 turno.',
    damage: 40,
    buffs: [STATUS_EFFECTS.critico],
    level: 1
  }
];

// Moves do Medaw
const medawMoves: Move[] = [
  {
    id: 'risk-management',
    name: 'Risk Management',
    description: 'Medaw aplica sua gestão de risco, causando 45 de dano e reduzindo o dano recebido em 40% por 2 turnos.',
    damage: 45,
    buffs: [STATUS_EFFECTS.defesa],
    level: 1
  },
  {
    id: 'portfolio-diversification',
    name: 'Portfolio Diversification',
    description: 'Medaw diversifica seus ataques, causando 30 de dano em 3 hits e aplicando sangramento em cada hit com 20% de chance.',
    damage: 30,
    effects: [STATUS_EFFECTS.bleed],
    level: 1,
    multiHit: 3,
    effectChance: 0.20
  }
];

// Moves do CryBaby
const cryBabyMoves: Move[] = [
  {
    id: 'market-crash',
    name: 'Market Crash',
    description: 'CryBaby causa um crash no mercado, causando 50 de dano e aplicando confusão no inimigo por 2 turnos.',
    damage: 50,
    effects: [STATUS_EFFECTS.confusao],
    level: 1
  },
  {
    id: 'emotional-damage',
    name: 'Emotional Damage',
    description: 'CryBaby causa dano emocional, causando 40 de dano e aplicando o status instável no inimigo até o final da batalha.',
    damage: 40,
    effects: [STATUS_EFFECTS.instavel],
    level: 1
  }
];

// Personagens do ginásio
const cohen: Character = {
  id: 'cohen',
  name: 'Cohen',
  level: 9,
  experience: 0,
  nextLevelExp: 2200,
  maxHealth: 420,
  currentHealth: 420,
  attack: 50,
  moves: cohenMoves,
  moveLevels: {
    'buy-and-hold': 1,
    'diamond-hands': 1
  },
  sprite: '/assets/personagens/cohen.png',
  statusEffects: [],
  buffs: []
};

const rod: Character = {
  id: 'rod',
  name: 'Rod',
  level: 10,
  experience: 0,
  nextLevelExp: 2700,
  maxHealth: 460,
  currentHealth: 460,
  attack: 55,
  moves: rodMoves,
  moveLevels: {
    'market-analysis': 1,
    'technical-indicator': 1
  },
  sprite: '/assets/personagens/rod.png',
  statusEffects: [],
  buffs: []
};

const medaw: Character = {
  id: 'medaw',
  name: 'Medaw',
  level: 11,
  experience: 0,
  nextLevelExp: 3200,
  maxHealth: 500,
  currentHealth: 500,
  attack: 60,
  moves: medawMoves,
  moveLevels: {
    'risk-management': 1,
    'portfolio-diversification': 1
  },
  sprite: '/assets/personagens/medaw.png',
  statusEffects: [],
  buffs: []
};

const cryBaby: Character = {
  id: 'crybaby',
  name: 'CryBaby',
  level: 12,
  experience: 0,
  nextLevelExp: 3700,
  maxHealth: 540,
  currentHealth: 540,
  attack: 65,
  moves: cryBabyMoves,
  moveLevels: {
    'market-crash': 1,
    'emotional-damage': 1
  },
  sprite: '/assets/personagens/crybaby.png',
  statusEffects: [],
  buffs: []
};

export const buyNHold: Gym = {  id: 'buy-n-hold',  name: 'Buy N Hold',  description: 'O segundo ginásio do jogo, onde os jogadores enfrentam os membros do Buy N Hold.',  enemies: [cohen, rod, medaw, cryBaby],  requiredLevel: 7,  baseExpReward: 200,  expPerLevel: 100,  rewardItems: BUYHOLD_ITEMS}; 