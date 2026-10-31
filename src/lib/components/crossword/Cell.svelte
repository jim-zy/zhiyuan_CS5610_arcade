<script lang="ts">
    import type { CrosswordCell } from '#lib/components/crossword/puzzle.js';

    interface Props {
        cell: CrosswordCell;
        showAnswer?: boolean;
    }

    let { cell, showAnswer = false }: Props = $props();
</script>

{#if cell.letter === null}
    <div class="cell cell-block" aria-hidden="true"></div>
{:else}
    <div class="cell" class:solution={showAnswer}>
        {#if cell.number !== null}
            <span class="cell-number" aria-hidden="true">{cell.number}</span>
        {/if}

        {#if showAnswer}
            <span class="cell-letter" aria-hidden="true">{cell.letter}</span>
        {:else}
            <input type="text" maxlength="1" aria-label={cell.label} />
        {/if}
    </div>
{/if}

<style>
    .cell {
        position: relative;
        aspect-ratio: 1;
        min-width: var(--tap-min);
        min-height: var(--tap-min);
        background-color: var(--color-cell);
        transition: background-color 150ms ease;
    }

    .cell-block {
        background-color: var(--color-bg);
    }

    .cell-number {
        position: absolute;
        top: 2px;
        left: 4px;
        font-size: var(--step--1);
        font-weight: 700;
        line-height: 1;
        color: var(--color-cell-number);
        pointer-events: none;
    }

    .cell input {
        width: 100%;
        height: 100%;
        padding: var(--space-2) 0 0;
        border: 0;
        background: transparent;
        color: var(--color-cell-text);
        caret-color: var(--color-cell-text);
        font-size: var(--step-2);
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
    }

    /* Square highlight */
    .cell:focus-within {
        background-color: var(--color-accent-hover);
    }

    .cell input:focus-visible {
        outline-offset: -3px;
    }

    /* Solution grid: letters instead of inputs */
    .cell.solution {
        display: grid;
        place-items: center;
    }

    .cell-letter {
        padding-top: var(--space-2);
        font-size: var(--step-2);
        font-weight: 700;
        color: var(--color-cell-text);
    }
</style>