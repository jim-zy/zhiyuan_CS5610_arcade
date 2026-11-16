<script>
    import { enhance } from '$app/forms';
    let submitting = $state(false);
    let { form } = $props();
</script>

<svelte:head>
    <title>Login - Zhiyuan Zhao's Arcade</title>
</svelte:head>

<h1>Login</h1>

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
        Password
        <input type="password" name="password" required />
    </label>
    <button class="button" disabled={submitting}>
        {submitting ? 'Logging in...' : 'Login'}
    </button>
</form>

{#if form?.message}
    <p role="alert">{form.message}</p>
{/if}