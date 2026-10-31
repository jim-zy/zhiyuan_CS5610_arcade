<script lang="ts">
    import { page } from '$app/state';
    import { resolve } from '$app/paths';

    const links = [
        { href: '/', label: 'Home' },
        { href: '/games/crossword', label: 'Crossword' },
        { href: '/games/2048', label: '2048' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' }
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
    </nav>
</header>