<script lang="ts">
  import { _ } from 'svelte-i18n';
  import InfoList from '@/components/InfoList/index.svelte'
  import InfoLine from '@/components/InfoLine/index.svelte'
  import CheckIf from '@/components/CheckIf/index.svelte'
</script>

<InfoList>
  <InfoLine name={ $_(`lang.language`) }>
    <CheckIf condition={ !!window.navigator.language }>
      { window.navigator.language }
    </CheckIf>
  </InfoLine>

  <InfoLine name={ $_(`lang.languages`) }>
    <CheckIf condition={ !!window.navigator.languages }>
      { window.navigator.languages.join(', ') }
    </CheckIf>
  </InfoLine>
</InfoList>
