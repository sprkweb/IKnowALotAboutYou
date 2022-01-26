<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { showWhether } from '@/helpers'
  import InfoList from '@/components/InfoList/index.svelte'
  import InfoLine from '@/components/InfoLine/index.svelte'

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
  <InfoLine
    name={ $_(`controls.mouse`) }
    value={
      showWhether(
        mouseDetected,
        () => `${mouseEv.clientX}x${mouseEv.clientY}`)
    }
    />

  <InfoLine
    name={ $_(`controls.touch`) }
    value={
      showWhether(
        touchDetected,
        () => Array
          .from(touchEv.touches)
          .map((p) => `${Math.round(p.clientX)}x${Math.round(p.pageY)}`)
          .join(', ')
      )
     }
    />
</InfoList>
