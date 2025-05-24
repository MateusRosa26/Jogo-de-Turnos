# 🎨 Como Customizar os 243 Itens

## ✅ **Sistema Simplificado Criado!**

Agora você tem **243 itens únicos** para customizar, sem complexidade desnecessária.

## 📁 **Arquivo: `src/data/items/index.ts`**

### 📝 **Estrutura de Cada Item:**

```javascript
{
  id: 'crafted-001',                    // ← ID fixo (NÃO altere - usado pelas receitas)
  name: 'Item Craftado 001',            // ← ALTERE AQUI - Nome que aparece no jogo
  description: 'Descrição customizável do item 001. Você pode alterar este texto.',  // ← ALTERE AQUI
  rarity: 'rare',                       // ← Fixo (simplificado)
  type: 'equipment',                    // ← Fixo
  effect: { type: 'drip', value: 30 },  // ← Calculado automaticamente
  sprite: '/assets/itens/artifact-001.png'  // ← Caminho da imagem
}
```

## 🎯 **O que Você Pode Customizar:**

✅ **`name`**: Nome do item (ex: "Espada Mística", "Poção Ancestral")  
✅ **`description`**: Descrição que aparece quando o item é criado  
❌ **`id`**: NÃO altere (quebra as receitas)  
❌ **`effect`**: Gerado automaticamente baseado na combinação  

## 🔢 **Como os Itens São Organizados:**

- **001-081**: Maioria drip (molho)
- **082-162**: Maioria vivencia (sagacidade)  
- **163-243**: Maioria cone (onda)

## 💡 **Exemplo de Customização:**

**ANTES:**
```javascript
{
  id: 'crafted-001',
  name: 'Item Craftado 001',
  description: 'Descrição customizável do item 001. Você pode alterar este texto.',
  // ...
}
```

**DEPOIS:**
```javascript
{
  id: 'crafted-001',
  name: 'Elixir da Prosperidade',
  description: 'Uma poção dourada que combina a sabedoria dos filósofos com o poder do ouro líquido. Concede visão além do véu da realidade financeira.',
  // ...
}
```

## 🚀 **Workflow Recomendado:**

1. **Abra**: `src/data/items/index.ts`
2. **Encontre**: `crafted-001` até `crafted-243`
3. **Altere**: Apenas `name` e `description`
4. **Salve**: O jogo funcionará automaticamente

## 🎨 **Dicas de Naming:**

- **Drip items**: Nomes relacionados a líquidos, molhos, fluidos
- **Vivencia items**: Nomes relacionados a sabedoria, conhecimento, experiência
- **Cone items**: Nomes relacionados a explosões, energia, ondas

## ⚡ **Exemplo Prático de Cada Tipo:**

```javascript
// Drip (molho)
name: 'Néctar dos Deuses'
description: 'Essência líquida que flui pelos canais da eternidade.'

// Vivência (sagacidade)  
name: 'Cristal da Memória'
description: 'Fragmento cristalizado contendo eons de conhecimento ancestral.'

// Cone (onda)
name: 'Fragmento Explosivo'
description: 'Energia comprimida prestes a explodir em ondas devastadoras.'
```

## 📊 **Status:**
- ✅ 243 itens criados
- ✅ 243 receitas criadas  
- ✅ Sistema simplificado
- ✅ Totalmente customizável
- ✅ IDs preservados (receitas funcionam)

**Divirta-se customizando! 🎮** 