import React from 'react';
import type { Item } from '@/types/game';
import '@/styles/shared.css';
import '@/styles/battleScene.css';

interface CraftedItemDisplayProps {
  item: Item;
  onBackToMenu: () => void;
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

export default function CraftedItemDisplay({ item, onBackToMenu }: CraftedItemDisplayProps) {
  return (
    <div className="level-up-screen">
      {/* Background overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.7), rgba(0,0,0,0.9))',
          zIndex: -1
        }}
      />

      {/* Main content */}
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
        {/* Success message */}
        <h1 
          style={{ 
            fontSize: '3rem', 
            marginBottom: '2rem',
            background: 'linear-gradient(45deg, #FFD700, #FFA500)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(255, 215, 0, 0.5)'
          }}
        >
          🎉 Item Criado! 🎉
        </h1>

        {/* Item display */}
        <div 
          className="item-reward-card"
          style={{
            borderColor: getRarityColor(item.rarity),
            boxShadow: `${getRarityGlow(item.rarity)}, 0 0 30px rgba(255, 255, 255, 0.1)`,
            maxWidth: '600px',
            width: '100%',
            margin: '2rem 0',
            transform: 'scale(1.1)',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="item-sprite" style={{ marginBottom: '1.5rem' }}>
            <img 
              src={item.sprite} 
              alt={item.name}
              style={{
                width: '120px',
                height: '120px',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
              }}
            />
          </div>
          
          <div className="item-info">
            <h2 
              style={{ 
                color: getRarityColor(item.rarity),
                fontSize: '2rem',
                marginBottom: '1rem',
                textShadow: `0 0 10px ${getRarityColor(item.rarity)}`
              }}
            >
              {item.name}
            </h2>
            
            <div className="item-rarity" style={{ marginBottom: '1.5rem' }}>
              <span 
                className={`rarity-badge rarity-${item.rarity}`}
                style={{ 
                  backgroundColor: getRarityColor(item.rarity),
                  fontSize: '1rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold'
                }}
              >
                {item.rarity}
              </span>
            </div>
            
            <p 
              className="item-description"
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.6',
                maxWidth: '500px',
                margin: '0 auto 1.5rem',
                color: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              {item.description}
            </p>
            
            {item.effect && (
              <div 
                className="item-effect"
                style={{
                  background: 'rgba(255, 215, 0, 0.1)',
                  border: '1px solid rgba(255, 215, 0, 0.3)',
                  borderRadius: '10px',
                  padding: '1rem',
                  marginTop: '1rem'
                }}
              >
                <strong style={{ color: getRarityColor(item.rarity) }}>
                  Efeito: {item.effect.type} +{item.effect.value}
                </strong>
              </div>
            )}
          </div>
        </div>

        {/* Back button */}
        <button 
          className="move-button"
          onClick={onBackToMenu}
          style={{ 
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            marginTop: '2rem',
            background: 'linear-gradient(135deg, #FFD700, #FFA500)',
            border: '2px solid #DAA520',
            borderRadius: '15px',
            color: '#000',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.4)';
          }}
        >
          🏠 Voltar ao Menu Principal
        </button>
      </div>
    </div>
  );
} 