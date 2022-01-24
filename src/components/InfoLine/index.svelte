<script lang='ts'>
  export let name: string;
  export let value: string;
</script>

<tr>
  <td class="name">{name}</td>
  <td class="value">{value}</td>
</tr>

<style lang="scss">
  td {
    border: 0 none;
  }

  .name {
    width: 1%;
    white-space: nowrap;
  }

  .value {
    padding-left: 1em;
  }
</style>
