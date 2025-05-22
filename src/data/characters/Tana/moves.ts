import type { Move } from '@/types/game';
import { STATUS_EFFECTS } from '@/data/statusEffects';

export const tanaMoves: Move[] = [
  {
    id: 'pedalada',
    name: 'Pedalada',
    description: 'Aplica uma pedalada no adversário causando 15 de dano e aumentando o dano dos próximos 2 ataques em 25%.',
    damage: 15,
    buffs: [STATUS_EFFECTS['double-next-hit']],
    level: 1
  },
  {
    id: 'cagacao-de-regra',
    name: 'Cagação de Regra',
    description: 'O usuário caga uma regra com certeza absoluta e inabalável o que deixa o adversário confuso causando severos danos cerebrais nele. A habilidade causa 35 de dano, e tem 60% de chance de causar o status confusão no adversário. Quando algum personagem ou inimigo está sobre o status confusão ao utilizar uma habilidade ele tem 40% de chance de usar outro, 40% de chance de usar em si mesmo a habilidade e 20% de chance de acertar a habilidade.',
    damage: 35,
    effects: [STATUS_EFFECTS.confusao],
    level: 1
  },
  {
    id: 'zaga',
    name: 'Zaga',
    description: 'Posiciona-se nas linhas de defesa, reduzindo o dano recebido em 30% por 2 turnos.',
    damage: 0,
    buffs: [STATUS_EFFECTS.defesa],
    level: 1
  },
  {
    id: 'call-rapido',
    name: 'Call Rápido',
    description: 'Faz uma call rápido , causando 25 de dano e aumentando sua confiança, aumenta o dano em 20% por 2 turnos.',
    damage: 25,
    buffs: [STATUS_EFFECTS.confianca],
    level: 1
  }
]; 