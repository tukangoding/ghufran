<script setup lang="ts">
const { observe } = useScrollReveal()

onMounted(() => {
  observe()
})

const videos = [
  {
    src: 'https://www.youtube-nocookie.com/embed/qYTaTsOgqLQ',
    title: 'La Haula',
    tag: 'Original',
    label: 'La Haula — El Azizi (Official Lyric Video)',
  },
  {
    src: 'https://www.youtube-nocookie.com/embed/W1UMeDuuBlY',
    title: 'Senyum — Raihan',
    tag: 'Cover',
    label: 'Senyum (Raihan) — El Azizi Cover',
  },
  {
    src: 'https://www.youtube-nocookie.com/embed/R-R5a1RvFCE',
    title: 'Kau Tak Sendiri',
    tag: 'Cover',
    label: 'Kau Tak Sendiri (Hadad Alwi) — El Azizi Cover',
  },
  {
    src: 'https://www.youtube-nocookie.com/embed/pyk1wKYqsx4',
    title: 'Bahagia — GAC',
    tag: 'Cover',
    label: 'Bahagia (GAC) — El Azizi Cover',
  },
  {
    src: 'https://www.youtube-nocookie.com/embed/SSdkNChnF4g',
    title: 'Live It Up',
    tag: 'Live Session',
    label: 'Live It Up — El Alice feat. Ghufran El Azizi (ENPI Live Session)',
  },
  {
    src: 'https://www.youtube-nocookie.com/embed/8fqQqoG-sf8',
    title: 'Lily — Ramadhan Ver.',
    tag: 'Cover',
    label: 'Lily (Alan Walker) — El Azizi Cover, Ramadhan Version',
  },
  {
    src: 'https://www.youtube-nocookie.com/embed/SaxlDgxCdzI',
    title: 'Eid Evolution',
    tag: 'Nasyid',
    label: 'Eid Evolution — Nasyid Semarang (Official Video)',
  },
  {
    src: 'https://www.youtube-nocookie.com/embed/7j0rtFPaj_w',
    title: 'Lebaran Medley 2021',
    tag: 'Acapella',
    label: 'Lebaran Medley 2021 — Acapella Version, Nasyid Semarang',
  },
]
</script>

<template>
  <section id="videos" class="videos">
    <div class="section-inner">
      <div class="section-label reveal-on-scroll">
        <span class="label-line"></span>
        <span class="label-text">Watch</span>
        <span class="label-num">05</span>
      </div>

      <div class="blog-header">
        <h2 class="section-title reveal-on-scroll delay-1">On the<br /><em>mic &amp; screen.</em></h2>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener"
          class="blog-see-all"
        >YouTube &rarr;</a>
      </div>

      <div class="video-grid">
        <div v-for="video in videos" :key="video.title" class="video-card">
          <div class="video-frame">
            <iframe
              :src="video.src"
              :title="video.label"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div class="video-meta">
            <p class="video-title">{{ video.title }}</p>
            <span class="video-tag">{{ video.tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.videos {
  background: var(--primary-color);
  border-top: 2px solid var(--black-color);
}

.blog-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
}

.blog-see-all {
  font-size: 13px;
  font-weight: 600;
  color: var(--black-color);
  text-decoration: none;
  letter-spacing: 0.02em;
  background: var(--red-color);
  border: 2px solid var(--black-color);
  border-radius: 4px;
  padding: 7px 14px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.blog-see-all:hover {
  transform: translate(2px, 2px);
  box-shadow: 0 0 0 #000;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.25rem;
}

.video-card {
  border: 2px solid var(--black-color);
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
  box-shadow: var(--shadow);
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.video-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: 7px 7px 0 #000;
}

.video-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
  border-bottom: 2px solid var(--black-color);
}

.video-frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.video-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0.85rem 1rem;
}

.video-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--black-color);
  line-height: 1.3;
  letter-spacing: -0.01em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.video-tag {
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--black-color);
  background: var(--red-color);
  border: 1.5px solid var(--black-color);
  border-radius: 4px;
  padding: 3px 7px;
  white-space: nowrap;
  flex-shrink: 0;
}
</style>
