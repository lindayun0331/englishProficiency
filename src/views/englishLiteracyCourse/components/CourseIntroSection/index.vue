<template>
    <section class="course-intro-section">
        <div class="container">
            <div class="section-heading">
                <p>OUR CURRICULUM</p>
                <h2 class="section-title">课程介绍</h2>
                <span>精选国际主流原版教材，匹配不同年龄与能力阶段。</span>
            </div>

            <!-- Tab 切换 -->
            <div class="tabs">
                <button v-for="tab in tabs" :key="tab.id" :class="['tab-button', { active: activeTab === tab.id }]"
                    @click="activeTab = tab.id">
                    {{ tab.name }}
                </button>
            </div>

            <!-- 课程内容 -->
            <div class="course-content">
                <div class="course-intro" v-html="currentCourse.intro"></div>

                <div class="course-image" v-if="currentCourse.image">
                    <img :src="currentCourse.image" :alt="currentCourse.name" />
                </div>

                <div class="course-advantages">
                    <h3 class="advantages-title">课程优势</h3>
                    <ul class="advantages-list">
                        <li v-for="(item, index) in currentCourse.advantages" :key="index">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Course {
    id: string;
    name: string;
    intro: string;
    image?: string;
    advantages: string[];
}

const activeTab = ref('heinemann');

const tabs = ref([
    { id: 'heinemann', name: '少儿英文绘本' },
    { id: 'cambridge', name: '剑桥衔接' },
    { id: 'powerup', name: 'Power Up 1-6' },
    { id: 'think', name: 'Think 1-6' }
]);

const courses = ref<Record<string, Course>>({
    heinemann: {
        id: 'heinemann',
        name: '少儿英文绘本',
        intro: `海尼曼经典分级读物，被誉为 “开口神器”，非常适合低龄孩子开展英文启蒙。全套近 300 册读物循序渐进，覆盖 1000 + 阅读词汇，高频句式循环复现，帮助孩子自然熟悉基础表达。读物融合故事与科普多元主题，丰富孩子认知，滋养双语感知与国际视野。`,
        image: new URL('@/assets/images/englishLiteracyCourse/少儿英文绘本.png', import.meta.url).href,
        advantages: [
            '全球知名童书出版机构 Heinemann 海尼曼出版社编撰，北美公立小学主流配套分级读物；',
            '地道美式原版语言体系，分级阅读 + 场景绘本完美结合，贴合母语式启蒙逻辑；',
            '整套分 GK/G1 两大分级，GK级别70个绘本，G1级别120个绘本；',
            '单本篇幅由短句逐步过渡到小短文，常态坚持,稳步提升；',
            '最大的亮点：专为 3–10 岁非英语母语孩子研发，从零基础开口启蒙起步，系统锻炼听音、认读、自主表达能力。'
        ]
    },
    cambridge: {
        id: 'cambridge',
        name: '剑桥衔接',
        intro: `培生Popchopica适合英语初学者，或者进行过1-2年绘本启蒙/外教启蒙，需要开始进行读写练习的学生。教材的内容丰富多样，涵盖200核心词汇、核心句型及语法、自然拼读、价值观、场景类故事和单元测试。包含8个主题单元，以贴近学生的日常生活的核心语言，帮助他们在实际情境中使用英语。`,
        image: new URL('@/assets/images/englishLiteracyCourse/剑桥衔接.png', import.meta.url).href,
        advantages: [
            '全球知名教育出版机构 Pearson 培生出版社编撰，欧美小学广泛使用的少儿英语原版教材；',
            '地道美式原版语言体系，把游戏冒险故事和课堂学习深度融合，贴合儿童兴趣驱动的英语启蒙逻辑；',
            '内容从简单词汇句型逐步过渡到简短对话与短篇篇章，循序渐进，螺旋式重复巩固语言知识点；',
            '最大的亮点：专为 5‑8 岁零基础少儿研发，依托 Poptropica 冒险 IP 故事场景，充分调动孩子学习兴趣，系统锻炼听说读写四项基础英语能力，夯实剑桥体系入门英语基础'
        ]
    },
    powerup: {
        id: 'powerup',
        name: 'Power Up 1-6',
        intro: `剑桥Power up 适合有一定英语基础的学员，需要经过定级测评才能进入相应级别学习。该教材由【剑桥大学出版社】和【剑桥考试委员会】联合出版，是YLE,KET,PET考试官方认证的备考材料。以不同话题及国家相关的9个单元，涵盖"听说读写"外，还增加了跨学科、文化、文学阅读的部分，帮助学员提升英语能力的同时，提高认知、拓宽国际视野。`,
        image: new URL('@/assets/images/englishLiteracyCourse/power1-6.png', import.meta.url).href,
        advantages: [
            '全球知名教育出版机构 Cambridge 剑桥大学出版社编撰，对标剑桥少儿英语考试的主流原版少儿英语教材；',
            '整套共 6 个级别，从 Starter 起步逐级向上，覆盖小学全周期，完整对接 KET/PET 考试要求；',
            '内容从基础词汇句型逐步过渡到长对话、短篇读写文本，知识点螺旋循环复现，稳步提升语言难度；',
            '最大的亮点：专为 6‑12 岁非英语母语孩子研发，兼顾兴趣启蒙与应试备考，系统锻炼听说读写综合能力，同步塑造思辨、协作等 21 世纪核心素养，无缝衔接剑桥考级路径',
        ]
    },
    think: {
        id: 'think',
        name: 'Think 1-6',
        intro: `Think 1-5 适合达到KET及以上水平的学员。该教材由剑桥大学出版社推出，通过更贴近青少年生活的话题，如社交媒体、环保、旅行。借助项目式学习，培养学生问题解决与创新思维的能力，同时融入丰富的文化知识和批判性思维训练。培养学生作为“国际公民”意识的同时，为备考剑桥PET，FCE考试打下坚实基础。`,
        image: new URL('@/assets/images/englishLiteracyCourse/think1-6.png', import.meta.url).href,
        advantages: [
            '全球知名教育出版机构 Cambridge 剑桥大学出版社编撰，对标剑桥 KET/PET/FCE 考试的主流原版青少英语教材；',
            '整套共 6 个级别，从入门到高阶，完整覆盖初中至高中阶段，直通 FCE 甚至 CAE 剑桥高级考试；',
            '内容从日常交际句型逐步过渡到议论文、记叙文等各类篇章阅读写作，词汇语法螺旋递进，文本题材广度持续拓展；',
            '最大的亮点：专为 10‑16 岁非英语母语青少研发，不止提升听说读写语言能力，重点训练批判性思维、逻辑表达与跨文化认知，语言能力和应试能力双向夯实，适配国内初高中提升与海外申请语言打底',
        ]
    }
});

const currentCourse = computed(() => courses.value[activeTab.value]);
</script>

<style scoped lang="scss">
.course-intro-section {
    padding: clamp(5rem, 9vw, 9rem) 0;
    background: var(--brand-ivory);
}

.container {
    max-width: 1200px;
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

.tabs {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}

.tab-button {
    padding: 0.75rem 1.5rem;
    background: var(--surface-1);
    border: 1px solid rgba(13, 41, 66, 0.12);
    border-radius: 999px;
    font-size: clamp(0.875rem, 1.8vw, 1rem);
    font-weight: 500;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        border-color: var(--brand-blue);
        color: var(--text-primary);
    }

    &.active {
        background: var(--brand-navy);
        border-color: var(--brand-navy);
        color: #ffffff;
    }
}

.course-content {
    background: var(--surface-1);
    border-radius: 0.5rem;
    padding: clamp(1.5rem, 4vw, 2.5rem);
    border: 1px solid rgba(13, 41, 66, 0.08);
    box-shadow: 0 22px 55px rgba(13, 41, 66, 0.08);
}

.course-intro {
    font-size: clamp(0.9375rem, 2vw, 1.0625rem);
    line-height: 1.8;
    color: var(--text-primary);
    margin-bottom: 2rem;
}

.course-image {
    margin: 2rem 0;
    text-align: center;

    img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
    }
}

.advantages-title {
    font-size: clamp(1.125rem, 2.5vw, 1.5rem);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
}

.advantages-list {
    list-style: none;
    display: grid;
    gap: 1rem;

    li {
        position: relative;
        padding-left: 1.5rem;
        font-size: clamp(0.9375rem, 2vw, 1.0625rem);
        line-height: 1.7;
        color: var(--text-secondary);

        &::before {
            content: '√';
            position: absolute;
            left: 0;
            color: var(--accent-secondary);
            font-weight: 600;
        }
    }
}
</style>
