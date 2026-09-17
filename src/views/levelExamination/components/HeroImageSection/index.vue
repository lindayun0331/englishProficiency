<template>
    <section class="hero-image-section">
        <div class="container">
            <div class="hero-copy">
                <p class="eyebrow">CAMBRIDGE EXAMS</p>
                <h1>让每一次进阶，<br /><span>都有权威坐标</span></h1>
                <p>以剑桥英语等级考试为能力坐标，为不同基础的孩子规划清晰、可验证的成长路径。系统训练听、说、读、写，也培养面对挑战的从容与自信。</p>
                <div class="exam-path" aria-label="考试进阶路径">
                    <span>YLE</span><i></i><span>KET</span><i></i><span>PET</span><i></i><span>FCE</span>
                </div>
            </div>
            <figure class="hero-figure">
                <img :src="heroImage" alt="等级考试课程规划及能力要求" class="hero-image" />
                <figcaption>循序渐进 · 稳步提升 · 对标国际标准</figcaption>
            </figure>
        </div>
    </section>
</template>

<script setup lang="ts">
const heroImage = new URL('@/assets/images/levelExamination/等级考试课程规划及能力要求.png', import.meta.url).href;
</script>

<style scoped lang="scss">
.hero-image-section {
    min-height: min(700px, calc(100vh - 80px));
    display: flex;
    align-items: center;
    padding: clamp(4rem, 8vw, 7rem) 0;
    color: #fff;
    background:
        radial-gradient(circle at 10% 90%, rgba(216, 161, 71, 0.17), transparent 30%),
        linear-gradient(135deg, var(--brand-navy-deep), #123d5e);
    overflow: hidden;
}

.container {
    width: min(var(--site-width), calc(100% - 3rem));
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 0.82fr) minmax(500px, 1.18fr);
    gap: clamp(3rem, 7vw, 7rem);
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
    font-size: clamp(3rem, 4.3vw, 4.6rem);
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

.exam-path {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-top: 2.25rem;
    color: rgba(255, 255, 255, 0.78);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
}

.exam-path i {
    width: clamp(18px, 3vw, 42px);
    height: 1px;
    background: rgba(239, 196, 125, 0.55);
}

.hero-figure {
    position: relative;
    margin: 0;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.97);
    box-shadow: 0 35px 75px rgba(1, 15, 26, 0.42);
    transform: rotate(1deg);
}

.hero-figure::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -1.5rem;
    right: -1.5rem;
    width: 70%;
    height: 70%;
    border: 1px solid rgba(239, 196, 125, 0.42);
}

.hero-image {
    width: 100%;
    height: auto;
    display: block;
}

.hero-figure figcaption {
    padding: 1rem 0.25rem 0.2rem;
    color: var(--brand-navy);
    font-size: 0.78rem;
    letter-spacing: 0.08em;
}

@media (max-width: 980px) {
    .container {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 600px) {
    .container {
        width: calc(100% - 2rem);
    }

    .hero-figure {
        padding: 0.5rem;
    }
}
</style>
