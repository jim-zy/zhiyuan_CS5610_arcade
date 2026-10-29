<script lang="ts">
    interface Props {
        label: string;
        value: number;
    }
    
    const { label, value }: Props = $props();
</script>

<div class="score-box">
    <span class="label">{label}</span>
    <span class="value">{value}</span>
</div>

<style>
    .score-box {
        background-color: var(--color-surface);
        border-radius: var(--radius);
        padding: var(--space-2);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .label {
        color: var(--color-text-muted);
        font-size: var(--step--1);
    }
    .value {
        font-size: var(--step-1);
        font-weight: bold;
    }
</style>