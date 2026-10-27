<script lang="ts">
    import Tile from './Tile.svelte';
    import type { Tile as TileData } from '@peacestay/arcade-core';

    interface Props {
        tiles: TileData[];
    }

    const { tiles }: Props = $props();
</script>

<div class="board">
    {#each Array(16) as _}
        <div class="cell"></div>
    {/each}

    {#each tiles as tile (tile.id)}
        <Tile value={tile.value} row={tile.row} col={tile.col} />
    {/each}
</div>

<style>
    .board {
        position: relative;
        width: min(90vw, 28rem);
        aspect-ratio: 1;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        background-color: #bbada0;
        border-radius: 8px; /* rounded corners*/
        --gap: 3px;
    }

    .cell {
        margin: var(--gap);
        background-color: #cdc1b4; 
        border-radius: 4px; 
    }

</style>