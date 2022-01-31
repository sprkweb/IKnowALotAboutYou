<script lang="ts">
  import { _ } from 'svelte-i18n'
  import InfoList from '@/components/InfoList/index.svelte'
  import InfoLine from '@/components/InfoLine/index.svelte'
  import CheckIf from '@/components/CheckIf/index.svelte'

</script>

<InfoList>
  <InfoLine name={ $_(`features.cookie`) }>
    <CheckIf condition={ window.navigator.cookieEnabled } />
  </InfoLine>

  <InfoLine name={ $_(`features.doNotTrack`) }>
    <CheckIf condition={ window.navigator.doNotTrack == '1' } />
  </InfoLine>
</InfoList>
