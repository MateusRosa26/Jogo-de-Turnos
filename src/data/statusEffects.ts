import type { Character, StatusEffect } from '@/types/game';

export const STATUS_EFFECTS: Record<string, StatusEffect> = {
  confusao: {
    id: 'confusao',
    name: 'Confusão',
    description: 'Chance de se machucar ao atacar',
    duration: 3,
    effect: (target) => {
      if (Math.random() < 0.3) {
        target.currentHealth = Math.max(0, target.currentHealth - 5);
        return 5; // Retorna o dano causado
      }
      return 0;
    },
  },
  critico: {
    id: 'critico',
    name: 'Crítico',
    description: 'Próximo ataque causa o dobro de dano',
    duration: 1,
    effect: (target) => {
      target.attack *= 2;
      return 0;
    },
  },
  ragebait: {
    id: 'ragebait',
    name: 'Ragebait',
    description: 'Pula o próximo turno',
    duration: 1,
    effect: (target) => {
      target.skipNextTurn = true;
      return 0;
    },
  },
  bleed: {
    id: 'bleed',
    name: 'Sangramento',
    description: 'Causa dano ao longo do tempo',
    duration: 3,
    effect: (target) => {
      const damage = 5;
      target.currentHealth = Math.max(0, target.currentHealth - damage);
      return damage;
    },
  },
  sedoso: {
    id: 'sedoso',
    name: 'Sedoso',
    description: 'Chance de pular o próximo turno',
    duration: 2,
    effect: (target) => {
      if (Math.random() < 0.25) {
        target.skipNextTurn = true;
      }
      return 0;
    },
  },
  skipTurn: {
    id: 'skipTurn',
    name: 'Pular Turno',
    description: 'Pula o próximo turno',
    duration: 1,
    effect: (target) => {
      target.skipNextTurn = true;
      return 0;
    },
  },
  cegueira: {
    id: 'cegueira',
    name: 'Cegueira',
    description: 'Chance de errar o ataque',
    duration: 2,
    effect: (target) => {
      target.accuracy = 0.7; // Reduz a precisão para 70%
      return 0;
    },
  },
  braindamage: {
    id: 'braindamage',
    name: 'Brain Damage',
    description: 'Chance de usar a habilidade errada',
    duration: 2,
    effect: (target) => {
      target.confusion = true; // Marca que o personagem está confuso
      return 0;
    },
  },
  refluxo: {
    id: 'refluxo',
    name: 'Refluxo',
    description: 'Causa dano ao longo do tempo',
    duration: 3,
    effect: (target) => {
      const damage = 3;
      target.currentHealth = Math.max(0, target.currentHealth - damage);
      return damage;
    },
  },
  'acumulo-de-odio': {
    id: 'acumulo-de-odio',
    name: 'Acúmulo de Ódio',
    description: 'Próximos 2 ataques causam 20% de dano extra',
    duration: 2,
    effect: (target) => {
      target.attack *= 1.2;
      return 0;
    },
  },
  instavel: {
    id: 'instavel',
    name: 'Instável',
    duration: -1, // Dura até o final do ginásio
    description: 'O personagem está instável devido aos danos cerebrais',
    effect: (target) => {
      target.accuracy = 0.8; // Reduz a precisão para 80%
      target.attack *= 0.9; // Reduz o ataque em 10%
      return 0;
    }
  },
  queimadura: {
    id: 'queimadura',
    name: 'Queimadura',
    duration: 3,
    description: 'Causa 4 de dano por turno por 3 turnos',
    effect: (target: Character) => {
      const damage = 4;
      target.currentHealth = Math.max(0, target.currentHealth - damage);
      return damage;
    }
  },
  'recuperacao': {
    id: 'recuperacao',
    name: 'Recuperação',
    description: 'Recupera 40 de vida no próximo turno',
    duration: 1,
    effect: (target) => {
      const heal = 40;
      target.currentHealth = Math.min(target.maxHealth, target.currentHealth + heal);
      return -heal; // Retorna um valor negativo para indicar cura
    }
  },
  'cortina-de-fumaca': {
    id: 'cortina-de-fumaca',
    name: 'Cortina de Fumaça',
    description: 'Após carburar inúmeros baseados Yanj estabelece uma cortina ao seu redor que causa 8 de dano por turno até o final da partida e aumenta a chance de esquivar do ataque inimigo em 25%',
    duration: 5,
    effect: (target: Character) => {
      // Se já passaram 3 turnos, dobra o dano
      const remainingDuration = target.statusEffects.find((e: StatusEffect) => e.id === 'cortina-de-fumaca')?.duration ?? 0;
      
      // Aplica o dano
      const damage = remainingDuration <= 2 ? 16 : 8;
      
      // Aplica a chance de esquiva
      target.accuracy = 0.7; // Reduz a precisão do alvo em 30%
      
      return damage;
    }
  },
  'double-next-hit': {
    id: 'double-next-hit',
    name: 'Dano Duplicado',
    description: 'Próximos 2 ataques causam 25% de dano extra',
    duration: 2,
    effect: (target) => {
      target.attack *= 1.25;
      return 0;
    }
  },
  defesa: {
    id: 'defesa',
    name: 'Defesa',
    description: 'Reduz o dano recebido em 30%',
    duration: 2,
    effect: (target) => {
      target.attack *= 0.7; // Reduz o ataque em 30%
      return 0;
    }
  },
  confianca: {
    id: 'confianca',
    name: 'Confiança',
    description: 'Aumenta o dano em 20%',
    duration: 2,
    effect: (target) => {
      target.attack *= 1.2;
      return 0;
    }
  }
}; 