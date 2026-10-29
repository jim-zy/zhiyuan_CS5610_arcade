<script lang="ts">
    import { scale } from 'svelte/transition'; 

    interface Props {
        value: number;
        row: number;
        col: number;
    }

    let { value, row, col }: Props = $props();
</script>

<div 
    class="tile" 
    style:--row={row} 
    style:--col={col}
    style:--tile-bg={`var(--tile-${Math.min(value, 2048)})`}>
    <div 
        class="face"
        class:dark-text={value >= 16}
        class:small={value >= 1024}
        in:scale={{ duration: 150 }}>{value}</div>
</div>

<style>
    .tile {
        top: 0;
        left: 0;
        position: absolute;
        width: 25%;
        height: 25%;
        transform: translate(calc(var(--col) * 100%), calc(var(--row) * 100%));
        transition: transform 100ms ease-in-out;
    }

    .face {
        margin: var(--gap);
        height: calc(100% - 2 * var(--gap));
        background-color: var(--tile-bg);
        display: grid;
        place-items: center;
        border-radius: var(--radius);
        color: var(--color-text);
        font-size: var(--step-3);
        font-weight: 700;
    }

    .face.dark-text {
        color: var(--color-on-accent);
    }
    .face.small {
        font-size: var(--step-2);
    }
</style>
