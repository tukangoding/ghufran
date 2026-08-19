<script setup lang="ts">
const isOpen = ref(false)

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Videos', href: '/#videos' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/#contact' },
]

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeMenu()
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header>
    <div
      class="navbar-wrapper"
      :class="{ 'is-open': isOpen }"
      @click.self="closeMenu"
    >
      <div class="container">
        <NuxtLink to="/" class="navbar__logo" @click="closeMenu">
          ghuf<span class="span__logo">rx</span>n.
        </NuxtLink>

        <nav class="nav-links">
          <NuxtLink
            v-for="link in links"
            :key="link.href"
            :to="link.href"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <button
          class="hamburger"
          :aria-expanded="isOpen"
          aria-label="Toggle navigation"
          @click.stop="toggleMenu"
        >
          <span class="bar" />
          <span class="bar" />
          <span class="bar" />
        </button>
      </div>

      <nav class="mobile-menu">
        <NuxtLink
          v-for="(link, i) in links"
          :key="link.href"
          :to="link.href"
          class="mobile-menu__item"
          @click="closeMenu"
        >
          <div class="item-left">
            <span class="item-num">0{{ i + 1 }}</span>
            <span>{{ link.label }}</span>
          </div>
          <svg
            class="item-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
