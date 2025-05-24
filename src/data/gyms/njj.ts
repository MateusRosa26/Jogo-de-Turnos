import type { Gym, Character, Move } from '@/types/game';import { STATUS_EFFECTS } from '@/data/statusEffects';import { CHARACTER_SPRITES } from '@/data/config/sprites';import { NJJ_ITEMS } from '@/data/items';

// Moves do Lian
const pedrolosMoves: Move[] = [
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
const ricoulsMoves: Move[] = [
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
const deepMoves: Move[] = [
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
const dudolsMoves: Move[] = [
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
const pedrolos: Character = {
  id: 'pedrolos',
  name: 'Pedrolos',
  level: 17,
  experience: 0,
  nextLevelExp: 6200,
  maxHealth: 740,
  currentHealth: 740,
  attack: 90,
  moves: pedrolosMoves,
  moveLevels: {
    'buy-and-hold': 1,
    'diamond-hands': 1
  },
  sprite: '/assets/personagens/pedrolos.png',
  statusEffects: [],
  buffs: []
};

const ricouls: Character = {
  id: 'ricouls',
  name: 'Ricouls',
  level: 18,
  experience: 0,
  nextLevelExp: 6700,
  maxHealth: 780,
  currentHealth: 780,
  attack: 95,
  moves: ricoulsMoves,
  moveLevels: {
    'market-analysis': 1,
    'technical-indicator': 1
  },
  sprite: '/assets/personagens/ricouls.png',
  statusEffects: [],
  buffs: []
};

const deep: Character = {
  id: 'deep',
  name: 'Deep',
  level: 19,
  experience: 0,
  nextLevelExp: 7200,
  maxHealth: 820,
  currentHealth: 820,
  attack: 100,
  moves: deepMoves,
  moveLevels: {
    'chamar-capanga': 1,
    'mustangao': 1
  },
  sprite: '/assets/personagens/deep.png',
  statusEffects: [],
  buffs: []
};

const dudols: Character = {
  id: 'dudols',
  name: 'Dudols',
  level: 20,
  experience: 0,
  nextLevelExp: 7700,
  maxHealth: 860,
  currentHealth: 860,
  attack: 105,
  moves: dudolsMoves,
  moveLevels: {
    'market-crash': 1,
    'emotional-damage': 1
  },
  sprite: '/assets/personagens/dudols.png',
  statusEffects: [],
  buffs: []
};

export const njj: Gym = {  id: 'njj',  name: 'NJJ',  description: 'O quarto ginásio do jogo, onde os jogadores enfrentam os membros do NJJ.',  enemies: [pedrolos, ricouls, deep, dudols],  requiredLevel: 7,  baseExpReward: 200,  expPerLevel: 100,  rewardItems: NJJ_ITEMS}; 