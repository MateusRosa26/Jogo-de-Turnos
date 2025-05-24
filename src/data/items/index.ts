import type { Item, CraftingRecipe } from '@/types/game';

// =============================================
// ITENS DOS GINÁSIOS (15 itens base)
// =============================================

export const PERICLES_ITEMS: Item[] = [
  {
    id: 'pericles-drip',
    name: 'Blusa de Time',
    description: 'Uma blusa de time usada por algum integrante do clube.',
    rarity: 'rare',
    type: 'crafting',
    effect: { type: 'drip', value: 20 },
    sprite: '/assets/itens/filosofia-liquida.png'
  },
  {
    id: 'pericles-vivencia',
    name: 'Pedal de Bicicleta',
    description: 'Um pedal de bicicleta quebrado.',
    rarity: 'rare',
    type: 'crafting',
    effect: { type: 'vivencia', value: 20 },
    sprite: '/assets/itens/pergaminho-experiencia.png'
  },
  {
    id: 'pericles-cone',
    name: 'Cone Entupido',
    description: 'Um cone de bong entupido com maconha.',
    rarity: 'rare',
    type: 'crafting',
    effect: { type: 'estourar-o-cone', value: 20 },
    sprite: '/assets/itens/cetro-conhecimento.png'
  }
];

export const BUYHOLD_ITEMS: Item[] = [
  {
    id: 'buyhold-drip',
    name: 'Chocolate Chip Muffin',
    description: 'Um bolinho de chocolate com uma aparencia deliciosa.',
    rarity: 'rare',
    type: 'crafting',
    effect: { type: 'drip', value: 20 },
    sprite: '/assets/itens/moeda-liquida.png'
  },
  {
    id: 'buyhold-vivencia',
    name: '2 HoldCoins',
    description: 'Adiciona 2 Holdcoins a sua wallet digital, porem voce nunca pode acessa-la.',
    rarity: 'rare',
    type: 'crafting',
    effect: { type: 'vivencia', value: 20 },
    sprite: '/assets/itens/acoes-experiencia.png'
  },
  {
    id: 'buyhold-cone',
    name: 'pedaço de seda',
    description: 'Pedaço de seda que foi fumado por um dos membros do BuyNHold.',
    rarity: 'rare',
    type: 'crafting',
    effect: { type: 'estourar-o-cone', value: 20 },
    sprite: '/assets/itens/diamante-hands-supremo.png'
  }
];

export const QUADRA_ITEMS: Item[] = [
  {
    id: 'quadra-drip',
    name: 'Cinto de Cadarço',
    description: 'Cinto de cadarço usado pelos atletas da quadra.',
    rarity: 'rare',
    type: 'crafting',
    effect: { type: 'drip', value: 20 },
    sprite: '/assets/itens/suor-vitoria.png'
  },
  {
    id: 'quadra-vivencia',
    name: 'Shape da Tropa',
    description: 'Shape de skate usado pelos atletas do quadra.',
    rarity: 'rare',
    type: 'crafting',
    effect: { type: 'vivencia', value: 20 },
    sprite: '/assets/itens/medalha-sabedoria.png'
  },
  {
    id: 'quadra-cone',
    name: 'Resto de Tabaco',
    description: 'Resto de tabaco que não foi apertado ainda.',
    rarity: 'rare',
    type: 'crafting',
    effect: { type: 'estourar-o-cone', value: 20 },
    sprite: '/assets/itens/bola-cosmica.png'
  }
];

export const NJJ_ITEMS: Item[] = [
  {
    id: 'njj-drip',
    name: 'Skin de Arma',
    description: 'Skin de arma usada pelos membros do NJJ.',
    rarity: 'rare',
    type: 'crafting',
    effect: { type: 'drip', value: 20 },
    sprite: '/assets/itens/oleo-condutor.png'
  },
  {
    id: 'njj-vivencia',
    name: 'Cambio de Carro',
    description: 'Cambio de carro usado por algum morador de petropolis.',
    rarity: 'rare',
    type: 'crafting',
    effect: { type: 'vivencia', value: 20 },
    sprite: '/assets/itens/chip-memoria.png'
  },
  {
    id: 'njj-cone',
    name: 'Lata de Cerveja Pela Metade',
    description: 'Lata de cerveja que foi bebida ate a metade por um dos membros.',
    rarity: 'rare',
    type: 'crafting',
    effect: { type: 'estourar-o-cone', value: 20 },
    sprite: '/assets/itens/garrafa-tesla.png'
  }
];

export const GASODUTO_ITEMS: Item[] = [
  {
    id: 'gasoduto-drip',
    name: 'Trofeu do Pummel',
    description: 'Trofeu de primeiro colocado no pummel perante a tropa do gasoduto.',
    rarity: 'rare',
    type: 'crafting',
    effect: { type: 'drip', value: 20 },
    sprite: '/assets/itens/combustivel-dourado.png'
  },
  {
    id: 'gasoduto-vivencia',
    name: 'Ticket pro Lobomba',
    description: 'Ticket para ultima vaga do lombomba so falta você.',
    rarity: 'rare',
    type: 'crafting',
    effect: { type: 'vivencia', value: 20 },
    sprite: '/assets/itens/valvula-sabedoria.png'
  },
  {
    id: 'gasoduto-cone',
    name: 'Resto de Haxixe',
    description: 'Resto de haxixe que nao foi fumado por um dos membros do gasoduto.',
    rarity: 'rare',
    type: 'crafting',
    effect: { type: 'estourar-o-cone', value: 20 },
    sprite: '/assets/itens/explosivo-pressao.png'
  }
];

// =============================================
// 243 ITENS CRAFTADOS - VERSÃO CÔMICA E CRIATIVA
// =============================================

export const CRAFTED_ITEMS: Item[] = [
  // ITEM 001: pericles-drip + buyhold-drip + quadra-drip + njj-drip + gasoduto-drip
  {
    id: 'crafted-001',
    name: 'Kit do Noob Vencedor',
    description: 'Uma mistura bizarra: blusa de time manchada de muffin, cinto amarrado com skin de CS:GO, coroado com um troféu de Pummel. Para quem quer parecer pro mas é claramente casual.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-001.png'
  },
  
  // ITEM 002: pericles-drip + buyhold-drip + quadra-drip + njj-drip + gasoduto-vivencia
  {
    id: 'crafted-002',
    name: 'Combo do Atleta Gamer Perdido',
    description: 'Blusa de time com migalhas de muffin, cinto de cadarço usado como headset, skin de arma colada no peito e um ticket do Lobomba como amuleto. Confusão fashion total.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-002.png'
  },
  
  // ITEM 003: pericles-drip + buyhold-drip + quadra-drip + njj-drip + gasoduto-cone
  {
    id: 'crafted-003',
    name: 'Armadura do Campeão Chapado',
    description: 'Blusa de time como capa, cinto virou bandana, muffin no bolso, skin de Valorant no braço e resto de haxixe no outro bolso. Para RPGs da vida real.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-003.png'
  },
  
  // ITEM 004: pericles-drip + buyhold-drip + quadra-drip + njj-vivencia + gasoduto-drip
  {
    id: 'crafted-004',
    name: 'Equipamento do Piloto Gourmet',
    description: 'Blusa de time no banco do carro, muffin no porta-copos, cinto como cinto de segurança, câmbio customizado e troféu de Pummel no retrovisor. Speed e sabor.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-004.png'
  },
  
  // ITEM 005: pericles-drip + buyhold-drip + quadra-drip + njj-vivencia + gasoduto-vivencia
  {
    id: 'crafted-005',
    name: 'Kit do Especialista em Tudo',
    description: 'Blusa personalizada, muffin de energia, cinto multiuso, manual de câmbio como guia e ticket VIP eterno. Para quem domina futebol, culinária, moda, carros e eventos.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-005.png'
  },
  
  // ITEM 006: pericles-drip + buyhold-drip + quadra-drip + njj-vivencia + gasoduto-cone
  {
    id: 'crafted-006',
    name: 'Setup do Piloto Zen',
    description: 'Blusa como almofada, muffin de lanche, cinto relaxado, experiência automotiva e haxixe premium. Dirigir é meditação.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-006.png'
  },
  
  // ITEM 007: pericles-drip + buyhold-drip + quadra-drip + njj-cone + gasoduto-drip
  {
    id: 'crafted-007',
    name: 'Kit do Campeão da Resenha',
    description: 'Blusa oficial, muffin gourmet, cinto estiloso, cerveja gelada e troféu brilhante. Para quem leva a diversão a sério mas sem perder o estilo.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-007.png'
  },
  
  // ITEM 008: pericles-drip + buyhold-drip + quadra-drip + njj-cone + gasoduto-vivencia
  {
    id: 'crafted-008',
    name: 'Combo do Aventureiro Urbano',
    description: 'Blusa como identificação, muffin de energia, cinto de utilidades, cerveja social e experiências de balada. Para explorar a cidade com estilo.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-008.png'
  },
  
  // ITEM 009: pericles-drip + buyhold-drip + quadra-drip + njj-cone + gasoduto-cone
  {
    id: 'crafted-009',
    name: 'Kit Supremo do Chill',
    description: 'Blusa como cama, muffin de lanche, cinto solto, cerveja infinita e haxixe premium. O nirvana do relaxamento materializado em equipamento.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-009.png'
  },
  
  // ITEM 010: pericles-drip + buyhold-drip + quadra-vivencia + njj-drip + gasoduto-drip
  {
    id: 'crafted-010',
    name: 'Equipamento do Pro Player Atlético',
    description: 'Blusa de time para stream, muffin de energia gamer, shape como mousepad, skin legendary equipada e troféu de torneio. Triple threat: esports, skate e futebol.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-010.png'
  },
  
  // ITEM 011: pericles-drip + buyhold-drip + quadra-vivencia + njj-drip + gasoduto-vivencia
  {
    id: 'crafted-011',
    name: 'Kit do Streamer Multitalento',
    description: 'Blusa personalizada, muffin de patrocínio, shape de background, setup gamer profissional e acesso VIP aos melhores eventos. Conteúdo premium garantido.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-011.png'
  },
  
  // ITEM 012: pericles-drip + buyhold-drip + quadra-vivencia + njj-drip + gasoduto-cone
  {
    id: 'crafted-012',
    name: 'Setup do Gamer Zen Master',
    description: 'Blusa como comfort wear, muffin de munchies, shape relaxante, skin de Stardew Valley e haxixe orgânico. Gaming chill mode ativado.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-012.png'
  },
  
  // ITEM 013: pericles-drip + buyhold-drip + quadra-vivencia + njj-vivencia + gasoduto-drip
  {
    id: 'crafted-013',
    name: 'Kit do Mestre Universal',
    description: 'Blusa histórica, muffin da sorte, shape lendário, conhecimento automotivo supremo e troféu de todas as modalidades. A experiência em pessoa.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-013.png'
  },
  
  // ITEM 014: pericles-drip + buyhold-drip + quadra-vivencia + njj-vivencia + gasoduto-vivencia
  {
    id: 'crafted-014',
    name: 'Equipamento do Guru da Sabedoria',
    description: 'Relíquia de blusa, muffin da inspiração, shape sagrado, mestria em motores e acesso eterno aos segredos. O conhecimento supremo wearable.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-014.png'
  },
  
  // ITEM 015: pericles-drip + buyhold-drip + quadra-vivencia + njj-vivencia + gasoduto-cone
  {
    id: 'crafted-015',
    name: 'Kit do Filósofo Skatista',
    description: 'Blusa da reflexão, muffin da contemplação, shape da meditação, sabedoria automotiva e haxixe filosófico. Pensamentos profundos sobre rodas.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-015.png'
  },
  
  // ITEM 016: pericles-drip + buyhold-drip + quadra-vivencia + njj-cone + gasoduto-drip
  {
    id: 'crafted-016',
    name: 'Combo do Campeão da Diversão',
    description: 'Blusa da vitória, muffin celebrativo, shape de comemoração, cerveja da conquista e troféu merecido. Sucesso com estilo e descontração.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-016.png'
  },
  
  // ITEM 017: pericles-drip + buyhold-drip + quadra-vivencia + njj-cone + gasoduto-vivencia
  {
    id: 'crafted-017',
    name: 'Kit do Aventureiro Social',
    description: 'Blusa social, muffin gourmet, shape urbano, cerveja craft e networking premium. Para quem vive experiências gastronômicas e sociais.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-017.png'
  },
  
  // ITEM 018: pericles-drip + buyhold-drip + quadra-vivencia + njj-cone + gasoduto-cone
  {
    id: 'crafted-018',
    name: 'Setup do Skatista Zen',
    description: 'Blusa flow, muffin orgânico, shape da paz, cerveja artesanal e haxixe premium. Manobras em estado de nirvana.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-018.png'
  },
  
  // ITEM 019: pericles-drip + buyhold-drip + quadra-cone + njj-drip + gasoduto-drip
  {
    id: 'crafted-019',
    name: 'Kit do Gamer Fumante Vencedor',
    description: 'Blusa official, muffin energy, tabaco de qualidade, skin de AWP Dragon Lore e troféu de major. Setup completo para clutches históricos.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-019.png'
  },
  
  // ITEM 020: pericles-drip + buyhold-drip + quadra-cone + njj-drip + gasoduto-vivencia
  {
    id: 'crafted-020',
    name: 'Combo do Streamer Underground',
    description: 'Blusa autêntica, muffin artesanal, tabaco rolado à mão, setup retrô e acesso aos eventos mais exclusivos. Nostalgia com qualidade.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-020.png'
  },
  
  // ITEM 021: pericles-drip + buyhold-drip + quadra-cone + njj-drip + gasoduto-cone
  {
    id: 'crafted-021',
    name: 'Setup do Pro Player Alternativo',
    description: 'Blusa tie-dye, muffin vegano, tabaco orgânico, skin de Terraria e haxixe holandês. Gaming consciente e sustentável.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-021.png'
  },
  
  // ITEM 022: pericles-drip + buyhold-drip + quadra-cone + njj-vivencia + gasoduto-drip
  {
    id: 'crafted-022',
    name: 'Kit do Piloto Defumado',
    description: 'Blusa de corrida, muffin de energia, tabaco premium, câmbio personalizado e troféu de rally. Speed com sabor e aroma únicos.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-022.png'
  },
  
  // ITEM 023: pericles-drip + buyhold-drip + quadra-cone + njj-vivencia + gasoduto-vivencia
  {
    id: 'crafted-023',
    name: 'Equipamento do Especialista Relaxado',
    description: 'Blusa vintage, muffin gourmet, tabaco aged, expertise automotiva e vivência de baladas underground. Conhecimento com estilo alternativo.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-023.png'
  },
  
  // ITEM 024: pericles-drip + buyhold-drip + quadra-cone + njj-vivencia + gasoduto-cone
  {
    id: 'crafted-024',
    name: 'Kit do Sábio da Calmaria',
    description: 'Blusa da meditação, muffin da contemplação, tabaco tibetano, sabedoria mecânica e haxixe do Himalaia. Enlightenment automotivo.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-024.png'
  },
  
  // ITEM 025: pericles-drip + buyhold-drip + quadra-cone + njj-cone + gasoduto-drip
  {
    id: 'crafted-025',
    name: 'Combo do Campeão do Chill',
    description: 'Blusa relaxed fit, muffin space cake, tabaco holandês, cerveja gelada e troféu de Amsterdam. Vitória em estado zen.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-025.png'
  },
  
  // ITEM 026: pericles-drip + buyhold-drip + quadra-cone + njj-cone + gasoduto-vivencia
  {
    id: 'crafted-026',
    name: 'Kit do Aventureiro Alternativo',
    description: 'Blusa hemp, muffin orgânico, tabaco natural, cerveja artesanal e experiências transcendentais. Jornada consciente pela vida.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-026.png'
  },
  
  // ITEM 027: pericles-drip + buyhold-drip + quadra-cone + njj-cone + gasoduto-cone
  {
    id: 'crafted-027',
    name: 'Setup Supremo do Nirvana',
    description: 'Blusa sagrada, muffin dos deuses, tabaco celestial, cerveja dos anjos e haxixe transcendental. A paz suprema em forma física.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-027.png'
  },
  
  // ITEM 028: pericles-drip + buyhold-vivencia + quadra-drip + njj-drip + gasoduto-drip
  {
    id: 'crafted-028',
    name: 'Kit do Investidor Pro Player',
    description: 'Blusa premium, carteira crypto, cinto tech, setup de milhões e troféu de ouro. Para quem ganha dinheiro jogando literalmente.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-028.png'
  },
  
  // ITEM 029: pericles-drip + buyhold-vivencia + quadra-drip + njj-drip + gasoduto-vivencia
  {
    id: 'crafted-029',
    name: 'Combo do Empreendedor Gamer',
    description: 'Blusa de marca, portfolio diversificado, cinto de grife, empresa de esports e networking premium. Business meets gaming.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-029.png'
  },
  
  // ITEM 030: pericles-drip + buyhold-vivencia + quadra-drip + njj-drip + gasoduto-cone
  {
    id: 'crafted-030',
    name: 'Setup do CEO Relaxado',
    description: 'Blusa executiva, investimentos seguros, cinto de couro, setup corporativo e haxixe medicinal. Liderança em estado zen.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-030.png'
  },
  
  // ITEM 031: pericles-drip + buyhold-vivencia + quadra-drip + njj-vivencia + gasoduto-drip
  {
    id: 'crafted-031',
    name: 'Kit do Campeão Empresário',
    description: 'Blusa histórica, imperio financeiro, cinto da sorte, garagem de carros clássicos e sala de troféus. Sucesso em todas as áreas.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-031.png'
  },
  
  // ITEM 032: pericles-drip + buyhold-vivencia + quadra-drip + njj-vivencia + gasoduto-vivencia
  {
    id: 'crafted-032',
    name: 'Equipamento do Mestre Absoluto',
    description: 'Blusa lendária, fortuna estabelecida, cinto mágico, conhecimento universal e acesso total. O poder supremo materializado.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-032.png'
  },
  
  // ITEM 033: pericles-drip + buyhold-vivencia + quadra-drip + njj-vivencia + gasoduto-cone
  {
    id: 'crafted-033',
    name: 'Kit do Filósofo Milionário',
    description: 'Blusa da sabedoria, riqueza consciente, cinto zen, conhecimento profundo e haxixe premium. Dinheiro não compra felicidade, mas ajuda.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-033.png'
  },
  
  // ITEM 034: pericles-drip + buyhold-vivencia + quadra-drip + njj-cone + gasoduto-drip
  {
    id: 'crafted-034',
    name: 'Combo do Magnata Festeiro',
    description: 'Blusa de festa, dinheiro infinito, cinto dourado, cerveja premium e troféu de diamante. O sucesso tem sabor de vitória.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-034.png'
  },
  
  // ITEM 035: pericles-drip + buyhold-vivencia + quadra-drip + njj-cone + gasoduto-vivencia
  {
    id: 'crafted-035',
    name: 'Kit do Explorador Rico',
    description: 'Blusa de aventura, recursos ilimitados, cinto de utilidades, cerveja internacional e experiências únicas pelo mundo. Vida sem limites.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-035.png'
  },
  
  // ITEM 036: pericles-drip + buyhold-vivencia + quadra-drip + njj-cone + gasoduto-cone
  {
    id: 'crafted-036',
    name: 'Setup do Magnata Zen',
    description: 'Blusa de seda, fortuna consciente, cinto de meditação, cerveja artesanal e haxixe orgânico. Riqueza interior e exterior.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-036.png'
  },
  
  // ITEM 037: pericles-drip + buyhold-vivencia + quadra-vivencia + njj-drip + gasoduto-drip
  {
    id: 'crafted-037',
    name: 'Kit do Atleta Investidor Pro',
    description: 'Blusa performance, portfolio olímpico, shape profissional, team de esports e troféu mundial. Excellence em múltiplas modalidades.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-037.png'
  },
  
  // ITEM 038: pericles-drip + buyhold-vivencia + quadra-vivencia + njj-drip + gasoduto-vivencia
  {
    id: 'crafted-038',
    name: 'Equipamento do Polímata Supremo',
    description: 'Blusa renascentista, sabedoria financeira, maestria atlética, dominância gamer e acesso universal. Leonardo da Vinci dos tempos modernos.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-038.png'
  },
  
  // ITEM 039: pericles-drip + buyhold-vivencia + quadra-vivencia + njj-drip + gasoduto-cone
  {
    id: 'crafted-039',
    name: 'Kit do Gamer Sábio Iluminado',
    description: 'Blusa mística, conhecimento crypto, shape sagrado, setup transcendental e haxixe filosófico. Gaming em dimensões superiores.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-039.png'
  },
  
  // ITEM 040: pericles-drip + buyhold-vivencia + quadra-vivencia + njj-vivencia + gasoduto-drip
  {
    id: 'crafted-040',
    name: 'Relíquia do Grande Mestre Universal',
    description: 'Blusa ancestral, sabedoria milenar dos mercados, shape lendário dos skates, conhecimento supremo dos motores e troféu eterno. A experiência absoluta.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-040.png'
  },
  
  // ITEM 041: pericles-drip + buyhold-vivencia + quadra-vivencia + njj-vivencia + gasoduto-vivencia
  {
    id: 'crafted-041',
    name: 'Supercomputador da Sabedoria Infinita',
    description: 'PC top de linha com blusa do Péricles como mousepad, HoldCoins minerando no background, algoritmos de skate, IA automotiva avançada e acesso aos servidores do Lobomba. Processamento transcendental.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-041.png'
  },
  
  // ITEM 042: pericles-drip + buyhold-vivencia + quadra-vivencia + njj-vivencia + gasoduto-cone
  {
    id: 'crafted-042',
    name: 'Bong Intelectual Premium',
    description: 'Bong artesanal com base feita de blusa do time, filtro de água enriquecida com essência de muffin crypto, bowl do shape sagrado, piteira de câmbio dourado e haxixe do Gasoduto. Para sessões filosóficas.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-042.png'
  },
  
  // ITEM 043: pericles-drip + buyhold-vivencia + quadra-vivencia + njj-cone + gasoduto-drip
  {
    id: 'crafted-043',
    name: 'Console Retrô Cervejeiro',
    description: 'Mega Drive modificado com blusa como capa, SSD com portfolio diversificado, joystick do shape de skate, cerveja como refrigeração líquida e troféu de Pummel como suporte. Gaming nostálgico.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-043.png'
  },
  
  // ITEM 044: pericles-drip + buyhold-vivencia + quadra-vivencia + njj-cone + gasoduto-vivencia
  {
    id: 'crafted-044',
    name: 'Destilaria Gamer Artesanal',
    description: 'Alambique high-tech com blusa como filtro, criptomoedas financiando a produção, shape como misturador, cerveja como base e experiências do Lobomba como receita secreta. Cachaça level 100.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-044.png'
  },
  
  // ITEM 045: pericles-drip + buyhold-vivencia + quadra-vivencia + njj-cone + gasoduto-cone
  {
    id: 'crafted-045',
    name: 'Vaporizador Transcendental',
    description: 'Vape de última geração com resistência da blusa do time, óleo CBD extraído com HoldCoins, ervas do shape mágico, cerveja como diluente e haxixe premium. Vapor da iluminação.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-045.png'
  },
  
  // ITEM 046: pericles-drip + buyhold-vivencia + quadra-cone + njj-drip + gasoduto-drip
  {
    id: 'crafted-046',
    name: 'Setup de Stream Defumado',
    description: 'Estação de trabalho com blusa oficial de fundo, investimentos bancando o setup, cinzeiro do tabaco como decoração, PC gamer top e troféu como troféu mesmo. Para lives memoráveis.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-046.png'
  },
  
  // ITEM 047: pericles-drip + buyhold-vivencia + quadra-cone + njj-drip + gasoduto-vivencia
  {
    id: 'crafted-047',
    name: 'Cervejeira Smart IoT',
    description: 'Geladeira inteligente com adesivo da blusa, pagamento via crypto, sistema de refrigeração do tabaco, interface gamer RGB e agenda sincronizada com eventos do Lobomba. Cerveja sempre gelada.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-047.png'
  },
  
  // ITEM 048: pericles-drip + buyhold-vivencia + quadra-cone + njj-drip + gasoduto-cone
  {
    id: 'crafted-048',
    name: 'Laboratório de Química Recreativa',
    description: 'Bancada científica com blusa como avental, investimentos financiando a pesquisa, tabaco como catalisador, equipamentos gamer para precisão e haxixe como produto final. Ciência aplicada.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-048.png'
  },
  
  // ITEM 049: pericles-drip + buyhold-vivencia + quadra-cone + njj-vivencia + gasoduto-drip
  {
    id: 'crafted-049',
    name: 'Simulador de Corrida Fumante',
    description: 'Cockpit completo com blusa no assento, criptomoedas como prize pool, tabaco no cinzeiro lateral, conhecimento automotivo real e troféu de primeira colocação. Racing em outro nível.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-049.png'
  },
  
  // ITEM 050: pericles-drip + buyhold-vivencia + quadra-cone + njj-vivencia + gasoduto-vivencia
  {
    id: 'crafted-050',
    name: 'Servidor de Conhecimento Alternativo',
    description: 'Data center pessoal com blusa como isolamento térmico, blockchain rodando HoldCoins, algoritmos de combustão do tabaco, IA automotiva e base de dados do Lobomba. Servidor da sabedoria.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-050.png'
  },
  
  // ITEM 051: pericles-drip + buyhold-vivencia + quadra-cone + njj-vivencia + gasoduto-cone
  {
    id: 'crafted-051',
    name: 'Greenhouse Tech Hidropônico',
    description: 'Estufa automatizada com blusa como cobertura, investimentos sustentando o projeto, sementes do tabaco, sensores automotivos e mudas de haxixe premium. Agricultura 4.0.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-051.png'
  },
  
  // ITEM 052: pericles-drip + buyhold-vivencia + quadra-cone + njj-cone + gasoduto-drip
  {
    id: 'crafted-052',
    name: 'Bar Gamer Automatizado',
    description: 'Balcão high-tech com blusa como decoração, pagamentos em crypto, gelo feito com água do tabaco, cerveja sempre gelada e troféu como enfeite central. Drinks level up.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-052.png'
  },
  
  // ITEM 053: pericles-drip + buyhold-vivencia + quadra-cone + njj-cone + gasoduto-vivencia
  {
    id: 'crafted-053',
    name: 'Mesa de Som Psicodélica',
    description: 'Mixer profissional com blusa como capa, NFTs tocando, samples de tabaco queimando, cerveja derramada nos faders e beats dos eventos do Lobomba. Som transcendental.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-053.png'
  },
  
  // ITEM 054: pericles-drip + buyhold-vivencia + quadra-cone + njj-cone + gasoduto-cone
  {
    id: 'crafted-054',
    name: 'Máquina do Tempo da Lombra',
    description: 'Dispositivo interdimensional alimentado por blusa vintage, energia das criptos, combustível de tabaco, cerveja como refrigerante e haxixe como catalisador temporal. Viagem no tempo chapada.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-054.png'
  },
  
  // ITEM 055: pericles-drip + buyhold-cone + quadra-drip + njj-drip + gasoduto-drip
  {
    id: 'crafted-055',
    name: 'Arcade Retrô Defumado',
    description: 'Fliperama clássico com blusa estampada no gabinete, moedas virtuais para jogar, cinto como correia dos controles, skins personalizadas nos botões e troféu no topo. Nostalgia pura.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-055.png'
  },
  
  // ITEM 056: pericles-drip + buyhold-cone + quadra-drip + njj-drip + gasoduto-vivencia
  {
    id: 'crafted-056',
    name: 'Headset Neural Gamer',
    description: 'Fone de ouvido com IA alimentado por fibras da blusa, pagamento em seda digital, almofadas do cinto atlético, drivers de alta qualidade e conexão neural com eventos do Lobomba. Gaming mental.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-056.png'
  },
  
  // ITEM 057: pericles-drip + buyhold-cone + quadra-drip + njj-drip + gasoduto-cone
  {
    id: 'crafted-057',
    name: 'Bong Gamer RGB',
    description: 'Bong eletrônico com LEDs da cor da blusa, comprado com seda coin, base do cinto de cadarço, piteira de skin rara e haxixe premium do Gasoduto. Fumada iluminada.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-057.png'
  },
  
  // ITEM 058: pericles-drip + buyhold-cone + quadra-drip + njj-vivencia + gasoduto-drip
  {
    id: 'crafted-058',
    name: 'Drone de Entrega Automotivo',
    description: 'Quadricóptero com blusa como paraquedas, financiado por seda, propulsores do cinto, navegação automotiva avançada e compartimento para troféus. Delivery 3.0.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-058.png'
  },
  
  // ITEM 059: pericles-drip + buyhold-cone + quadra-drip + njj-vivencia + gasoduto-vivencia
  {
    id: 'crafted-059',
    name: 'Destilaria Portátil Inteligente',
    description: 'Kit de destilação com blusa como filtro, seda como papel de filtro, cinto como mangueira, conhecimento de motores para o processo e receitas secretas do Lobomba. Cachaça artesanal móvel.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-059.png'
  },
  
  // ITEM 060: pericles-drip + buyhold-cone + quadra-drip + njj-vivencia + gasoduto-cone
  {
    id: 'crafted-060',
    name: 'Vaporizador Mecânico Supremo',
    description: 'Vape artesanal com design da blusa, construído com seda premium, resistências do cinto, engenharia automotiva avançada e essências do haxixe do Gasoduto. Vapor de elite.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-060.png'
  },
  
  // ITEM 061: pericles-drip + buyhold-cone + quadra-drip + njj-cone + gasoduto-drip
  {
    id: 'crafted-061',
    name: 'Mesa de Sinuca Cervejeira',
    description: 'Sinuca profissional com feltro da blusa, tacadas pagas em seda, cinto como cabo dos tacos, cerveja nos caçapas e troféu de campeão. Diversão garantida.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-061.png'
  },
  
  // ITEM 062: pericles-drip + buyhold-cone + quadra-drip + njj-cone + gasoduto-vivencia
  {
    id: 'crafted-062',
    name: 'Chopeira Smart Conectada',
    description: 'Sistema de chope com design da blusa, comprada com seda, pressurização do cinto, cerveja sempre gelada e programação de eventos do Lobomba. Chope perfeito.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-062.png'
  },
  
  // ITEM 063: pericles-drip + buyhold-cone + quadra-drip + njj-cone + gasoduto-cone
  {
    id: 'crafted-063',
    name: 'Laboratório de Extração Premium',
    description: 'Equipamento de extração com blusa como proteção, investimento em seda, pressão do cinto, cerveja como solvente e haxixe premium como matéria-prima. Concentrados de qualidade.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-063.png'
  },
  
  // ITEM 064: pericles-drip + buyhold-cone + quadra-vivencia + njj-drip + gasoduto-drip
  {
    id: 'crafted-064',
    name: 'Skate Elétrico Gamer',
    description: 'Longboard motorizado com grip da blusa, comprado com seda, trucks do shape, controle remoto gamer e troféu como enfeite. Mobilidade urbana tech.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-064.png'
  },
  
  // ITEM 065: pericles-drip + buyhold-cone + quadra-vivencia + njj-drip + gasoduto-vivencia
  {
    id: 'crafted-065',
    name: 'Projetor Holográfico de Eventos',
    description: 'Projetor 4K com proteção da blusa, financiado por seda, lentes do shape, interface gamer e biblioteca de vídeos do Lobomba. Cinema em casa evoluído.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-065.png'
  },
  
  // ITEM 066: pericles-drip + buyhold-cone + quadra-vivencia + njj-drip + gasoduto-cone
  {
    id: 'crafted-066',
    name: 'Bong de Vidro Soprado Artístico',
    description: 'Obra de arte funcional com cores da blusa, adquirida com seda, base do shape artístico, decoração gamer e haxixe premium. Arte que funciona.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-066.png'
  },
  
  // ITEM 067: pericles-drip + buyhold-cone + quadra-vivencia + njj-vivencia + gasoduto-drip
  {
    id: 'crafted-067',
    name: 'Simulador de Voo Automotivo',
    description: 'Cockpit de piloto com estofado da blusa, licenças compradas com seda, controles do shape de skate, conhecimento de aviação e troféu de ás. Céu sem limites.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-067.png'
  },
  
  // ITEM 068: pericles-drip + buyhold-cone + quadra-vivencia + njj-vivencia + gasoduto-vivencia
  {
    id: 'crafted-068',
    name: 'IA Doméstica Onisciente',
    description: 'Assistente virtual com personalidade da blusa, algoritmos de seda, base de dados do shape, conhecimento automotivo e experiências do Lobomba. Alexa turbinada.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-068.png'
  },
  
  // ITEM 069: pericles-drip + buyhold-cone + quadra-vivencia + njj-vivencia + gasoduto-cone
  {
    id: 'crafted-069',
    name: 'Tenda de Relaxamento Dimensional',
    description: 'Espaço de meditação com tecido da blusa, comprada com seda, estrutura do shape, sabedoria oriental e ambientação com haxixe premium. Portal zen.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-069.png'
  },
  
  // ITEM 070: pericles-drip + buyhold-cone + quadra-vivencia + njj-cone + gasoduto-drip
  {
    id: 'crafted-070',
    name: 'Jukebox Retrô Cervejeiro',
    description: 'Toca-discos vintage com adesivos da blusa, moedas de seda, mecanismo do shape, cerveja no sistema de refrigeração e troféu no topo. Música e diversão.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-070.png'
  },
  
  // ITEM 071: pericles-drip + buyhold-cone + quadra-vivencia + njj-cone + gasoduto-vivencia
  {
    id: 'crafted-071',
    name: 'Mesa de Poker Profissional',
    description: 'Mesa de felt com design da blusa, apostas em seda, rolamentos do shape, cerveja sempre gelada e networking dos eventos do Lobomba. All-in na diversão.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-071.png'
  },
  
  // ITEM 072: pericles-drip + buyhold-cone + quadra-vivencia + njj-cone + gasoduto-cone
  {
    id: 'crafted-072',
    name: 'Câmara de Descompressão Total',
    description: 'Pod de relaxamento com revestimento da blusa, financiado por seda, amortecedores do shape, cerveja nebulizada no ar e essência de haxixe. Paz absoluta.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-072.png'
  },
  
  // ITEM 073: pericles-drip + buyhold-cone + quadra-cone + njj-drip + gasoduto-drip
  {
    id: 'crafted-073',
    name: 'Console Retro Arcade Fumante',
    description: 'Máquina arcade com arte da blusa, moedas de seda, cinzeiro de tabaco integrado, jogos clássicos e troféu de high score. Nostalgia defumada.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-073.png'
  },
  
  // ITEM 074: pericles-drip + buyhold-cone + quadra-cone + njj-drip + gasoduto-vivencia
  {
    id: 'crafted-074',
    name: 'Estúdio de Gravação Portátil',
    description: 'Equipamento de som com isolamento da blusa, investimento em seda, absorção acústica do tabaco, interface gamer e samples dos eventos do Lobomba. Estúdio móvel.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-074.png'
  },
  
  // ITEM 075: pericles-drip + buyhold-cone + quadra-cone + njj-drip + gasoduto-cone
  {
    id: 'crafted-075',
    name: 'Dispositivo de Realidade Alterada',
    description: 'Óculos VR com design da blusa, software de seda, lentes defumadas do tabaco, jogos imersivos e experiências com haxixe integrado. Realidade expandida.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-075.png'
  },
  
  // ITEM 076: pericles-drip + buyhold-cone + quadra-cone + njj-vivencia + gasoduto-drip
  {
    id: 'crafted-076',
    name: 'Garage Band Setup Completo',
    description: 'Estúdio de garagem com bandeira da blusa, instrumentos comprados com seda, amplificadores do tabaco, conhecimento de áudio e troféu de melhor banda. Rock raiz.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-076.png'
  },
  
  // ITEM 077: pericles-drip + buyhold-cone + quadra-cone + njj-vivencia + gasoduto-vivencia
  {
    id: 'crafted-077',
    name: 'Laboratório de Mixologia Molecular',
    description: 'Bancada científica com proteção da blusa, reagentes de seda, destilação do tabaco, conhecimento químico e receitas secretas do Lobomba. Drinks científicos.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-077.png'
  },
  
  // ITEM 078: pericles-drip + buyhold-cone + quadra-cone + njj-vivencia + gasoduto-cone
  {
    id: 'crafted-078',
    name: 'Máquina de Extração Molecular',
    description: 'Equipamento de laboratório com filtros da blusa, processo patenteado da seda, destilação do tabaco, engenharia de precisão e haxixe molecular. Ciência pura.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-078.png'
  },
  
  // ITEM 079: pericles-drip + buyhold-cone + quadra-cone + njj-cone + gasoduto-drip
  {
    id: 'crafted-079',
    name: 'Bar Flutuante Antigravidade',
    description: 'Balcão suspenso com design da blusa, tecnologia de seda, levitação magnética do tabaco, cerveja que flutua e troféu orbital. Drinks espaciais.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-079.png'
  },
  
  // ITEM 080: pericles-drip + buyhold-cone + quadra-cone + njj-cone + gasoduto-vivencia
  {
    id: 'crafted-080',
    name: 'Máquina do Tempo da Lombra 2.0',
    description: 'Versão melhorada com tecido temporal da blusa, energia da seda, combustível de tabaco, cerveja como refrigerante quântico e acesso aos eventos de todas as dimensões. Viagem interdimensional.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-080.png'
  },
  
  // ITEM 081: pericles-drip + buyhold-cone + quadra-cone + njj-cone + gasoduto-cone
  {
    id: 'crafted-081',
    name: 'Portal da Transcendência Absoluta',
    description: 'Dispositivo supremo com material da blusa sagrada, energia da seda pura, essência do tabaco cósmico, cerveja dos deuses e haxixe transcendental. A porta para o além.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-081.png'
  },
  
  // ITEM 082: pericles-vivencia + buyhold-drip + quadra-drip + njj-drip + gasoduto-drip
  {
    id: 'crafted-082',
    name: 'Bicicleta Gamer Motorizada',
    description: 'Bike elétrica com pedal quebrado do Péricles adaptado, cesta para muffins, guidão do cinto atlético, painel gamer RGB e suporte para troféu. Mobilidade urbana tech.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-082.png'
  },
  
  // ITEM 083: pericles-vivencia + buyhold-drip + quadra-drip + njj-drip + gasoduto-vivencia
  {
    id: 'crafted-083',
    name: 'Mesa de Escritório Inteligente',
    description: 'Workstation com suporte para pedal, gaveta para muffins, organizador do cinto, setup gamer integrado e agenda sincronizada com o Lobomba. Produtividade máxima.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-083.png'
  },
  
  // ITEM 084: pericles-vivencia + buyhold-drip + quadra-drip + njj-drip + gasoduto-cone
  {
    id: 'crafted-084',
    name: 'Drone de Entrega Gastronômico',
    description: 'Quadricóptero com mecanismo do pedal, compartimento térmico para muffins, hélices do cinto, controle gamer e compartimento especial para haxixe. Delivery aéreo.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-084.png'
  },
  
  // ITEM 085: pericles-vivencia + buyhold-drip + quadra-drip + njj-vivencia + gasoduto-drip
  {
    id: 'crafted-085',
    name: 'Simulador de Mecânica Culinária',
    description: 'Bancada de trabalho com pedal como controle, processador de muffins, ferramentas do cinto, conhecimento automotivo e troféu de chef mecânico. Gastronomia técnica.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-085.png'
  },
  
  // ITEM 086: pericles-vivencia + buyhold-drip + quadra-drip + njj-vivencia + gasoduto-vivencia
  {
    id: 'crafted-086',
    name: 'Centro de Comando Multimídia',
    description: 'Central de controle com engrenagens do pedal, display para muffins, interfaces do cinto, conhecimento técnico avançado e acesso total aos eventos. Comando supremo.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-086.png'
  },
  
  // ITEM 087: pericles-vivencia + buyhold-drip + quadra-drip + njj-vivencia + gasoduto-cone
  {
    id: 'crafted-087',
    name: 'Laboratório de Biomecânica Alternativa',
    description: 'Bancada científica com sistema do pedal, energia dos muffins, estrutura do cinto, engenharia de precisão e cultivo de haxixe premium. Pesquisa avançada.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-087.png'
  },
  
  // ITEM 088: pericles-vivencia + buyhold-drip + quadra-drip + njj-cone + gasoduto-drip
  {
    id: 'crafted-088',
    name: 'Cervejaria Artesanal Mecânica',
    description: 'Sistema de produção com pedal como agitador, muffins como malte especial, mangueiras do cinto, cerveja premium e troféu de melhor cervejeiro. Brewery tech.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-088.png'
  },
  
  // ITEM 089: pericles-vivencia + buyhold-drip + quadra-drip + njj-cone + gasoduto-vivencia
  {
    id: 'crafted-089',
    name: 'Academia Gastronômica High-Tech',
    description: 'Equipamento de treino com pedal adaptado, suplementos de muffin, resistências do cinto, cerveja como isotônico e programa de treino do Lobomba. Fitness gourmet.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-089.png'
  },
  
  // ITEM 090: pericles-vivencia + buyhold-drip + quadra-drip + njj-cone + gasoduto-cone
  {
    id: 'crafted-090',
    name: 'Máquina de Experiências Sensoriais',
    description: 'Dispositivo imersivo com movimento do pedal, sabores de muffin, texturas do cinto, cerveja como estímulo e haxixe para expansão mental. Sensações máximas.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-090.png'
  },
  {
    id: 'crafted-091',
    name: 'Bicicleta Ergométrica de Skin Trading',
    description: 'Bike com pedal quebrado que só funciona pedalando, bandeja para muffins energéticos, shape como guidão, monitor exibindo skins de CS:GO e troféu de Pummel como sino. Fitness gamer raiz.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-091.png'
  },
  {
    id: 'crafted-092',
    name: 'Laboratório de Muffins Gamers',
    description: 'Forno científico alimentado por pedal de bicicleta, massa enriquecida com migalhas especiais, forma do shape de skate, decoração de skins raras e receitas secretas do Lobomba. Doces high-tech.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-092.png'
  },
  {
    id: 'crafted-093',
    name: 'Bong Movido a Pedal de Bicicleta',
    description: 'Sistema de bong com pedal quebrado gerando a sucção, água filtrada com essência de muffin, bowl formato de shape, design de skins e haxixe premium. Ecologicamente sustentável.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-093.png'
  },
  {
    id: 'crafted-094',
    name: 'Oficina Mecânica de Skates Gourmet',
    description: 'Bancada com pedal como furadeira, muffins como graxa especial, shapes sendo customizados, câmbios de carros como ferramentas e troféu do melhor mecânico. Fix it style.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-094.png'
  },
  {
    id: 'crafted-095',
    name: 'Universidade das Gambiarras Supremas',
    description: 'Campus acadêmico com aulas de pedal quebrado 101, laboratório de muffins, curso de skate, mestrado em câmbios e acesso VIP ao Lobomba. PhD em malandragem.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-095.png'
  },
  {
    id: 'crafted-096',
    name: 'Think Tank da Filosofia Chapada',
    description: 'Centro de pesquisa com pedal gerando ideias, muffins da inspiração, shapes zen, conhecimento automotivo profundo e haxixe para expandir a mente. Eureka garantido.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-096.png'
  },
  {
    id: 'crafted-097',
    name: 'Bar do Pedal Quebrado',
    description: 'Boteco raiz onde se pedala pra fazer cerveja, muffins como tira-gosto, shapes como bancos, cerveja gelada infinita e troféu de melhor bebedor. Suor e álcool.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-097.png'
  },
  {
    id: 'crafted-098',
    name: 'Academia de Skate Alcóolico',
    description: 'Pista com pedal como obstáculo, muffins como energia, shapes profissionais, cerveja como hidratação e eventos exclusivos do Lobomba. Manobra bêbada.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-098.png'
  },
  {
    id: 'crafted-099',
    name: 'Spa do Relaxamento Extremo',
    description: 'Centro wellness com pedal para massagem, muffins aromáticos, shapes como camas, cerveja nas fontes e haxixe no ar condicionado. Nirvana total.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-099.png'
  },
  {
    id: 'crafted-100',
    name: 'Arcade de Pedal Fumante',
    description: 'Fliperama onde se pedala para jogar, muffins como power-ups, tabaco queimando como incenso, skins desbloqueadas e troféu de high score. Gaming raiz.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-100.png'
  },
  {
    id: 'crafted-101',
    name: 'Estúdio de Podcast Defumado',
    description: 'Setup com pedal alimentando o som, muffins como snacks, tabaco aromático, microfones gamer e programação do Lobomba. Papo reto podcast.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-101.png'
  },
  {
    id: 'crafted-102',
    name: 'Laboratório de Experiências Psicoativas',
    description: 'Bancada científica com pedal misturando reagentes, muffins especiais, tabaco destilado, equipamentos gamer para precisão e haxixe como produto final. Breaking Bad tupiniquim.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-102.png'
  },
  {
    id: 'crafted-103',
    name: 'Garagem do Mestre dos Motores',
    description: 'Oficina com pedal como furadeira elétrica, muffins lubrificando as engrenagens, tabaco como combustível experimental, conhecimento automotivo supremo e troféu de melhor mecânico.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-103.png'
  },
  {
    id: 'crafted-104',
    name: 'Centro de Pesquisa em Combustão Alternativa',
    description: 'Laboratório com pedal gerando energia, muffins como biomassa, tabaco como fonte energética, motores experimentais e banco de dados do Lobomba. Energia verde.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-104.png'
  },
  {
    id: 'crafted-105',
    name: 'Fábrica de Sonhos Alterados',
    description: 'Indústria com pedal acionando máquinas, muffins dos sonhos, tabaco onírico, engenharia de precisão e haxixe psicodélico. Produção em série de viagens.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-105.png'
  },
  {
    id: 'crafted-106',
    name: 'Boteco do Pedal Travado',
    description: 'Bar temático onde pedala pra conseguir cerveja, muffins como petisco, tabaco liberado, lata de cerveja infinita e troféu de resistência alcoólica. Suor e álcool garantidos.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-106.png'
  },
  {
    id: 'crafted-107',
    name: 'Academia de Fumo e Álcool',
    description: 'Centro de treinamento com pedal como exercício, muffins energéticos, tabaco como pré-treino, cerveja como pós-treino e programação de eventos no Lobomba. Fitness alternativo.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-107.png'
  },
  {
    id: 'crafted-108',
    name: 'Portal Dimensional do Relax Supremo',
    description: 'Máquina interdimensional alimentada por pedal cósmico, muffins transcendentais, tabaco etéreo, cerveja quântica e haxixe de outras dimensões. Viagem suprema.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-108.png'
  },
  {
    id: 'crafted-109',
    name: 'Mesa de Trabalho do Trader Atlético',
    description: 'Workstation com pedal gerando energia para trades, HoldCoins sendo mineradas, cinto organizando cabos, setup gamer profissional e troféu de melhor trader. Business fitness.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-109.png'
  },
  {
    id: 'crafted-110',
    name: 'Centro de Comando Crypto-Atlético',
    description: 'Central com pedal alimentando servidores, HoldCoins processando, cinto como infraestrutura, estação gamer e acesso privilegiado ao Lobomba. Controle total.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-110.png'
  },
  {
    id: 'crafted-111',
    name: 'Laboratório de Investimentos Alternativos',
    description: 'Centro de pesquisa com pedal processando dados, HoldCoins sendo estudadas, cinto como estrutura, análise gamer e haxixe para insights creativos. Investimentos iluminados.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-111.png'
  },
  {
    id: 'crafted-112',
    name: 'Universidade do Empreendedorismo Atlético',
    description: 'Campus com aulas de pedal business, curso de HoldCoins, educação física com cinto, mestrado em carros e troféu de formatura. MBA raiz.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-112.png'
  },
  {
    id: 'crafted-113',
    name: 'Instituto Supremo do Conhecimento Universal',
    description: 'Complexo acadêmico com biblioteca de pedais, departamento de HoldCoins, ginásio com cintos, laboratório automotivo e eventos eternos do Lobomba. PhD em tudo.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-113.png'
  },
  {
    id: 'crafted-114',
    name: 'Think Tank da Inovação Transcendental',
    description: 'Centro de pesquisa com pedal inspirador, HoldCoins financiando ideias, cinto organizando projetos, knowledge automotivo e haxixe para eureka moments. Inovação chapada.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-114.png'
  },
  {
    id: 'crafted-115',
    name: 'Cervejaria Pedagógica Esportiva',
    description: 'Fábrica de cerveja com pedal como agitador, HoldCoins financiando produção, cinto como sistema de transporte, cerveja premium e troféu de melhor cervejeiro atlético.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-115.png'
  },
  {
    id: 'crafted-116',
    name: 'Academia de Negócios Alcoólicos',
    description: 'Escola de business com aulas de pedal, HoldCoins como material didático, cinto dress code, cerveja nos intervalos e networking no Lobomba. MBA em boteco.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-116.png'
  },
  {
    id: 'crafted-117',
    name: 'Laboratório de Experiências Monetárias Alteradas',
    description: 'Centro de pesquisa com pedal gerando energia, HoldCoins sendo testadas, cinto como infraestrutura, cerveja no sistema e haxixe para insights financeiros revolucionários.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-117.png'
  },
  {
    id: 'crafted-118',
    name: 'Arena de E-Sports Acadêmica',
    description: 'Estádio com pedal alimentando setup, HoldCoins como prize pool, shapes como assentos, estações gamer supremas e troféu de campeão mundial. Pro scene educativa.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-118.png'
  },
  {
    id: 'crafted-119',
    name: 'Complexo de Pesquisa Multidisciplinar',
    description: 'Megacentro com biblioteca de pedais, departamento de HoldCoins, museu de shapes, laboratório gamer e campus do Lobomba. Conhecimento infinito.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-119.png'
  },
  {
    id: 'crafted-120',
    name: 'Universidade da Sabedoria Expandida',
    description: 'Campus transcendental com aulas de pedal 401, mestrado em HoldCoins, PhD em shapes, laboratório gamer e haxixe nos dormitórios. Higher education literalmente.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-120.png'
  },
  {
    id: 'crafted-121',
    name: 'Centro de Excelência do Conhecimento Supremo',
    description: 'Templo do saber com pedal da sabedoria, biblioteca de HoldCoins, arquivo de shapes, conhecimento automotivo supremo e troféu da omnisciência. Neo da Matrix.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-121.png'
  },
  {
    id: 'crafted-122',
    name: 'Oráculo da Sabedoria Infinita',
    description: 'Máquina da verdade absoluta alimentada por pedal cósmico, processando HoldCoins universais, shapes interdimensionais, conhecimento de todos os motores e acesso a todos os Lobombas possíveis.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-122.png'
  },
  {
    id: 'crafted-123',
    name: 'Templo da Iluminação Definitiva',
    description: 'Santuário com pedal da transcendência, HoldCoins sagradas, shapes místicos, conhecimento automotivo divino e haxixe dos deuses. Nirvana garantido.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-123.png'
  },
  {
    id: 'crafted-124',
    name: 'Bar da Sabedoria Etílica',
    description: 'Boteco filosófico com pedal acionando a filosofia, HoldCoins pagando as doses, shapes como bancos, cerveja da iluminação e troféu de melhor bêbado sábio.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-124.png'
  },
  {
    id: 'crafted-125',
    name: 'Academia de Filosofia Alcoólica',
    description: 'Centro educacional com aulas de pedal, HoldCoins como mensalidade, shapes como material didático, cerveja como método de ensino e eventos no Lobomba. Sócrates bêbado.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-125.png'
  },
  {
    id: 'crafted-126',
    name: 'Portal da Consciência Expandida',
    description: 'Dispositivo interdimensional com pedal quântico, HoldCoins multiversais, shapes sagrados, cerveja cósmica e haxixe da consciência universal. Matrix mode on.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-126.png'
  },
  {
    id: 'crafted-127',
    name: 'Estúdio de Produção de Conteúdo Fumante',
    description: 'Setup de stream com pedal gerando energia, HoldCoins financiando conteúdo, tabaco aromático, equipamentos gamer top e troféu de melhor streamer. Conteúdo defumado.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-127.png'
  },
  {
    id: 'crafted-128',
    name: 'Canal de YouTube Educativo Alternativo',
    description: 'Estúdio com aulas de pedal, HoldCoins como monetização, tabaco como aromática, setup de gravação e acesso aos bastidores do Lobomba. Education goes viral.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-128.png'
  },
  {
    id: 'crafted-129',
    name: 'Laboratório de Conteúdo Psicodélico',
    description: 'Centro de produção com pedal inspirador, HoldCoins sustentando o projeto, tabaco criativo, equipamentos gamer e haxixe para insights únicos. Conteúdo transcendental.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-129.png'
  },
  {
    id: 'crafted-130',
    name: 'Oficina Mecânica de Sonhos',
    description: 'Garagem com pedal como ferramenta principal, HoldCoins financiando peças, tabaco como combustível experimental, conhecimento automotivo supremo e troféu de melhor sonhador.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-130.png'
  },
  {
    id: 'crafted-131',
    name: 'Centro de Pesquisa em Combustão Consciente',
    description: 'Laboratório com pedal gerando insights, HoldCoins financiando pesquisa, tabaco como objeto de estudo, motores experimentais e base de dados do Lobomba. Ciência psicoativa.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-131.png'
  },
  {
    id: 'crafted-132',
    name: 'Fábrica de Realidades Alternativas',
    description: 'Indústria interdimensional com pedal cósmico, HoldCoins multiversais, tabaco quântico, engenharia de precisão infinita e haxixe transcendental. Produção em massa de mundos.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-132.png'
  },
  {
    id: 'crafted-133',
    name: 'Destilaria de Conhecimento Líquido',
    description: 'Alambique intelectual com pedal destilando sabedoria, HoldCoins como catalisador, tabaco aromático, cerveja filosófica e troféu de melhor pensador bêbado.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-133.png'
  },
  {
    id: 'crafted-134',
    name: 'Universidade de Fermentação Intelectual',
    description: 'Campus cervejeiro com aulas de pedal, HoldCoins pagando cerveja, tabaco nas aulas, cerveja como diploma e acesso vitalício ao Lobomba. Educação líquida.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-134.png'
  },
  {
    id: 'crafted-135',
    name: 'Máquina da Transcendência Absoluta',
    description: 'Dispositivo supremo com pedal interdimensional, HoldCoins cósmicas, tabaco sagrado, cerveja dos deuses e haxixe do universo. A máquina definitiva do além.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-135.png'
  },
  {
    id: 'crafted-136',
    name: 'Bicicleta de Entrega de Seda Gamer',
    description: 'Bike delivery com pedal consertado, compartimento para seda, cinto como corda elástica, GPS gamer integrado e troféu de entregador mais rápido. iFood das drogas.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-136.png'
  },
  {
    id: 'crafted-137',
    name: 'Estação de Trabalho do Influencer da Seda',
    description: 'Setup com pedal gerando energia, seda como produto promocional, cinto organizando setup, equipamentos de stream e agenda do Lobomba. Influência alternativa.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-137.png'
  },
  {
    id: 'crafted-138',
    name: 'Laboratório de Síntese de Seda Digital',
    description: 'Centro de pesquisa com pedal processando dados, seda sendo digitalizada, cinto como infraestrutura, tecnologia gamer e haxixe para insights criativos. NFT fumável.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-138.png'
  },
  {
    id: 'crafted-139',
    name: 'Oficina de Customização de Cinto Automotivo',
    description: 'Garagem com pedal como furadeira, seda decorativa, cintos sendo customizados, conhecimento de design automotivo e troféu de melhor customizador.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-139.png'
  },
  {
    id: 'crafted-140',
    name: 'Academia de Design de Moda Automotiva',
    description: 'Escola com aulas de pedal fashion, seda como material nobre, cinto como acessório principal, design automotivo e eventos exclusivos no Lobomba. Fashion speed.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-140.png'
  },
  {
    id: 'crafted-141',
    name: 'Ateliê de Arte Psicodélica Automobilística',
    description: 'Estúdio criativo com pedal inspirador, seda como tela, cintos como pincéis, knowledge automotivo e haxixe para expansão artística. Arte em movimento.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-141.png'
  },
  {
    id: 'crafted-142',
    name: 'Bar do Pedal com Cinto Cervejeiro',
    description: 'Boteco raiz onde pedal aciona a torneira, seda decorando o ambiente, cinto como sistema de distribuição, cerveja infinita e troféu de melhor inovação em boteco.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-142.png'
  },
  {
    id: 'crafted-143',
    name: 'Cervejaria Pedagógica de Cinto',
    description: 'Fábrica educativa com pedal processando malte, seda filtrando líquidos, cinto como sistema de transporte, cerveja artesanal e cursos do Lobomba. Beer school.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-143.png'
  },
  {
    id: 'crafted-144',
    name: 'Laboratório de Fermentação Transcendental',
    description: 'Centro de pesquisa com pedal fermentando ideias, seda filtrando pensamentos, cinto organizando processos, cerveja filosófica e haxixe expandindo horizontes.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-144.png'
  },
  {
    id: 'crafted-145',
    name: 'Arena de Skate Gamer com Seda',
    description: 'Pista profissional com pedal como obstáculo, seda decorando rampas, shapes personalizados, campeonatos de e-skate e troféu de tricampeão mundial.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-145.png'
  },
  {
    id: 'crafted-146',
    name: 'Centro de Treinamento de E-Sports Skatístico',
    description: 'Complexo com pedal como aquecimento, seda nos uniformes, shapes como troféus, setup gamer supremo e academia do Lobomba. Pro skate gaming.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-146.png'
  },
  {
    id: 'crafted-147',
    name: 'Laboratório de Manobras Psicodélicas',
    description: 'Centro de pesquisa com pedal como gerador, seda envolvendo shapes, shapes experimentais, tecnologia gamer avançada e haxixe para criatividade extrema.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-147.png'
  },
  {
    id: 'crafted-148',
    name: 'Universidade de Skate Automotivo',
    description: 'Campus acadêmico com pedal como matéria obrigatória, seda como material de estudo, shapes históricos, conhecimento automotivo aplicado e troféu de reitor.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-148.png'
  },
  {
    id: 'crafted-149',
    name: 'Instituto Supremo de Skatologia',
    description: 'Centro de excelência com biblioteca de pedais, arquivo de seda, museu de shapes, departamento automotivo e acesso perpétuo ao Lobomba. PhD em skate.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-149.png'
  },
  {
    id: 'crafted-150',
    name: 'Templo da Sabedoria Skatística Transcendental',
    description: 'Santuário com pedal sagrado, seda celestial, shapes místicos, conhecimento automotivo divino e haxixe dos skatistas iluminados. Ollie transcendental.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-150.png'
  },
  {
    id: 'crafted-151',
    name: 'Skate Park Bar com Seda VIP',
    description: 'Complexo com pedal acionando som, seda como decoração premium, shapes como mesas, cerveja fluindo nas pistas e troféu de melhor sessão. Skate e drink.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-151.png'
  },
  {
    id: 'crafted-152',
    name: 'Academia de Skate Alcoólico Avançado',
    description: 'Centro educacional com aulas de pedal, seda como material didático, shapes como equipamento, cerveja como método de ensino e eventos do Lobomba.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-152.png'
  },
  {
    id: 'crafted-153',
    name: 'Portal da Manobra Dimensional',
    description: 'Máquina interdimensional com pedal quântico, seda espacial, shapes multiversais, cerveja cósmica e haxixe de todas as dimensões. Kickflip infinito.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-153.png'
  },
  {
    id: 'crafted-154',
    name: 'Setup de Stream de Fumador Gamer',
    description: 'Estação com pedal alimentando setup, seda como backdrop, tabaco queimando como aromática, equipamentos gamer top e troféu de melhor streamer fumante.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-154.png'
  },
  {
    id: 'crafted-155',
    name: 'Canal de YouTube de Fumo Educativo',
    description: 'Estúdio com aulas de pedal, seda como material educativo, tabaco sendo estudado, setup de gravação e biblioteca do Lobomba. Education + recreation.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-155.png'
  },
  {
    id: 'crafted-156',
    name: 'Laboratório de Conteúdo Psicoativo',
    description: 'Centro de produção com pedal inspirador, seda envolvendo ideias, tabaco como musa criativa, equipamentos gamer e haxixe para insights revolucionários.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-156.png'
  },
  {
    id: 'crafted-157',
    name: 'Oficina de Engines Fumantes',
    description: 'Garagem com pedal como ferramenta, seda protegendo peças, tabaco como combustível experimental, knowledge automotivo supremo e troféu de inovação.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-157.png'
  },
  {
    id: 'crafted-158',
    name: 'Centro de Pesquisa em Propulsão Alternativa',
    description: 'Laboratório com pedal gerando energia, seda como isolante, tabaco sendo estudado, motores experimentais e dados do Lobomba. Combustão consciente.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-158.png'
  },
  {
    id: 'crafted-159',
    name: 'Fábrica de Motores Transcendentais',
    description: 'Indústria com pedal cósmico, seda quântica, tabaco interdimensional, engenharia de precisão infinita e haxixe como catalisador. Propulsão espiritual.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-159.png'
  },
  {
    id: 'crafted-160',
    name: 'Destilaria de Álcool Fumante',
    description: 'Alambique com pedal destilando, seda filtrando, tabaco aromatizando, cerveja como base e troféu de melhor destilador fumante. Cachaça defumada.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-160.png'
  },
  {
    id: 'crafted-161',
    name: 'Universidade de Fermentação Avançada',
    description: 'Campus com aulas de pedal, seda como material, tabaco nos laboratórios, cerveja como objeto de estudo e eventos eternos do Lobomba. Higher brewing.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-161.png'
  },
  {
    id: 'crafted-162',
    name: 'Máquina da Realidade Fumante Suprema',
    description: 'Dispositivo final com pedal interdimensional, seda cósmica, tabaco sagrado, cerveja dos deuses e haxixe universal. A máquina que transcende tudo.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-162.png'
  },
  {
    id: 'crafted-163',
    name: 'Bong de Academia com Muffin',
    description: 'Bong fitness com cone entupido como resistência, muffins como energia pré-treino, cinto como alça de transporte, skins decorativas e troféu de melhor fumante atlético.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-163.png'
  },
  {
    id: 'crafted-164',
    name: 'Kit de Streaming Chapado',
    description: 'Setup com cone entupido aromático, muffins como snacks, cinto organizando cabos, equipamentos gamer e agenda exclusiva do Lobomba. Stream relaxante.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-164.png'
  },
  {
    id: 'crafted-165',
    name: 'Laboratório de Maconha Digital',
    description: 'Centro com cone entupido sendo analisado, muffins como combustível cerebral, cinto como infraestrutura, tecnologia gamer e haxixe premium. Research 4.20.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-165.png'
  },
  {
    id: 'crafted-166',
    name: 'Garagem de Customização Chapada',
    description: 'Oficina com cone entupido como aromática, muffins energizando, cinto como ferramenta, knowledge automotivo e troféu de melhor customizador relaxado.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-166.png'
  },
  {
    id: 'crafted-167',
    name: 'Centro de Engenharia Automotiva Relaxada',
    description: 'Laboratório com cone entupido inspirando, muffins sustentando, cinto estruturando, motores experimentais e base de conhecimento do Lobomba. Engineering chill.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-167.png'
  },
  {
    id: 'crafted-168',
    name: 'Instituto de Mecânica Transcendental',
    description: 'Campus com cone entupido sagrado, muffins da sabedoria, cinto zen, conhecimento automotivo supremo e haxixe para insights revolucionários.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-168.png'
  },
  {
    id: 'crafted-169',
    name: 'Bar do Cone Entupido',
    description: 'Boteco temático com cone entupido de decoração, muffins como petisco, cinto como sistema, cerveja gelada sempre e troféu de melhor ambiente relaxante.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-169.png'
  },
  {
    id: 'crafted-170',
    name: 'Academia de Relaxamento Atlético',
    description: 'Centro fitness com cone entupido aromático, muffins como suplemento, cinto como equipamento, cerveja pós-treino e programação do Lobomba.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-170.png'
  },
  {
    id: 'crafted-171',
    name: 'Portal da Lombra Atlética',
    description: 'Máquina interdimensional com cone entupido cósmico, muffins transcendentais, cinto quântico, cerveja dos deuses e haxixe universal. Fitness transcendental.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-171.png'
  },
  {
    id: 'crafted-172',
    name: 'Skate Park do Cone Chapado',
    description: 'Pista com cone entupido como obstáculo, muffins energéticos, shapes customizados, setup gamer para transmissão e troféu de melhor sessão relaxada.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-172.png'
  },
  {
    id: 'crafted-173',
    name: 'Item Craftado 173',
    description: 'Descrição customizável do item 173. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-173.png'
  },
  {
    id: 'crafted-174',
    name: 'Item Craftado 174',
    description: 'Descrição customizável do item 174. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-174.png'
  },
  {
    id: 'crafted-175',
    name: 'Item Craftado 175',
    description: 'Descrição customizável do item 175. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-175.png'
  },
  {
    id: 'crafted-176',
    name: 'Item Craftado 176',
    description: 'Descrição customizável do item 176. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-176.png'
  },
  {
    id: 'crafted-177',
    name: 'Item Craftado 177',
    description: 'Descrição customizável do item 177. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-177.png'
  },
  {
    id: 'crafted-178',
    name: 'Item Craftado 178',
    description: 'Descrição customizável do item 178. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-178.png'
  },
  {
    id: 'crafted-179',
    name: 'Item Craftado 179',
    description: 'Descrição customizável do item 179. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-179.png'
  },
  {
    id: 'crafted-180',
    name: 'Item Craftado 180',
    description: 'Descrição customizável do item 180. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-180.png'
  },
  {
    id: 'crafted-181',
    name: 'Item Craftado 181',
    description: 'Descrição customizável do item 181. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-181.png'
  },
  {
    id: 'crafted-182',
    name: 'Item Craftado 182',
    description: 'Descrição customizável do item 182. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-182.png'
  },
  {
    id: 'crafted-183',
    name: 'Item Craftado 183',
    description: 'Descrição customizável do item 183. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-183.png'
  },
  {
    id: 'crafted-184',
    name: 'Item Craftado 184',
    description: 'Descrição customizável do item 184. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-184.png'
  },
  {
    id: 'crafted-185',
    name: 'Item Craftado 185',
    description: 'Descrição customizável do item 185. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-185.png'
  },
  {
    id: 'crafted-186',
    name: 'Item Craftado 186',
    description: 'Descrição customizável do item 186. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-186.png'
  },
  {
    id: 'crafted-187',
    name: 'Item Craftado 187',
    description: 'Descrição customizável do item 187. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-187.png'
  },
  {
    id: 'crafted-188',
    name: 'Item Craftado 188',
    description: 'Descrição customizável do item 188. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-188.png'
  },
  {
    id: 'crafted-189',
    name: 'Item Craftado 189',
    description: 'Descrição customizável do item 189. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-189.png'
  },
  {
    id: 'crafted-190',
    name: 'Item Craftado 190',
    description: 'Descrição customizável do item 190. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-190.png'
  },
  {
    id: 'crafted-191',
    name: 'Item Craftado 191',
    description: 'Descrição customizável do item 191. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-191.png'
  },
  {
    id: 'crafted-192',
    name: 'Item Craftado 192',
    description: 'Descrição customizável do item 192. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-192.png'
  },
  {
    id: 'crafted-193',
    name: 'Item Craftado 193',
    description: 'Descrição customizável do item 193. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-193.png'
  },
  {
    id: 'crafted-194',
    name: 'Item Craftado 194',
    description: 'Descrição customizável do item 194. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-194.png'
  },
  {
    id: 'crafted-195',
    name: 'Item Craftado 195',
    description: 'Descrição customizável do item 195. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-195.png'
  },
  {
    id: 'crafted-196',
    name: 'Item Craftado 196',
    description: 'Descrição customizável do item 196. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-196.png'
  },
  {
    id: 'crafted-197',
    name: 'Item Craftado 197',
    description: 'Descrição customizável do item 197. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-197.png'
  },
  {
    id: 'crafted-198',
    name: 'Item Craftado 198',
    description: 'Descrição customizável do item 198. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-198.png'
  },
  {
    id: 'crafted-199',
    name: 'Item Craftado 199',
    description: 'Descrição customizável do item 199. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-199.png'
  },
  {
    id: 'crafted-200',
    name: 'Item Craftado 200',
    description: 'Descrição customizável do item 200. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-200.png'
  },
  {
    id: 'crafted-201',
    name: 'Item Craftado 201',
    description: 'Descrição customizável do item 201. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-201.png'
  },
  {
    id: 'crafted-202',
    name: 'Item Craftado 202',
    description: 'Descrição customizável do item 202. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-202.png'
  },
  {
    id: 'crafted-203',
    name: 'Item Craftado 203',
    description: 'Descrição customizável do item 203. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-203.png'
  },
  {
    id: 'crafted-204',
    name: 'Item Craftado 204',
    description: 'Descrição customizável do item 204. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-204.png'
  },
  {
    id: 'crafted-205',
    name: 'Item Craftado 205',
    description: 'Descrição customizável do item 205. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-205.png'
  },
  {
    id: 'crafted-206',
    name: 'Item Craftado 206',
    description: 'Descrição customizável do item 206. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-206.png'
  },
  {
    id: 'crafted-207',
    name: 'Item Craftado 207',
    description: 'Descrição customizável do item 207. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-207.png'
  },
  {
    id: 'crafted-208',
    name: 'Item Craftado 208',
    description: 'Descrição customizável do item 208. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-208.png'
  },
  {
    id: 'crafted-209',
    name: 'Item Craftado 209',
    description: 'Descrição customizável do item 209. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-209.png'
  },
  {
    id: 'crafted-210',
    name: 'Item Craftado 210',
    description: 'Descrição customizável do item 210. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-210.png'
  },
  {
    id: 'crafted-211',
    name: 'Item Craftado 211',
    description: 'Descrição customizável do item 211. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-211.png'
  },
  {
    id: 'crafted-212',
    name: 'Item Craftado 212',
    description: 'Descrição customizável do item 212. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-212.png'
  },
  {
    id: 'crafted-213',
    name: 'Item Craftado 213',
    description: 'Descrição customizável do item 213. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-213.png'
  },
  {
    id: 'crafted-214',
    name: 'Item Craftado 214',
    description: 'Descrição customizável do item 214. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-214.png'
  },
  {
    id: 'crafted-215',
    name: 'Item Craftado 215',
    description: 'Descrição customizável do item 215. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-215.png'
  },
  {
    id: 'crafted-216',
    name: 'Item Craftado 216',
    description: 'Descrição customizável do item 216. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-216.png'
  },
  {
    id: 'crafted-217',
    name: 'Item Craftado 217',
    description: 'Descrição customizável do item 217. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-217.png'
  },
  {
    id: 'crafted-218',
    name: 'Item Craftado 218',
    description: 'Descrição customizável do item 218. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-218.png'
  },
  {
    id: 'crafted-219',
    name: 'Item Craftado 219',
    description: 'Descrição customizável do item 219. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-219.png'
  },
  {
    id: 'crafted-220',
    name: 'Item Craftado 220',
    description: 'Descrição customizável do item 220. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-220.png'
  },
  {
    id: 'crafted-221',
    name: 'Item Craftado 221',
    description: 'Descrição customizável do item 221. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-221.png'
  },
  {
    id: 'crafted-222',
    name: 'Item Craftado 222',
    description: 'Descrição customizável do item 222. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-222.png'
  },
  {
    id: 'crafted-223',
    name: 'Item Craftado 223',
    description: 'Descrição customizável do item 223. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-223.png'
  },
  {
    id: 'crafted-224',
    name: 'Item Craftado 224',
    description: 'Descrição customizável do item 224. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-224.png'
  },
  {
    id: 'crafted-225',
    name: 'Item Craftado 225',
    description: 'Descrição customizável do item 225. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-225.png'
  },
  {
    id: 'crafted-226',
    name: 'Item Craftado 226',
    description: 'Descrição customizável do item 226. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'drip', value: 30 },
    sprite: '/assets/itens/artifact-226.png'
  },
  {
    id: 'crafted-227',
    name: 'Item Craftado 227',
    description: 'Descrição customizável do item 227. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-227.png'
  },
  {
    id: 'crafted-228',
    name: 'Item Craftado 228',
    description: 'Descrição customizável do item 228. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-228.png'
  },
  {
    id: 'crafted-229',
    name: 'Item Craftado 229',
    description: 'Descrição customizável do item 229. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-229.png'
  },
  {
    id: 'crafted-230',
    name: 'Item Craftado 230',
    description: 'Descrição customizável do item 230. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'vivencia', value: 30 },
    sprite: '/assets/itens/artifact-230.png'
  },
  {
    id: 'crafted-231',
    name: 'Item Craftado 231',
    description: 'Descrição customizável do item 231. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-231.png'
  },
  {
    id: 'crafted-232',
    name: 'Item Craftado 232',
    description: 'Descrição customizável do item 232. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-232.png'
  },
  {
    id: 'crafted-233',
    name: 'Item Craftado 233',
    description: 'Descrição customizável do item 233. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-233.png'
  },
  {
    id: 'crafted-234',
    name: 'Item Craftado 234',
    description: 'Descrição customizável do item 234. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-234.png'
  },
  {
    id: 'crafted-235',
    name: 'Item Craftado 235',
    description: 'Descrição customizável do item 235. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-235.png'
  },
  {
    id: 'crafted-236',
    name: 'Item Craftado 236',
    description: 'Descrição customizável do item 236. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-236.png'
  },
  {
    id: 'crafted-237',
    name: 'Item Craftado 237',
    description: 'Descrição customizável do item 237. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-237.png'
  },
  {
    id: 'crafted-238',
    name: 'Item Craftado 238',
    description: 'Descrição customizável do item 238. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-238.png'
  },
  {
    id: 'crafted-239',
    name: 'Item Craftado 239',
    description: 'Descrição customizável do item 239. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-239.png'
  },
  {
    id: 'crafted-240',
    name: 'Item Craftado 240',
    description: 'Descrição customizável do item 240. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-240.png'
  },
  {
    id: 'crafted-241',
    name: 'Item Craftado 241',
    description: 'Descrição customizável do item 241. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-241.png'
  },
  {
    id: 'crafted-242',
    name: 'Item Craftado 242',
    description: 'Descrição customizável do item 242. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-242.png'
  },
  {
    id: 'crafted-243',
    name: 'Item Craftado 243',
    description: 'Descrição customizável do item 243. Você pode alterar este texto.',
    rarity: 'rare',
    type: 'equipment',
    effect: { type: 'estourar-o-cone', value: 30 },
    sprite: '/assets/itens/artifact-243.png'
  }
];

// =============================================
// 243 RECEITAS SIMPLES 
// =============================================

export const CRAFTING_RECIPES: CraftingRecipe[] = [
  {
    id: 'recipe-001',
    name: 'Receita: Item Craftado 001',
    description: 'Combine estes 5 itens para criar o Item Craftado 001.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-drip', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-001'
  },
  {
    id: 'recipe-002',
    name: 'Receita: Item Craftado 002',
    description: 'Combine estes 5 itens para criar o Item Craftado 002.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-drip', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-002'
  },
  {
    id: 'recipe-003',
    name: 'Receita: Item Craftado 003',
    description: 'Combine estes 5 itens para criar o Item Craftado 003.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-drip', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-003'
  },
  {
    id: 'recipe-004',
    name: 'Receita: Item Craftado 004',
    description: 'Combine estes 5 itens para criar o Item Craftado 004.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-drip', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-004'
  },
  {
    id: 'recipe-005',
    name: 'Receita: Item Craftado 005',
    description: 'Combine estes 5 itens para criar o Item Craftado 005.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-drip', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-005'
  },
  {
    id: 'recipe-006',
    name: 'Receita: Item Craftado 006',
    description: 'Combine estes 5 itens para criar o Item Craftado 006.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-drip', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-006'
  },
  {
    id: 'recipe-007',
    name: 'Receita: Item Craftado 007',
    description: 'Combine estes 5 itens para criar o Item Craftado 007.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-drip', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-007'
  },
  {
    id: 'recipe-008',
    name: 'Receita: Item Craftado 008',
    description: 'Combine estes 5 itens para criar o Item Craftado 008.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-drip', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-008'
  },
  {
    id: 'recipe-009',
    name: 'Receita: Item Craftado 009',
    description: 'Combine estes 5 itens para criar o Item Craftado 009.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-drip', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-009'
  },
  {
    id: 'recipe-010',
    name: 'Receita: Item Craftado 010',
    description: 'Combine estes 5 itens para criar o Item Craftado 010.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-vivencia', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-010'
  },
  {
    id: 'recipe-011',
    name: 'Receita: Item Craftado 011',
    description: 'Combine estes 5 itens para criar o Item Craftado 011.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-vivencia', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-011'
  },
  {
    id: 'recipe-012',
    name: 'Receita: Item Craftado 012',
    description: 'Combine estes 5 itens para criar o Item Craftado 012.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-vivencia', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-012'
  },
  {
    id: 'recipe-013',
    name: 'Receita: Item Craftado 013',
    description: 'Combine estes 5 itens para criar o Item Craftado 013.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-013'
  },
  {
    id: 'recipe-014',
    name: 'Receita: Item Craftado 014',
    description: 'Combine estes 5 itens para criar o Item Craftado 014.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-014'
  },
  {
    id: 'recipe-015',
    name: 'Receita: Item Craftado 015',
    description: 'Combine estes 5 itens para criar o Item Craftado 015.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-015'
  },
  {
    id: 'recipe-016',
    name: 'Receita: Item Craftado 016',
    description: 'Combine estes 5 itens para criar o Item Craftado 016.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-vivencia', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-016'
  },
  {
    id: 'recipe-017',
    name: 'Receita: Item Craftado 017',
    description: 'Combine estes 5 itens para criar o Item Craftado 017.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-vivencia', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-017'
  },
  {
    id: 'recipe-018',
    name: 'Receita: Item Craftado 018',
    description: 'Combine estes 5 itens para criar o Item Craftado 018.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-vivencia', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-018'
  },
  {
    id: 'recipe-019',
    name: 'Receita: Item Craftado 019',
    description: 'Combine estes 5 itens para criar o Item Craftado 019.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-cone', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-019'
  },
  {
    id: 'recipe-020',
    name: 'Receita: Item Craftado 020',
    description: 'Combine estes 5 itens para criar o Item Craftado 020.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-cone', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-020'
  },
  {
    id: 'recipe-021',
    name: 'Receita: Item Craftado 021',
    description: 'Combine estes 5 itens para criar o Item Craftado 021.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-cone', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-021'
  },
  {
    id: 'recipe-022',
    name: 'Receita: Item Craftado 022',
    description: 'Combine estes 5 itens para criar o Item Craftado 022.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-cone', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-022'
  },
  {
    id: 'recipe-023',
    name: 'Receita: Item Craftado 023',
    description: 'Combine estes 5 itens para criar o Item Craftado 023.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-cone', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-023'
  },
  {
    id: 'recipe-024',
    name: 'Receita: Item Craftado 024',
    description: 'Combine estes 5 itens para criar o Item Craftado 024.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-cone', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-024'
  },
  {
    id: 'recipe-025',
    name: 'Receita: Item Craftado 025',
    description: 'Combine estes 5 itens para criar o Item Craftado 025.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-cone', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-025'
  },
  {
    id: 'recipe-026',
    name: 'Receita: Item Craftado 026',
    description: 'Combine estes 5 itens para criar o Item Craftado 026.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-cone', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-026'
  },
  {
    id: 'recipe-027',
    name: 'Receita: Item Craftado 027',
    description: 'Combine estes 5 itens para criar o Item Craftado 027.',
    requiredItems: ['pericles-drip', 'buyhold-drip', 'quadra-cone', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-027'
  },
  {
    id: 'recipe-028',
    name: 'Receita: Item Craftado 028',
    description: 'Combine estes 5 itens para criar o Item Craftado 028.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-drip', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-028'
  },
  {
    id: 'recipe-029',
    name: 'Receita: Item Craftado 029',
    description: 'Combine estes 5 itens para criar o Item Craftado 029.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-drip', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-029'
  },
  {
    id: 'recipe-030',
    name: 'Receita: Item Craftado 030',
    description: 'Combine estes 5 itens para criar o Item Craftado 030.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-drip', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-030'
  },
  {
    id: 'recipe-031',
    name: 'Receita: Item Craftado 031',
    description: 'Combine estes 5 itens para criar o Item Craftado 031.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-drip', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-031'
  },
  {
    id: 'recipe-032',
    name: 'Receita: Item Craftado 032',
    description: 'Combine estes 5 itens para criar o Item Craftado 032.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-drip', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-032'
  },
  {
    id: 'recipe-033',
    name: 'Receita: Item Craftado 033',
    description: 'Combine estes 5 itens para criar o Item Craftado 033.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-drip', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-033'
  },
  {
    id: 'recipe-034',
    name: 'Receita: Item Craftado 034',
    description: 'Combine estes 5 itens para criar o Item Craftado 034.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-drip', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-034'
  },
  {
    id: 'recipe-035',
    name: 'Receita: Item Craftado 035',
    description: 'Combine estes 5 itens para criar o Item Craftado 035.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-drip', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-035'
  },
  {
    id: 'recipe-036',
    name: 'Receita: Item Craftado 036',
    description: 'Combine estes 5 itens para criar o Item Craftado 036.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-drip', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-036'
  },
  {
    id: 'recipe-037',
    name: 'Receita: Item Craftado 037',
    description: 'Combine estes 5 itens para criar o Item Craftado 037.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-vivencia', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-037'
  },
  {
    id: 'recipe-038',
    name: 'Receita: Item Craftado 038',
    description: 'Combine estes 5 itens para criar o Item Craftado 038.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-vivencia', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-038'
  },
  {
    id: 'recipe-039',
    name: 'Receita: Item Craftado 039',
    description: 'Combine estes 5 itens para criar o Item Craftado 039.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-vivencia', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-039'
  },
  {
    id: 'recipe-040',
    name: 'Receita: Item Craftado 040',
    description: 'Combine estes 5 itens para criar o Item Craftado 040.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-040'
  },
  {
    id: 'recipe-041',
    name: 'Receita: Item Craftado 041',
    description: 'Combine estes 5 itens para criar o Item Craftado 041.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-041'
  },
  {
    id: 'recipe-042',
    name: 'Receita: Item Craftado 042',
    description: 'Combine estes 5 itens para criar o Item Craftado 042.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-042'
  },
  {
    id: 'recipe-043',
    name: 'Receita: Item Craftado 043',
    description: 'Combine estes 5 itens para criar o Item Craftado 043.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-vivencia', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-043'
  },
  {
    id: 'recipe-044',
    name: 'Receita: Item Craftado 044',
    description: 'Combine estes 5 itens para criar o Item Craftado 044.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-vivencia', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-044'
  },
  {
    id: 'recipe-045',
    name: 'Receita: Item Craftado 045',
    description: 'Combine estes 5 itens para criar o Item Craftado 045.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-vivencia', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-045'
  },
  {
    id: 'recipe-046',
    name: 'Receita: Item Craftado 046',
    description: 'Combine estes 5 itens para criar o Item Craftado 046.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-cone', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-046'
  },
  {
    id: 'recipe-047',
    name: 'Receita: Item Craftado 047',
    description: 'Combine estes 5 itens para criar o Item Craftado 047.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-cone', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-047'
  },
  {
    id: 'recipe-048',
    name: 'Receita: Item Craftado 048',
    description: 'Combine estes 5 itens para criar o Item Craftado 048.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-cone', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-048'
  },
  {
    id: 'recipe-049',
    name: 'Receita: Item Craftado 049',
    description: 'Combine estes 5 itens para criar o Item Craftado 049.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-cone', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-049'
  },
  {
    id: 'recipe-050',
    name: 'Receita: Item Craftado 050',
    description: 'Combine estes 5 itens para criar o Item Craftado 050.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-cone', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-050'
  },
  {
    id: 'recipe-051',
    name: 'Receita: Item Craftado 051',
    description: 'Combine estes 5 itens para criar o Item Craftado 051.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-cone', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-051'
  },
  {
    id: 'recipe-052',
    name: 'Receita: Item Craftado 052',
    description: 'Combine estes 5 itens para criar o Item Craftado 052.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-cone', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-052'
  },
  {
    id: 'recipe-053',
    name: 'Receita: Item Craftado 053',
    description: 'Combine estes 5 itens para criar o Item Craftado 053.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-cone', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-053'
  },
  {
    id: 'recipe-054',
    name: 'Receita: Item Craftado 054',
    description: 'Combine estes 5 itens para criar o Item Craftado 054.',
    requiredItems: ['pericles-drip', 'buyhold-vivencia', 'quadra-cone', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-054'
  },
  {
    id: 'recipe-055',
    name: 'Receita: Item Craftado 055',
    description: 'Combine estes 5 itens para criar o Item Craftado 055.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-drip', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-055'
  },
  {
    id: 'recipe-056',
    name: 'Receita: Item Craftado 056',
    description: 'Combine estes 5 itens para criar o Item Craftado 056.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-drip', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-056'
  },
  {
    id: 'recipe-057',
    name: 'Receita: Item Craftado 057',
    description: 'Combine estes 5 itens para criar o Item Craftado 057.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-drip', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-057'
  },
  {
    id: 'recipe-058',
    name: 'Receita: Item Craftado 058',
    description: 'Combine estes 5 itens para criar o Item Craftado 058.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-drip', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-058'
  },
  {
    id: 'recipe-059',
    name: 'Receita: Item Craftado 059',
    description: 'Combine estes 5 itens para criar o Item Craftado 059.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-drip', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-059'
  },
  {
    id: 'recipe-060',
    name: 'Receita: Item Craftado 060',
    description: 'Combine estes 5 itens para criar o Item Craftado 060.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-drip', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-060'
  },
  {
    id: 'recipe-061',
    name: 'Receita: Item Craftado 061',
    description: 'Combine estes 5 itens para criar o Item Craftado 061.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-drip', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-061'
  },
  {
    id: 'recipe-062',
    name: 'Receita: Item Craftado 062',
    description: 'Combine estes 5 itens para criar o Item Craftado 062.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-drip', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-062'
  },
  {
    id: 'recipe-063',
    name: 'Receita: Item Craftado 063',
    description: 'Combine estes 5 itens para criar o Item Craftado 063.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-drip', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-063'
  },
  {
    id: 'recipe-064',
    name: 'Receita: Item Craftado 064',
    description: 'Combine estes 5 itens para criar o Item Craftado 064.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-vivencia', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-064'
  },
  {
    id: 'recipe-065',
    name: 'Receita: Item Craftado 065',
    description: 'Combine estes 5 itens para criar o Item Craftado 065.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-vivencia', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-065'
  },
  {
    id: 'recipe-066',
    name: 'Receita: Item Craftado 066',
    description: 'Combine estes 5 itens para criar o Item Craftado 066.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-vivencia', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-066'
  },
  {
    id: 'recipe-067',
    name: 'Receita: Item Craftado 067',
    description: 'Combine estes 5 itens para criar o Item Craftado 067.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-067'
  },
  {
    id: 'recipe-068',
    name: 'Receita: Item Craftado 068',
    description: 'Combine estes 5 itens para criar o Item Craftado 068.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-068'
  },
  {
    id: 'recipe-069',
    name: 'Receita: Item Craftado 069',
    description: 'Combine estes 5 itens para criar o Item Craftado 069.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-069'
  },
  {
    id: 'recipe-070',
    name: 'Receita: Item Craftado 070',
    description: 'Combine estes 5 itens para criar o Item Craftado 070.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-vivencia', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-070'
  },
  {
    id: 'recipe-071',
    name: 'Receita: Item Craftado 071',
    description: 'Combine estes 5 itens para criar o Item Craftado 071.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-vivencia', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-071'
  },
  {
    id: 'recipe-072',
    name: 'Receita: Item Craftado 072',
    description: 'Combine estes 5 itens para criar o Item Craftado 072.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-vivencia', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-072'
  },
  {
    id: 'recipe-073',
    name: 'Receita: Item Craftado 073',
    description: 'Combine estes 5 itens para criar o Item Craftado 073.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-cone', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-073'
  },
  {
    id: 'recipe-074',
    name: 'Receita: Item Craftado 074',
    description: 'Combine estes 5 itens para criar o Item Craftado 074.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-cone', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-074'
  },
  {
    id: 'recipe-075',
    name: 'Receita: Item Craftado 075',
    description: 'Combine estes 5 itens para criar o Item Craftado 075.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-cone', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-075'
  },
  {
    id: 'recipe-076',
    name: 'Receita: Item Craftado 076',
    description: 'Combine estes 5 itens para criar o Item Craftado 076.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-cone', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-076'
  },
  {
    id: 'recipe-077',
    name: 'Receita: Item Craftado 077',
    description: 'Combine estes 5 itens para criar o Item Craftado 077.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-cone', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-077'
  },
  {
    id: 'recipe-078',
    name: 'Receita: Item Craftado 078',
    description: 'Combine estes 5 itens para criar o Item Craftado 078.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-cone', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-078'
  },
  {
    id: 'recipe-079',
    name: 'Receita: Item Craftado 079',
    description: 'Combine estes 5 itens para criar o Item Craftado 079.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-cone', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-079'
  },
  {
    id: 'recipe-080',
    name: 'Receita: Item Craftado 080',
    description: 'Combine estes 5 itens para criar o Item Craftado 080.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-cone', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-080'
  },
  {
    id: 'recipe-081',
    name: 'Receita: Item Craftado 081',
    description: 'Combine estes 5 itens para criar o Item Craftado 081.',
    requiredItems: ['pericles-drip', 'buyhold-cone', 'quadra-cone', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-081'
  },
  {
    id: 'recipe-082',
    name: 'Receita: Item Craftado 082',
    description: 'Combine estes 5 itens para criar o Item Craftado 082.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-drip', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-082'
  },
  {
    id: 'recipe-083',
    name: 'Receita: Item Craftado 083',
    description: 'Combine estes 5 itens para criar o Item Craftado 083.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-drip', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-083'
  },
  {
    id: 'recipe-084',
    name: 'Receita: Item Craftado 084',
    description: 'Combine estes 5 itens para criar o Item Craftado 084.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-drip', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-084'
  },
  {
    id: 'recipe-085',
    name: 'Receita: Item Craftado 085',
    description: 'Combine estes 5 itens para criar o Item Craftado 085.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-drip', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-085'
  },
  {
    id: 'recipe-086',
    name: 'Receita: Item Craftado 086',
    description: 'Combine estes 5 itens para criar o Item Craftado 086.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-drip', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-086'
  },
  {
    id: 'recipe-087',
    name: 'Receita: Item Craftado 087',
    description: 'Combine estes 5 itens para criar o Item Craftado 087.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-drip', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-087'
  },
  {
    id: 'recipe-088',
    name: 'Receita: Item Craftado 088',
    description: 'Combine estes 5 itens para criar o Item Craftado 088.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-drip', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-088'
  },
  {
    id: 'recipe-089',
    name: 'Receita: Item Craftado 089',
    description: 'Combine estes 5 itens para criar o Item Craftado 089.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-drip', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-089'
  },
  {
    id: 'recipe-090',
    name: 'Receita: Item Craftado 090',
    description: 'Combine estes 5 itens para criar o Item Craftado 090.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-drip', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-090'
  },
  {
    id: 'recipe-091',
    name: 'Receita: Item Craftado 091',
    description: 'Combine estes 5 itens para criar o Item Craftado 091.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-vivencia', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-091'
  },
  {
    id: 'recipe-092',
    name: 'Receita: Item Craftado 092',
    description: 'Combine estes 5 itens para criar o Item Craftado 092.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-vivencia', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-092'
  },
  {
    id: 'recipe-093',
    name: 'Receita: Item Craftado 093',
    description: 'Combine estes 5 itens para criar o Item Craftado 093.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-vivencia', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-093'
  },
  {
    id: 'recipe-094',
    name: 'Receita: Item Craftado 094',
    description: 'Combine estes 5 itens para criar o Item Craftado 094.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-094'
  },
  {
    id: 'recipe-095',
    name: 'Receita: Item Craftado 095',
    description: 'Combine estes 5 itens para criar o Item Craftado 095.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-095'
  },
  {
    id: 'recipe-096',
    name: 'Receita: Item Craftado 096',
    description: 'Combine estes 5 itens para criar o Item Craftado 096.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-096'
  },
  {
    id: 'recipe-097',
    name: 'Receita: Item Craftado 097',
    description: 'Combine estes 5 itens para criar o Item Craftado 097.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-vivencia', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-097'
  },
  {
    id: 'recipe-098',
    name: 'Receita: Item Craftado 098',
    description: 'Combine estes 5 itens para criar o Item Craftado 098.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-vivencia', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-098'
  },
  {
    id: 'recipe-099',
    name: 'Receita: Item Craftado 099',
    description: 'Combine estes 5 itens para criar o Item Craftado 099.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-vivencia', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-099'
  },
  {
    id: 'recipe-100',
    name: 'Receita: Item Craftado 100',
    description: 'Combine estes 5 itens para criar o Item Craftado 100.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-cone', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-100'
  },
  {
    id: 'recipe-101',
    name: 'Receita: Item Craftado 101',
    description: 'Combine estes 5 itens para criar o Item Craftado 101.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-cone', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-101'
  },
  {
    id: 'recipe-102',
    name: 'Receita: Item Craftado 102',
    description: 'Combine estes 5 itens para criar o Item Craftado 102.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-cone', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-102'
  },
  {
    id: 'recipe-103',
    name: 'Receita: Item Craftado 103',
    description: 'Combine estes 5 itens para criar o Item Craftado 103.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-cone', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-103'
  },
  {
    id: 'recipe-104',
    name: 'Receita: Item Craftado 104',
    description: 'Combine estes 5 itens para criar o Item Craftado 104.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-cone', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-104'
  },
  {
    id: 'recipe-105',
    name: 'Receita: Item Craftado 105',
    description: 'Combine estes 5 itens para criar o Item Craftado 105.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-cone', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-105'
  },
  {
    id: 'recipe-106',
    name: 'Receita: Item Craftado 106',
    description: 'Combine estes 5 itens para criar o Item Craftado 106.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-cone', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-106'
  },
  {
    id: 'recipe-107',
    name: 'Receita: Item Craftado 107',
    description: 'Combine estes 5 itens para criar o Item Craftado 107.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-cone', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-107'
  },
  {
    id: 'recipe-108',
    name: 'Receita: Item Craftado 108',
    description: 'Combine estes 5 itens para criar o Item Craftado 108.',
    requiredItems: ['pericles-vivencia', 'buyhold-drip', 'quadra-cone', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-108'
  },
  {
    id: 'recipe-109',
    name: 'Receita: Item Craftado 109',
    description: 'Combine estes 5 itens para criar o Item Craftado 109.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-drip', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-109'
  },
  {
    id: 'recipe-110',
    name: 'Receita: Item Craftado 110',
    description: 'Combine estes 5 itens para criar o Item Craftado 110.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-drip', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-110'
  },
  {
    id: 'recipe-111',
    name: 'Receita: Item Craftado 111',
    description: 'Combine estes 5 itens para criar o Item Craftado 111.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-drip', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-111'
  },
  {
    id: 'recipe-112',
    name: 'Receita: Item Craftado 112',
    description: 'Combine estes 5 itens para criar o Item Craftado 112.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-drip', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-112'
  },
  {
    id: 'recipe-113',
    name: 'Receita: Item Craftado 113',
    description: 'Combine estes 5 itens para criar o Item Craftado 113.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-drip', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-113'
  },
  {
    id: 'recipe-114',
    name: 'Receita: Item Craftado 114',
    description: 'Combine estes 5 itens para criar o Item Craftado 114.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-drip', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-114'
  },
  {
    id: 'recipe-115',
    name: 'Receita: Item Craftado 115',
    description: 'Combine estes 5 itens para criar o Item Craftado 115.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-drip', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-115'
  },
  {
    id: 'recipe-116',
    name: 'Receita: Item Craftado 116',
    description: 'Combine estes 5 itens para criar o Item Craftado 116.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-drip', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-116'
  },
  {
    id: 'recipe-117',
    name: 'Receita: Item Craftado 117',
    description: 'Combine estes 5 itens para criar o Item Craftado 117.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-drip', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-117'
  },
  {
    id: 'recipe-118',
    name: 'Receita: Item Craftado 118',
    description: 'Combine estes 5 itens para criar o Item Craftado 118.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-vivencia', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-118'
  },
  {
    id: 'recipe-119',
    name: 'Receita: Item Craftado 119',
    description: 'Combine estes 5 itens para criar o Item Craftado 119.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-vivencia', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-119'
  },
  {
    id: 'recipe-120',
    name: 'Receita: Item Craftado 120',
    description: 'Combine estes 5 itens para criar o Item Craftado 120.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-vivencia', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-120'
  },
  {
    id: 'recipe-121',
    name: 'Receita: Item Craftado 121',
    description: 'Combine estes 5 itens para criar o Item Craftado 121.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-121'
  },
  {
    id: 'recipe-122',
    name: 'Receita: Item Craftado 122',
    description: 'Combine estes 5 itens para criar o Item Craftado 122.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-122'
  },
  {
    id: 'recipe-123',
    name: 'Receita: Item Craftado 123',
    description: 'Combine estes 5 itens para criar o Item Craftado 123.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-123'
  },
  {
    id: 'recipe-124',
    name: 'Receita: Item Craftado 124',
    description: 'Combine estes 5 itens para criar o Item Craftado 124.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-vivencia', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-124'
  },
  {
    id: 'recipe-125',
    name: 'Receita: Item Craftado 125',
    description: 'Combine estes 5 itens para criar o Item Craftado 125.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-vivencia', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-125'
  },
  {
    id: 'recipe-126',
    name: 'Receita: Item Craftado 126',
    description: 'Combine estes 5 itens para criar o Item Craftado 126.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-vivencia', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-126'
  },
  {
    id: 'recipe-127',
    name: 'Receita: Item Craftado 127',
    description: 'Combine estes 5 itens para criar o Item Craftado 127.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-cone', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-127'
  },
  {
    id: 'recipe-128',
    name: 'Receita: Item Craftado 128',
    description: 'Combine estes 5 itens para criar o Item Craftado 128.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-cone', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-128'
  },
  {
    id: 'recipe-129',
    name: 'Receita: Item Craftado 129',
    description: 'Combine estes 5 itens para criar o Item Craftado 129.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-cone', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-129'
  },
  {
    id: 'recipe-130',
    name: 'Receita: Item Craftado 130',
    description: 'Combine estes 5 itens para criar o Item Craftado 130.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-cone', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-130'
  },
  {
    id: 'recipe-131',
    name: 'Receita: Item Craftado 131',
    description: 'Combine estes 5 itens para criar o Item Craftado 131.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-cone', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-131'
  },
  {
    id: 'recipe-132',
    name: 'Receita: Item Craftado 132',
    description: 'Combine estes 5 itens para criar o Item Craftado 132.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-cone', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-132'
  },
  {
    id: 'recipe-133',
    name: 'Receita: Item Craftado 133',
    description: 'Combine estes 5 itens para criar o Item Craftado 133.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-cone', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-133'
  },
  {
    id: 'recipe-134',
    name: 'Receita: Item Craftado 134',
    description: 'Combine estes 5 itens para criar o Item Craftado 134.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-cone', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-134'
  },
  {
    id: 'recipe-135',
    name: 'Receita: Item Craftado 135',
    description: 'Combine estes 5 itens para criar o Item Craftado 135.',
    requiredItems: ['pericles-vivencia', 'buyhold-vivencia', 'quadra-cone', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-135'
  },
  {
    id: 'recipe-136',
    name: 'Receita: Item Craftado 136',
    description: 'Combine estes 5 itens para criar o Item Craftado 136.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-drip', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-136'
  },
  {
    id: 'recipe-137',
    name: 'Receita: Item Craftado 137',
    description: 'Combine estes 5 itens para criar o Item Craftado 137.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-drip', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-137'
  },
  {
    id: 'recipe-138',
    name: 'Receita: Item Craftado 138',
    description: 'Combine estes 5 itens para criar o Item Craftado 138.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-drip', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-138'
  },
  {
    id: 'recipe-139',
    name: 'Receita: Item Craftado 139',
    description: 'Combine estes 5 itens para criar o Item Craftado 139.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-drip', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-139'
  },
  {
    id: 'recipe-140',
    name: 'Receita: Item Craftado 140',
    description: 'Combine estes 5 itens para criar o Item Craftado 140.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-drip', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-140'
  },
  {
    id: 'recipe-141',
    name: 'Receita: Item Craftado 141',
    description: 'Combine estes 5 itens para criar o Item Craftado 141.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-drip', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-141'
  },
  {
    id: 'recipe-142',
    name: 'Receita: Item Craftado 142',
    description: 'Combine estes 5 itens para criar o Item Craftado 142.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-drip', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-142'
  },
  {
    id: 'recipe-143',
    name: 'Receita: Item Craftado 143',
    description: 'Combine estes 5 itens para criar o Item Craftado 143.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-drip', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-143'
  },
  {
    id: 'recipe-144',
    name: 'Receita: Item Craftado 144',
    description: 'Combine estes 5 itens para criar o Item Craftado 144.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-drip', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-144'
  },
  {
    id: 'recipe-145',
    name: 'Receita: Item Craftado 145',
    description: 'Combine estes 5 itens para criar o Item Craftado 145.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-vivencia', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-145'
  },
  {
    id: 'recipe-146',
    name: 'Receita: Item Craftado 146',
    description: 'Combine estes 5 itens para criar o Item Craftado 146.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-vivencia', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-146'
  },
  {
    id: 'recipe-147',
    name: 'Receita: Item Craftado 147',
    description: 'Combine estes 5 itens para criar o Item Craftado 147.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-vivencia', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-147'
  },
  {
    id: 'recipe-148',
    name: 'Receita: Item Craftado 148',
    description: 'Combine estes 5 itens para criar o Item Craftado 148.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-148'
  },
  {
    id: 'recipe-149',
    name: 'Receita: Item Craftado 149',
    description: 'Combine estes 5 itens para criar o Item Craftado 149.',
    requiredItems: ['pericles-vivencia', 'buyhold-cone', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-149'
  },
  {
    id: 'recipe-150',
    name: 'Receita: Item Craftado 150',
    description: 'Combine estes 5 itens para criar o Item Craftado 150.',
    requiredItems: ['pericles-vivencia', 'buyhold-cone', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-150'
  },
  {
    id: 'recipe-151',
    name: 'Receita: Item Craftado 151',
    description: 'Combine estes 5 itens para criar o Item Craftado 151.',
    requiredItems: ['pericles-vivencia', 'buyhold-cone', 'quadra-vivencia', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-151'
  },
  {
    id: 'recipe-152',
    name: 'Receita: Item Craftado 152',
    description: 'Combine estes 5 itens para criar o Item Craftado 152.',
    requiredItems: ['pericles-vivencia', 'buyhold-cone', 'quadra-vivencia', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-152'
  },
  {
    id: 'recipe-153',
    name: 'Receita: Item Craftado 153',
    description: 'Combine estes 5 itens para criar o Item Craftado 153.',
    requiredItems: ['pericles-vivencia', 'buyhold-cone', 'quadra-vivencia', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-153'
  },
  {
    id: 'recipe-154',
    name: 'Receita: Item Craftado 154',
    description: 'Combine estes 5 itens para criar o Item Craftado 154.',
    requiredItems: ['pericles-vivencia', 'buyhold-cone', 'quadra-cone', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-154'
  },
  {
    id: 'recipe-155',
    name: 'Receita: Item Craftado 155',
    description: 'Combine estes 5 itens para criar o Item Craftado 155.',
    requiredItems: ['pericles-vivencia', 'buyhold-cone', 'quadra-cone', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-155'
  },
  {
    id: 'recipe-156',
    name: 'Receita: Item Craftado 156',
    description: 'Combine estes 5 itens para criar o Item Craftado 156.',
    requiredItems: ['pericles-vivencia', 'buyhold-cone', 'quadra-cone', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-156'
  },
  {
    id: 'recipe-157',
    name: 'Receita: Item Craftado 157',
    description: 'Combine estes 5 itens para criar o Item Craftado 157.',
    requiredItems: ['pericles-vivencia', 'buyhold-cone', 'quadra-cone', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-157'
  },
  {
    id: 'recipe-158',
    name: 'Receita: Item Craftado 158',
    description: 'Combine estes 5 itens para criar o Item Craftado 158.',
    requiredItems: ['pericles-vivencia', 'buyhold-cone', 'quadra-cone', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-158'
  },
  {
    id: 'recipe-159',
    name: 'Receita: Item Craftado 159',
    description: 'Combine estes 5 itens para criar o Item Craftado 159.',
    requiredItems: ['pericles-vivencia', 'buyhold-cone', 'quadra-cone', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-159'
  },
  {
    id: 'recipe-160',
    name: 'Receita: Item Craftado 160',
    description: 'Combine estes 5 itens para criar o Item Craftado 160.',
    requiredItems: ['pericles-vivencia', 'buyhold-cone', 'quadra-cone', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-160'
  },
  {
    id: 'recipe-161',
    name: 'Receita: Item Craftado 161',
    description: 'Combine estes 5 itens para criar o Item Craftado 161.',
    requiredItems: ['pericles-vivencia', 'buyhold-cone', 'quadra-cone', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-161'
  },
  {
    id: 'recipe-162',
    name: 'Receita: Item Craftado 162',
    description: 'Combine estes 5 itens para criar o Item Craftado 162.',
    requiredItems: ['pericles-vivencia', 'buyhold-cone', 'quadra-cone', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-162'
  },
  {
    id: 'recipe-163',
    name: 'Receita: Item Craftado 163',
    description: 'Combine estes 5 itens para criar o Item Craftado 163.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-drip', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-163'
  },
  {
    id: 'recipe-164',
    name: 'Receita: Item Craftado 164',
    description: 'Combine estes 5 itens para criar o Item Craftado 164.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-drip', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-164'
  },
  {
    id: 'recipe-165',
    name: 'Receita: Item Craftado 165',
    description: 'Combine estes 5 itens para criar o Item Craftado 165.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-drip', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-165'
  },
  {
    id: 'recipe-166',
    name: 'Receita: Item Craftado 166',
    description: 'Combine estes 5 itens para criar o Item Craftado 166.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-drip', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-166'
  },
  {
    id: 'recipe-167',
    name: 'Receita: Item Craftado 167',
    description: 'Combine estes 5 itens para criar o Item Craftado 167.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-drip', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-167'
  },
  {
    id: 'recipe-168',
    name: 'Receita: Item Craftado 168',
    description: 'Combine estes 5 itens para criar o Item Craftado 168.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-drip', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-168'
  },
  {
    id: 'recipe-169',
    name: 'Receita: Item Craftado 169',
    description: 'Combine estes 5 itens para criar o Item Craftado 169.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-drip', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-169'
  },
  {
    id: 'recipe-170',
    name: 'Receita: Item Craftado 170',
    description: 'Combine estes 5 itens para criar o Item Craftado 170.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-drip', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-170'
  },
  {
    id: 'recipe-171',
    name: 'Receita: Item Craftado 171',
    description: 'Combine estes 5 itens para criar o Item Craftado 171.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-drip', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-171'
  },
  {
    id: 'recipe-172',
    name: 'Receita: Item Craftado 172',
    description: 'Combine estes 5 itens para criar o Item Craftado 172.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-vivencia', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-172'
  },
  {
    id: 'recipe-173',
    name: 'Receita: Item Craftado 173',
    description: 'Combine estes 5 itens para criar o Item Craftado 173.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-vivencia', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-173'
  },
  {
    id: 'recipe-174',
    name: 'Receita: Item Craftado 174',
    description: 'Combine estes 5 itens para criar o Item Craftado 174.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-vivencia', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-174'
  },
  {
    id: 'recipe-175',
    name: 'Receita: Item Craftado 175',
    description: 'Combine estes 5 itens para criar o Item Craftado 175.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-175'
  },
  {
    id: 'recipe-176',
    name: 'Receita: Item Craftado 176',
    description: 'Combine estes 5 itens para criar o Item Craftado 176.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-176'
  },
  {
    id: 'recipe-177',
    name: 'Receita: Item Craftado 177',
    description: 'Combine estes 5 itens para criar o Item Craftado 177.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-177'
  },
  {
    id: 'recipe-178',
    name: 'Receita: Item Craftado 178',
    description: 'Combine estes 5 itens para criar o Item Craftado 178.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-vivencia', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-178'
  },
  {
    id: 'recipe-179',
    name: 'Receita: Item Craftado 179',
    description: 'Combine estes 5 itens para criar o Item Craftado 179.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-vivencia', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-179'
  },
  {
    id: 'recipe-180',
    name: 'Receita: Item Craftado 180',
    description: 'Combine estes 5 itens para criar o Item Craftado 180.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-vivencia', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-180'
  },
  {
    id: 'recipe-181',
    name: 'Receita: Item Craftado 181',
    description: 'Combine estes 5 itens para criar o Item Craftado 181.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-cone', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-181'
  },
  {
    id: 'recipe-182',
    name: 'Receita: Item Craftado 182',
    description: 'Combine estes 5 itens para criar o Item Craftado 182.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-cone', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-182'
  },
  {
    id: 'recipe-183',
    name: 'Receita: Item Craftado 183',
    description: 'Combine estes 5 itens para criar o Item Craftado 183.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-cone', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-183'
  },
  {
    id: 'recipe-184',
    name: 'Receita: Item Craftado 184',
    description: 'Combine estes 5 itens para criar o Item Craftado 184.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-cone', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-184'
  },
  {
    id: 'recipe-185',
    name: 'Receita: Item Craftado 185',
    description: 'Combine estes 5 itens para criar o Item Craftado 185.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-cone', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-185'
  },
  {
    id: 'recipe-186',
    name: 'Receita: Item Craftado 186',
    description: 'Combine estes 5 itens para criar o Item Craftado 186.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-cone', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-186'
  },
  {
    id: 'recipe-187',
    name: 'Receita: Item Craftado 187',
    description: 'Combine estes 5 itens para criar o Item Craftado 187.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-cone', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-187'
  },
  {
    id: 'recipe-188',
    name: 'Receita: Item Craftado 188',
    description: 'Combine estes 5 itens para criar o Item Craftado 188.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-cone', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-188'
  },
  {
    id: 'recipe-189',
    name: 'Receita: Item Craftado 189',
    description: 'Combine estes 5 itens para criar o Item Craftado 189.',
    requiredItems: ['pericles-cone', 'buyhold-drip', 'quadra-cone', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-189'
  },
  {
    id: 'recipe-190',
    name: 'Receita: Item Craftado 190',
    description: 'Combine estes 5 itens para criar o Item Craftado 190.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-drip', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-190'
  },
  {
    id: 'recipe-191',
    name: 'Receita: Item Craftado 191',
    description: 'Combine estes 5 itens para criar o Item Craftado 191.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-drip', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-191'
  },
  {
    id: 'recipe-192',
    name: 'Receita: Item Craftado 192',
    description: 'Combine estes 5 itens para criar o Item Craftado 192.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-drip', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-192'
  },
  {
    id: 'recipe-193',
    name: 'Receita: Item Craftado 193',
    description: 'Combine estes 5 itens para criar o Item Craftado 193.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-drip', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-193'
  },
  {
    id: 'recipe-194',
    name: 'Receita: Item Craftado 194',
    description: 'Combine estes 5 itens para criar o Item Craftado 194.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-drip', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-194'
  },
  {
    id: 'recipe-195',
    name: 'Receita: Item Craftado 195',
    description: 'Combine estes 5 itens para criar o Item Craftado 195.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-drip', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-195'
  },
  {
    id: 'recipe-196',
    name: 'Receita: Item Craftado 196',
    description: 'Combine estes 5 itens para criar o Item Craftado 196.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-drip', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-196'
  },
  {
    id: 'recipe-197',
    name: 'Receita: Item Craftado 197',
    description: 'Combine estes 5 itens para criar o Item Craftado 197.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-drip', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-197'
  },
  {
    id: 'recipe-198',
    name: 'Receita: Item Craftado 198',
    description: 'Combine estes 5 itens para criar o Item Craftado 198.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-drip', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-198'
  },
  {
    id: 'recipe-199',
    name: 'Receita: Item Craftado 199',
    description: 'Combine estes 5 itens para criar o Item Craftado 199.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-vivencia', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-199'
  },
  {
    id: 'recipe-200',
    name: 'Receita: Item Craftado 200',
    description: 'Combine estes 5 itens para criar o Item Craftado 200.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-vivencia', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-200'
  },
  {
    id: 'recipe-201',
    name: 'Receita: Item Craftado 201',
    description: 'Combine estes 5 itens para criar o Item Craftado 201.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-vivencia', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-201'
  },
  {
    id: 'recipe-202',
    name: 'Receita: Item Craftado 202',
    description: 'Combine estes 5 itens para criar o Item Craftado 202.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-202'
  },
  {
    id: 'recipe-203',
    name: 'Receita: Item Craftado 203',
    description: 'Combine estes 5 itens para criar o Item Craftado 203.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-203'
  },
  {
    id: 'recipe-204',
    name: 'Receita: Item Craftado 204',
    description: 'Combine estes 5 itens para criar o Item Craftado 204.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-204'
  },
  {
    id: 'recipe-205',
    name: 'Receita: Item Craftado 205',
    description: 'Combine estes 5 itens para criar o Item Craftado 205.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-vivencia', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-205'
  },
  {
    id: 'recipe-206',
    name: 'Receita: Item Craftado 206',
    description: 'Combine estes 5 itens para criar o Item Craftado 206.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-vivencia', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-206'
  },
  {
    id: 'recipe-207',
    name: 'Receita: Item Craftado 207',
    description: 'Combine estes 5 itens para criar o Item Craftado 207.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-vivencia', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-207'
  },
  {
    id: 'recipe-208',
    name: 'Receita: Item Craftado 208',
    description: 'Combine estes 5 itens para criar o Item Craftado 208.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-cone', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-208'
  },
  {
    id: 'recipe-209',
    name: 'Receita: Item Craftado 209',
    description: 'Combine estes 5 itens para criar o Item Craftado 209.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-cone', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-209'
  },
  {
    id: 'recipe-210',
    name: 'Receita: Item Craftado 210',
    description: 'Combine estes 5 itens para criar o Item Craftado 210.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-cone', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-210'
  },
  {
    id: 'recipe-211',
    name: 'Receita: Item Craftado 211',
    description: 'Combine estes 5 itens para criar o Item Craftado 211.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-cone', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-211'
  },
  {
    id: 'recipe-212',
    name: 'Receita: Item Craftado 212',
    description: 'Combine estes 5 itens para criar o Item Craftado 212.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-cone', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-212'
  },
  {
    id: 'recipe-213',
    name: 'Receita: Item Craftado 213',
    description: 'Combine estes 5 itens para criar o Item Craftado 213.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-cone', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-213'
  },
  {
    id: 'recipe-214',
    name: 'Receita: Item Craftado 214',
    description: 'Combine estes 5 itens para criar o Item Craftado 214.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-cone', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-214'
  },
  {
    id: 'recipe-215',
    name: 'Receita: Item Craftado 215',
    description: 'Combine estes 5 itens para criar o Item Craftado 215.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-cone', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-215'
  },
  {
    id: 'recipe-216',
    name: 'Receita: Item Craftado 216',
    description: 'Combine estes 5 itens para criar o Item Craftado 216.',
    requiredItems: ['pericles-cone', 'buyhold-vivencia', 'quadra-cone', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-216'
  },
  {
    id: 'recipe-217',
    name: 'Receita: Item Craftado 217',
    description: 'Combine estes 5 itens para criar o Item Craftado 217.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-drip', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-217'
  },
  {
    id: 'recipe-218',
    name: 'Receita: Item Craftado 218',
    description: 'Combine estes 5 itens para criar o Item Craftado 218.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-drip', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-218'
  },
  {
    id: 'recipe-219',
    name: 'Receita: Item Craftado 219',
    description: 'Combine estes 5 itens para criar o Item Craftado 219.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-drip', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-219'
  },
  {
    id: 'recipe-220',
    name: 'Receita: Item Craftado 220',
    description: 'Combine estes 5 itens para criar o Item Craftado 220.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-drip', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-220'
  },
  {
    id: 'recipe-221',
    name: 'Receita: Item Craftado 221',
    description: 'Combine estes 5 itens para criar o Item Craftado 221.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-drip', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-221'
  },
  {
    id: 'recipe-222',
    name: 'Receita: Item Craftado 222',
    description: 'Combine estes 5 itens para criar o Item Craftado 222.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-drip', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-222'
  },
  {
    id: 'recipe-223',
    name: 'Receita: Item Craftado 223',
    description: 'Combine estes 5 itens para criar o Item Craftado 223.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-drip', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-223'
  },
  {
    id: 'recipe-224',
    name: 'Receita: Item Craftado 224',
    description: 'Combine estes 5 itens para criar o Item Craftado 224.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-drip', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-224'
  },
  {
    id: 'recipe-225',
    name: 'Receita: Item Craftado 225',
    description: 'Combine estes 5 itens para criar o Item Craftado 225.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-drip', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-225'
  },
  {
    id: 'recipe-226',
    name: 'Receita: Item Craftado 226',
    description: 'Combine estes 5 itens para criar o Item Craftado 226.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-vivencia', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-226'
  },
  {
    id: 'recipe-227',
    name: 'Receita: Item Craftado 227',
    description: 'Combine estes 5 itens para criar o Item Craftado 227.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-vivencia', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-227'
  },
  {
    id: 'recipe-228',
    name: 'Receita: Item Craftado 228',
    description: 'Combine estes 5 itens para criar o Item Craftado 228.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-vivencia', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-228'
  },
  {
    id: 'recipe-229',
    name: 'Receita: Item Craftado 229',
    description: 'Combine estes 5 itens para criar o Item Craftado 229.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-229'
  },
  {
    id: 'recipe-230',
    name: 'Receita: Item Craftado 230',
    description: 'Combine estes 5 itens para criar o Item Craftado 230.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-230'
  },
  {
    id: 'recipe-231',
    name: 'Receita: Item Craftado 231',
    description: 'Combine estes 5 itens para criar o Item Craftado 231.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-vivencia', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-231'
  },
  {
    id: 'recipe-232',
    name: 'Receita: Item Craftado 232',
    description: 'Combine estes 5 itens para criar o Item Craftado 232.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-vivencia', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-232'
  },
  {
    id: 'recipe-233',
    name: 'Receita: Item Craftado 233',
    description: 'Combine estes 5 itens para criar o Item Craftado 233.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-vivencia', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-233'
  },
  {
    id: 'recipe-234',
    name: 'Receita: Item Craftado 234',
    description: 'Combine estes 5 itens para criar o Item Craftado 234.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-vivencia', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-234'
  },
  {
    id: 'recipe-235',
    name: 'Receita: Item Craftado 235',
    description: 'Combine estes 5 itens para criar o Item Craftado 235.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-cone', 'njj-drip', 'gasoduto-drip'],
    resultItem: 'crafted-235'
  },
  {
    id: 'recipe-236',
    name: 'Receita: Item Craftado 236',
    description: 'Combine estes 5 itens para criar o Item Craftado 236.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-cone', 'njj-drip', 'gasoduto-vivencia'],
    resultItem: 'crafted-236'
  },
  {
    id: 'recipe-237',
    name: 'Receita: Item Craftado 237',
    description: 'Combine estes 5 itens para criar o Item Craftado 237.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-cone', 'njj-drip', 'gasoduto-cone'],
    resultItem: 'crafted-237'
  },
  {
    id: 'recipe-238',
    name: 'Receita: Item Craftado 238',
    description: 'Combine estes 5 itens para criar o Item Craftado 238.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-cone', 'njj-vivencia', 'gasoduto-drip'],
    resultItem: 'crafted-238'
  },
  {
    id: 'recipe-239',
    name: 'Receita: Item Craftado 239',
    description: 'Combine estes 5 itens para criar o Item Craftado 239.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-cone', 'njj-vivencia', 'gasoduto-vivencia'],
    resultItem: 'crafted-239'
  },
  {
    id: 'recipe-240',
    name: 'Receita: Item Craftado 240',
    description: 'Combine estes 5 itens para criar o Item Craftado 240.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-cone', 'njj-vivencia', 'gasoduto-cone'],
    resultItem: 'crafted-240'
  },
  {
    id: 'recipe-241',
    name: 'Receita: Item Craftado 241',
    description: 'Combine estes 5 itens para criar o Item Craftado 241.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-cone', 'njj-cone', 'gasoduto-drip'],
    resultItem: 'crafted-241'
  },
  {
    id: 'recipe-242',
    name: 'Receita: Item Craftado 242',
    description: 'Combine estes 5 itens para criar o Item Craftado 242.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-cone', 'njj-cone', 'gasoduto-vivencia'],
    resultItem: 'crafted-242'
  },
  {
    id: 'recipe-243',
    name: 'Receita: Item Craftado 243',
    description: 'Combine estes 5 itens para criar o Item Craftado 243.',
    requiredItems: ['pericles-cone', 'buyhold-cone', 'quadra-cone', 'njj-cone', 'gasoduto-cone'],
    resultItem: 'crafted-243'
  }
];

// =============================================
// EXPORTS
// =============================================

export const ALL_ITEMS: Item[] = [
  ...PERICLES_ITEMS,
  ...BUYHOLD_ITEMS,
  ...QUADRA_ITEMS,
  ...NJJ_ITEMS,
  ...GASODUTO_ITEMS,
  ...CRAFTED_ITEMS
];

export const GYM_ITEMS = {
  'fa-clube-do-pericles': PERICLES_ITEMS,
  'buy-n-hold': BUYHOLD_ITEMS,
  'quadra': QUADRA_ITEMS,
  'njj': NJJ_ITEMS,
  'gasoduto': GASODUTO_ITEMS
};
