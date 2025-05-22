export const CHARACTER_SPRITES = {
  'generico-duto': '/assets/personagens/generico-duto.png',
  'yanj': '/assets/personagens/YanJ4Real.png',
  'tana': '/assets/personagens/Tana.png',
  'landim': '/assets/personagens/landim.png',
  'kaiera': '/assets/personagens/kaiera.png',
  'damoze': '/assets/personagens/damoze.png'
} as const;

export type CharacterId = keyof typeof CHARACTER_SPRITES; 