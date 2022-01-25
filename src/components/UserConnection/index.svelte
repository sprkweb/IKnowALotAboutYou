<script lang="ts">
  import { _, locale } from 'svelte-i18n'
  import { showWhether } from '@/helpers'
  import InfoList from '@/components/InfoList/index.svelte'
  import InfoLine from '@/components/InfoLine/index.svelte'

  const fields = ['status', 'continent', 'country', 'regionName', 'city', 'district', 'zip', 'lat', 'lon', 'isp', 'org', 'as', 'mobile', 'proxy', 'hosting', 'query']
  let connError: boolean = true
  let connInfo: Record<string, string>

  const api = `http://ip-api.com/json?lang=${$locale}&fields=${fields.join(',')}`
  fetch(api)
    .then((r) => r.json())
    .then((j) => {
      if (j.status !== 'success') connError = true
      connInfo = j.map((x: unknown) => {
        switch (typeof x) {
          case 'string':
            return x
          case 'boolean':
            return showWhether(x)
          case 'number':
            return x.toString()
          default:
            console.log('API has returned an invalid type ', x)
            break;
        }
      })
    })
    .catch(() => connError = true)
</script>

<InfoList>
  <InfoLine
    name={ $_(`connection.ip`) }
    value={ showWhether(!connError, () => connInfo.query) }
    />
  {#if !connError}
    {#each fields as field}
      {#if field !== 'query' && connInfo[field] !== undefined}
        <InfoLine
          name={ $_(`connection.${field}`) }
          value={ connInfo[field] }
          />
      {/if}
    {/each}
  {/if}
</InfoList>
