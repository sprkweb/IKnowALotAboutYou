<script lang="ts">
  import { _ } from 'svelte-i18n'
  import UAParser from 'ua-parser-js'
  import InfoList from '@/components/InfoList/index.svelte'
  import InfoLine from '@/components/InfoLine/index.svelte'
  import CheckIf from '@/components/CheckIf/index.svelte'

  const ua = new UAParser().getResult()
</script>

<InfoList>
  <InfoLine name={ $_(`agent.browser`) }>
    <CheckIf condition={ ua.browser.name !== undefined }>
      {ua.browser.name} {ua.browser.version}
    </CheckIf>
  </InfoLine>

  <InfoLine name={ $_(`agent.engine`) }>
    <CheckIf condition={ ua.engine.name !== undefined }>
      {ua.engine.name} {ua.engine.version}
    </CheckIf>
  </InfoLine>

  <InfoLine name={ $_(`agent.os`) }>
    <CheckIf condition={ ua.os.name !== undefined }>
      {ua.os.name} {ua.os.version}
    </CheckIf>
  </InfoLine>

  <InfoLine name={ $_(`agent.deviceType`) }>
    <CheckIf condition={ ua.device.type !== undefined }>
      {ua.device.type}
    </CheckIf>
  </InfoLine>

  <InfoLine name={ $_(`agent.device`) }>
    <CheckIf condition={ ua.device.model !== undefined || ua.device.vendor !== undefined }>
      {ua.device.vendor} {ua.device.model}
    </CheckIf>
  </InfoLine>

  <InfoLine name={ $_(`agent.cpu`) }>
    <CheckIf condition={ ua.cpu.architecture !== undefined }>
      {ua.cpu.architecture}
    </CheckIf>
  </InfoLine>
</InfoList>
