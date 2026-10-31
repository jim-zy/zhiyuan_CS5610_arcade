<script lang="ts">
    import { onMount } from 'svelte';
    import { game, newGame, play, continueGame } from '#lib/game2048.svelte.js';
    import Board from '#lib/components/game2048/Board.svelte';
    import ScoreBox from '#lib/components/game2048/ScoreBox.svelte';
    import { hasMoves, type Direction } from '@peacestay/arcade-core';
    import GameOverlay from '#lib/components/game2048/GameOverlay.svelte';
    import ArrowPad from '#lib/components/game2048/ArrowPad.svelte';

    const WIN_VALUE = 2048;

    const won = $derived(game.board.tiles.some(tile => tile.value >= WIN_VALUE));
    const over = $derived(game.board.tiles.length > 0 && !hasMoves(game.board));
    const showWin = $derived(won && !game.keepPlaying);

    const announcement = $derived.by((): string => {
        if (over) {
            return "Game Over. Final Score: " + game.score;
        } else if (showWin) {
            return "You Reached " + WIN_VALUE + "!" + " Score: " + game.score;
        } else {
            return "Score: " + game.score;
        }
    });


    onMount(() => newGame());

    function handleKey(event: KeyboardEvent): void {
        let direction: Direction;
        
        if (over || showWin) return;

        switch (event.key) {
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowDown':
                direction = 'down';
                break;
            case 'ArrowLeft':
                direction = 'left';
                break;
            case 'ArrowRight':
                direction = 'right';
                break;
            default:
                return;
        }
        event.preventDefault();
        tryMove(direction);
    }

    function tryMove(direction: Direction): void {
        if (over || showWin) return;
        play(direction);
    }
</script>

<svelte:head>
    <title>2048 - Zhiyuan Zhao's Arcade</title>
</svelte:head>

<svelte:window onkeydown={handleKey} />

<div class="game">
    <div class="game-header">
        <h1>2048</h1>
        <ScoreBox label="Score" value={game.score} />
        <ScoreBox label="Best" value={game.best} />
        <button class="button" onclick={newGame}>New Game</button>
    </div>

    <p class="visually-hidden" aria-live="polite">{announcement}</p>


    <div class="board-area">
        <Board tiles={game.board.tiles} />

        {#if over}
            <GameOverlay title="Game Over" onNewGame={newGame} />
        {:else if showWin}
            <GameOverlay title="You Win!" onNewGame={newGame} onContinue={continueGame} />
        {/if}
    </div> 
    <ArrowPad onMove={tryMove} />
</div>


<style>
    .game {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-4);
        padding: var(--space-4);
    }
    .game-header {
        display: flex;
        width: var(--board-size);
        align-items: center;
        gap: var(--space-2);
    }
    .board-area {
        position: relative;
    }

    h1 {
        margin: 0 auto 0 0;
    }
</style>