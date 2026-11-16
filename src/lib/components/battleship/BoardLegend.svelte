<script lang="ts">
    import CellIcon from './CellIcon.svelte';

    const items = [
        { state: 'ship', label: 'Ship' },
        { state: 'hit', label: 'Hit' },
        { state: 'miss', label: 'Miss' },
        { state: 'sunk', label: 'Sunk' },
    ] as const;
</script>

<ul class="legend">
    {#each items as item}
        <li>
            <span class="swatch {item.state}">
                <CellIcon state={item.state} />
            </span>
            {item.label}
        </li>
    {/each}
</ul>

<style>
    .legend {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-3);
        list-style: none;
        padding: 0;
    }

    .legend li {
        display: flex;
        align-items: center;
        gap: var(--space-2);
    }

    .swatch {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: var(--radius);
        border: 1px solid var(--color-text-muted);
    }
</style>