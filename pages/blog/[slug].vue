<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(`blog-${route.params.slug}`, () =>
  queryContent('/blog')
    .where({ _path: `/blog/${route.params.slug}` })
    .findOne()
)

const { absoluteUrl } = useSiteUrl()

if (post.value) {
  const authorName = post.value.author || 'Ghufran El Azizi'
  const description = post.value.description || post.value.excerpt
  const canonicalUrl = absoluteUrl(post.value._path)
  const socialImage = absoluteUrl(post.value.image || '/images/seo/portfolio-og.jpg')
  const imageAlt = post.value.imageAlt || `Ilustrasi artikel ${post.value.title}`

  useSeoMeta({
    title: `${post.value.title} — ghufrxn.`,
    description,
    robots: 'index, follow',
    ogTitle: post.value.title,
    ogDescription: description,
    ogType: 'article',
    ogUrl: canonicalUrl,
    ogImage: socialImage,
    ogImageAlt: imageAlt,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    articlePublishedTime: post.value.dateISO,
    articleModifiedTime: post.value.dateModified || post.value.dateISO,
    articleAuthor: authorName,
    twitterCard: 'summary_large_image',
    twitterTitle: post.value.title,
    twitterDescription: description,
    twitterImage: socialImage,
    twitterImageAlt: imageAlt,
  })

  useHead({
    link: [
      { rel: 'canonical', href: canonicalUrl },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.value.title,
          description,
          image: [socialImage],
          datePublished: post.value.dateISO,
          dateModified: post.value.dateModified || post.value.dateISO,
          inLanguage: 'id-ID',
          author: {
            '@type': 'Person',
            name: authorName,
            url: absoluteUrl('/'),
          },
          publisher: {
            '@type': 'Person',
            name: authorName,
            url: absoluteUrl('/'),
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl,
          },
        }),
      },
    ],
  })
} else {
  setResponseStatus(404)
  useSeoMeta({
    title: 'Artikel Tidak Ditemukan — ghufrxn.',
    robots: 'noindex, nofollow',
  })
}
</script>

<template>
  <div>
    <section v-if="post" class="post-wrap">
      <div class="post-header section-inner">
        <NuxtLink to="/blog/" class="post-back">&larr; Kembali ke blog</NuxtLink>

        <div class="post-meta">
          <span class="blog-category">{{ post.category }}</span>
          <time class="post-date" :datetime="post.dateISO">{{ post.date }}</time>
        </div>

        <h1 class="post-title">{{ post.title }}</h1>
      </div>

      <div class="post-body-wrap">
        <div class="post-inner">
          <figure v-if="post.image" class="post-cover">
            <img
              :src="post.image"
              :alt="post.imageAlt || `Ilustrasi artikel ${post.title}`"
              width="1200"
              height="630"
            />
          </figure>
          <ContentDoc :path="post._path" :head="false" />
        </div>
      </div>
    </section>

    <section v-else class="post-notfound">
      <div class="section-inner">
        <h2>Post not found</h2>
        <NuxtLink to="/blog/" class="post-back">&larr; Kembali ke blog</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.post-wrap {
  background: var(--primary-color);
  min-height: 60vh;
}

.post-header {
  padding: 3rem 0 2rem;
  border-bottom: 2px solid var(--black-color);
}

.post-back {
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--black-color);
  background: var(--red-color);
  border: 2px solid var(--black-color);
  border-radius: 4px;
  padding: 6px 12px;
  text-decoration: none;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-sm);
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.post-back:hover {
  transform: translate(2px, 2px);
  box-shadow: 0 0 0 #000;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1rem;
}

.post-date {
  font-size: 12px;
  color: #555;
  letter-spacing: 0.04em;
  font-weight: 500;
}

.post-title {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(28px, 5vw, 54px);
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--black-color);
  max-width: 720px;
}

.post-body-wrap {
  padding: 3rem 0 5rem;
}

.post-inner {
  max-width: 680px;
  margin: 0 auto;
  padding: 0 2rem;
}

.post-cover {
  margin: 0 0 2.5rem;
  overflow: hidden;
  border: 2px solid var(--black-color);
  border-radius: 6px;
  box-shadow: var(--shadow);
  background: var(--gum-peach);
}

.post-cover img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1200 / 630;
  object-fit: cover;
}

.post-notfound {
  padding: 6rem 0;
}

/* Content styling (from Nuxt Content) */
:deep(.post-content) {
  font-size: 16px;
  line-height: 1.85;
  color: #222;
  font-weight: 400;
}

:deep(.post-content p) {
  margin-bottom: 1.5rem;
}

:deep(.post-content h2) {
  font-family: "Cormorant Garamond", serif;
  font-size: 28px;
  font-weight: 400;
  color: var(--black-color);
  margin: 2.5rem 0 1rem;
  letter-spacing: -0.01em;
}

:deep(.post-content strong) {
  font-weight: 700;
  color: var(--black-color);
}

:deep(.post-content em) {
  font-style: italic;
  color: var(--black-color);
  background: var(--red-color);
  padding: 0 4px;
  border-radius: 3px;
}

:deep(.post-content code) {
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
  background: var(--gum-peach);
  border: 1.5px solid var(--black-color);
  padding: 1px 6px;
  border-radius: 4px;
  color: var(--black-color);
}

:deep(.blog-category) {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--black-color);
  background: var(--red-color);
  border: 1.5px solid var(--black-color);
  border-radius: 4px;
  padding: 2px 7px;
}

@media (max-width: 640px) {
  .post-inner {
    padding: 0 1.25rem;
  }
  :deep(.post-content) {
    font-size: 15px;
  }
}
</style>
