import type { Character } from './Character';

export interface BattleState {
    playerCharacter: Character;
    opponentCharacter: Character;
    isPlayerTurn: boolean;
    battleLog: string[];
    isBattleOver: boolean;
    winner: 'PLAYER' | 'OPPONENT' | null;
}
