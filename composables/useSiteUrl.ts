export function useSiteUrl() {
  const config = useRuntimeConfig()
  const siteUrl = String(config.public.siteUrl).replace(/\/+$/, '')

  function absoluteUrl(path = '/') {
    if (path === '/') return `${siteUrl}/`
    return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
  }

  return {
    siteUrl,
    absoluteUrl,
  }
}
