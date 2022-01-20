<script lang="ts">
  type Size = { width: number, height: number }
  const fmtSize = (s?: Size) => s ? `${s.width}x${s.height}` : '';

  const screenSize: Size = {
    width: window.screen.width * window.devicePixelRatio,
    height: window.screen.height * window.devicePixelRatio
  }

  const availSize: Size = {
    width: window.screen.availWidth,
    height: window.screen.availHeight
  }

  let windowSize: Size
  let pageVisibleSize: Size
  let pageFullSize: Size
  const resizeWindow = () => {
    windowSize = {
      width: window.outerWidth,
      height: window.outerHeight
    }

    pageVisibleSize = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }

    pageFullSize = {
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight
    }
  }

  resizeWindow()
  window.addEventListener('resize', resizeWindow)
</script>

<p>{ fmtSize(screenSize) }</p>
<p>{ fmtSize(availSize) }</p>
<p>{ fmtSize(windowSize) }</p>
<p>{ fmtSize(pageVisibleSize) }</p>
<p>{ fmtSize(pageFullSize) }</p>
