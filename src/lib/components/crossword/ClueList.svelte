<script lang="ts">
    import type { Clue } from './puzzle.js';

    interface Props {
        title: string;
        clues: Clue[];
    }
    const { title, clues }: Props = $props();
</script>

<section class="clue-group">
    <h3>{title}</h3>
    <ol>
        {#each clues as clue (clue.number)}
            <li value={clue.number}>{clue.text}</li>
        {/each}
    </ol>
</section>

<style>
    .clue-group h3 {
        margin-bottom: var(--space-2);
        font-size: var(--step-0);
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.08em;
    }

    .clue-group ol {
        margin: 0;
        padding-left: var(--space-6);
    }

    .clue-group li + li {
        margin-top: var(--space-2);
    }

    .clue-group li::marker {
        font-weight: 700;
        color: var(--color-accent);
    }
</style>