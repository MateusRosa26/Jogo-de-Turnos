import type { Move } from '@/types/game';
import { STATUS_EFFECTS } from '@/data/statusEffects';

export const genericoDutoMoves: Move[] = [
  {
    id: 'cagacao-de-regra',
    name: 'Cagação de Regra',
    description: 'O usuário caga uma regra com certeza absoluta e inabalável o que deixa o adversário confuso causando severos danos cerebrais nele. A habilidade causa 35 de dano, e tem 60% de chance de causar o status confusão no adversário. Quando algum personagem ou inimigo está sobre o status confusão ao utilizar uma habilidade ele tem 40% de chance de usar outro, 40% de chance de usar em si mesmo a habilidade e 20% de chance de acertar a habilidade.',
    damage: 35,
    effects: [STATUS_EFFECTS.confusao],
    level: 1
  },
  {
    id: 'baitar-full',
    name: 'Baitar Full',
    description: 'O usuário se faz de morto deixando que o time todo morra sem seu auxílio porém isso gera uma oportunidade única contra o adversário que abaixou sua guarda. A habilidade causa 30 de dano e tem 50% de chance de causar um certo crítico dobrando o dano da skill.',
    damage: 30,
    effects: [STATUS_EFFECTS.critico],
    level: 1
  },
  {
    id: 'espumar',
    name: 'Espumar',
    description: 'O usuário acumula ódio devido a incompetência de seus aliados e se energiza fazendo com que seu próximo ataque cause o dobro de dano ao adversário. O usuário tem 10% de chance de entrar em fadiga e ficar 1 round sem se poder jogar.',
    damage: 12,
    effects: [STATUS_EFFECTS['acumulo-de-odio']],
    level: 1
  },
  {
    id: 'trolladinha-de-cria',
    name: 'Trolladinha de Cria',
    description: 'O usuário aplica uma trollada de relíquia que mexe com o psicológico do adversário. A habilidade causa 20 de dano devido a humilhação e tem 50% de chance de causar o status ragebait no adversário fazendo com que ele perca a clareza de suas ações e não jogue por 1 turno.',
    damage: 20,
    effects: [STATUS_EFFECTS.ragebait],
    level: 1
  }
];