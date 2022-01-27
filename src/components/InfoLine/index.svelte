<script lang='ts'>
  export let name: string;
</script>

<div class="name">{name}</div>
<div class="value"><slot></slot></div>

<style lang="scss">
  .name {
    grid-column: 1 / 3;
    font-weight: 500;
  }

  .value {
    margin-bottom: 1em;
  }

  @media (min-width: 768px) {
      .name {
        grid-column: 1 / 2;
      }

      .value {
        margin-bottom: 0;
      }
  }
</style>
