<script lang="ts">
    import CrosswordGrid from '#lib/components/crossword/CrosswordGrid.svelte';
    import ClueList from '#lib/components/crossword/ClueList.svelte';
    import { puzzle, buildCells } from '#lib/components/crossword/puzzle.js';

    const cells = buildCells(puzzle);
</script>

<svelte:head>
    <title>Mini Crossword - Zhiyuan Zhao's Arcade</title>
</svelte:head>

<h1>Mini Crossword</h1>
<p class="intro">Click or tab into a square and type a letter. Tab moves to the next square, Shift+Tab moves back. Reveal the solution if you get stuck.</p>

<div class="puzzle-layout">
    <section class="puzzle" aria-labelledby="puzzle-heading">
        <h2 class="visually-hidden" id="puzzle-heading">Puzzle grid</h2>

        <form class="puzzle-form">
            <CrosswordGrid {cells} />

            <div class="puzzle-controls">
                <button type="reset" class="button">Clear grid</button>
            </div>
        </form>
    </section>

    <section class="clues" aria-labelledby="clues-heading">
        <h2 id="clues-heading">Clues</h2>
        <div class="clue-lists">
            <ClueList title="Across" clues={puzzle.across} />
            <ClueList title="Down" clues={puzzle.down} />
        </div>
    </section>
</div>

<section class="solution" aria-labelledby="solution-heading">
    <h2 id="solution-heading">Solution</h2>

    <details class="solution-details">
        <summary class="button">Reveal solution</summary>

        <div class="solution-content">
            <CrosswordGrid {cells} showAnswers />

            <ul class="answer-list">
                {#each puzzle.across as { number, answer } (number) }
                    <li><strong>{number} Across:</strong> {answer}</li>
                {/each}
                {#each puzzle.down as { number, answer } (number) }
                    <li><strong>{number} Down:</strong> {answer}</li>
                {/each}
            </ul>
        </div>
    </details>
</section>

<style>
    .intro {
        color: var(--color-text-muted);
        margin: 0 0 var(--space-6);
    }

    .puzzle-layout {
        display: grid;
        grid-template-columns: minmax(0, 22rem) 1fr;
        gap: var(--space-7);
        align-items: start;
    }

    .puzzle-controls {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--space-4);
        margin-top: var(--space-5);
    }

    .clues h2 {
        font-size: var(--step-2);
    }

    .clue-lists {
        display: flex;
        flex-direction: column;
        gap: var(--space-5);
    }

    .solution {
        margin-top: var(--space-7);
        padding-top: var(--space-6);
        border-top: 1px solid var(--color-border);
    }

    .solution h2 {
        font-size: var(--step-2);
    }

    .solution-details summary {
        gap: var(--space-2);
        list-style: none;
    }

    .solution-details summary::-webkit-details-marker {
        display: none;
    }

    .solution-details summary::before {
        content: "▸";
        color: var(--color-accent);
        transition: transform 150ms ease;
    }

    .solution-details[open] summary::before {
        transform: rotate(90deg);
    }

    .solution-details[open] summary {
        border-color: var(--color-accent);
    }

    .solution-content {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-6);
        align-items: start;
        margin-top: var(--space-5);
    }

    .answer-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .answer-list li + li {
        margin-top: var(--space-2);
    }

    @media (max-width: 48rem) {
        .puzzle-layout {
            grid-template-columns: 1fr;
            gap: var(--space-6);
        }
    }
</style>