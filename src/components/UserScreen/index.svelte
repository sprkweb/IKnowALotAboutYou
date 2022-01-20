<script lang="ts">
  import { _ } from 'svelte-i18n';
  import InfoList from '@/components/InfoList/index.svelte'
  import InfoLine from '@/components/InfoLine/index.svelte'

  type Size = { width: number, height: number }
  const fmtSize = (s?: Size) => s ? `${s.width}x${s.height}` : '';

  const sizes: Record<string, Size> = {}
  const sizeNames = ['screenSize', 'availSize', 'windowSize', 'pageVisibleSize', 'pageFullSize']

  sizes.screenSize = {
    width: window.screen.width * window.devicePixelRatio,
    height: window.screen.height * window.devicePixelRatio
  }

  sizes.availSize = {
    width: window.screen.availWidth,
    height: window.screen.availHeight
  }

  const resizeWindow = () => {
    sizes.windowSize = {
      width: window.outerWidth,
      height: window.outerHeight
    }

    sizes.pageVisibleSize = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }

    sizes.pageFullSize = {
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight
    }
  }

  resizeWindow()
  window.addEventListener('resize', resizeWindow)
</script>

<InfoList>
  {#each sizeNames as sizeName}
    <InfoLine
      name={ $_(`screen.${sizeName}`) }
      value={ fmtSize(sizes[sizeName]) }
      />
  {/each}
</InfoList>
