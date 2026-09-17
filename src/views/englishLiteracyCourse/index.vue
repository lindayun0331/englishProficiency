<template>
    <div class="english-literacy-course-container">
        <section class="course-hero">
            <div class="hero-inner">
                <div class="hero-copy">
                    <p class="eyebrow">ENGLISH LITERACY</p>
                    <h1>不止学英语，<br /><span>更要用英语成长</span></h1>
                    <p>从启蒙阅读到青少年学术英语，以科学分级串联听、说、读、写，让语言能力、思维能力与国际视野同步生长。</p>
                    <div class="hero-facts">
                        <span><strong>3–15</strong> 岁学习路径</span>
                        <span><strong>9</strong> 阶能力进阶</span>
                        <span><strong>CEFR</strong> 国际对标</span>
                    </div>
                </div>
                <div class="hero-visual" aria-label="课程教材展示">
                    <div class="book-card book-card--one"><img :src="bookOne" alt="Power Up 系列教材" /></div>
                    <div class="book-card book-card--two"><img :src="bookTwo" alt="Think 系列教材" /></div>
                    <span class="visual-mark">A+</span>
                </div>
            </div>
        </section>
        <CapabilityLadderSection />
        <CapabilityBenchmarkSection />
        <CourseIntroSection />
    </div>
</template>

<script setup lang="ts">
import CapabilityLadderSection from './components/CapabilityLadderSection/index.vue';
import CapabilityBenchmarkSection from './components/CapabilityBenchmarkSection/index.vue';
import CourseIntroSection from './components/CourseIntroSection/index.vue';
import bookOne from '@/assets/images/englishLiteracyCourse/power1-6.png';
import bookTwo from '@/assets/images/englishLiteracyCourse/think1-6.png';
</script>

<style scoped lang="scss">
.english-literacy-course-container {
    min-height: 100vh;
    color: var(--brand-navy);
    background: var(--brand-ivory);
}

.course-hero {
    min-height: min(690px, calc(100vh - 80px));
    display: flex;
    align-items: center;
    color: #fff;
    background:
        radial-gradient(circle at 83% 20%, rgba(216, 161, 71, 0.18), transparent 28%),
        linear-gradient(135deg, var(--brand-navy-deep), #123d5e);
    overflow: hidden;
}

.hero-inner {
    width: min(var(--site-width), calc(100% - 3rem));
    margin: 0 auto;
    padding: 5.5rem 0;
    display: grid;
    grid-template-columns: minmax(0, 0.92fr) minmax(420px, 1.08fr);
    gap: clamp(3rem, 8vw, 8rem);
    align-items: center;
}

.eyebrow {
    margin-bottom: 1.25rem;
    color: var(--brand-gold-light);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.2em;
}

.hero-copy h1 {
    font-size: clamp(3rem, 5vw, 5.0rem);
    font-weight: 350;
    line-height: 1.08;
    letter-spacing: -0.055em;
}

.hero-copy h1 span {
    color: var(--brand-gold-light);
}

.hero-copy>p:not(.eyebrow) {
    max-width: 580px;
    margin-top: 2rem;
    color: rgba(255, 255, 255, 0.72);
    font-size: 1.05rem;
    line-height: 1.95;
}

.hero-facts {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 2.25rem;
    color: rgba(255, 255, 255, 0.62);
    font-size: 0.82rem;
}

.hero-facts strong {
    display: block;
    color: #fff;
    font-size: 1.15rem;
    font-weight: 600;
}

.hero-visual {
    position: relative;
    min-height: 430px;
}

.hero-visual::before {
    content: '';
    position: absolute;
    inset: 10% 7% 5% 13%;
    border: 1px solid rgba(255, 255, 255, 0.18);
}

.book-card {
    position: absolute;
    width: 60%;
    padding: 1.2rem;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 35px 70px rgba(1, 15, 26, 0.4);
}

.book-card img {
    display: block;
    width: 100%;
}

.book-card--one {
    top: 4%;
    left: 3%;
    transform: rotate(-4deg);
}

.book-card--two {
    right: 1%;
    bottom: 0;
    transform: rotate(4deg);
}

.visual-mark {
    position: absolute;
    right: 2%;
    top: 0;
    color: rgba(239, 196, 125, 0.22);
    font-family: Georgia, serif;
    font-size: 7rem;
}

@media (max-width: 900px) {
    .hero-inner {
        grid-template-columns: 1fr;
    }

    .hero-visual {
        min-height: 390px;
    }
}

@media (max-width: 600px) {
    .hero-inner {
        width: calc(100% - 2rem);
        padding: 4rem 0;
    }

    .hero-visual {
        min-height: 300px;
    }
}
</style>
