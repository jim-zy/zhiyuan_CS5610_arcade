<script lang="ts">
    import { resolve } from '$app/paths';
</script>

<svelte:head>
    <title>Home - Zhiyuan Zhao's Arcade</title>
</svelte:head>

<h1>Welcome to the Arcade</h1>
<p>Hi, I'm Zhiyuan Zhao. This is my arcade: a small collection of browser games I'm building from scratch this semester.</p>
<p>There are two games so far: a <a href={resolve('/games/crossword')}>mini crossword</a>, 
    made with HTML and CSS, and <a href={resolve('/games/2048')}>2048</a>, 
    built with Svelte. Find both under the menu at the top. 
    More games will be added as the site grows.</p>
