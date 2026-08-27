import { serverQueryContent } from '#content/server'

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const siteUrl = String(config.public.siteUrl).replace(/\/+$/, '')
  const posts = await serverQueryContent(event, '/blog')
    .only(['_path', 'dateISO'])
    .sort({ dateISO: -1 })
    .find()

  const staticUrls = [
    { path: '/' },
    { path: '/blog' },
  ]

  const urls = [
    ...staticUrls,
    ...posts.map(post => ({
      path: post._path,
      lastmod: post.dateISO,
    })),
  ]

  const entries = urls.map((url) => {
    const location = url.path === '/' ? `${siteUrl}/` : `${siteUrl}${url.path}`
    const lastmod = 'lastmod' in url && url.lastmod
      ? `\n    <lastmod>${escapeXml(String(url.lastmod))}</lastmod>`
      : ''

    return `  <url>\n    <loc>${escapeXml(location)}</loc>${lastmod}\n  </url>`
  })

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n')
})
