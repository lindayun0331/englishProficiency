<template>
    <section class="capability-ladder-section">
        <div class="container">
            <div class="section-heading">
                <p>LEARNING PATH</p>
                <h2 class="section-title">能力阶梯</h2>
                <span>从语言启蒙到学术表达，为每个成长阶段建立清晰坐标。</span>
            </div>

            <div class="ladder-wrapper">
                <!-- 阶梯展示 -->
                <div class="ladder-container">
                    <!-- 第1-3阶：每阶上下都有说明 -->
                    <div v-for="item in ladderData.slice(0, 3)" :key="item.id" class="ladder-step-wrapper">
                        <div class="step-top-desc">
                            <div class="desc-title" :class="item.titleColorClass">{{ item.topTitle }}</div>
                            <div class="desc-content">{{ item.topContent }}</div>
                        </div>
                        <div class="ladder-step" :class="item.colorClass" :style="{ height: item.height }">
                            <div class="step-content">
                                <h3 class="step-title">{{ item.title }}</h3>
                                <p class="step-subtitle" v-if="item.subtitle">{{ item.subtitle }}</p>
                            </div>
                        </div>
                        <div class="step-bottom-desc">{{ item.bottomDesc }}</div>
                    </div>

                    <!-- 第4-7阶：上下共享说明 -->
                    <div class="ladder-group-wrapper">
                        <div class="group-top-desc">
                            <div class="desc-title blue">{{ groupDescriptions.powerUp.topTitle }}</div>
                            <div class="desc-content">{{ groupDescriptions.powerUp.topContent }}</div>
                        </div>
                        <div class="ladder-group">
                            <div v-for="item in ladderData.slice(3, 7)" :key="item.id" class="ladder-step"
                                :class="item.colorClass" :style="{ height: item.height }">
                                <div class="step-content">
                                    <h3 class="step-title">{{ item.title }}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="group-bottom-desc ">{{ groupDescriptions.powerUp.bottom }}</div>
                    </div>

                    <!-- 第8-9阶：下方共享说明 -->
                    <div class="ladder-group-wrapper">
                        <div class="group-top-desc">
                            <div class="desc-title purple">{{ groupDescriptions.think.topTitle }}</div>
                            <div class="desc-content">{{ groupDescriptions.think.topContent }}</div>
                        </div>
                        <div class="ladder-group">
                            <div v-for="item in ladderData.slice(7, 9)" :key="item.id" class="ladder-step"
                                :class="item.colorClass" :style="{ height: item.height }">
                                <div class="step-content">
                                    <h3 class="step-title">{{ item.title }}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="group-bottom-desc prupleBottom">{{ groupDescriptions.think.bottom }}</div>
                    </div>
                </div>

                <!-- 底部阶段标签 -->
                <div class="phase-labels">
                    <div class="phase-item">
                        <div class="phase-name orange">海尼曼绘本</div>
                    </div>
                    <div class="phase-item">
                        <div class="phase-name orange">Poptropica</div>
                    </div>
                    <div class="phase-item">
                        <div class="phase-name orange">Phonics Monster</div>
                    </div>
                    <div class="phase-item phase-wide">
                        <div class="phase-name blue">Power up</div>
                    </div>
                    <div class="phase-item">
                        <div class="phase-name purple">Think</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface LadderItem {
    id: string;
    title: string;
    subtitle?: string;
    topTitle: string;
    topContent: string;
    bottomDesc: string;
    titleColorClass: string;
    colorClass: string;
    height: string;
}

const ladderData = ref<LadderItem[]>([
    {
        id: '1',
        title: '海尼曼少儿绘本',
        topTitle: '3-6岁幼儿启蒙',
        topContent: '抓住语言黄金期',
        bottomDesc: '纯听说启蒙,建立英文语感、培养英语兴趣',
        titleColorClass: 'orange',
        colorClass: 'orange-light',
        height: '140px'
    },
    {
        id: '2',
        title: 'Poptropica 1',
        topTitle: '5-8岁幼小衔接',
        topContent: '英文思维搭建期',
        bottomDesc: '搭建基础英语思维，为系统性学习做准备',
        titleColorClass: 'orange',
        colorClass: 'orange-medium',
        height: '160px'
    },
    {
        id: '3',
        title: 'Phonics Monster 1-4',
        topTitle: '6-8岁方法类课程',
        topContent: '见词能读，听音能写',
        bottomDesc: '学习方法，语音掌握，激活阅读能力',
        titleColorClass: 'orange',
        colorClass: 'orange-dark',
        height: '180px'
    },
    {
        id: '4',
        title: 'Power Up 1',
        colorClass: 'blue-light',
        height: '200px',
        topTitle: '',
        topContent: '',
        bottomDesc: '',
        titleColorClass: 'blue'
    },
    {
        id: '5',
        title: 'Power Up 2',
        colorClass: 'blue-medium-light',
        height: '220px',
        topTitle: '',
        topContent: '',
        bottomDesc: '',
        titleColorClass: 'blue'
    },
    {
        id: '6',
        title: 'Power Up 3',
        colorClass: 'blue-medium',
        height: '240px',
        topTitle: '',
        topContent: '',
        bottomDesc: '',
        titleColorClass: 'blue'
    },
    {
        id: '7',
        title: 'Power Up 4',
        colorClass: 'blue-medium-dark',
        height: '260px',
        topTitle: '',
        topContent: '',
        bottomDesc: '',
        titleColorClass: 'blue'
    },
    {
        id: '8',
        title: 'Power Up 5/ Think 1',
        colorClass: 'purple-light',
        height: '280px',
        topTitle: '',
        topContent: '',
        bottomDesc: '',
        titleColorClass: 'purple'
    },
    {
        id: '9',
        title: 'Think 2',
        colorClass: 'purple-dark',
        height: '300px',
        topTitle: '',
        topContent: '',
        bottomDesc: '',
        titleColorClass: 'purple'
    }
]);

const groupDescriptions = ref({
    powerUp: {
        topTitle: '6-12岁少儿英语',
        topContent: '学习备考同步提升',
        bottom: '语言应用能力培养，听说读写同步提升，完美对标YLE考试'
    },
    think: {
        topTitle: '9-15岁青少英语',
        topContent: '英语运用技能内化',
        bottom: '升级思维能力，培养终生胜任力;对标MSE剑桥通用五级考试'
    }
});
</script>

<style scoped lang="scss">
.capability-ladder-section {
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
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 500;
    color: var(--brand-navy);
    letter-spacing: -0.04em;
}

.ladder-wrapper {
    display: grid;
    gap: 2rem;
    padding: clamp(2rem, 4vw, 3rem);
    background: #fff;
    border: 1px solid rgba(13, 41, 66, 0.08);
    box-shadow: 0 20px 55px rgba(13, 41, 66, 0.08);
    overflow-x: auto;
}

.ladder-container {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    justify-content: center;
    min-height: 400px;
}

/* 单个阶梯包装器（1-3阶） */
.ladder-step-wrapper {
    display: grid;
    grid-template-rows: auto 1fr auto;
    align-items: end;
    gap: 0.5rem;
    flex: 0 0 auto;
    width: 100px;
    height: 100%;
}

/* 分组阶梯包装器（4-7阶，8-9阶） */
.ladder-group-wrapper {
    display: grid;
    grid-template-rows: auto 1fr auto;
    align-items: end;
    gap: 0.5rem;
    height: 100%;
}

.ladder-group {
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
}

/* 阶梯上方描述 */
.step-top-desc,
.group-top-desc {
    text-align: center;
    align-self: start;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.desc-title {
    font-weight: 700;
    font-size: clamp(0.875rem, 1.75vw, 1rem);

    &.orange {
        color: #e96e20;
    }

    &.blue {
        color: #3b9eff;
    }

    &.purple {
        color: #8b5cf6;
    }
}

.desc-content {
    color: var(--text-primary);
    font-weight: 500;
    font-size: clamp(0.75rem, 1.5vw, 0.875rem);
}

/* 阶梯下方描述 */
.step-bottom-desc,
.group-bottom-desc {
    height: 40px;
    font-size: clamp(0.75rem, 1.5vw, 0.875rem);
    color: var(--text-primary);
    text-align: center;
    line-height: 1.4;
    padding: 0 0.5rem;
    align-self: start;
}


.prupleBottom {
    width: 200px;
}

.ladder-step {
    position: relative;
    border-radius: 4px 4px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0.5rem;
    transition: transform 0.2s ease;
    width: 100px;

    &:hover {
        transform: translateY(-4px);
    }
}

.step-content {
    text-align: center;
}

.step-title {
    font-size: clamp(0.875rem, 1.8vw, 1rem);
    font-weight: 600;
    color: #ffffff;
    line-height: 1.3;
    margin-bottom: 0.25rem;
}

.step-subtitle {
    font-size: clamp(0.7rem, 1.4vw, 0.8rem);
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.2;
}

/* 橙色阶段 - 渐变变深 */
.orange-light {
    background: linear-gradient(180deg, #e7bd72 0%, #d8a147 100%);
}

.orange-medium {
    background: linear-gradient(180deg, #dda951 0%, #c78d31 100%);
}

.orange-dark {
    background: linear-gradient(180deg, #c89038 0%, #ad7425 100%);
}

/* 蓝色阶段 - 渐变变深 */
.blue-light {
    background: linear-gradient(180deg, #6c9ac5 0%, #4d83b4 100%);
}

.blue-medium-light {
    background: linear-gradient(180deg, #4d83b4 0%, #376d9f 100%);
}

.blue-medium {
    background: linear-gradient(180deg, #376d9f 0%, #285986 100%);
}

.blue-medium-dark {
    background: linear-gradient(180deg, #285986 0%, #17456d 100%);
}

/* 紫色阶段 - 渐变变深 */
.purple-light {
    background: linear-gradient(180deg, #56718b 0%, #39566f 100%);
}

.purple-dark {
    background: linear-gradient(180deg, #39566f 0%, #183750 100%);
}

/* 底部阶段标签 */
.phase-labels {
    display: grid;
    grid-template-columns: 120px 120px 120px 480px 1fr;
    padding-left: 85px;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 2px dashed var(--border-color);

    :nth-child(4) {
        padding-left: 150px;
    }
}


.phase-name {
    font-size: clamp(1rem, 2vw, 1.25rem);
    font-weight: 600;

    &.orange {
        color: #e96e20;
    }

    &.blue {
        color: #247aba;
    }

    &.purple {
        color: #6750c5;
    }
}
</style>
