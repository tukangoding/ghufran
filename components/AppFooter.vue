<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="section-inner footer-inner">
      <div class="footer-left">
        <NuxtLink to="/" class="footer-logo">ghuf<em>rx</em>n.</NuxtLink>
        <p class="footer-tagline">Code. Rap. Lift. Repeat.</p>
      </div>
      <div class="footer-right">
        <p class="footer-copy">&copy; {{ year }} Ghufran. Built with Nuxt.js.</p>
        <a href="/#top" class="footer-top">Back to top &uarr;</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--black-color);
  border-top: 2px solid var(--red-color);
  padding: 2.5rem 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo {
  font-family: "Cormorant Garamond", serif;
  font-size: 24px;
  font-weight: 300;
  color: #fff;
  text-decoration: none;
  letter-spacing: -0.02em;
}

.footer-logo em {
  font-style: italic;
  color: var(--red-color);
}

.footer-tagline {
  font-size: 11px;
  font-weight: 500;
  color: #999;
  letter-spacing: 0.08em;
  margin-top: 4px;
}

.footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
}

.footer-copy {
  font-size: 11px;
  color: #999;
}

.footer-top {
  font-size: 11px;
  font-weight: 600;
  color: var(--red-color);
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: color 0.2s;
}

.footer-top:hover {
  color: #fff;
}

@media (max-width: 640px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
