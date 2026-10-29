<script lang="ts">
    import type { Direction } from '@peacestay/arcade-core';
    
    interface Props {
        onMove: (direction: Direction) => void;
    }

    const { onMove }: Props = $props();
</script>

<div class="arrow-pad">
    <button class="button up" aria-label="Move Up" onclick={() => onMove('up')}>↑</button>
    <button class="button down" aria-label="Move Down" onclick={() => onMove('down')}>↓</button>
    <button class="button left" aria-label="Move Left" onclick={() => onMove('left')}>←</button>
    <button class="button right" aria-label="Move Right" onclick={() => onMove('right')}>→</button>
</div>

<style>
    .arrow-pad {
        display: none;
    }

    @media (hover:none) and (pointer: coarse) {
        .arrow-pad {
            display: grid;
            gap: var(--space-2);
            justify-content: center;
        }
        .up    { grid-column: 2; grid-row: 1; }
        .left  { grid-column: 1; grid-row: 2; }
        .down  { grid-column: 2; grid-row: 2; }
        .right { grid-column: 3; grid-row: 2; }

        button {
            width: 50px;
            height: 50px;
            font-size: var(--step-3);
            padding: 0;
            justify-content: center;
        }
    }
</style>