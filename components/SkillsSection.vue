<script setup lang="ts">
const { observe } = useScrollReveal()

onMounted(() => {
  observe()
})
</script>

<template>
  <section id="skills" class="skills">
    <div class="section-inner">
      <div class="section-label reveal-on-scroll">
        <span class="label-line"></span>
        <span class="label-text">Skills</span>
        <span class="label-num">03</span>
      </div>

      <h2 class="section-title reveal-on-scroll delay-1">Tools of the<br /><em>trade.</em></h2>

      <div class="sk-grid">
        <div class="sk-card reveal-on-scroll delay-1">
          <div class="sk-card-top">
            <span class="sk-icon sk-icon--html">&lt;/&gt;</span>
            <span class="sk-status sk-status--built">Built with it</span>
          </div>
          <p class="sk-name">HTML</p>
          <p class="sk-desc">
            Built <strong>semantic structure</strong> for portfolio &amp; client
            sites. Knows the difference between a div and a section &mdash; and
            when it matters.
          </p>
        </div>

        <div class="sk-card reveal-on-scroll delay-2">
          <div class="sk-card-top">
            <span class="sk-icon sk-icon--css">{ }</span>
            <span class="sk-status sk-status--built">Built with it</span>
          </div>
          <p class="sk-name">CSS</p>
          <p class="sk-desc">
            Built <strong>responsive navbar</strong> from scratch &mdash; no
            framework. Animasi hamburger, flexbox layout, media query,
            custom variables.
          </p>
        </div>

        <div class="sk-card reveal-on-scroll delay-3">
          <div class="sk-card-top">
            <span class="sk-icon sk-icon--js">JS</span>
            <span class="sk-status sk-status--learning">Learning</span>
          </div>
          <p class="sk-name">JavaScript</p>
          <p class="sk-desc">
            Paham <strong>DOM, events, dan state</strong>. Lagi explore
            fetch API dan async. Belajar dari first principle, bukan
            tutorial.
          </p>
        </div>

        <div class="sk-card reveal-on-scroll delay-3">
          <div class="sk-card-top">
            <span class="sk-icon sk-icon--vue">V.</span>
            <span class="sk-status sk-status--built">Built with it</span>
          </div>
          <p class="sk-name">Vue / Nuxt</p>
          <p class="sk-desc">
            Component-based architecture, <strong>SSG, routing</strong>,
            dan composables. Portfolio v2.0 dibangun dengan Nuxt 3.
          </p>
        </div>
      </div>

      <div class="sk-beyond">
        <p class="sk-beyond-label">Beyond the screen</p>
        <div class="sk-beyond-grid">
          <div class="sk-beyond-item">
            <span class="sk-beyond-dot"></span>
            <span class="sk-beyond-name">Rap &amp; Lyricism</span>
            <span class="sk-beyond-note">original</span>
          </div>
          <div class="sk-beyond-item">
            <span class="sk-beyond-dot"></span>
            <span class="sk-beyond-name">Nasyid</span>
            <span class="sk-beyond-note">vocal</span>
          </div>
          <div class="sk-beyond-item">
            <span class="sk-beyond-dot"></span>
            <span class="sk-beyond-name">Strength Training</span>
            <span class="sk-beyond-note">consistent</span>
          </div>
          <div class="sk-beyond-item">
            <span class="sk-beyond-dot"></span>
            <span class="sk-beyond-name">Content Creation</span>
            <span class="sk-beyond-note">@fitdiamdiam</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  background: var(--gum-peach);
  border-top: 2px solid var(--black-color);
}

.sk-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.sk-card {
  background: var(--primary-color);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 2px solid var(--black-color);
  border-radius: 6px;
  box-shadow: var(--shadow);
  transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.15s;
}

.sk-card:hover {
  background: #fff;
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-lg);
}

.sk-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.sk-icon {
  width: 40px;
  height: 40px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.02em;
  border: 2px solid var(--black-color);
  color: var(--black-color);
}

.sk-icon--html {
  background: var(--gum-yellow);
}
.sk-icon--css {
  background: var(--gum-blue);
}
.sk-icon--js {
  background: var(--gum-pink);
}
.sk-icon--vue {
  background: var(--gum-teal);
  color: #fff;
}

.sk-status {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 9px;
  border-radius: 4px;
  white-space: nowrap;
  border: 2px solid var(--black-color);
  color: var(--black-color);
}

.sk-status--built {
  background: var(--gum-teal);
  color: #fff;
}
.sk-status--learning {
  background: #fff;
}
.sk-status--exploring {
  background: var(--gum-yellow);
}

.sk-name {
  font-size: 17px;
  font-weight: 700;
  color: var(--black-color);
  letter-spacing: -0.01em;
}

.sk-desc {
  font-size: 12px;
  color: #333;
  line-height: 1.6;
  font-weight: 400;
  border-top: 2px solid var(--black-color);
  padding-top: 1rem;
}

.sk-desc strong {
  color: var(--black-color);
  font-weight: 700;
}

.sk-beyond {
  padding-top: 1.5rem;
  border-top: 2px solid var(--black-color);
}

.sk-beyond-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--black-color);
  margin-bottom: 1rem;
}

.sk-beyond-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.sk-beyond-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 13px;
  border: 2px solid var(--black-color);
  border-radius: 6px;
  background: var(--primary-color);
  box-shadow: var(--shadow-sm);
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.sk-beyond-item:hover {
  transform: translate(-1px, -1px);
  box-shadow: 3px 3px 0 #000;
}

.sk-beyond-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--red-color);
  border: 1.5px solid var(--black-color);
  flex-shrink: 0;
}

.sk-beyond-name {
  font-size: 12px;
  color: var(--black-color);
  font-weight: 500;
}

.sk-beyond-note {
  font-size: 11px;
  color: #555;
  margin-left: auto;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .sk-grid {
    grid-template-columns: 1fr;
  }
  .sk-beyond-grid {
    grid-template-columns: 1fr;
  }
}
</style>
