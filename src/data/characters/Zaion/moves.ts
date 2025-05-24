import type { Move } from '@/types/game';
import { STATUS_EFFECTS } from '@/data/statusEffects';

export const zaionMoves: Move[] = [
  {
    id: 'esporro',
    name: 'Esporro',
    description: 'Zaion fica puto e começa a gritar com o adversario, tem 45% de chance do oponente ficar oprimido e perder o proximo turno.',
    damage: 0,
    effects: [STATUS_EFFECTS.skipTurn],
    level: 1
  },
  {
    id: 'call-rapido',
    name: 'Call Rápido',
    description: 'Faz uma call rápido , causando 25 de dano e aumentando sua confiança, aumenta o dano em 20% por 2 turnos.',
    damage: 25,
    buffs: [STATUS_EFFECTS.confianca],
    level: 1
  },
  {
    id: 'gingadinha-de-cria',
    name: 'Gingadinha de Cria',
    description: 'Aplica movimentos únicos derivados dos seus anos de capa de gaita atacando o adversário numa sucessão rápida de 3 ataques cada um dando 10 de dano e tendo 15% de chance de causar bleed.',
    damage: 12,
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