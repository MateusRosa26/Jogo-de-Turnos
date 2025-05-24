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
  'fa-clube-do-pericles': '/assets/cenarios/fundoPericles.jpg',
  'buy-n-hold': '/assets/cenarios/fundoBuyNHold.jpg',
  'quadra': '/assets/cenarios/fundoQuadra.jpg',
  'njj': '/assets/cenarios/fundoNJJ.jpg',
  'gasoduto': '/assets/cenarios/fundoGasoduto.jpg'
}; 