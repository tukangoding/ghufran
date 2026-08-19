<script setup lang="ts">
const contactLinks = [
  {
    label: 'Email',
    value: 'ghufran.lentera@students.unnes.ac.id',
    href: 'mailto:ghufran.lentera@students.unnes.ac.id',
    icon: 'email',
  },
  {
    label: 'Instagram',
    value: '@ghufranelazizi',
    href: 'https://instagram.com/ghufranelazizi',
    icon: 'instagram',
  },
  {
    label: 'WhatsApp',
    value: '+62 811-2527-222',
    href: 'https://wa.me/628112527222',
    icon: 'whatsapp',
  },
]
</script>

<template>
  <section id="contact" class="contact">
    <div class="section-inner">
      <div class="section-label">
        <span class="label-line"></span>
        <span class="label-text">Contact</span>
        <span class="label-num">07</span>
      </div>

      <div class="contact-grid">
        <div class="contact-left">
          <h2 class="section-title contact-title">
            Let's build<br /><em>something.</em>
          </h2>
          <p class="contact-sub">
            Open for collaboration, project, atau sekadar ngobrol soal rap
            dan coding.
          </p>
        </div>

        <div class="contact-right">
          <a
            v-for="link in contactLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener"
            class="contact-link"
          >
            <div class="contact-link__icon">
              <svg
                v-if="link.icon === 'email'"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                stroke-width="1.2"
              >
                <rect x="2" y="5" width="16" height="12" rx="1" />
                <path d="M2 5l8 7 8-7" />
              </svg>
              <svg
                v-else-if="link.icon === 'instagram'"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                stroke-width="1.2"
              >
                <rect x="3" y="3" width="14" height="14" rx="4" />
                <circle cx="10" cy="10" r="3.5" />
                <circle cx="14" cy="6" r="0.8" fill="currentColor" />
              </svg>
              <svg
                v-else-if="link.icon === 'whatsapp'"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                stroke-width="1.2"
              >
                <path
                  d="M10 2a8 8 0 0 1 6.93 12l.57 3-3-.57A8 8 0 1 1 10 2z"
                />
                <path
                  d="M7 8.5c.5 1 1.5 2.5 3 3l1-1 2 1c-.5 1.5-2 2-3.5 1.5S6.5 11 6 9.5L7 8.5z"
                />
              </svg>
            </div>
            <div class="contact-link__body">
              <span class="contact-link__label">{{ link.label }}</span>
              <span class="contact-link__val">{{ link.value }}</span>
            </div>
            <svg
              class="contact-link__arrow"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
            >
              <path d="M3 13L13 3M13 3H6M13 3v7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: var(--black-color);
  border-top: 2px solid var(--black-color);
}

.contact :deep(.section-label) {
  background: var(--red-color);
}
.contact :deep(.label-line) {
  background: var(--black-color);
}
.contact :deep(.label-text) {
  color: var(--black-color);
}
.contact :deep(.label-num) {
  color: var(--black-color);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-title {
  color: #fff;
}
.contact-title em {
  color: #fff;
  text-decoration-color: var(--red-color);
}

.contact-sub {
  font-size: 14px;
  color: #ccc;
  line-height: 1.7;
  font-weight: 400;
  margin-top: -1rem;
}

.contact-right {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.4rem;
  text-decoration: none;
  background: #fff;
  border: 2px solid #fff;
  border-radius: 6px;
  box-shadow: 4px 4px 0 var(--red-color);
  transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.15s;
}

.contact-link:hover {
  background: var(--red-color);
  box-shadow: 4px 4px 0 #fff;
  transform: translate(-2px, -2px);
}
.contact-link:hover .contact-link__arrow {
  transform: translate(2px, -2px);
  color: var(--black-color);
}

.contact-link__icon {
  width: 38px;
  height: 38px;
  border-radius: 6px;
  background: var(--black-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid var(--black-color);
}

.contact-link__icon svg {
  width: 16px;
  height: 16px;
  color: var(--red-color);
}

.contact-link__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
}

.contact-link__label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #555;
}

.contact-link__val {
  font-size: 13px;
  font-weight: 500;
  color: var(--black-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.contact-link__arrow {
  width: 16px;
  height: 16px;
  color: var(--black-color);
  flex-shrink: 0;
  transition: transform 0.2s, color 0.2s;
}

@media (max-width: 640px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
