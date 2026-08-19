<script setup lang="ts">
</script>

<template>
  <section id="about" class="about">
    <div class="section-inner">
      <div class="section-label">
        <span class="label-line"></span>
        <span class="label-text">About</span>
        <span class="label-num">02</span>
      </div>

      <div class="about-grid">
        <div class="about-left">
          <h2 class="section-title">
            A coder who<br /><em>rhymes & lifts.</em>
          </h2>
          <div class="about-divider"></div>
          <p class="about-body">
            I'm a frontend enthusiast who spends time coding, working out,
            and dropping beats.
          </p>
          <p class="about-body about-body--mt">
            One day I wanna be a 'green flag rapper' who tells the story of
            the healthy transitionY and transitionX.
          </p>
          <div class="about-stats">
            <div class="stat">
              <span class="stat-num">3</span>
              <span class="stat-label">Worlds</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-num">1</span>
              <span class="stat-label">Mission</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-num">&infin;</span>
              <span class="stat-label">Grind</span>
            </div>
          </div>
        </div>

        <div class="about-right">
          <div class="about-card">
            <div class="about-card__header">
              <span class="about-card__dot"></span>
              <span class="about-card__dot"></span>
              <span class="about-card__dot"></span>
            </div>
            <div class="about-card__content">
              <p class="about-card__line">
                <span class="code-key">const</span>
                <span class="code-var">ghufran</span> = {
              </p>
              <p class="about-card__line about-card__line--indent">
                <span class="code-key">role</span>:
                <span class="code-str">"Frontend Dev"</span>,
              </p>
              <p class="about-card__line about-card__line--indent">
                <span class="code-key">also</span>:
                <span class="code-str">"Rapper + Lifter"</span>,
              </p>
              <p class="about-card__line about-card__line--indent">
                <span class="code-key">base</span>:
                <span class="code-str">"Semarang, ID"</span>,
              </p>
              <p class="about-card__line about-card__line--indent">
                <span class="code-key">status</span>:
                <span class="code-str">"Learning &rarr; Building"</span>,
              </p>
              <p class="about-card__line about-card__line--indent">
                <span class="code-key">goal</span>:
                <span class="code-str">"Zero to Hero"</span>
              </p>
              <p class="about-card__line">}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--primary-color);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-divider {
  width: 56px;
  height: 3px;
  background: var(--black-color);
  margin-bottom: 1.5rem;
}

.about-body {
  font-size: 15px;
  color: #222;
  line-height: 1.8;
  font-weight: 400;
}

.about-body--mt {
  margin-top: 1rem;
}

.about-stats {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 2px solid var(--black-color);
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-num {
  font-family: "Cormorant Garamond", serif;
  font-size: 40px;
  font-weight: 300;
  color: var(--black-color);
  line-height: 1;
}

.stat-label {
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--black-color);
  font-weight: 600;
}

.stat-divider {
  width: 2px;
  height: 36px;
  background: var(--black-color);
}

.about-right {
  display: flex;
  justify-content: center;
}

.about-card {
  background: #1e1e1e;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  max-width: 380px;
  border: 2px solid var(--black-color);
  box-shadow: var(--shadow-lg);
}

.about-card__header {
  display: flex;
  gap: 6px;
  padding: 12px 16px;
  background: #2a2a2a;
  border-bottom: 2px solid #000;
}

.about-card__dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.35);
}

.about-card__dot:nth-child(1) {
  background: #ff5f57;
}
.about-card__dot:nth-child(2) {
  background: #febc2e;
}
.about-card__dot:nth-child(3) {
  background: #28c840;
}

.about-card__content {
  padding: 20px;
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
  line-height: 1.9;
}

.about-card__line {
  color: #ccc;
}
.about-card__line--indent {
  padding-left: 20px;
}
.code-key {
  color: #569cd6;
}
.code-var {
  color: #9cdcfe;
}
.code-str {
  color: #ce9178;
}

@media (max-width: 640px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .about-right {
    display: none;
  }
  .about-stats {
    gap: 1.25rem;
  }
}
</style>
