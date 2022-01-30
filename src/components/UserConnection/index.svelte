<script lang="ts">
  import { _ } from 'svelte-i18n'
  import InfoList from '@/components/InfoList/index.svelte'
  import InfoLine from '@/components/InfoLine/index.svelte'
  import CheckIf from '@/components/CheckIf/index.svelte'

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
    {#each fields as [fieldName, apiFieldName]}
      {#if fieldName !== 'ip' && connInfo[apiFieldName] !== undefined}
        <InfoLine name={ $_(`connection.${fieldName}`) }>
          {#if typeof connInfo[apiFieldName] == 'boolean'}
            <CheckIf condition={ !!connInfo[apiFieldName] } />
          {:else}
            <CheckIf condition={ true }>
              { connInfo[apiFieldName] }
            </CheckIf>
          {/if}
        </InfoLine>
      {/if}
    {/each}
  {/if}
</InfoList>
