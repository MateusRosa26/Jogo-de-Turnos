// Exportação dos ginásios na ordem de progressão do jogo
export { faClubeDoPericles } from './faClubeDoPericles';
export { buyNHold } from './buyNHold';
export { quadra } from './quadra';
export { njj } from './njj';
export { gasoduto } from './gasoduto';

// Array dos ginásios na ordem de progressão
import { faClubeDoPericles } from './faClubeDoPericles';
import { buyNHold } from './buyNHold';
import { quadra } from './quadra';
import { njj } from './njj';
import { gasoduto } from './gasoduto';

export const GYMS = [
  faClubeDoPericles,    // 1º ginásio
  buyNHold,             // 2º ginásio
  quadra,               // 3º ginásio
  njj,                  // 4º ginásio
  gasoduto              // 5º ginásio
];

// Mapeamento de backgrounds para cada ginásio
export const GYM_BACKGROUNDS = {
  'fa-clube-do-pericles': `${import.meta.env.BASE_URL}assets/cenarios/fundoPericles.jpg`,
  'buy-n-hold': `${import.meta.env.BASE_URL}assets/cenarios/fundoBuyNHold.jpg`,
  'quadra': `${import.meta.env.BASE_URL}assets/cenarios/fundoQuadra.jpg`,
  'njj': `${import.meta.env.BASE_URL}assets/cenarios/fundoNJJ.jpg`,
  'gasoduto': `${import.meta.env.BASE_URL}assets/cenarios/fundoGasoduto.jpg`
}; 