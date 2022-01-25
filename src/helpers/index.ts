export function showWhether (condition: boolean, content?: () => string) {
  if (condition) {
    if (content)
      return '✓ ' + content()
    else
      return '✓'
  } else {
    return '✗'
  }
}
