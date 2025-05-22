export interface Item {
    id: string;
    name: string;
    description: string;
    effect: ItemEffect;
    type: ItemType;
}

export interface ItemEffect {
    type: 'HEAL' | 'BUFF' | 'EVOLUTION';
    value: number;
    stat?: 'ATTACK' | 'DEFENSE' | 'SPEED';
}

export enum ItemType {
    HEALING = 'HEALING',
    BUFF = 'BUFF',
    EVOLUTION = 'EVOLUTION',
    KEY_ITEM = 'KEY_ITEM'
}
