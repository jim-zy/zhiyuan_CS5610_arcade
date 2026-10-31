<svelte:head>
    <title>Contact - Zhiyuan Zhao's Arcade</title>
</svelte:head>

<h1>Contact Me</h1>
<p>The best way to reach me is by email. You can also find me on LinkedIn.</p>

<section class="contact-section" aria-labelledby="links-heading">
    <h2 id="links-heading">Find me online</h2>
    <ul class="contact-list">
        <li>
            <span class="contact-label">Email</span>
            <a href="mailto:jim.zy@outlook.com">jim.zy@outlook.com</a>
        </li>
        <li>
            <span class="contact-label">LinkedIn</span>
            <a href="https://www.linkedin.com/in/jim-zhiyuan/">linkedin.com/in/jim-zhiyuan</a>
        </li>
    </ul>
</section>

<section class="contact-section" aria-labelledby="message-heading">
    <h2 id="message-heading">Send a message</h2>
    <p class="form-note">Submitting opens your email app with the message filled in.</p>

    <form class="contact-form" action="mailto:jim.zy@outlook.com" method="post" enctype="text/plain">
        <label for="contact-name">Name</label>
        <input type="text" id="contact-name" name="name" autocomplete="name" required>

        <label for="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows="5" required></textarea>

        <button type="submit" class="button">Send message</button>
    </form>
</section>

<style>
    .contact-section {
        margin-top: var(--space-7);
        padding-top: var(--space-6);
        border-top: 1px solid var(--color-border);
    }

    .contact-section h2 {
        font-size: var(--step-2);
    }

    /* Email and LinkedIn */
    .contact-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-3);
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .contact-list li {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--space-1) var(--space-4);
    }

    .contact-label {
        min-width: 5rem;
        color: var(--color-text-muted);
    }

    .contact-list a {
        display: inline-flex;
        align-items: center;
        min-height: var(--tap-min);
        overflow-wrap: anywhere;
    }

    .form-note {
        color: var(--color-text-muted);
        font-size: var(--step--1);
    }

    /* Form */
    .contact-form {
        display: flex;
        flex-direction: column;
        gap: var(--space-2);
        max-width: 32rem;
    }

    .contact-form label {
        font-weight: 700;
    }

    .contact-form input,
    .contact-form textarea {
        width: 100%;
        min-height: var(--tap-min);
        margin-bottom: var(--space-3);
        padding: var(--space-2) var(--space-3);
        border: 1px solid var(--color-border-strong);
        border-radius: var(--radius);
        background-color: var(--color-surface);
        color: var(--color-text);
    }

    .contact-form textarea {
        resize: vertical;
    }

    .contact-form .button {
        align-self: flex-start;
    }
</style>
