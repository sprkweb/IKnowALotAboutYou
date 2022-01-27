<script lang="ts">
  import { _ } from 'svelte-i18n'
  import InfoList from '@/components/InfoList/index.svelte'
  import InfoLine from '@/components/InfoLine/index.svelte'
  import CheckIf from '@/components/CheckIf/index.svelte'

  let mouseDetected: boolean = false
  let touchDetected: boolean = false
  let mouseEv: MouseEvent, touchEv: TouchEvent

  window.addEventListener('mousemove', (e) => {
    mouseDetected = true
    mouseEv = e
  })

  window.addEventListener('touchmove', (e) => {
    touchDetected = true
    touchEv = e
  })

  window.addEventListener('touchstart', (e) => {
    touchDetected = true
    touchEv = e
  })
</script>

<InfoList>
  <InfoLine name={ $_(`controls.mouse`) }>
    <CheckIf condition={ mouseDetected }>
      {mouseEv.clientX}x{mouseEv.clientY}
    </CheckIf>
  </InfoLine>
  <InfoLine name={ $_(`controls.touch`) }>
    <CheckIf condition={ touchDetected }>
      {
        Array
          .from(touchEv.touches)
          .map((p) => `${Math.round(p.clientX)}x${Math.round(p.pageY)}`)
          .join(', ')
      }
    </CheckIf>
  </InfoLine>
</InfoList>
