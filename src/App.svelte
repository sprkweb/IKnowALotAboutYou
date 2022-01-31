<script lang="ts">
  import '@/i18n'
  import { _ } from 'svelte-i18n';

  import UserScreen from '@/components/UserScreen/index.svelte'
  import UserControls from '@/components/UserControls/index.svelte'
  import UserAgent from '@/components/UserAgent/index.svelte'
  import UserLang from '@/components/UserLang/index.svelte'
  import UserConnection from '@/components/UserConnection/index.svelte'
  import UserFeatures from '@/components/UserFeatures/index.svelte'
</script>

<svelte:head>
	<title>{ $_('title') }</title>
</svelte:head>

<div class="app">
  <h1>{ $_('title') }</h1>
  <p>{ $_('disclaimer') }</p>
  <p>{ $_('javascript_explanation') }</p>
  <UserAgent />
  <UserControls />
  <UserLang />
  <UserFeatures />
  <UserScreen />
  <p>{ $_('what_else') }</p>
  <p>{ $_('connection_explanation') }</p>
  <UserConnection />
  <p>
    <a href="https://github.com/sprkweb/IKnowALotAboutYou" rel="noreferrer">
      { $_('this_page_on_github') }
    </a>
  </p>
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
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }
}

.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 1em;
}

</style>
