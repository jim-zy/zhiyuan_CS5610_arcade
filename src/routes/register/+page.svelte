<script>
    import { enhance } from '$app/forms';
    let submitting = $state(false);
    let { form } = $props();
</script>

<svelte:head>
    <title>Sign Up - Zhiyuan Zhao's Arcade</title>
</svelte:head>

<h1>Sign Up</h1>

<form 
    class="form"
    method="POST"
    use:enhance={() => {
        submitting = true;
        return async ({ update }) => {
            await update();
            submitting = false;
        };
    }}>
    <label>
        Email
        <input type="email" name="email" required />
    </label>
    <label>
        Username
        <input type="text" name="username" required />
    </label>
    <label>
        Password
        <input type="password" name="password" required />
    </label>
    <button class="button" disabled={submitting}>
        {submitting ? 'Signing up...' : 'Sign Up'}
    </button>
</form>

{#if form?.message}
    <p role="alert">{form.message}</p>
{/if}