<script lang="ts">
    import type { Direction } from '@peacestay/arcade-core';
    
    interface Props {
        onMove: (direction: Direction) => void;
    }

    const { onMove }: Props = $props();
</script>

<div class="arrow-pad">
    <button class="up" aria-label="Move Up" onclick={() => onMove('up')}>↑</button>
    <button class="down" aria-label="Move Down" onclick={() => onMove('down')}>↓</button>
    <button class="left" aria-label="Move Left" onclick={() => onMove('left')}>←</button>
    <button class="right" aria-label="Move Right" onclick={() => onMove('right')}>→</button>
</div>

<style>
    .arrow-pad {
        display: none;
        gap: 0.5rem;

    }

    @media (hover:none) and (pointer: coarse) {
        .arrow-pad {
            display: grid;
            gap: 0.5rem;
            justify-content: center;
        }
        .up    { grid-column: 2; grid-row: 1; }
        .left  { grid-column: 1; grid-row: 2; }
        .down  { grid-column: 2; grid-row: 2; }
        .right { grid-column: 3; grid-row: 2; }

        button {
            width: 50px;
            height: 50px;
            font-size: 2rem;
        }
    }
</style>