<template>
    <section class="course-system-section">
        <div class="container">
            <div class="section-heading">
                <p>TRAINING SYSTEM</p>
                <h2 class="section-title">完整训练闭环</h2>
                <span>以练促学、以评促练，让每一阶段的准备都清晰可见。</span>
            </div>

            <div class="system-content">
                <div class="training-phase">
                    <div class="phase-badge">训前自主练习</div>
                    <p class="phase-description">
                        老师引导完成【综合训练】+【语法&词汇】<br />
                        包含小学阶段内甚至初中语法，解锁各种解题技巧
                    </p>
                </div>

                <div class="training-phase highlight">
                    <div class="phase-badge">训中完成5套真题练习</div>
                    <p class="phase-description">
                        1-2轮词汇打卡<br />
                        改正平时总粗心大意的小细节，练习拿到题就能立马分析出考点
                    </p>
                </div>

                <div class="training-phase">
                    <div class="phase-badge">训后</div>
                    <p class="phase-description">
                        老师引导完成7套真题练习<br />
                        保持学习状态，做备考前的冲刺
                    </p>
                </div>

                <div class="illustration-image">
                    <img :src="illustrationImage" alt="课程介绍插图" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const illustrationImage = new URL('@/assets/images/levelExamination/课程介绍插图.png', import.meta.url).href;
</script>

<style scoped lang="scss">
.course-system-section {
    padding: clamp(5rem, 9vw, 9rem) 0;
    background: var(--brand-ivory);
}

.container {
    max-width: var(--site-width);
    margin: 0 auto;
    padding: 0 clamp(1rem, 4vw, 2rem);
}

.section-heading {
    text-align: center;
    margin-bottom: clamp(2rem, 5vw, 3rem);
}

.section-heading > p {
    color: var(--brand-blue);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.2em;
}

.section-heading > span {
    color: var(--brand-copy);
}

.section-title {
    margin: 0.75rem 0;
    color: var(--brand-navy);
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 500;
    letter-spacing: -0.04em;
}

.system-content {
    background: #fff;
    padding: clamp(2rem, 4vw, 4rem);
    display: grid;
    grid-template-columns: minmax(300px, 0.75fr) minmax(0, 1.25fr);
    gap: clamp(3rem, 7vw, 7rem);
    align-items: center;
    border: 1px solid rgba(13, 41, 66, 0.08);
    box-shadow: 0 22px 60px rgba(13, 41, 66, 0.08);
}

.training-phase {
    position: relative;
    grid-column: 1;
    padding: 0.5rem 0 1.75rem 3.5rem;
    border-left: 1px solid rgba(35, 102, 168, 0.22);
    transition: all 0.3s ease;

    &:hover {
        transform: translateX(4px);
    }
}

.training-phase::before {
    content: '';
    position: absolute;
    top: 0.75rem;
    left: -5px;
    width: 9px;
    height: 9px;
    background: var(--brand-gold);
    border-radius: 50%;
}

.phase-badge {
    display: inline-block;
    padding: 0.375rem 0.875rem;
    background: var(--brand-navy);
    color: #ffffff;
    font-size: clamp(0.8125rem, 1.6vw, 0.875rem);
    font-weight: 600;
    border-radius: 999px;
    margin-bottom: 0.75rem;
}

.phase-description {
    font-size: clamp(0.9375rem, 2vw, 1.0625rem);
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
}

.illustration-image {
    grid-column: 2;
    grid-row: 1 / span 3;
    text-align: center;

    img {
        max-width: 100%;
        height: auto;
        box-shadow: 0 18px 45px rgba(13, 41, 66, 0.1);
    }
}

@media (max-width: 850px) {
    .system-content {
        grid-template-columns: 1fr;
    }

    .illustration-image {
        grid-column: 1;
        grid-row: auto;
    }
}
</style>
