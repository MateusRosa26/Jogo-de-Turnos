import type { Gym, Character, Move } from '@/types/game';import { STATUS_EFFECTS } from '@/data/statusEffects';import { CHARACTER_SPRITES } from '@/data/config/sprites';import { QUADRA_ITEMS } from '@/data/items';

// Moves do Lian
const lianMoves: Move[] = [
  {
    id: 'reflexo-dioclin',
    name: 'Reflexo Dioclin',
    description: 'Cega o adversario usando o reflexo da lux em seus oculos. Causa 20 de dano e tem chance de aplicar cegueira e queimadura no adversario.',
    damage: 20,
    effects: [STATUS_EFFECTS.cegueira, STATUS_EFFECTS.queimadura],
    level: 1,
    effectChance: 0.50
  },
  {
    id: 'quebrar-garrafa',
    name: 'Quebrar Garrafa',
    description: 'Lian quebra a garrafa do Bagre causando desconforto absoluto perante a rapaziada. causa 35 de dano e tem chance de aplicar bleed no oponente.',
    damage: 35,
    effects: [STATUS_EFFECTS.bleed],
    level: 1,
    effectChance: 0.70
  }
];

// Moves do Pv
const pvMoves: Move[] = [
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

// Moves do Gxtera
const gxteraMoves: Move[] = [
  {
    id: 'chamar-capanga',
    name: 'Chamar Capanga',
    description: 'Gxtera chama MeniMocio para fazer o trabalho sujo por ele, causando 40 de dano.',
    damage: 40,
    buffs: [],
    level: 1
  },
  {
    id: 'mustangao  ',
    name: 'Portfolio Diversification',
    description: 'Medaw diversifica seus ataques, causando 30 de dano em 3 hits e aplicando sangramento em cada hit com 20% de chance.',
    damage: 30,
    effects: [STATUS_EFFECTS.bleed],
    level: 1,
    multiHit: 3,
    effectChance: 0.20
  }
];

// Moves do meniMocio
const meniMocioMoves: Move[] = [
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
const lian: Character = {
  id: 'lian',
  name: 'Lian',
  level: 13,
  experience: 0,
  nextLevelExp: 4200,
  maxHealth: 580,
  currentHealth: 580,
  attack: 70,
  moves: lianMoves,
  moveLevels: {
    'buy-and-hold': 1,
    'diamond-hands': 1
  },
  sprite: '/assets/personagens/lian.png',
  statusEffects: [],
  buffs: []
};

const pv: Character = {
  id: 'pv',
  name: 'pv',
  level: 14,
  experience: 0,
  nextLevelExp: 4700,
  maxHealth: 620,
  currentHealth: 620,
  attack: 75,
  moves: pvMoves,
  moveLevels: {
    'market-analysis': 1,
    'technical-indicator': 1
  },
  sprite: '/assets/personagens/rod.png',
  statusEffects: [],
  buffs: []
};

const gxtera: Character = {
  id: 'gxtera',
  name: 'gxtera',
  level: 15,
  experience: 0,
  nextLevelExp: 5200,
  maxHealth: 660,
  currentHealth: 660,
  attack: 80,
  moves: gxteraMoves,
  moveLevels: {
    'risk-management': 1,
    'portfolio-diversification': 1
  },
  sprite: '/assets/personagens/gxtera.png',
  statusEffects: [],
  buffs: []
};

const meniMocio: Character = {
  id: 'meniMocio',
  name: 'meniMocio',
  level: 16,
  experience: 0,
  nextLevelExp: 5700,
  maxHealth: 700,
  currentHealth: 700,
  attack: 85,
  moves: meniMocioMoves,
  moveLevels: {
    'market-crash': 1,
    'emotional-damage': 1
  },
  sprite: '/assets/personagens/meniMocio.png',
  statusEffects: [],
  buffs: []
};

export const quadra: Gym = {  id: 'quadra',  name: 'Quadra',  description: 'O terceiro ginásio do jogo, onde os jogadores enfrentam os membros da Quadra.',  enemies: [lian, pv, gxtera, meniMocio],  requiredLevel: 7,  baseExpReward: 200,  expPerLevel: 100,  rewardItems: QUADRA_ITEMS}; 