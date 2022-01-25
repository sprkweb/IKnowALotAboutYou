<script lang="ts">
  import { _, locale } from 'svelte-i18n'
  import { showWhether } from '@/helpers'
  import InfoList from '@/components/InfoList/index.svelte'
  import InfoLine from '@/components/InfoLine/index.svelte'

  const fields = [
    // ["i18n field name", "API field name"]
    ['ip', 'ip'],
    ['country', 'country_name'],
    ['region', 'region'],
    ['city', 'city'],
    ['latitude', 'latitude'],
    ['longitude', 'longitude']
  ]
  let connError: boolean = true
  let connInfo: Record<string, string>

  const api = `https://ipapi.co/json/`
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
    value={ showWhether(!connError, () => connInfo.ip) }
    />
  {#if !connError}
    {#each fields as [fieldName, apiFieldName]}
      {#if fieldName !== 'ip' && connInfo[apiFieldName] !== undefined}
        <InfoLine
          name={ $_(`connection.${fieldName}`) }
          value={ connInfo[apiFieldName] }
          />
      {/if}
    {/each}
  {/if}
</InfoList>
