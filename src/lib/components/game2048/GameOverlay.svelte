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
    <button onclick={onNewGame}>New Game</button>
    {#if onContinue}
        <button onclick={onContinue}>Keep going</button>
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
        gap: 1rem;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 8px;
        z-index: 1;
    }
</style>