<script lang="ts">
    import { fade } from 'svelte/transition';

    interface Props {
        title: string;
        onNewGame: () => void;
        onContinue?: () => void;
    }

    const { title, onNewGame, onContinue }: Props = $props();
</script>

<div class="overlay" transition:fade={{ duration: 200 }}>
    <h2>{title}</h2>
    <button class="button" onclick={onNewGame}>New Game</button>
    {#if onContinue}
        <button class="button" onclick={onContinue}>Keep going</button>
    {/if}
</div>

<style>
    .overlay {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--space-4);
        background-color: var(--color-overlay);
        border-radius: var(--radius);
        z-index: 1;
    }
</style>