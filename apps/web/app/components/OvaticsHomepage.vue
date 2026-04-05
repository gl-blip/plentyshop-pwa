<template>
  <div class="ov-home">

    <!-- ═══════════ HERO ═══════════ -->
    <section class="hero">
      <div class="hero-bg">
        <div class="orb orb-1" />
        <div class="orb orb-2" />
        <div class="orb orb-3" />
        <div class="hero-grid-pattern" />
      </div>
      <div class="hero-content">
        <span class="hero-badge anim anim-fade">Willkommen bei Ovatics</span>
        <h1 class="hero-title">
          <span class="hero-line anim anim-up" style="--d:0.10s">Vielfalt.</span>
          <span class="hero-line hero-line--mid anim anim-up" style="--d:0.22s">Qualität.</span>
          <span class="hero-line hero-line--dim anim anim-up" style="--d:0.34s">Vertrauen.</span>
        </h1>
        <p class="hero-sub anim anim-up" style="--d:0.46s">
          Ausgewählte Produkte für jeden Moment des Lebens –<br class="hero-br" />
          von Baby &amp; Familie bis Premium-Champagner.
        </p>
        <div class="hero-actions anim anim-up" style="--d:0.58s">
          <NuxtLink to="/baby" class="btn-primary">Sortiment entdecken</NuxtLink>
          <NuxtLink to="/champagner" class="btn-ghost">Champagner &amp; Spirits</NuxtLink>
        </div>
      </div>
      <div class="hero-scroll">
        <div class="scroll-track"><div class="scroll-thumb" /></div>
      </div>
    </section>

    <!-- ═══════════ CATEGORIES ═══════════ -->
    <section class="cats-section">
      <div class="cats-header anim anim-up">
        <span class="label-chip">Unsere Kategorien</span>
        <h2 class="section-title">Was wir für dich führen</h2>
        <p class="section-sub">Entdecke ausgewählte Produkte in fünf Kategorien – von Alltag bis Genuss.</p>
      </div>

      <div class="bento">
        <!-- Baby & Familie – groß, 2 Spalten -->
        <NuxtLink to="/baby" class="bcard bcard--large anim anim-scale" style="--d:0.05s">
          <img
            src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1000&h=620&fit=crop&q=80&auto=format"
            alt="Baby & Familie"
            class="bcard-img"
            loading="lazy"
          />
          <div class="bcard-overlay" />
          <div class="bcard-body">
            <span class="bcard-chip">Bestseller</span>
            <h3 class="bcard-name">Baby &amp; Familie</h3>
            <p class="bcard-desc">Alles für die Kleinen und die ganze Familie</p>
            <span class="bcard-link">Entdecken →</span>
          </div>
        </NuxtLink>

        <!-- Champagner – tall, rechte Spalte, übergreift 2 Reihen -->
        <NuxtLink to="/champagner" class="bcard bcard--tall anim anim-scale" style="--d:0.12s">
          <img
            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=620&h=900&fit=crop&q=80&auto=format"
            alt="Champagner & Spirits"
            class="bcard-img"
            loading="lazy"
          />
          <div class="bcard-overlay" />
          <div class="bcard-body">
            <span class="bcard-chip bcard-chip--gold">Premium</span>
            <h3 class="bcard-name">Champagner &amp; Spirits</h3>
            <p class="bcard-desc">Für besondere Momente und Anlässe</p>
            <span class="bcard-link">Entdecken →</span>
          </div>
        </NuxtLink>

        <!-- Pflege & Beauty – normal -->
        <NuxtLink to="/pflege" class="bcard anim anim-scale" style="--d:0.20s">
          <img
            src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=620&h=440&fit=crop&q=80&auto=format"
            alt="Pflege & Beauty"
            class="bcard-img"
            loading="lazy"
          />
          <div class="bcard-overlay" />
          <div class="bcard-body">
            <span class="bcard-chip">Neu</span>
            <h3 class="bcard-name">Pflege &amp; Beauty</h3>
            <p class="bcard-desc">Natürliche Schönheit für jeden Tag</p>
            <span class="bcard-link">Entdecken →</span>
          </div>
        </NuxtLink>

        <!-- Spirituosen – normal -->
        <NuxtLink to="/spirits" class="bcard anim anim-scale" style="--d:0.28s">
          <img
            src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=620&h=440&fit=crop&q=80&auto=format"
            alt="Spirituosen"
            class="bcard-img"
            loading="lazy"
          />
          <div class="bcard-overlay" />
          <div class="bcard-body">
            <span class="bcard-chip">Beliebt</span>
            <h3 class="bcard-name">Spirituosen</h3>
            <p class="bcard-desc">Premium-Auswahl aus aller Welt</p>
            <span class="bcard-link">Entdecken →</span>
          </div>
        </NuxtLink>

        <!-- Spielwaren – breit, untere Reihe -->
        <NuxtLink to="/spielwaren" class="bcard bcard--wide anim anim-scale" style="--d:0.36s">
          <img
            src="https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=1100&h=380&fit=crop&q=80&auto=format"
            alt="Spielwaren"
            class="bcard-img"
            loading="lazy"
          />
          <div class="bcard-overlay bcard-overlay--horizontal" />
          <div class="bcard-body">
            <span class="bcard-chip">Spielwaren</span>
            <h3 class="bcard-name">Spielwaren &amp; Freizeit</h3>
            <p class="bcard-desc">Spaß und Kreativität für alle Altersgruppen</p>
            <span class="bcard-link">Entdecken →</span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- ═══════════ TRUST ═══════════ -->
    <section class="trust-section">
      <div class="trust-inner">
        <div
          v-for="(item, i) in trustItems"
          :key="i"
          class="trust-item anim anim-up"
          :style="`--d:${i * 0.12}s`"
        >
          <div class="trust-icon">{{ item.icon }}</div>
          <h3 class="trust-title">{{ item.title }}</h3>
          <p class="trust-text">{{ item.text }}</p>
        </div>
      </div>
    </section>

    <!-- ═══════════ BRAND CTA ═══════════ -->
    <section class="brand-section">
      <div class="brand-wm" aria-hidden="true">OVATICS</div>
      <div class="brand-inner anim anim-up">
        <span class="label-chip label-chip--light">Ovatics GmbH</span>
        <h2 class="brand-title">Eine Marke.<br />Endlose Vielfalt.</h2>
        <p class="brand-text">
          Entdecke unser vollständiges Sortiment – sorgfältig ausgewählt
          und zuverlässig zu dir geliefert.
        </p>
        <NuxtLink to="/" class="btn-white">Alle Produkte ansehen</NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

const trustItems = [
  {
    icon: '✓',
    title: 'Geprüfte Qualität',
    text: 'Nur sorgfältig ausgewählte Produkte aus vertrauenswürdigen Quellen.',
  },
  {
    icon: '⚡',
    title: 'Schneller Versand',
    text: 'Zuverlässige Lieferung – schnell und direkt zu dir nach Hause.',
  },
  {
    icon: '♡',
    title: 'Kundenzufriedenheit',
    text: 'Deine Zufriedenheit steht bei uns an erster Stelle.',
  },
];

// Scroll-triggered animations via Intersection Observer
let io: IntersectionObserver | null = null;

onMounted(() => {
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.style.getPropertyValue('--d') || '0s';
          el.style.transitionDelay = delay;
          el.classList.add('visible');
          io?.unobserve(el);
        }
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll('.anim').forEach((el) => io?.observe(el));
});

onUnmounted(() => io?.disconnect());
</script>

<style scoped>
/* ─── Reset & Font ─── */
.ov-home {
  font-family: 'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #fff;
  color: #111;
  overflow-x: hidden;
}

/* ─── Scroll Animations ─── */
.anim {
  opacity: 0;
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.anim.visible { opacity: 1; transform: none !important; }
.anim-fade { }
.anim-up { transform: translateY(36px); }
.anim-scale { transform: translateY(20px) scale(0.97); }

/* ═══════════════════════════════════════
   HERO
═══════════════════════════════════════ */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #07091a;
}

/* Animated background orbs */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
}

.orb-1 {
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, #202D89 0%, transparent 70%);
  top: -200px;
  left: -150px;
  opacity: 0.65;
  animation: orbPulse 14s ease-in-out infinite;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #DA0813 0%, transparent 70%);
  bottom: -100px;
  right: 5%;
  opacity: 0.45;
  animation: orbPulse 10s ease-in-out infinite reverse;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, #4a6cf7 0%, transparent 70%);
  top: 35%;
  right: 15%;
  opacity: 0.4;
  animation: orbPulse 18s ease-in-out infinite 2s;
}

@keyframes orbPulse {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(40px, -30px) scale(1.08); }
  66%       { transform: translate(-25px, 40px) scale(0.93); }
}

/* Subtle dot-grid pattern */
.hero-grid-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.6;
}

/* Hero content */
.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 1.5rem;
  max-width: 900px;
}

.hero-badge {
  display: inline-block;
  padding: 0.4rem 1.2rem;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.65);
  margin-bottom: 2rem;
  backdrop-filter: blur(4px);
  background: rgba(255,255,255,0.05);
}

.hero-title {
  font-size: clamp(3.5rem, 9vw, 8rem);
  font-weight: 800;
  line-height: 0.95;
  margin-bottom: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.05em;
}

.hero-line {
  display: block;
  color: #ffffff;
}
.hero-line--mid { color: rgba(255,255,255,0.65); }
.hero-line--dim { color: rgba(255,255,255,0.28); }

.hero-sub {
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: rgba(255,255,255,0.55);
  max-width: 520px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
}

.hero-br { display: none; }
@media (min-width: 640px) { .hero-br { display: block; } }

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Buttons */
.btn-primary {
  display: inline-block;
  padding: 0.9rem 2.2rem;
  background: #202D89;
  color: #fff;
  border-radius: 100px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
  box-shadow: 0 4px 28px rgba(32, 45, 137, 0.55);
}
.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 40px rgba(32, 45, 137, 0.75);
}

.btn-ghost {
  display: inline-block;
  padding: 0.9rem 2.2rem;
  background: transparent;
  color: rgba(255,255,255,0.75);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: background 0.22s ease, color 0.22s ease;
}
.btn-ghost:hover {
  background: rgba(255,255,255,0.08);
  color: #fff;
}

.btn-white {
  display: inline-block;
  padding: 1rem 2.8rem;
  background: #fff;
  color: #202D89;
  border-radius: 100px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}
.btn-white:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 40px rgba(0,0,0,0.25);
}

/* Scroll indicator */
.hero-scroll {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.scroll-track {
  width: 2px;
  height: 70px;
  background: rgba(255,255,255,0.12);
  border-radius: 2px;
  overflow: hidden;
}
.scroll-thumb {
  width: 100%;
  height: 50%;
  background: rgba(255,255,255,0.5);
  border-radius: 2px;
  animation: scrollThumb 2.2s ease-in-out infinite;
}
@keyframes scrollThumb {
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(200%); }
}


/* ═══════════════════════════════════════
   CATEGORIES
═══════════════════════════════════════ */
.cats-section {
  padding: 7rem 1.5rem 6rem;
  max-width: 1440px;
  margin: 0 auto;
}

.cats-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.label-chip {
  display: inline-block;
  padding: 0.3rem 1rem;
  background: #eef0fb;
  color: #202D89;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.label-chip--light {
  background: rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.7);
}

.section-title {
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 800;
  color: #07091a;
  margin-bottom: 0.75rem;
  line-height: 1.1;
}

.section-sub {
  font-size: 1.05rem;
  color: #64748b;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.65;
}

/* ─── Bento Grid ─── */
.bento {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 460px 340px 290px;
  grid-template-areas:
    "baby   baby   champ"
    "pflege spirit champ"
    "spiel  spiel  ."   ;
  gap: 14px;
}

/* Modifier classes map to grid-area */
.bcard--large { grid-area: baby; }
.bcard--tall  { grid-area: champ; }
.bcard--wide  { grid-area: spiel; }

/* Auto-assign normal cards by order within bento */
.bcard:nth-child(3) { grid-area: pflege; }
.bcard:nth-child(4) { grid-area: spirit; }

/* ─── Card base ─── */
.bcard {
  position: relative;
  display: block;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  background: #0a0f2e;
}

.bcard-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              filter 0.65s ease;
  filter: brightness(0.88);
}

.bcard:hover .bcard-img {
  transform: scale(1.06);
  filter: brightness(0.75);
}

.bcard-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(7, 9, 26, 0.88) 0%,
    rgba(7, 9, 26, 0.35) 50%,
    rgba(7, 9, 26, 0.05) 100%
  );
  transition: opacity 0.4s ease;
}
.bcard-overlay--horizontal {
  background: linear-gradient(
    to right,
    rgba(7, 9, 26, 0.85) 0%,
    rgba(7, 9, 26, 0.2) 60%,
    transparent 100%
  );
}

.bcard-body {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.75rem 2rem;
  transition: transform 0.4s ease;
}

.bcard:hover .bcard-body {
  transform: translateY(-6px);
}

.bcard-chip {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(6px);
  border-radius: 100px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.85);
  margin-bottom: 0.6rem;
}
.bcard-chip--gold {
  background: rgba(218, 165, 32, 0.3);
  color: #f5d26e;
}

.bcard-name {
  font-size: clamp(1.2rem, 2.2vw, 1.65rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 0.4rem;
}

.bcard-desc {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.65);
  margin-bottom: 0.75rem;
  line-height: 1.4;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.bcard:hover .bcard-desc {
  opacity: 1;
  transform: translateY(0);
}

.bcard-link {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 700;
  color: #fff;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s;
}
.bcard:hover .bcard-link {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive bento */
@media (max-width: 900px) {
  .bento {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "baby   baby  "
      "champ  champ "
      "pflege spirit"
      "spiel  spiel ";
  }
  .bcard--large { min-height: 320px; }
  .bcard--tall  { min-height: 360px; }
  .bcard        { min-height: 240px; }
  .bcard--wide  { min-height: 240px; }
}

@media (max-width: 560px) {
  .bento {
    grid-template-columns: 1fr;
    grid-template-areas:
      "baby"
      "champ"
      "pflege"
      "spirit"
      "spiel";
  }
  .bcard { min-height: 260px; }
}


/* ═══════════════════════════════════════
   TRUST
═══════════════════════════════════════ */
.trust-section {
  background: #f7f8ff;
  padding: 6rem 1.5rem;
  border-top: 1px solid #eef0fb;
  border-bottom: 1px solid #eef0fb;
}

.trust-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

@media (max-width: 768px) {
  .trust-inner { grid-template-columns: 1fr; gap: 2.5rem; }
}

.trust-item { text-align: center; }

.trust-icon {
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, #202D89 0%, #4a6cf7 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin: 0 auto 1.25rem;
  box-shadow: 0 8px 30px rgba(32, 45, 137, 0.25);
}

.trust-title {
  font-size: 1.2rem;
  font-weight: 800;
  color: #07091a;
  margin-bottom: 0.6rem;
}

.trust-text {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.65;
  max-width: 280px;
  margin: 0 auto;
}


/* ═══════════════════════════════════════
   BRAND CTA
═══════════════════════════════════════ */
.brand-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(140deg, #07091a 0%, #202D89 60%, #0a1045 100%);
  padding: 9rem 1.5rem;
  text-align: center;
}

.brand-wm {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(5rem, 18vw, 20rem);
  font-weight: 900;
  color: rgba(255,255,255,0.03);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  letter-spacing: -0.02em;
}

.brand-inner {
  position: relative;
  z-index: 1;
  max-width: 680px;
  margin: 0 auto;
}

.brand-title {
  font-size: clamp(2.75rem, 6vw, 5rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.05;
  margin: 1.25rem 0 1.5rem;
}

.brand-text {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.7;
  margin-bottom: 3rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
</style>
