// ⚡ FERRAMENTA DE BUSCA DE RECEITAS
// Execute: node buscar-receita.js [número]

// Busca a receita para o item especificado
function buscarReceita(numeroItem) {
  const numero = numeroItem.toString().padStart(3, '0');
  
  console.log(`🔍 RECEITA PARA: Item Craftado ${numero}`);
  console.log('═'.repeat(50));
  
  // Lógica baseada no sistema matemático (3^5 = 243)
  const n = parseInt(numero) - 1; // Converter para índice 0-based
  
  const gyms = ['pericles', 'buyhold', 'quadra', 'njj', 'gasoduto'];
  const types = ['drip', 'vivencia', 'cone'];
  
  const ingredients = [];
  let temp = n;
  
  for (let i = 0; i < 5; i++) {
    const typeIndex = temp % 3;
    ingredients.push(`${gyms[i]}-${types[typeIndex]}`);
    temp = Math.floor(temp / 3);
  }
  
  console.log('📦 INGREDIENTES NECESSÁRIOS:');
  ingredients.forEach((item, index) => {
    console.log(`   ${index + 1}. ${item}`);
  });
  
  console.log('\n🎯 EFEITO RESULTANTE:');
  const dripCount = ingredients.filter(item => item.includes('drip')).length;
  const vivenciaCount = ingredients.filter(item => item.includes('vivencia')).length;
  const coneCount = ingredients.filter(item => item.includes('cone')).length;
  
  let effect;
  if (dripCount > vivenciaCount && dripCount > coneCount) {
    effect = 'drip (molho)';
  } else if (vivenciaCount > coneCount) {
    effect = 'vivencia (sagacidade)';
  } else {
    effect = 'estourar-o-cone (onda)';
  }
  
  console.log(`   💫 ${effect} - valor: 30`);
  console.log('\n═'.repeat(50));
}

// Função para buscar todos os itens que usam um ingrediente específico
function buscarPorIngrediente(ingrediente) {
  console.log(`🔍 ITENS QUE USAM: ${ingrediente}`);
  console.log('═'.repeat(50));
  
  const gyms = ['pericles', 'buyhold', 'quadra', 'njj', 'gasoduto'];
  const types = ['drip', 'vivencia', 'cone'];
  
  // Encontrar posição do ginásio e tipo
  let gymIndex = -1;
  let typeIndex = -1;
  
  for (let i = 0; i < gyms.length; i++) {
    if (ingrediente.includes(gyms[i])) {
      gymIndex = i;
      break;
    }
  }
  
  for (let i = 0; i < types.length; i++) {
    if (ingrediente.includes(types[i])) {
      typeIndex = i;
      break;
    }
  }
  
  if (gymIndex === -1 || typeIndex === -1) {
    console.log('❌ Ingrediente não encontrado!');
    return;
  }
  
  const resultados = [];
  
  // Verificar todos os 243 itens
  for (let n = 0; n < 243; n++) {
    const ingredients = [];
    let temp = n;
    
    for (let i = 0; i < 5; i++) {
      const tIndex = temp % 3;
      ingredients.push(`${gyms[i]}-${types[tIndex]}`);
      temp = Math.floor(temp / 3);
    }
    
    if (ingredients[gymIndex] === ingrediente) {
      resultados.push(`crafted-${(n + 1).toString().padStart(3, '0')}`);
    }
  }
  
  console.log(`📦 ENCONTRADOS: ${resultados.length} itens`);
  resultados.slice(0, 10).forEach(item => {
    console.log(`   • ${item}`);
  });
  
  if (resultados.length > 10) {
    console.log(`   ... e mais ${resultados.length - 10} itens`);
  }
  
  console.log('\n═'.repeat(50));
}

// Verificar argumentos da linha de comando
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('🛠️  COMO USAR:');
  console.log('   node buscar-receita.js 001        # Buscar receita do item 001');
  console.log('   node buscar-receita.js pericles-drip  # Buscar itens que usam este ingrediente');
  console.log('\n📋 INGREDIENTES DISPONÍVEIS:');
  console.log('   pericles-drip, pericles-vivencia, pericles-cone');
  console.log('   buyhold-drip, buyhold-vivencia, buyhold-cone');
  console.log('   quadra-drip, quadra-vivencia, quadra-cone');
  console.log('   njj-drip, njj-vivencia, njj-cone');
  console.log('   gasoduto-drip, gasoduto-vivencia, gasoduto-cone');
} else {
  const input = args[0];
  
  if (input.includes('-')) {
    // Buscar por ingrediente
    buscarPorIngrediente(input);
  } else {
    // Buscar receita por número
    buscarReceita(input);
  }
} 