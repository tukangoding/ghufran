<script setup lang="ts">
const { absoluteUrl } = useSiteUrl()

const title = 'Ghufran El Azizi — Frontend Developer, Musisi & Kreator'
const description = 'Portfolio Ghufran El Azizi, frontend developer, musisi, dan kreator digital yang membangun website serta menulis tentang coding dan kehidupan.'
const canonicalUrl = absoluteUrl('/')
const socialImage = absoluteUrl('/images/seo/portfolio-og.jpg')

useSeoMeta({
  title,
  description,
  robots: 'index, follow',
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: canonicalUrl,
  ogImage: socialImage,
  ogImageAlt: 'Ilustrasi portfolio Ghufran El Azizi: coding, musik, dan latihan kekuatan',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: socialImage,
  twitterImageAlt: 'Ilustrasi portfolio Ghufran El Azizi: coding, musik, dan latihan kekuatan',
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
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${canonicalUrl}#website`,
            url: canonicalUrl,
            name: 'ghufrxn.',
            alternateName: 'Portfolio Ghufran El Azizi',
            inLanguage: 'id-ID',
          },
          {
            '@type': 'Person',
            '@id': `${canonicalUrl}#person`,
            name: 'Ghufran El Azizi',
            alternateName: 'ghufrxn',
            url: canonicalUrl,
            image: socialImage,
            jobTitle: 'Frontend Developer',
            sameAs: [
              'https://github.com/tukangoding',
              'https://instagram.com/ghufranelazizi',
            ],
            knowsAbout: [
              'Frontend Development',
              'Vue.js',
              'Nuxt',
              'JavaScript',
              'Music Production',
              'Strength Training',
            ],
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <PortfolioSection />
    <VideosSection />
    <BlogSection />
    <ContactSection />
  </div>
</template>
