import { createBoard, move, spawn, score } from '@peacestay/arcade-core';
import type { Direction } from '@peacestay/arcade-core';

export const game = $state({
    board: createBoard(),
    score: 0,
    best: 0,
    keepPlaying: false
});

export function newGame(): void {
    game.board = createBoard();
    // spawn twice
    game.board = spawn(spawn(game.board));
    game.score = 0;
    game.keepPlaying = false;
}

export function play(direction: Direction): void {
    const next = move(game.board, direction);
    if (next === game.board) return;
    game.score += score(next);
    game.best = Math.max(game.best, game.score);
    game.board = spawn(next);
}

export function continueGame(): void {
    game.keepPlaying = true;
}