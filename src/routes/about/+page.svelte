<script lang="ts">
    import portrait from '#lib/assets/selfy-small.jpeg';
</script>

<svelte:head>
    <title>About - Zhiyuan Zhao's Arcade</title>
</svelte:head>

<h1>About Me</h1>

<div class="intro">
    <img class="portrait" src={portrait} alt="Portrait of Zhiyuan Zhao" width="480" height="640">
    <p>I'm a Master's student in Computer Science at Northeastern University. This summer, I interned as a Software Development Engineer at AWS. This arcade is where I'm practicing web development.</p>
</div>

<section class="resume-section" aria-labelledby="experience-heading">
    <h2 id="experience-heading">Experience</h2>
    <article>
        <h3>Amazon Web Services</h3>
        <h4>Software Development Engineer Intern</h4>
    </article>
</section>

<section class="resume-section" aria-labelledby="education-heading">
    <h2 id="education-heading">Education</h2>
    <article>
        <h3>Northeastern University</h3>
        <p>Master of Science in Computer Science</p>
        <p class="meta">Seattle, WA · Expected graduation December 2026</p>
    </article>
</section>

<style>
    /* Intro and portrait */
    .intro {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--space-6);
        margin-bottom: var(--space-7);
    }

    .intro p {
        flex: 1 1 20rem;
        margin: 0;
    }

    .portrait {
        width: 10rem;
        height: 10rem;
        object-fit: cover;
        border: 3px solid var(--color-accent);
        border-radius: 50%;
    }

    .resume-section {
        padding-top: var(--space-6);
        border-top: 1px solid var(--color-border);
    }

    .resume-section + .resume-section {
        margin-top: var(--space-6);
    }

    .resume-section h2 {
        font-size: var(--step-2);
    }

    .resume-section h3 {
        margin-bottom: var(--space-1);
        font-size: var(--step-1);
    }

    .resume-section h4 {
        margin: 0;
        font-size: var(--step-0);
        font-weight: 400;
        color: var(--color-accent);
    }

    .resume-section article p {
        margin: 0;
    }

    .meta {
        color: var(--color-text-muted);
        font-size: var(--step--1);
    }
</style>
