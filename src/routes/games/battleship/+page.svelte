<script lang="ts">
    import { resolve } from '$app/paths';
    import type { PageProps } from './$types';
    import { enhance } from '$app/forms';
    let creating = $state(false);
    let joining = $state(false);
    let { data, form }: PageProps = $props();
</script>

<svelte:head>
    <title>Battleship - Zhiyuan Zhao's Arcade</title>
</svelte:head>

<h1>Battleship</h1>

<form 
    method="POST" 
    use:enhance={() => {
        creating = true;
        return async ({ update }) => {
            await update();
            creating = false;
        };
    }}
    action="?/create">
    <button class="button" disabled={creating}>
        {creating ? 'Creating game...' : 'New Game'}
    </button>
</form>

<h2>Open Games</h2>
<ul>
    {#each data.waiting as game (game.id)}
        <li>
            {game.players[0]}'s game
            <form method="POST" 
                use:enhance={() => {
                    joining = true;
                    return async ({ update }) => {
                        await update();
                        joining = false;
                    };
                }}
                action="?/join">
                <input type="hidden" name="id" value={game.id} />
                <button class="button"disabled={joining}>
                    {joining ? 'Joining game...' : 'Join'}
                </button>
            </form>
        </li>
    {:else}
        <li>No open games, start a new one!</li>
    {/each}
</ul>

<h2>Your Games</h2>
<ul>
    {#each data.mine as game (game.id)}
        <li>
            <a href={resolve('/games/battleship/[id]', { id: game.id })}>
                {game.players[0]} vs {game.players[1] ?? 'Waiting...'} - {game.status}
            </a>
        </li>
    {:else}
        <li>You haven't started any games yet!</li>
    {/each}
</ul>

{#if form?.message}
    <p role="alert">{form.message}</p>
{/if}