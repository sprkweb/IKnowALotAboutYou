<div class="table">
  <slot></slot>
</div>

<style lang="scss">
  .table {
    width: 100%;
    margin-bottom: 1em;
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 0 1em;
  }
</style>
