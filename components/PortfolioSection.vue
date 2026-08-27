<script setup lang="ts">
const { observe } = useScrollReveal()

onMounted(() => {
  observe()
})

interface PortfolioItem {
  title: string
  desc: string
  href: string
  tags: string[]
  tag: string
  featured?: boolean
  thumbnail?: string
}

const items: PortfolioItem[] = [
  {
    title: 'Nasyid Nusantara',
    desc: 'Platform digital untuk komunitas nasyid Indonesia. Musik, dakwah, dan karya dalam satu ruang.',
    href: 'http://nasyidnusantara.com',
    tags: ['HTML', 'CSS', 'JS'],
    tag: 'Live Project',
    featured: true,
  },
  {
    title: 'Pesan Oleh-Oleh',
    desc: 'Platform pemesanan oleh-oleh online. Belanja buah tangan khas daerah dengan mudah, di mana saja.',
    href: 'https://pesanoleholeh.com/',
    tags: ['HTML', 'CSS', 'JS'],
    tag: 'Live Project',
  },
  {
    title: 'ALF Production',
    desc: 'Website profesional untuk jasa produksi Mars & Hymne sekolah/lembaga. Booking online, portofolio karya, dan sistem pemesanan paket.',
    href: 'https://alfproduction.id/',
    tags: ['HTML', 'CSS', 'JS'],
    tag: 'Live Project',
    thumbnail: '/images/portfolio/alf-production.png',
  },
  {
    title: 'Tepa Menep Villa',
    desc: 'Payment Gateway Integration untuk booking villa. Sistem reservasi online dengan integrasi pembayaran digital.',
    href: 'https://tepamenepvilla.com/',
    tags: ['Payment Gateway', 'Integration'],
    tag: 'Integration',
    thumbnail: '/images/portfolio/tepamenep-villa.png',
  },
]
</script>

<template>
  <section id="portfolio" class="portfolio">
    <div class="section-inner">
      <div class="section-label reveal-on-scroll">
        <span class="label-line"></span>
        <span class="label-text">Portfolio</span>
        <span class="label-num">04</span>
      </div>

      <h2 class="section-title reveal-on-scroll delay-1">Things I've<br /><em>built.</em></h2>

      <div class="portfolio-grid">
        <a
          v-for="(item, i) in items"
          :key="item.title"
          :href="item.href"
          target="_blank"
          rel="noopener"
          class="portfolio-card reveal-on-scroll"
          :class="[{ 'portfolio-card--featured': item.featured }, `delay-${Math.min(i + 1, 3)}`]"
        >
          <div class="portfolio-card__top">
            <span class="portfolio-tag">{{ item.tag }}</span>
            <svg
              class="portfolio-arrow"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
            >
              <path d="M3 13L13 3M13 3H6M13 3v7" />
            </svg>
          </div>

          <div v-if="item.thumbnail" class="portfolio-card__thumbnail">
            <img :src="item.thumbnail" :alt="item.title" loading="lazy" />
          </div>

          <h3 class="portfolio-card__title">{{ item.title }}</h3>
          <p class="portfolio-card__desc">{{ item.desc }}</p>
          <div class="portfolio-card__footer">
            <span v-for="tech in item.tags" :key="tech" class="portfolio-tech">
              {{ tech }}
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio {
  background: var(--primary-color);
  border-top: 2px solid var(--black-color);
}
</style>
