import type { Gym, Character, Move } from '@/types/game';
import { STATUS_EFFECTS } from '@/data/statusEffects';
import { CHARACTER_SPRITES } from '@/data/config/sprites';
import { PERICLES_ITEMS } from '@/data/items';

// Moves do Landim
const landimMoves: Move[] = [
  {
    id: 'agilidade-do-mais-pequeno',
    name: 'Agilidade do Mais Pequeno',
    description: 'Aumenta a chance de esquivar dos próximos 3 ataques inimigos em 30%.',
    damage: 0,
    buffs: [STATUS_EFFECTS['acumulo-de-odio']],
    level: 1
  },
  {
    id: 'pincher-bite',
    name: 'Pincher Bite',
    description: 'Causa 25 de dano e tem 20% de chance de causar o status bleed no adversário.',
    damage: 25,
    effects: [STATUS_EFFECTS.bleed],
    level: 1
  }
];

// Moves da Kaiera
const kaieraMoves: Move[] = [
  {
    id: 'chicote-de-cabelo',
    name: 'Chicote de Cabelo',
    description: 'Causa 30 de dano e tem 25% de chance de causar o status sedoso no inimigo.',
    damage: 30,
    effects: [STATUS_EFFECTS.sedoso],
    effectChance: 0.25,
    level: 1
  },
  {
    id: 'labia',
    name: 'Labia',
    description: 'Tenta convencer o adversário a ficar deboa.',
    damage: 0,
    effects: [STATUS_EFFECTS.skipTurn],
    level: 1
  }
];

// Moves do DaMoze
const damozeMoves: Move[] = [
  {
    id: 'nevoeiro',
    name: 'Nevoeiro',
    description: 'Solta a fumaça da bongada na cara do adversário.',
    damage: 15,
    effects: [STATUS_EFFECTS.cegueira],
    level: 1
  },
  {
    id: 'do',
    name: 'DO',
    description: 'Damoze fala DO confundindo o adversário e causando graves danos cerebrais.',
    damage: 35,
    effects: [STATUS_EFFECTS.braindamage],
    level: 1
  },
  {
    id: 'barrigada',
    name: 'Barrigada',
    description: 'Aplica uma barriga no adversário.',
    damage: 25,
    effects: [STATUS_EFFECTS.refluxo],
    level: 1
  },
  {
    id: 'alt-f4-lanchinho',
    name: 'Alt+F4 Lanchinho',
    description: 'Damoze sai para comer um lanchinho, perdendo 1 turno mas recuperando 40 de vida no próximo turno.',
    damage: 0,
    effects: [STATUS_EFFECTS.skipTurn, STATUS_EFFECTS.recuperacao],
    level: 1
  }
];

// Moves da Tana
const tanaMoves: Move[] = [
  {
    id: 'pedalada',
    name: 'Pedalada',
    description: 'Aumenta o dano dos próximos 2 ataques em 20%.',
    damage: 0,
    buffs: [STATUS_EFFECTS['acumulo-de-odio']],
    effects: [STATUS_EFFECTS.skipTurn],
    level: 1
  },
  {
    id: 'cagacao-de-regra',
    name: 'Cagação de Regra',
    description: 'O usuário caga uma regra com certeza absoluta e inabalável.',
    damage: 35,
    effects: [STATUS_EFFECTS.confusao],
    level: 1
  },
  {
    id: 'zaga',
    name: 'Zaga',
    description: 'Se posiciona em uma posição favorável de defesa.',
    damage: 0,
    buffs: [STATUS_EFFECTS['acumulo-de-odio']],
    level: 1
  },
  {
    id: 'call-rapido',
    name: 'Call Rápido',
    description: 'Passa uma call rápido trazendo confiança.',
    damage: 0,
    buffs: [STATUS_EFFECTS.critico],
    level: 1
  }
];

// Personagens do ginásio
const landim: Character = {
  id: 'landim',
  name: 'Landim',
  level: 2,
  experience: 0,
  nextLevelExp: 250,
  maxHealth: 120,
  currentHealth: 120,
  attack: 15,
  moves: landimMoves,
  moveLevels: {
    'agilidade-do-mais-pequeno': 1,
    'pincher-bite': 1
  },
  sprite: '/images/characters/landim.png',
  statusEffects: [],
  buffs: []
};

const kaiera: Character = {
  id: 'kaiera',
  name: 'Kaiera',
  level: 4,
  experience: 0,
  nextLevelExp: 450,
  maxHealth: 200,
  currentHealth: 200,
  attack: 25,
  moves: kaieraMoves,
  moveLevels: {
    'chicote-de-cabelo': 1,
    'labia': 1
  },
  sprite: '/images/characters/kaiera.png',
  statusEffects: [],
  buffs: []
};

const damoze: Character = {
  id: 'damoze',
  name: 'DaMoze',
  level: 6,
  experience: 0,
  nextLevelExp: 1000,
  maxHealth: 300,
  currentHealth: 300,
  attack: 35,
  moves: damozeMoves,
  moveLevels: {
    'nevoeiro': 1,
    'do': 1,
    'barrigada': 1,
    'alt-f4-lanchinho': 1
  },
  sprite: '/assets/personagens/daMoze.png',
  statusEffects: [],
  buffs: []
};

const tana: Character = {
  id: 'tana',
  name: 'Tana',
  level: 8,
  experience: 0,
  nextLevelExp: 1750,
  maxHealth: 380,
  currentHealth: 380,
  attack: 45,
  moves: tanaMoves,
  moveLevels: {
    'pedalada': 1,
    'cagacao-de-regra': 1,
    'zaga': 1,
    'call-rapido': 1
  },
  sprite: '/assets/personagens/tana.png',
  statusEffects: [],
  buffs: []
};

export const faClubeDoPericles: Gym = {
  id: 'fa-clube-do-pericles',
  name: 'Fa Clube do Pericles',
  description: 'O primeiro ginásio do jogo, onde os jogadores enfrentam os membros do Fa Clube do Pericles.',
  enemies: [landim, kaiera, damoze, tana],
    requiredLevel: 1,  baseExpReward: 100,  expPerLevel: 50,  rewardItems: PERICLES_ITEMS
}; 