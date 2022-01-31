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

  let mediaDevices: MediaDeviceInfo[] | null = null
  if (navigator.mediaDevices?.enumerateDevices)
    navigator.mediaDevices
      .enumerateDevices()
      .then(d => mediaDevices = d)
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

  <InfoLine name={ $_(`controls.maxTouchPoints`) }>
    <CheckIf condition={ window.navigator.maxTouchPoints != null}>
      { window.navigator.maxTouchPoints }
    </CheckIf>
  </InfoLine>

  <InfoLine name={ $_(`controls.videoInputs`) }>
    <CheckIf condition={ mediaDevices != null }>
      { mediaDevices?.filter(d => d.kind == 'videoinput').length }
    </CheckIf>
  </InfoLine>

  <InfoLine name={ $_(`controls.audioInputs`) }>
    <CheckIf condition={ mediaDevices != null }>
      { mediaDevices?.filter(d => d.kind == 'audioinput').length }
    </CheckIf>
  </InfoLine>

  <InfoLine name={ $_(`controls.audioOutputs`) }>
    <CheckIf condition={ mediaDevices != null }>
      { mediaDevices?.filter(d => d.kind == 'audiooutput').length }
    </CheckIf>
  </InfoLine>
</InfoList>
