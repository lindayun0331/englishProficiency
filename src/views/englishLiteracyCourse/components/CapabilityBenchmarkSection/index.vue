<template>
    <section class="capability-benchmark-section">
        <div class="container">
            <div class="section-heading">
                <p>GLOBAL BENCHMARK</p>
                <h2 class="section-title">能力对标</h2>
                <span>用年龄、年级与国际标准交叉验证每一步学习成果。</span>
            </div>

            <div class="benchmark-scroll-container">
                <div class="benchmark-chart">
                    <!-- 顶部椭圆标签 -->
                    <div class="top-labels">
                        <div class="label-pill" v-for="item in topLabels" :key="item.id"
                            :style="{ background: item.color }">
                            <div class="pill-title">{{ item.title }}</div>
                            <div class="pill-subtitle" v-if="item.subtitle">{{ item.subtitle }}</div>
                        </div>
                    </div>

                    <!-- 底部标尺区域 -->
                    <div class="scale-wrapper">
                        <!-- 年龄刻度 -->
                        <div class="age-scale">
                            <div class="scale-item" v-for="age in ageRanges" :key="age.id"
                                :style="{ width: age.width }">
                                {{ age.label }}
                            </div>
                        </div>

                        <!-- 等级刻度 -->
                        <div class="grade-scale">
                            <div class="grade-item" v-for="grade in gradeRanges" :key="grade.id"
                                :style="{ width: grade.width }">
                                {{ grade.label }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const topLabels = ref([
    {
        id: '1',
        title: '海尼曼1级',
        subtitle: '70课时',
        color: 'linear-gradient(135deg, #fdb777 0%, #f59554 100%)'
    },
    {
        id: '2',
        title: '海尼曼2级',
        subtitle: '70课时',
        color: 'linear-gradient(135deg, #f9a66c 0%, #f18038 100%)'
    },
    {
        id: '3',
        title: 'Poptropica 1',
        subtitle: '80课时',
        color: 'linear-gradient(135deg, #f59554 0%, #e96e20 100%)'
    },
    {
        id: '4',
        title: 'Power Up1',
        subtitle: '120课时',
        color: 'linear-gradient(135deg, #6bb9e8 0%, #4aa8de 100%)'
    },
    {
        id: '5',
        title: 'Power Up2',
        subtitle: '120课时',
        color: 'linear-gradient(135deg, #4aa8de 0%, #3399d4 100%)'
    },
    {
        id: '6',
        title: 'Power Up3',
        subtitle: '120课时',
        color: 'linear-gradient(135deg, #3399d4 0%, #2b8ac9 100%)'
    },
    {
        id: '7',
        title: 'Power Up4',
        subtitle: '120课时',
        color: 'linear-gradient(135deg, #2b8ac9 0%, #247aba 100%)'
    },
    {
        id: '8',
        title: 'Power Up5',
        subtitle: '120课时',
        color: 'linear-gradient(135deg, #8b7bd8 0%, #7864cf 100%)'
    },
    {
        id: '9',
        title: 'Think 2',
        subtitle: '120课时',
        color: 'linear-gradient(135deg, #7864cf 0%, #6750c5 100%)'
    }
]);

// 年龄刻度，带可调整宽度
const ageRanges = ref([
    { id: '1', label: '3-4岁', width: '125px' },
    { id: '2', label: '4-5岁', width: '125px' },
    { id: '3', label: '5-8岁', width: '150px' },
    { id: '4', label: '6 - 12岁', width: '560px' },
    { id: '5', label: '9-14岁', width: '140px' },
    { id: '6', label: '10-15岁', width: '115px' }
]);

// 等级刻度，带可调整宽度
const gradeRanges = ref([
    { id: '1', label: '1-2年级', width: '230px' },
    { id: '2', label: '2-3年级', width: '180px' },
    { id: '3', label: '4-5年级', width: '130px' },
    { id: '4', label: '6-7年级', width: '130px' },
    { id: '5', label: '7-8年级', width: '130px' },
    { id: '6', label: '中考水平', width: '210px' },
    { id: '7', label: '高考水平', width: '200px' }
]);

</script>

<style scoped lang="scss">
.capability-benchmark-section {
    padding: clamp(5rem, 9vw, 9rem) 0;
    color: #fff;
    background: var(--brand-navy);
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(1rem, 4vw, 2rem);
}

.section-heading {
    text-align: center;
    margin-bottom: clamp(2rem, 5vw, 3rem);
}

.section-heading > p {
    color: var(--brand-gold-light);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.2em;
}

.section-heading > span {
    color: rgba(255, 255, 255, 0.62);
}

.section-title {
    margin: 0.75rem 0;
    color: #fff;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 500;
    letter-spacing: -0.04em;
}

.benchmark-scroll-container {
    overflow-x: auto;
    overflow-y: hidden;
    padding: clamp(2rem, 4vw, 3rem);
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);

    &::-webkit-scrollbar {
        height: 8px;
    }

    &::-webkit-scrollbar-track {
        background: var(--surface-2);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--text-tertiary);
        border-radius: 4px;

        &:hover {
            background: var(--text-secondary);
        }
    }
}

.benchmark-chart {
    display: grid;
    gap: 2rem;
    min-width: 1020px;
}

.top-labels {
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;
    justify-content: flex-start;
    align-items: center;
}

.label-pill {
    padding: 0.75rem 1.5rem;
    border-radius: 50%;
    color: #ffffff;
    text-align: center;
    font-weight: 600;
    flex-shrink: 0;
    transition: transform 0.2s ease;
}

.pill-title {
    font-size: 1rem;
    line-height: 1.3;
    white-space: nowrap;
}

.pill-subtitle {
    font-size: 0.875rem;
    opacity: 0.9;
    margin-top: 0.125rem;
    white-space: nowrap;
}

.scale-wrapper {
    position: relative;
    border-radius: 8px;
    min-height: 180px;
}

.age-scale,
.grade-scale {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    flex-wrap: nowrap;
}

.scale-item,
.grade-item {
    padding: 0.625rem 0.5rem;
    background: var(--surface-1);
    border: 2px solid #64b5f6;
    border-radius: 8px;
    text-align: center;
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--text-primary);
    white-space: nowrap;
    flex-shrink: 0;
}
</style>
