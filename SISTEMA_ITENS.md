# 🎒 Sistema de Itens - Jogo Soduto

## 📖 Visão Geral

O sistema de itens permite aos jogadores coletar recompensas após derrotar ginásios e criar itens lendários através de crafting.

## 🏆 Como Funciona

### 1. **Derrotar Ginásios**
- Após derrotar todos os inimigos de um ginásio, aparece a tela de recompensa
- O jogador pode escolher **1 item** de **5 opções** disponíveis
- Cada ginásio tem itens únicos temáticos

### 2. **Efeitos dos Itens**
Os itens podem ter diferentes efeitos:
- **🩹 Heal**: Restaura vida imediatamente
- **📈 Stat Boost**: Aumenta vida/ataque permanentemente
- **⭐ Evolution**: Concede experiência adicional
- **🔥 Buff**: Efeitos permanentes especiais

### 3. **Sistema de Crafting**
- Colete **5 itens específicos** para criar **1 item lendário**
- Existem **3 receitas** de crafting diferentes
- Os itens de crafting são **consumidos** no processo

## 🏮 Ginásios e Seus Itens

### 🎭 **Fa Clube do Pericles**
- **Fragmento da Sabedoria** (Epic) - +15 Ataque
- **Pergaminho Antigo** (Epic) - +50 Vida
- **Essência Filosófica** (Rare) - +200 XP
- **Amuleto da Reflexão** (Rare) - Buff permanente
- **🗝️ Chave do Conhecimento** (Legendary)

### 💰 **Buy N Hold**
- **Moeda Dourada** (Epic) - +250 XP
- **Ação Premiada** (Epic) - +20 Ataque
- **Diamante Hands** (Rare) - Buff resistência
- **Portfolio Diversificado** (Rare) - +10 Vida
- **🗝️ Chave da Riqueza** (Legendary)

### 🏀 **Quadra**
- **Bola de Ouro** (Epic) - +25 Ataque
- **Tênis Lendário** (Epic) - Buff velocidade
- **Medalha de Campeão** (Rare) - +300 XP
- **Bebida Isotônica** (Rare) - +100 Vida
- **🗝️ Chave da Vitória** (Legendary)

### ⚡ **NJJ**
- **Óculos Reflexivos** (Epic) - Buff crítico
- **Garrafa Quebrada Sagrada** (Epic) - +30 Ataque
- **Energia Elétrica Pura** (Rare) - +40 Vida
- **Circuito Avançado** (Rare) - +350 XP
- **🗝️ Chave da Tecnologia** (Legendary)

### 🔥 **Gasoduto**
- **Gás Comprimido Raro** (Epic) - +35 Ataque
- **Tubo Reforçado** (Epic) - +60 Vida
- **Válvula de Pressão** (Rare) - Buff eficiência
- **Combustível Premium** (Rare) - +150 Vida
- **🗝️ Chave da Energia** (Legendary)

## 🛠️ Receitas de Crafting

### 👑 **Coroa do Mestre**
**Materiais:** 5 Chaves Lendárias
- Chave do Conhecimento + Chave da Riqueza + Chave da Vitória + Chave da Tecnologia + Chave da Energia
- **Efeito:** +100 Ataque (Legendary)

### 🛡️ **Armadura Suprema**  
**Materiais:** 5 Itens de Proteção
- Fragmento da Sabedoria + Tubo Reforçado + Tênis Lendário + Energia Elétrica + Diamante Hands
- **Efeito:** +200 Vida (Legendary)

### ⚔️ **Espada dos Campeões**
**Materiais:** 5 Itens de Ataque
- Bola de Ouro + Garrafa Quebrada + Gás Comprimido + Ação Premiada + Pergaminho Antigo  
- **Efeito:** +150 Ataque (Legendary)

## 🎨 Sistema Visual

### **Raridades por Cor:**
- **Common** 🔘 - Cinza (#9CA3AF)
- **Rare** 🔵 - Azul (#3B82F6) 
- **Epic** 🟣 - Roxo (#8B5CF6)
- **Legendary** 🟡 - Dourado (#F59E0B)

### **Efeitos Visuais:**
- Bordas coloridas por raridade
- Glow/brilho baseado na raridade  
- Animações hover interativas
- Preview detalhado dos efeitos

## 📁 Estrutura de Arquivos

```
src/data/items/
├── index.ts           # Todos os itens e receitas
src/components/
├── ItemRewardScreen.tsx   # Tela de escolha de item
src/context/
├── GameContext.tsx    # Gerenciamento de inventário
```

## 🔄 Fluxo do Sistema

1. **Jogador derrota ginásio** → Tela de recompensa aparece
2. **Escolhe 1 item** → Item é adicionado ao inventário + efeito aplicado  
3. **Coleta itens de crafting** → Pode criar itens lendários
4. **Completa todos os ginásios** → Pode criar os 3 itens finais

Este sistema adiciona uma camada estratégica ao jogo, incentivando os jogadores a completarem todos os ginásios para obter os itens mais poderosos! 