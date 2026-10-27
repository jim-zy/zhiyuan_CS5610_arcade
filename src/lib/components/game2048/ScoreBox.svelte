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
        background-color: #eee;
        border-radius: 4px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .label {
        font-size: 0.8em;
    }
    .value {
        font-size: 1.2em;
        font-weight: bold;
    }
</style>