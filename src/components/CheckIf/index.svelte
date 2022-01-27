<script lang="ts">
  export let condition: boolean;
</script>

{#if condition}
  <span class="check">&check;</span> <slot></slot>
{:else}
  <div class="cross">&cross;</div>
{/if}

<style lang="scss">
  .check {
    color: green;
  }

  .cross {
    color: red;
  }
</style>
