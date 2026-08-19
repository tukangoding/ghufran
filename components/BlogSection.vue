<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-preview', () =>
  queryContent('/blog')
    .sort({ date: -1 })
    .limit(3)
    .find()
)
</script>

<template>
  <section id="blog" class="blog">
    <div class="section-inner">
      <div class="section-label">
        <span class="label-line"></span>
        <span class="label-text">Latest Posts</span>
        <span class="label-num">06</span>
      </div>

      <div class="blog-header">
        <h2 class="section-title">Thoughts &<br /><em>bars.</em></h2>
        <NuxtLink to="/blog/" class="blog-see-all">Lihat semua &rarr;</NuxtLink>
      </div>

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
</template>

<style scoped>
.blog {
  background: var(--gum-peach);
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
  .blog-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .blog-item {
    grid-template-columns: 32px 1fr;
  }
  .blog-item__right {
    display: none;
  }
}
</style>
