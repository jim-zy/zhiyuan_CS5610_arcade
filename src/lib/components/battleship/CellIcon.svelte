<script lang="ts">
    
    interface Props {
        state: 'empty' | 'ship' | 'hit' | 'miss' | 'sunk';
    }

    let { state }: Props = $props();
</script>

<svg class="face {state}" viewBox="0 0 24 24" aria-hidden="true">
    {#if state === 'miss'}
        <circle cx="12" cy="12" r="4" fill="currentColor" />
    {:else if state === 'hit'}
        <path d="M6 6 L18 18 M18 6 L6 18" stroke="currentColor" stroke-width="3"
        stroke-linecap="round" />
    {:else if state === 'sunk'}
        <rect x="3" y="3" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" />
        <path d="M7 7 L17 17 M17 7 L7 17" stroke="currentColor" stroke-width="3"
        stroke-linecap="round" />
    {/if}
</svg>

<style>
    .face {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: inherit;
        background-color: var(--color-water);
    }
    .ship {
        background-color: var(--color-ship);
    }
    .hit {
        background-color: var(--color-hit);
        color: var(--color-on-hit);
    }
    .miss {
        color: var(--color-on-miss);
        background-color: var(--color-miss);
    }
    .sunk {
        color: var(--color-on-sunk);
        background-color: var(--color-sunk);
    }
</style>