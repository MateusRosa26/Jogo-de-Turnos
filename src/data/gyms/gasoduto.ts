import type { Gym, Character, Move } from '@/types/game';import { STATUS_EFFECTS } from '@/data/statusEffects';import { CHARACTER_SPRITES } from '@/data/config/sprites';import { GASODUTO_ITEMS } from '@/data/items';

// Moves do Lian
const isquigorMoves: Move[] = [
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
const roscalenMoves: Move[] = [
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
const zolenkenMoves: Move[] = [
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
const markinMoves: Move[] = [
    {
      id: 'julius',
      name: 'Julius',
      description: 'Markin utiliza de seu status de imperador pra te banir do jogo por 1 turno, causa 9 de dano e tem 100% de chance de causar o status instavel.',
      damage: 9,
      effects: [STATUS_EFFECTS.instavel, STATUS_EFFECTS.skipTurn],
      level: 1
    },
    {
      id: 'convocação',
      name: 'Convocação',
      description: 'Markin convoca a tropa pra juntar no adversario causando 35 de dano com 0% de chance de causar bleed e ragebait.',
      damage: 35,
      effects: [STATUS_EFFECTS.bleed, STATUS_EFFECTS.ragebait],
      effectChance: 0.20,
      level: 1
    },
    {
      id: 'voo-da-aguia-manca',
      name: 'Voo da Aguia Manca',
      description: 'Markin aplica o voo da aguia branca, o qual ele erra mas acaba acertando porque pega o adversario desprevinido, causa 28 de dano e tem 50% de chance de causar acerto critico.',
      damage: 0,
      buffs: [STATUS_EFFECTS.critico], 
      effectChance: 0.50,
      level: 1
    },
    {
      id: 'call-rapido',
      name: 'Call Rápido',
      description: 'Faz uma call rápido , causando 30 de dano e aumentando sua confiança, aumenta o dano em 20% por 2 turnos.',
      damage: 30,
      buffs: [STATUS_EFFECTS.confianca],
      level: 1
    }
  ]; 

// Personagens do ginásio
const isquigor: Character = {
  id: 'isquigor',
  name: 'Isquigor',
  level: 21,
  experience: 0,
  nextLevelExp: 8200,
  maxHealth: 900,
  currentHealth: 900,
  attack: 110,
  moves: isquigorMoves,
  moveLevels: {
    'reflexo-dioclin': 1,
    'quebrar-garrafa': 1
  },
  sprite: '/assets/personagens/isquigor.png',
  statusEffects: [],
  buffs: []
};

const roscalen: Character = {
  id: 'roscalen',
  name: 'Roscalen',
  level: 22,
  experience: 0,
  nextLevelExp: 8700,
  maxHealth: 940,
  currentHealth: 940,
  attack: 115,
  moves: roscalenMoves,
  moveLevels: {
    'market-analysis': 1,
    'technical-indicator': 1
  },
  sprite: '/assets/personagens/roscalen.png',
  statusEffects: [],
  buffs: []
};

const zolenken: Character = {
  id: 'zolenken',
  name: 'Zolenken',
  level: 23,
  experience: 0,
  nextLevelExp: 9200,
  maxHealth: 980,
  currentHealth: 980,
  attack: 120,
  moves: zolenkenMoves,
  moveLevels: {
    'chamar-capanga': 1,
    'mustangao': 1
  },
  sprite: '/assets/personagens/zolenken.png',
  statusEffects: [],
  buffs: []
};

const markin: Character = {
  id: 'markin',
  name: 'Markin',
  level: 25,
  experience: 0,
  nextLevelExp: 10000,
  maxHealth: 1060,
  currentHealth: 1060,
  attack: 130,
  moves: markinMoves,
  moveLevels: {
    'julius': 1,
    'convocação': 1,
    'voo-da-aguia-manca': 1,
    'call-rapido': 1
  },
  sprite: '/assets/personagens/markin.png',
  statusEffects: [],
  buffs: []
};

export const gasoduto: Gym = {  id: 'gasoduto',  name: 'Gasoduto',  description: 'O quinto ginásio do jogo, onde os jogadores enfrentam os membros do Gasoduto.',  enemies: [isquigor, roscalen, zolenken, markin],  requiredLevel: 7,  baseExpReward: 200,  expPerLevel: 100,  rewardItems: GASODUTO_ITEMS}; 