import React from 'react';
import type { Item } from '@/types/game';
import '@/styles/shared.css';
import '@/styles/battleScene.css';

interface ItemRewardScreenProps {
  gymName: string;
  availableItems: Item[];
  onItemSelect: (item: Item) => void;
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
      return '#6B7280';
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

export default function ItemRewardScreen({ gymName, availableItems, onItemSelect }: ItemRewardScreenProps) {
  return (
    <div className="level-up-screen">
      <h2>🏆 Ginásio Conquistado!</h2>
      <p>Você derrotou o <strong>{gymName}</strong>!</p>
      <p>Escolha um item como recompensa:</p>
      
      <div className="items-grid">
        {availableItems.map((item) => (
          <div 
            key={item.id} 
            className="item-reward-card"
            onClick={() => onItemSelect(item)}
            style={{
              borderColor: getRarityColor(item.rarity),
              boxShadow: getRarityGlow(item.rarity)
            }}
          >
            <div className="item-sprite">
              <img src={item.sprite} alt={item.name} />
            </div>
            
            <div className="item-info">
              <h3 style={{ color: getRarityColor(item.rarity) }}>
                {item.name}
              </h3>
              
              <div className="item-rarity">
                <span 
                  className={`rarity-badge rarity-${item.rarity}`}
                  style={{ backgroundColor: getRarityColor(item.rarity) }}
                >
                  {item.rarity.toUpperCase()}
                </span>
              </div>
              
              <p className="item-description">
                {item.description}
              </p>
              
              {item.effect && (
                <div className="item-effect">
                  <small>
                    <strong>Efeito:</strong> {getEffectDescription(item.effect)}
                  </small>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getEffectDescription(effect: any) {  switch (effect.type) {    case 'drip':      return `+${effect.value} Molho`;    case 'vivencia':      return `+${effect.value} Sagacidade`;    case 'estourar-o-cone':      return `+${effect.value} Onda`;    default:      return 'Efeito especial';  }} 