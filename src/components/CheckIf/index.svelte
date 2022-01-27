<script lang="ts">
  export let condition: boolean;
</script>

{#if condition}
  &check; <slot></slot>
{:else}
  &cross;
{/if}
