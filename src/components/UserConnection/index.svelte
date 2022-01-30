<script lang="ts">
  import { _ } from 'svelte-i18n'
  import InfoList from '@/components/InfoList/index.svelte'
  import InfoLine from '@/components/InfoLine/index.svelte'
  import CheckIf from '@/components/CheckIf/index.svelte'

  const fields = [
    {
      name: 'continent',
      parser: (x: any) => x.continent_name
    },
    {
      name: 'country',
      parser: (x: any) => x.country_name && `${x.country_name} ${x.emoji_flag}`
    },
    {
      name: 'region',
      parser: (x: any) => x.region
    },
    {
      name: 'city',
      parser: (x: any) => x.city
    },
    {
      name: 'latitude',
      parser: (x: any) => x.latitude
    },
    {
      name: 'longitude',
      parser: (x: any) => x.longitude
    },
    {
      name: 'asnType',
      parser: (x: any) => $_(`connection.asnTypes.${x.asn.type}`)
    },
    {
      name: 'asn',
      parser: (x: any) => x.asn.name
    },
    {
      name: 'timeZone',
      parser: (x: any) => x.time_zone.name && `${x.time_zone.name} ${x.time_zone.offset}`
    },
    {
      name: 'tor',
      parser: (x: any) => x.threat.is_tor
    },
    {
      name: 'proxy',
      parser: (x: any) => x.threat.is_proxy
    },
    {
      name: 'threat',
      parser: (x: any) => x.threat.is_threat
    }
  ]
  let connError: boolean = true
  let connInfo: Record<string, unknown>

  const api = `./.netlify/functions/api`
  fetch(api)
    .then((r) => r.json())
    .then((j) => {
      connInfo = j
      connError = false
    })
    .catch(() => connError = true)
</script>

<InfoList>
  <InfoLine name={ $_(`connection.ip`) }>
    <CheckIf condition={ !connError }>
      { connInfo.ip }
    </CheckIf>
  </InfoLine>
  {#if !connError}
    {#each fields as { name, parser }}
      <InfoLine name={ $_(`connection.${name}`) }>
        {#if typeof parser(connInfo) == 'boolean'}
          <CheckIf condition={ !!parser(connInfo) } />
        {:else}
          <CheckIf condition={ !!parser(connInfo) }>
            { parser(connInfo) }
          </CheckIf>
        {/if}
      </InfoLine>
    {/each}
  {/if}
</InfoList>
