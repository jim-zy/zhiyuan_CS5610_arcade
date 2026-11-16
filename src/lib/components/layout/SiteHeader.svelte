<script lang="ts">
    import { page } from '$app/state';
    import { resolve } from '$app/paths';
    import { enhance } from '$app/forms';
    let submitting = $state(false);

    const links = [
        { href: '/', label: 'Home' },
        { href: '/games/crossword', label: 'Crossword' },
        { href: '/games/2048', label: '2048' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
        { href: '/games/battleship', label: 'Battleship' }
    ] as const;
</script>

<header class="site-header">
    <nav aria-label="Primary">
        <a class="brand" href={resolve('/')}>Zhiyuan Zhao's Arcade</a>
        <ul class="nav-list">
            {#each links as link (link.href)}
                <li>
                    <a
                        href={resolve(link.href)}
                        aria-current={page.route.id === link.href ? 'page' : undefined}
                    >{link.label}</a>
                </li>
            {/each}
        </ul>
        {#if page.data.user}
            <span>{page.data.user.username}</span>
            <form 
                method="POST" 
                use:enhance={() => {
                    submitting = true;
                    return async ({ update }) => {
                        await update();
                        submitting = false;
                    };
                }}
                action="/logout">
                <button disabled={submitting}>{submitting ? 'Logging out...' : 'Logout'}</button>
            </form>
        {:else}
            <a href={resolve('/login')}>Login</a>
            <a href={resolve('/register')}>Register</a>
        {/if}
    </nav>
</header>