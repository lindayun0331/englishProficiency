<template>
    <section class="achievements-section">
        <div class="section-content">
            <div class="section-header">
                <span class="section-badge">学员成就</span>
                <h2 class="section-title">培养未来的精英学子</h2>
                <p class="section-description">
                    我们的学员在各类国际考试和升学中取得优异成绩<br />
                    从剑桥认证到世界名校录取，见证每一步成长
                </p>
            </div>

            <div class="achievements-grid">
                <div v-for="achievement in achievementList" :key="achievement.id" class="achievement-card">
                    <div class="card-image">
                        <img :src="achievement.image" :alt="achievement.title" />
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">{{ achievement.title }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Achievement {
    id: number;
    title: string;
    image: string;
}

const achievementList = ref<Achievement[]>([
    {
        id: 1,
        title: '剑桥少儿考级 YLE',
        image: new URL('@/assets/images/welcome/剑桥少儿考级.png', import.meta.url).href,
    },
    {
        id: 2,
        title: '剑桥通用五级（MSE）',
        image: new URL('@/assets/images/welcome/剑桥通用五级.png', import.meta.url).href,
    },
    {
        id: 3,
        title: '加拿大多伦多大学录取通知书',
        image: new URL('@/assets/images/welcome/加拿大多伦多大学录取通知书.png', import.meta.url).href,
    },
    {
        id: 4,
        title: '新加坡公立中学录取通知书',
        image: new URL('@/assets/images/welcome/新加坡公立中学录取通知书.jpg', import.meta.url).href,
    },
    {
        id: 5,
        title: '英国牛津大学录取通知书',
        image: new URL('@/assets/images/welcome/英国牛津大学录取通知书.png', import.meta.url).href,
    },
]);
</script>

<style scoped lang="scss">
.achievements-section {
    padding: clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem);
    background: var(--brand-ivory);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url('@/assets/images/welcome/成就背景.png');
        background-size: cover;
        background-position: center;
        opacity: 0.5;
        z-index: 0;
    }

    .section-content {
        max-width: 1600px;
        margin: 0 auto;
        position: relative;
        z-index: 1;

        .section-header {
            text-align: center;
            margin-bottom: clamp(3rem, 6vw, 5rem);

            .section-badge {
                display: inline-block;
                padding: 0.5rem 1.25rem;
                background: transparent;
                color: var(--brand-blue);
                font-size: 0.875rem;
                font-weight: 500;
                border-radius: 0;
                border-left: 3px solid var(--brand-gold);
                letter-spacing: 0.05em;
                margin-bottom: 1.5rem;
                box-shadow: none;
            }

            .section-title {
                font-size: clamp(2rem, 4.5vw, 3.25rem);
                font-weight: 600;
                color: var(--brand-navy);
                margin-bottom: 1rem;
                letter-spacing: -0.02em;
                line-height: 1.2;
            }

            .section-description {
                font-size: clamp(0.95rem, 1.6vw, 1.05rem);
                color: var(--brand-copy);
                line-height: 1.8;
                max-width: 700px;
                margin: 0 auto;
            }
        }

        .achievements-grid {
            display: grid;
            grid-template-columns: repeat(5, minmax(300px, 1fr));
            gap: clamp(2rem, 4vw, 3rem);

            .achievement-card {
                background: var(--surface-1);
                border-radius: 0.5rem;
                overflow: hidden;
                box-shadow: 0 18px 45px rgba(13, 41, 66, 0.08);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                border: 1px solid var(--border-color-light);

                &:hover {
                    transform: translateY(-8px);
                    box-shadow: var(--shadow-xl);
                }

                .card-image {
                    width: 100%;
                    height: 280px;
                    overflow: hidden;
                    background: var(--surface-2);

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: transform 0.4s ease;
                    }
                }

                &:hover .card-image img {
                    transform: scale(1.08);
                }

                .card-body {
                    padding: clamp(1.75rem, 3.5vw, 2.5rem);

                    .card-title {
                        font-size: clamp(1.125rem, 2vw, 1.375rem);
                        font-weight: 600;
                        color: var(--brand-navy);
                        line-height: 1.4;
                        letter-spacing: -0.01em;
                    }
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .achievements-section {
        .achievements-grid {
            grid-template-columns: 1fr;
        }
    }
}
</style>
