<script lang="ts">
    import { resolve } from '$app/paths';
    import { refreshAll } from '$app/navigation';
    import BattleshipBoard from '#lib/components/battleship/BattleshipBoard.svelte';
    import BoardLegend from '#lib/components/battleship/BoardLegend.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    const game = $derived(data.game);
    const me = $derived(game.players.find((p) => p.isYou));
    const opponent = $derived(game.players.find((p) => !p.isYou));

    const statusText = $derived.by(() => {
        if (game.status === 'waiting') return 'Waiting for opponent...';
        if (game.status === 'active') {
            return game.turn ? 'Your turn' : `${opponent.username}'s turn`;
        }
        if (!me) return `${game.winner} won!`; // includes any vistor
        return game.winner === me.username ? 'You won!' : 'You lost!';
    });

    let pending = $state(false);
    let shotError = $state('');

    async function fire(x: number, y: number) {
        pending = true;
        shotError = '';
        try {
            const response = await fetch(resolve('/games/battleship/[id]/shots', { id: game.id }), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ x, y })
            });
            if (!response.ok) {
                const errorData = await response.json();
                shotError = errorData.error;
            } else {
                await refreshAll();
            }
        } catch (error) {
            shotError = 'Network error';
        } finally {
            pending = false;
        }
    }
</script>

<svelte:head>
    <title>BattleShip - Zhiyuan Zhao's Arcade</title>
</svelte:head>

<h1>Battleship</h1>
<h2 aria-live="polite">{pending ? 'Firing...' : statusText}</h2>
<button class="button" onclick={() => refreshAll()}>Refresh</button>

{#if me && opponent}
    <BattleshipBoard board={me.board} label="Your fleet" />
    
    <h3>click on a cell to fire</h3>
    <BattleshipBoard
     board={opponent.board}
     onfire={fire}
     disabled={pending || !game.turn || game.status !== 'active'}
     label="Enemy Board" />
{:else}
    {#each game.players as player}
        <BattleshipBoard board={player.board} label={player.username} />
    {/each}
{/if}
<BoardLegend />

<a href={resolve('/games/battleship')}>Back to Battleship Lobby</a>

{#if shotError}
    <p role="alert">{shotError}</p>
{/if}
