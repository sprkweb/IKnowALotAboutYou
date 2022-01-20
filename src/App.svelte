<script lang="ts">
  import '@/i18n'

  import UserScreen from '@/components/UserScreen/index.svelte'
</script>

<div class="app">
  <UserScreen />
</div>

<style lang="scss">
:global {
  :root {
    --font-size: 18px;
    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html, body {
    font-family: var(--font-family);
    font-size: var(--font-size);
  }
}

.app {
  max-width: 800px;
  margin: 0 auto;
}

</style>
