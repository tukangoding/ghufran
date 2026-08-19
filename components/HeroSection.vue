<script setup lang="ts">
</script>

<template>
  <section id="home" class="hero">
    <div class="hero-inner">
      <div class="hero-eyebrow">
        <span class="hero-eyebrow-line"></span>
        <span class="hero-eyebrow-text">Portfolio v2.0</span>
      </div>
      <h1 class="hero-name">Ghuf<em>rx</em>n.</h1>
      <div class="hero-divider">
        <div class="hero-divider-dot"></div>
        <div class="hero-divider-line"></div>
      </div>
      <p class="hero-tagline">
        I build webs, <strong>lift weights,</strong> and drop bars.
      </p>
      <div class="hero-cta">
        <a href="#portfolio" class="btn-primary">Lihat Portfolio</a>
        <a href="#contact" class="btn-secondary">Hubungi saya</a>
      </div>
      <div class="hero-tags">
        <span class="tag">Frontend Dev.</span>
        <span class="tag">Rapper</span>
        <span class="tag">Nasyid</span>
        <span class="tag">Lifter</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: var(--red-color);
  min-height: 78vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 0;
  position: relative;
  overflow: hidden;
  border-bottom: 2px solid var(--black-color);
}

.hero-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.5rem;
  background: var(--black-color);
  padding: 6px 12px;
  border-radius: 4px;
}

.hero-eyebrow-line {
  width: 24px;
  height: 2px;
  background: var(--red-color);
}

.hero-eyebrow-text {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #fff;
}

.hero-name {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(56px, 11vw, 110px);
  font-weight: 300;
  line-height: 0.92;
  letter-spacing: -0.06em;
  color: var(--black-color);
  margin-bottom: 0.15em;
}

.hero-name em {
  font-style: italic;
  font-weight: 300;
  color: var(--black-color);
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 6px;
}

.hero-divider {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 1.5rem 0;
}

.hero-divider-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--black-color);
}

.hero-divider-line {
  width: 80px;
  height: 2px;
  background: var(--black-color);
}

.hero-tagline {
  font-family: var(--font-body);
  font-size: clamp(15px, 2.5vw, 19px);
  font-weight: 400;
  color: var(--black-color);
  line-height: 1.5;
  letter-spacing: 0.01em;
  margin-bottom: 2.5rem;
}

.hero-tagline strong {
  font-weight: 700;
  color: var(--black-color);
}

.hero-cta {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 3rem;
}

.tag {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--black-color);
  border: 2px solid var(--black-color);
  padding: 5px 11px;
  border-radius: 4px;
  background: #fff;
}

@media (max-width: 640px) {
  .hero {
    min-height: 0;
    padding: 4rem 0 3rem;
  }

  .hero-cta {
    gap: 0.75rem;
  }

  .btn-primary,
  .btn-secondary {
    flex: 1;
    text-align: center;
  }
}
</style>
