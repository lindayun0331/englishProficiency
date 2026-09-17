<template>
    <section class="hero-section">
        <div class="hero-content">
            <div class="hero-left">
                <div class="hero-badge">阅读之星指定考点</div>
                <h1 class="hero-title">权威认证<br />专业评估</h1>
                <p class="hero-description">
                    "阅读之星"全国青少年阅读风采展示活动指定考点<br />
                    致力于为学生提供专业、公正、权威的英语阅读能力评估与展示平台
                </p>
            </div>
            <div class="hero-right">
                <div class="certificate-card">
                    <img src="@/assets/images/welcome/阅读之星.png" alt="阅读之星证书" class="certificate-image" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.hero-section {
    min-height: min(700px, calc(100vh - 80px));
    display: flex;
    align-items: center;
    padding: clamp(4rem, 9vw, 8rem) clamp(1.5rem, 5vw, 4rem);
    background-image: url('@/assets/images/welcome/hero背景.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: var(--brand-navy);
    position: relative;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
            linear-gradient(90deg, rgba(8, 31, 51, 0.98) 0%, rgba(8, 31, 51, 0.92) 48%, rgba(8, 31, 51, 0.68) 100%),
            linear-gradient(0deg, rgba(8, 31, 51, 0.22), transparent);
        z-index: 0;
    }

    .hero-content {
        max-width: 1600px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: clamp(4rem, 8vw, 6rem);
        align-items: center;
        position: relative;
        z-index: 1;
    }

    .hero-left {
        .hero-badge {
            display: inline-block;
            font-size: 0.875rem;
            font-weight: 500;
            color: var(--brand-gold-light);
            background: rgba(255, 255, 255, 0.06);
            padding: 0.5rem 1.25rem;
            border-radius: 0;
            border-left: 3px solid var(--brand-gold);
            margin-bottom: clamp(1.5rem, 3vw, 2rem);
            letter-spacing: 0.02em;
        }

        .hero-title {
            font-size: clamp(3rem, 6vw, 5rem);
            font-weight: 400;
            color: #fff;
            margin-bottom: clamp(1.5rem, 3vw, 2rem);
            letter-spacing: -0.03em;
            line-height: 1.1;
        }

        .hero-description {
            font-size: clamp(1rem, 2vw, 1.125rem);
            color: rgba(255, 255, 255, 0.72);
            line-height: 1.8;
            max-width: 600px;
        }
    }

    .hero-right {
        display: flex;
        justify-content: center;
        align-items: center;

        .certificate-card {
            width: 100%;
            max-width: 600px;
            border-radius: 0.5rem;
            overflow: hidden;
            box-shadow: 0 28px 70px rgba(1, 15, 26, 0.38);
            background: var(--surface-1);
            padding: 2rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;

            &:hover {
                transform: translateY(-4px);
                box-shadow: var(--shadow-xl);
            }

            .certificate-image {
                width: 100%;
                height: auto;
                display: block;
                border-radius: 0.25rem;
            }
        }
    }
}

@media (max-width: 768px) {
    .hero-section {
        .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
        }

        .hero-left {
            text-align: center;

            .hero-description {
                margin: 0 auto;
            }
        }
    }
}
</style>
