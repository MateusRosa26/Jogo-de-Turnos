import type { Move } from '@/types/game';
import { STATUS_EFFECTS } from '@/data/statusEffects';

export const markinMoves: Move[] = [
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