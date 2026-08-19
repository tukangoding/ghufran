<script setup lang="ts">
useHead({
  title: 'Blog — ghufrxn.',
})

const { data: posts } = await useAsyncData('blog-list', () =>
  queryContent('/blog')
    .sort({ dateISO: -1 })
    .find()
)
</script>

<template>
  <div>
    <section class="blog-page-hero">
      <div class="section-inner">
        <h1 class="blog-page-title">Thoughts &<br /><em>bars.</em></h1>
        <p class="blog-page-sub">
          Tulisan seputar coding, rap, gym, dan kehidupan.
        </p>
      </div>
    </section>

    <section class="blog-list-section">
      <div class="section-inner">
        <div v-if="posts && posts.length" class="blog-list">
          <NuxtLink
            v-for="(post, i) in posts"
            :key="post._path"
            :to="post._path"
            class="blog-item"
          >
            <div class="blog-item__left">
              <span class="blog-num">{{ String(i + 1).padStart(2, '0') }}</span>
            </div>
            <div class="blog-item__center">
              <span class="blog-category">{{ post.category }}</span>
              <h3 class="blog-title">{{ post.title }}</h3>
              <p class="blog-excerpt">{{ post.excerpt }}</p>
            </div>
            <div class="blog-item__right">
              <span class="blog-date">{{ post.date }}</span>
              <svg class="blog-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2">
                <path d="M3 13L13 3M13 3H6M13 3v7" />
              </svg>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blog-page-hero {
  background: var(--red-color);
  padding: 5rem 0 3rem;
  border-bottom: 2px solid var(--black-color);
}

.blog-page-title {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(42px, 8vw, 82px);
  font-weight: 300;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--black-color);
  margin-bottom: 1rem;
}

.blog-page-title em {
  font-style: italic;
  color: var(--black-color);
  text-decoration: underline;
  text-decoration-thickness: 4px;
  text-underline-offset: 5px;
}

.blog-page-sub {
  font-size: 14px;
  color: var(--black-color);
  font-weight: 400;
  line-height: 1.6;
  max-width: 480px;
}

.blog-list-section {
  background: var(--primary-color);
  padding: 2.5rem 0 6rem;
}

.blog-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.blog-item {
  display: grid;
  grid-template-columns: 40px 1fr auto;
  gap: 1.5rem;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border: 2px solid var(--black-color);
  border-radius: 6px;
  background: var(--primary-color);
  box-shadow: var(--shadow-sm);
  text-decoration: none;
  transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.15s;
}

.blog-item:hover {
  background: #fff;
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow);
}

.blog-item:hover .blog-title {
  color: var(--black-color);
}
.blog-item:hover .blog-arrow {
  transform: translate(2px, -2px);
}

.blog-num {
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  color: var(--black-color);
  letter-spacing: 0.06em;
  font-weight: 600;
}

.blog-category {
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
  margin-bottom: 8px;
}

.blog-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--black-color);
  line-height: 1.4;
  transition: color 0.2s;
}

.blog-excerpt {
  font-size: 13px;
  color: #444;
  line-height: 1.6;
  margin-top: 4px;
  font-weight: 400;
}

.blog-item__right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.blog-date {
  font-size: 11px;
  color: #555;
  white-space: nowrap;
  font-weight: 500;
}

.blog-arrow {
  width: 16px;
  height: 16px;
  color: var(--black-color);
  transition: transform 0.2s, color 0.2s;
}

@media (max-width: 640px) {
  .blog-page-hero {
    padding: 3rem 0 2rem;
  }

  .blog-item {
    grid-template-columns: 32px 1fr;
  }
  .blog-item__right {
    display: none;
  }
}
</style>
