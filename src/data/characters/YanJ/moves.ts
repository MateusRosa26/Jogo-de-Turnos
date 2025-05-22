import type { Move } from '@/types/game';
import { STATUS_EFFECTS } from '@/data/statusEffects';

export const yanJMoves: Move[] = [
  {
    id: 'cortina-de-fumaca',
    name: 'Cortina de Fumaça',
    description: 'Após carburar inúmeros baseados Yanj estabelece uma cortina ao seu redor que causa 8 de dano por turno até o final da partida e aumenta a chance de esquivar do ataque inimigo em 25%',
    damage: 0,
    effects: [STATUS_EFFECTS['cortina-de-fumaca']],
    level: 1
  },
  {
    id: 'ritual-rasta',
    name: 'Ritual Rasta',
    description: 'YanJ invoca os espíritos dos Rastas originais para entoar o hino de guerra OG aumentando o dano da próxima habilidade em 50% e fazendo com que ela cause o status Confusão por 1 turno.',
    damage: 0,
    buffs: [STATUS_EFFECTS['acumulo-de-odio']],
    effects: [STATUS_EFFECTS.confusao],
    level: 1
  },
  {
    id: 'gingadinha-de-cria',
    name: 'Gingadinha de Cria',
    description: 'Aplica movimentos únicos derivados dos seus anos de capa de gaita atacando o adversário numa sucessão rápida de 3 ataques cada um dando 10 de dano e tendo 15% de chance de causar bleed.',
    damage: 15,
    effects: [STATUS_EFFECTS.bleed],
    level: 1,
    multiHit: 3,
    effectChance: 0.10
  },
  {
    id: 'apaga-de-cigarro',
    name: 'Apaga de Cigarro',
    description: 'Apaga o baseado na testa do adversário causando 30 de dano e tem a chance de 45% de aplicar queimadura no adversário, além disso causa o status instável no adversário até o final da partida',
    damage: 30,
    effects: [STATUS_EFFECTS.queimadura, STATUS_EFFECTS.instavel],
    effectChance: 0.45,
    level: 1
  }
]; 