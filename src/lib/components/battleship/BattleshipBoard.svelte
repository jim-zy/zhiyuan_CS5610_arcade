<script lang="ts">
    import { BOARD_SIZE, getSunkShips, type BattleshipBoard } from '@peacestay/arcade-core';
    import CellIcon from './CellIcon.svelte';

    interface Props {
        board: BattleshipBoard;
        label: string;
        onfire?: (x: number, y: number) => void;
        disabled?: boolean;
    }

    let { board, label, onfire, disabled }: Props = $props();

    const indexes = Array.from({ length: BOARD_SIZE }, (_, i) => i);
    const sunkShips = $derived(getSunkShips(board));

    type CellState = 'empty' | 'ship' | 'hit' | 'miss' | 'sunk';
    const COLUMNS = 'ABCDEFGHIJ';

    function isFired(x: number, y: number): boolean {
        return board.shots.some((s) => s.x === x && s.y === y);
    }

    // text for screen readers, e.g. "A1: hit", "B3: miss", "C5: sunk"
    function cellLabel(x: number, y: number): string {
        const state = cellState(x, y);
        const name = `${COLUMNS[x]}${y + 1}`;
        return (state === 'empty' || state === 'ship') ? `${name}: unhit` : `${name}: ${state}`;
    }

    function cellState(x: number, y: number): CellState {
        const shot = board.shots.find((s) => s.x === x && s.y === y);
        if (shot) {
            if (!shot.hit) return 'miss';
            const isSunkShip = sunkShips.some((ship) => ship.cells.some((c) => c.x === x && c.y === y));
            return isSunkShip ? 'sunk' : 'hit'
        };

        const hasShip = board.ships.some((ship) => ship.cells.some((c) => c.x === x && c.y === y));
        if (hasShip) return 'ship';
        return 'empty';
    }
</script>

<h2>{label}</h2>
<div class="grid" style="--cols: {BOARD_SIZE}">
    {#each indexes as y}
        {#each indexes as x}
            {#if onfire}
                <button
                    class="cell"
                    aria-label={cellLabel(x, y)}
                    disabled={disabled || isFired(x, y)}
                    onclick={() => onfire(x, y)}>
                    <CellIcon state={cellState(x, y)} />
                </button>
            {:else}
                <div class="cell">
                    <CellIcon state={cellState(x, y)} />
                </div>
            {/if}
        {/each}
    {/each}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(var(--cols), 1fr);
        gap: var(--space-1);
        width: var(--battleship-board-size);
        aspect-ratio: 1;
    }

    .cell {
        border-radius: var(--radius);
        border: 1px solid var(--color-text-muted);
        overflow: hidden;
    }
    
    button.cell {
        padding: 0;
        cursor: pointer;
    }

    button.cell:disabled {
        cursor: default;
    }

    button.cell:focus-visible {
        outline: 2px solid var(--color-focus);
        outline-offset: 2px;
    }
</style>
