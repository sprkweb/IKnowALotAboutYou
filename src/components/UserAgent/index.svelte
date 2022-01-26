<script lang="ts">
  import { _ } from 'svelte-i18n'
  import UAParser from 'ua-parser-js'
  import { showWhether } from '@/helpers'
  import InfoList from '@/components/InfoList/index.svelte'
  import InfoLine from '@/components/InfoLine/index.svelte'

  const ua = new UAParser().getResult()
</script>

<InfoList>
  <InfoLine
    name={ $_(`agent.browser`) }
    value={ showWhether(
      ua.browser.name !== undefined,
      () => `${ua.browser.name} ${ua.browser.version}`)
    } />

  <InfoLine
    name={ $_(`agent.engine`) }
    value={ showWhether(
      ua.engine.name !== undefined,
      () => `${ua.engine.name} ${ua.engine.version}`)
    } />

  <InfoLine
    name={ $_(`agent.os`) }
    value={ showWhether(
      ua.os.name !== undefined,
      () => `${ua.os.name} ${ua.os.version}`)
    } />

  <InfoLine
    name={ $_(`agent.deviceType`) }
    value={ showWhether(
      ua.device.type !== undefined,
      () => `${ua.device.type}`)
    } />

  <InfoLine
    name={ $_(`agent.device`) }
    value={ showWhether(
      ua.device.model !== undefined || ua.device.vendor !== undefined,
      () => `${ua.device.vendor} ${ua.device.model}`)
    } />

  <InfoLine
    name={ $_(`agent.cpu`) }
    value={ showWhether(
      ua.cpu.architecture !== undefined,
      () => `${ua.cpu.architecture}`)
    } />
</InfoList>
