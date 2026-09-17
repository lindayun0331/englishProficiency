<template>
    <main class="study-page">
        <section class="study-hero">
            <div class="hero-inner">
                <div class="hero-copy">
                    <p class="eyebrow">SINGAPORE EDUCATION</p>
                    <h1>专注国际教育规划，<br /><span>为孩子选择更好的未来</span></h1>
                    <p class="hero-description">
                        从英语素养、剑桥等级考试，到夏校冬令营与新加坡公校留学，策景英学为不同阶段的孩子提供清晰、长期、可落地的国际教育路径。从政府公立到国际、私立，三大体系一文看懂；公立升学路线与永居价值，专业团队为你拆解。
                    </p>
                    <div class="hero-actions">
                        <a href="#services" class="primary-action">了解一站式服务 </a>
                        <a href="#reasons" class="text-action">为什么选择新加坡教育 </a>
                    </div>
                    <div class="hero-stats" aria-label="服务数据">
                        <div><strong>15+</strong><span>年国际教育规划经验</span></div>
                        <div><strong>1:1</strong><span>专属升学方案</span></div>
                        <div><strong>K–12</strong><span>完整学段覆盖</span></div>
                    </div>
                </div>
                <figure class="hero-figure">
                    <img :src="coverImage" alt="学生在新加坡南洋理工大学校园合影" />
                    <figcaption><span>01</span> 在真实世界里，打开孩子的国际视野</figcaption>
                </figure>
            </div>
        </section>

        <section id="services" class="content-section services-section">
            <div class="section-heading section-heading--left">
                <p class="eyebrow">ONE-STOP SUPPORT</p>
                <h2>从第一次咨询，<span>到顺利入学后的每一步</span></h2>
                <p>留学不是一次申请，而是一段持续的成长旅程。我们以家庭目标为起点，贯穿规划、备考、申请、入学与在校陪伴。</p>
            </div>
            <figure class="feature-figure feature-figure--large">
                <img :src="serviceImage" alt="新加坡留学六阶段一站式服务流程" />
                <figcaption>六阶段一站式服务｜让复杂的留学流程变得清晰可控</figcaption>
            </figure>
        </section>

        <section class="content-section systems-section">
            <figure class="feature-figure">
                <img :src="systemImage" alt="新加坡三大教育体系对比" />
            </figure>
            <div class="section-heading section-heading--left">
                <p class="eyebrow">MAKE AN INFORMED CHOICE</p>
                <h2>看懂教育体系，<br /><span>才能选对成长路径</span></h2>
                <p>新加坡拥有政府公立学校、国际学校与私立院校多元并行的教育生态。我们结合孩子的性格、学术基础与家庭规划，帮助你理解差异，做出适合长期发展的选择。</p>
                <div class="mini-points">
                    <div><span>01</span><strong>目标清晰</strong>
                        <p>从升学方向反推每一步准备</p>
                    </div>
                    <div><span>02</span><strong>方案灵活</strong>
                        <p>公立、国际、私立多路径比较</p>
                    </div>
                    <div><span>03</span><strong>持续陪伴</strong>
                        <p>入学后仍有学业与生活支持</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="reasons" class="reasons-section">
            <div class="section-heading">
                <p class="eyebrow">WHY SINGAPORE</p>
                <h2>为什么首选公立教育</h2>
                <p>在高质量、双语、多元且高性价比的教育环境里，让孩子稳步成长。</p>
            </div>
            <figure class="reason-figure">
                <img :src="reasonImage" alt="新加坡公立教育优势" />
            </figure>
            <div class="reason-tags">
                <span>世界认可的教育质量</span>
                <span>基础教育实力领先</span>
                <span>双语环境自然切换</span>
                <span>高性价比升学选择</span>
            </div>
        </section>

        <section class="path-section">
            <div class="path-inner">
                <div class="section-heading section-heading--left">
                    <p class="eyebrow">YOUR ROADMAP</p>
                    <h2>从桥梁课程到公校留学，<br /><span>每一步都有准备</span></h2>
                    <p>根据年龄与目标制定阶段性计划，让语言、考试和申请节奏彼此衔接，减少试错，稳步抵达理想学校。</p>
                    <button type="button" class="primary-action" @click="consultOpen = true">获取专属规划建议
                        <span>→</span></button>
                </div>
                <figure class="path-figure">
                    <img :src="pathImage" alt="新加坡国际教育规划升学路线" />
                </figure>
            </div>
        </section>

        <section class="focus-section">
            <div class="focus-inner">
                <figure class="focus-figure">
                    <img :src="focusImage" alt="专业国际教育规划服务" />
                </figure>
                <div class="focus-copy">
                    <p class="eyebrow">A TRUSTED PARTNER</p>
                    <h2>因为专注，<br /><span>所以专业</span></h2>
                    <p>我们不追求千篇一律的“标准答案”，而是用长期主义陪伴每一个家庭，找到真正适合孩子的教育路径。</p>
                    <div class="signature">策景英学 · 让教育选择更有方向</div>
                </div>
            </div>
        </section>

        <section class="consult-section">
            <div class="consult-inner">
                <p class="eyebrow">START YOUR JOURNEY</p>
                <h2>让适合孩子的教育规划<br /><span>从一次深入沟通开始</span></h2>
                <p>告诉我们孩子目前的情况与目标，获取更有针对性的课程和留学规划建议。</p>
                <button type="button" class="consult-button" @click="consultOpen = true">预约咨询 <span>→</span></button>
            </div>
        </section>
        <ConsultationDialog v-model="consultOpen" />
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ConsultationDialog from '@/components/ConsultationDialog/index.vue';

const consultOpen = ref(false);
const coverImage = new URL('@/assets/images/studyingAbroad/留学封面大图.png', import.meta.url).href;
const serviceImage = new URL('@/assets/images/studyingAbroad/六阶段一站式服务.png', import.meta.url).href;
const systemImage = new URL('@/assets/images/studyingAbroad/三大教育体系对比.png', import.meta.url).href;
const reasonImage = new URL('@/assets/images/studyingAbroad/选择的理由.png', import.meta.url).href;
const pathImage = new URL('@/assets/images/studyingAbroad/公里升学路线.png', import.meta.url).href;
const focusImage = new URL('@/assets/images/studyingAbroad/专注国际教育规划.png', import.meta.url).href;
</script>

<style scoped lang="scss">
.study-page {
    --study-navy: #0d2942;
    --study-deep: #081f33;
    --study-blue: #2366a8;
    --study-gold: #d8a147;
    --study-ivory: #f7f4ee;
    --study-copy: #5f6d77;
    color: var(--study-navy);
    background: var(--study-ivory);
    overflow: hidden;
}

.study-hero {
    min-height: min(760px, calc(100vh - 80px));
    display: flex;
    align-items: center;
    color: #fff;
    background: radial-gradient(circle at 78% 14%, rgba(216, 161, 71, 0.2), transparent 28%), linear-gradient(135deg, var(--study-deep), #174667);
}

.hero-inner,
.content-section,
.path-inner,
.focus-inner {
    width: min(1450px, calc(100% - 3rem));
    margin: 0 auto;
}

.hero-inner {
    display: grid;
    grid-template-columns: minmax(0, 0.95fr) minmax(500px, 1.05fr);
    gap: clamp(3rem, 7vw, 7rem);
    align-items: center;
    padding: 5.5rem 0;
}

.eyebrow {
    color: var(--study-gold);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.2em;
}

.hero-copy h1,
.section-heading h2,
.focus-copy h2 {
    margin-top: 1rem;
    font-size: clamp(2.65rem, 3.4vw, 3.7rem);
    font-weight: 350;
    line-height: 1.1;
    letter-spacing: -0.055em;
}

.hero-copy h1 span,
.section-heading h2 span,
.focus-copy h2 span,
.consult-inner h2 span {
    display: inline-block;
    margin-top: 0.14em;
}

.hero-copy h1 span,
.section-heading h2 span,
.focus-copy h2 span {
    color: var(--study-gold);
}

.hero-description,
.section-heading>p:not(.eyebrow),
.focus-copy>p:not(.eyebrow) {
    max-width: 580px;
    margin-top: 1.75rem;
    color: rgba(255, 255, 255, 0.72);
    font-size: 1rem;
    line-height: 1.95;
}

.hero-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2.25rem;
}

.primary-action {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding: 0.85rem 1.2rem;
    color: var(--study-navy);
    font: inherit;
    font-size: 0.86rem;
    font-weight: 700;
    text-decoration: none;
    background: var(--study-gold);
    border: 0;
    border-radius: 999px;
    cursor: pointer;
    transition: transform 0.25s ease, background 0.25s ease;
}

.primary-action:hover {
    background: var(--study-gold-light, #efc47d);
    transform: translateY(-2px);
}

.primary-action span {
    font-size: 1.25rem;
    line-height: 1;
}

.text-action {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.82rem;
    text-decoration: none;
}

.text-action:hover {
    color: #fff;
}

.hero-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 3.5rem;
}

.hero-stats div {
    display: grid;
    gap: 0.25rem;
}

.hero-stats strong {
    color: #fff;
    font-size: 1.35rem;
    font-weight: 600;
}

.hero-stats span {
    color: rgba(255, 255, 255, 0.55);
    font-size: 0.72rem;
}

.hero-figure,
.feature-figure,
.reason-figure,
.path-figure,
.focus-figure {
    margin: 0;
}

.hero-figure {
    position: relative;
    padding: 1rem;
    background: #fff;
    box-shadow: 0 35px 75px rgba(1, 15, 26, 0.4);
    transform: rotate(1.2deg);
}

.hero-figure::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -1.5rem;
    right: -1.5rem;
    width: 65%;
    height: 65%;
    border: 1px solid rgba(239, 196, 125, 0.45);
}

.hero-figure img {
    display: block;
    width: 100%;
    aspect-ratio: 1.45 / 1;
    object-fit: cover;
}

.hero-figure figcaption {
    padding: 0.9rem 0.2rem 0.1rem;
    color: var(--study-navy);
    font-size: 0.76rem;
}

.hero-figure figcaption span {
    margin-right: 0.8rem;
    color: var(--study-gold);
    font-weight: 700;
}

.content-section {
    display: grid;
    grid-template-columns: minmax(280px, 0.7fr) minmax(0, 1.3fr);
    gap: clamp(3rem, 8vw, 8rem);
    align-items: center;
    padding: clamp(6rem, 11vw, 11rem) 0;
}

.section-heading--left {
    text-align: left;
}

.section-heading h2 {
    color: var(--study-navy);
    font-size: clamp(2.2rem, 4vw, 4.3rem);
}

.section-heading>p:not(.eyebrow) {
    color: var(--study-copy);
}

.feature-figure {
    position: relative;
    padding: 1rem;
    background: #fff;
    box-shadow: 0 22px 60px rgba(13, 41, 66, 0.1);
}

.feature-figure::after {
    content: '';
    position: absolute;
    inset: 1.5rem -1rem -1rem 1.5rem;
    z-index: -1;
    border: 1px solid rgba(35, 102, 168, 0.25);
}

.feature-figure img {
    display: block;
    width: 100%;
}

.feature-figure figcaption {
    padding: 0.85rem 0.2rem 0;
    color: var(--study-copy);
    font-size: 0.8rem;
}

.systems-section {
    grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
}

.systems-section .feature-figure {
    order: 1;
}

.systems-section .section-heading {
    order: 2;
}

.mini-points {
    display: grid;
    gap: 1rem;
    margin-top: 2rem;
}

.mini-points>div {
    display: grid;
    grid-template-columns: 2rem auto 1fr;
    gap: 0.8rem;
    align-items: baseline;
    padding-top: 0.9rem;
    border-top: 1px solid rgba(13, 41, 66, 0.12);
}

.mini-points span {
    color: var(--study-gold);
    font-size: 0.68rem;
    font-weight: 700;
}

.mini-points strong {
    font-size: 0.95rem;
}

.mini-points p {
    margin: 0;
    color: var(--study-copy);
    font-size: 0.8rem;
}

.reasons-section {
    padding: clamp(6rem, 10vw, 10rem) 1.5rem;
    color: #fff;
    background: var(--study-navy);
}

.reasons-section .section-heading {
    width: min(760px, 100%);
    margin: 0 auto 3rem;
    text-align: center;
}

.reasons-section .section-heading h2 {
    color: #fff;
}

.reasons-section .section-heading>p:not(.eyebrow) {
    color: rgba(255, 255, 255, 0.62);
    margin-right: auto;
    margin-left: auto;
}

.reason-figure {
    width: min(1190px, 100%);
    margin: 0 auto;
    padding: 1rem;
    background: #fff;
    box-shadow: 0 25px 65px rgba(1, 15, 26, 0.25);
}

.reason-figure img {
    display: block;
    width: 100%;
}

.reason-tags {
    width: min(920px, 100%);
    margin: 2rem auto 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.75rem;
}

.reason-tags span {
    padding: 0.85rem 0.5rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.78rem;
    border: 1px solid rgba(255, 255, 255, 0.17);
    border-radius: 999px;
}

.path-section {
    padding: clamp(6rem, 11vw, 11rem) 0;
    background: #e9f4f0;
}

.path-inner {
    display: grid;
    grid-template-columns: minmax(300px, 0.75fr) minmax(0, 1.25fr);
    gap: clamp(3rem, 7vw, 7rem);
    align-items: center;
}

.path-figure {
    padding: 0.7rem;
    background: #fff;
    box-shadow: 0 24px 60px rgba(13, 41, 66, 0.12);
}

.path-figure img {
    display: block;
    width: 100%;
}

.path-inner .primary-action {
    margin-top: 2rem;
}

.focus-section {
    padding: clamp(6rem, 10vw, 10rem) 0;
    background: var(--study-ivory);
}

.focus-inner {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
    gap: clamp(3rem, 8vw, 8rem);
    align-items: center;
}

.focus-figure {
    padding: 0.8rem;
    background: #fff;
    box-shadow: 0 24px 60px rgba(13, 41, 66, 0.1);
}

.focus-figure img {
    display: block;
    width: 100%;
}

.focus-copy>p:not(.eyebrow) {
    color: var(--study-copy);
}

.signature {
    display: inline-block;
    margin-top: 2rem;
    padding-top: 1rem;
    color: var(--study-blue);
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    border-top: 1px solid rgba(35, 102, 168, 0.35);
}

.consult-section {
    padding: clamp(5rem, 9vw, 8rem) 1.5rem;
    color: #fff;
    text-align: center;
    background:
        radial-gradient(circle at 50% 115%, rgba(216, 161, 71, 0.28), transparent 35%),
        var(--study-deep);
}

.consult-inner {
    width: min(760px, 100%);
    margin: 0 auto;
}

.consult-inner h2 {
    margin-top: 0.8rem;
    font-size: clamp(2rem, 4vw, 3.7rem);
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: -0.04em;
}

.consult-inner>p:not(.eyebrow) {
    margin-top: 1rem;
    color: rgba(255, 255, 255, 0.62);
    line-height: 1.8;
}

.consult-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
    padding: 0.95rem 1.6rem;
    color: var(--study-navy);
    font: inherit;
    font-size: 0.9rem;
    font-weight: 700;
    background: var(--study-gold);
    border: 0;
    border-radius: 999px;
    cursor: pointer;
    transition: transform 0.25s ease, background 0.25s ease;
}

.consult-button:hover {
    background: #efc47d;
    transform: translateY(-2px);
}

.consult-button span {
    font-size: 1.2rem;
}

@media (max-width: 900px) {

    .hero-inner,
    .content-section,
    .systems-section,
    .path-inner,
    .focus-inner {
        grid-template-columns: 1fr;
    }

    .systems-section .feature-figure,
    .systems-section .section-heading {
        order: initial;
    }

    .hero-inner {
        padding: 4.5rem 0;
    }

    .hero-figure {
        max-width: 720px;
    }

    .hero-stats {
        margin-top: 2.5rem;
    }
}

@media (max-width: 600px) {

    .hero-inner,
    .content-section,
    .path-inner,
    .focus-inner {
        width: calc(100% - 2rem);
    }

    .study-hero {
        min-height: 0;
    }

    .hero-copy h1 {
        font-size: clamp(2.6rem, 13vw, 4rem);
    }

    .hero-description {
        font-size: 0.95rem;
    }

    .hero-actions {
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;
    }

    .hero-stats {
        gap: 1.2rem;
    }

    .content-section {
        padding: 5rem 0;
    }

    .reason-tags {
        grid-template-columns: repeat(2, 1fr);
    }

    .reasons-section {
        padding-right: 1rem;
        padding-left: 1rem;
    }

    .feature-figure::after {
        display: none;
    }
}
</style>
