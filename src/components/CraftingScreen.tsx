import React, { useEffect } from 'react';
import type { Item, CraftingRecipe } from '@/types/game';
import { CRAFTING_RECIPES } from '@/data/items';
import '@/styles/shared.css';
import '@/styles/battleScene.css';

interface CraftingScreenProps {
  inventory: Item[];
  onCraftItem: (recipeId: string) => Item | null;
  canCraftItem: (recipeId: string) => boolean;
  onBackToGame: () => void;
}

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case 'common':
      return '#9CA3AF';
    case 'rare':
      return '#3B82F6';
    case 'epic':
      return '#8B5CF6';
    case 'legendary':
      return '#F59E0B';
    default:
      return '#9CA3AF';
  }
};

const getRarityGlow = (rarity: string) => {
  switch (rarity) {
    case 'common':
      return '0 0 10px rgba(156, 163, 175, 0.5)';
    case 'rare':
      return '0 0 15px rgba(59, 130, 246, 0.6)';
    case 'epic':
      return '0 0 20px rgba(139, 92, 246, 0.7)';
    case 'legendary':
      return '0 0 25px rgba(245, 158, 11, 0.8)';
    default:
      return 'none';
  }
};

function getRequiredItemsDisplay(recipe: CraftingRecipe, inventory: Item[]): JSX.Element {
  return (
    <div className="required-items">
      <h4>Materiais Necessários:</h4>
      <div className="materials-list">
        {recipe.requiredItems.map((itemId) => {
          const hasItem = inventory.some(item => item.id === itemId);
          const itemName = itemId.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ');
          
          return (
            <div 
              key={itemId} 
              className={`material-item ${hasItem ? 'available' : 'missing'}`}
            >
              <span className={hasItem ? 'text-green' : 'text-red'}>
                {hasItem ? '✓' : '✗'} {itemName}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function CraftingScreen({ inventory, onCraftItem, canCraftItem, onBackToGame }: CraftingScreenProps) {
  useEffect(() => {
    // Automatically craft the first available recipe
    const availableRecipe = CRAFTING_RECIPES.find(recipe => canCraftItem(recipe.id));
    
    if (availableRecipe) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        onCraftItem(availableRecipe.id);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [inventory, canCraftItem, onCraftItem]);

  const availableRecipe = CRAFTING_RECIPES.find(recipe => canCraftItem(recipe.id));

  return (
    <div className="level-up-screen">
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          padding: '2rem',
          textAlign: 'center'
        }}
      >
        {availableRecipe ? (
          <>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
              🔧 Processando Crafting...
            </h2>
            <div className="loading-spinner" style={{
              width: '60px',
              height: '60px',
              border: '6px solid rgba(255, 215, 0, 0.3)',
              borderTop: '6px solid #FFD700',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              marginBottom: '2rem'
            }} />
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
              Combinando itens para criar {availableRecipe.name.replace('Receita: ', '')}...
            </p>
          </>
        ) : (
          <>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
              🔧 Mesa de Crafting
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              Você precisa de itens dos 5 ginásios para fazer crafting.
            </p>
            <p style={{ fontSize: '1rem', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
              <strong>Inventário:</strong> {inventory.length} itens
            </p>
            
            <button 
              className="move-button"
              onClick={onBackToGame}
              style={{ 
                padding: '1rem 2rem',
                fontSize: '1.2rem',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                border: '2px solid #DAA520',
                borderRadius: '15px',
                color: '#000',
                fontWeight: 'bold'
              }}
            >
              ← Voltar ao Jogo
            </button>
          </>
        )}
      </div>
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
} 