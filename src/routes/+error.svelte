<script>
    import { page } from "$app/state";
</script>

<h1>{page.status}</h1>
<p>{page.error?.message}</p>
{#if page.status === 401}
    <p>Log in to view this page.</p>
{/if}

{#if page.status === 403}
    <p>The game is not yours.</p>
{/if}

{#if page.status === 404}
    <p>Sorry, the page could not be found.</p>
{/if}

{#if page.status === 500}
    <p>Sorry, there was an internal server error.</p>
{/if}

<a href="/">Back to home</a>