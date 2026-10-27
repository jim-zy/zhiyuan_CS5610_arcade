<script lang="ts">
    import { scale } from "svelte/transition"; 

    interface Props {
        value: number;
        row: number;
        col: number;
    }

    let { value, row, col }: Props = $props();
</script>

<div class="tile" style:--row={row} style:--col={col}>
    <div class="face" in:scale={{ duration: 150 }}>{value}</div>
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
        background-color: aliceblue;
        font: bold 2em sans-serif;
        display: grid;
        place-items: center;
        border-radius: 5px;
    }
</style>
