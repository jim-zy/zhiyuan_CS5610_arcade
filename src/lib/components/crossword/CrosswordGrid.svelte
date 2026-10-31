<script lang="ts">
    import Cell from './Cell.svelte';
    import type { CrosswordCell } from './puzzle.js';

    interface Props {
        cells: CrosswordCell[];
        showAnswers?: boolean;
    }
    let { cells, showAnswers = false }: Props = $props();
</script>

<div class="grid" aria-hidden={showAnswers ? 'true' : undefined}>
    {#each cells as cell (`${cell.row}-${cell.col}`)}
        <Cell {cell} showAnswer={showAnswers} />
    {/each}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 3px;
        width: min(100%, 22rem);
        padding: 3px;
        background-color: var(--color-border-strong);
        border-radius: var(--radius);
    }
</style>