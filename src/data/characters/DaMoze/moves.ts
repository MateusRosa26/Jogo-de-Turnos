import type { Move } from '@/types/game';
import { STATUS_EFFECTS } from '@/data/statusEffects';

export const damozeMoves: Move[] = [
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