<script lang="ts">
  import { _ } from 'svelte-i18n';
  import InfoList from '@/components/InfoList/index.svelte'
  import InfoLine from '@/components/InfoLine/index.svelte'
  import { showWhether } from '@/helpers'
</script>

<InfoList>
  <InfoLine
    name={ $_(`lang.language`) }
    value={ showWhether(!!window.navigator.language, () => window.navigator.language) }
    />

  <InfoLine
    name={ $_(`lang.languages`) }
    value={ showWhether(!!window.navigator.languages, () => window.navigator.languages.join(', ')) }
    />
</InfoList>
