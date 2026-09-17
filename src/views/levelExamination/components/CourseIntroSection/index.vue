<template>
    <section class="course-intro-section">
        <div class="container">
            <div class="section-heading">
                <p>EXAM COURSES</p>
                <h2 class="section-title">等级考试课程</h2>
                <span>从少儿英语到通用英语，按能力定位选择适合的备考阶段。</span>
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
                <div class="course-intro">
                    {{ currentCourse.intro }}
                </div>

                <!-- 课程内容表格 -->
                <div v-if="currentCourse.contentTable" class="content-table-wrapper">
                    <h3 class="table-title">{{ currentCourse.contentTable.title }}</h3>
                    <div class="table-container">
                        <table class="content-table">
                            <thead>
                                <tr>
                                    <th v-for="(header, index) in currentCourse.contentTable.headers" :key="index">
                                        {{ header }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, rowIndex) in currentCourse.contentTable.rows" :key="rowIndex">
                                    <td v-for="(cell, cellIndex) in row" :key="cellIndex">
                                        {{ cell }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- 考级内容表格 -->
                <div v-if="currentCourse.examTable" class="exam-table-wrapper">
                    <h3 class="table-title">{{ currentCourse.examTable.title }}</h3>
                    <div class="table-container">
                        <table class="exam-table">
                            <thead>
                                <tr>
                                    <th v-for="(header, index) in currentCourse.examTable.headers" :key="index"
                                        :colspan="typeof header === 'object' ? header.colspan || 1 : 1">
                                        {{ typeof header === 'object' ? header.text : header }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, rowIndex) in currentCourse.examTable.rows" :key="rowIndex">
                                    <td v-for="(cell, cellIndex) in row" :key="cellIndex"
                                        :rowspan="typeof cell === 'object' ? cell.rowspan || 1 : 1"
                                        :colspan="typeof cell === 'object' ? cell.colspan || 1 : 1"
                                        v-show="typeof cell === 'object' ? !cell.hidden : true">
                                        {{ typeof cell === 'object' ? cell.text : cell }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div v-if="currentCourse.examTable.footer" class="table-footer">
                        {{ currentCourse.examTable.footer }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface TableCell {
    text: string;
    rowspan?: number;
    colspan?: number;
    hidden?: boolean;
}

interface TableHeader {
    text: string;
    colspan?: number;
}

interface TableData {
    title: string;
    headers: (string | TableHeader)[];
    rows: (string | TableCell)[][];
    footer?: string;
}

interface Course {
    id: string;
    name: string;
    intro: string;
    contentTable?: TableData;
    examTable?: TableData;
}

const activeTab = ref('starters');

const tabs = ref([
    { id: 'starters', name: 'YLE-Starters' },
    { id: 'movers', name: 'YLE-Movers' },
    { id: 'flyers', name: 'YLE-Flyers' },
    { id: 'ket', name: 'KET' },
    { id: 'pet', name: 'PET' },
    { id: 'fce', name: 'FCE' }
]);

const courses = ref<Record<string, Course>>({
    starters: {
        id: 'starters',
        name: 'YLE-Starters',
        intro: 'YLE-Starters（Pre A1 Starters）是剑桥少儿英语（YLE）体系的第一级，对标欧洲语言框架 CEFR Pre A1 级别，专为小学低段英语启蒙学员设计，是孩子剑桥英语备考之路的起点。',
        contentTable: {
            title: '课程内容',
            headers: ['模块', '培训内容'],
            rows: [
                ['词汇', '掌握400+核心词汇，小学常考词汇主题18类。'],
                ['语法', '语法：一般现在时，现在进行时，名词，代词及部分初中语法。'],
                ['读写', '读写：人物配对，人物主要信息提取，听短文选答案，简短回答。'],
                ['听力', '听力：人物配对，人物主要信息提取听短文选答案，简短回答。']
            ]
        },
        examTable: {
            title: '考级内容',
            headers: ['级别', 'CEFR', { text: '考级内容', colspan: 3 }],
            rows: [
                [
                    { text: '一级\nStarters', rowspan: 3 },
                    { text: 'Pre A1', rowspan: 3 },
                    '读写',
                    '20分钟',
                    '5大题型'
                ],
                [
                    { text: '', hidden: true },
                    { text: '', hidden: true },
                    '听力',
                    '20分钟',
                    '4大题型'
                ],
                [
                    { text: '', hidden: true },
                    { text: '', hidden: true },
                    '口语',
                    '3-5分钟',
                    '5步引导式问答'
                ]
            ],
            footer: '时常共计：43-45 分钟'
        }
    },
    movers: {
        id: 'movers',
        name: 'YLE-Movers',
        intro: 'YLE-Movers（A1 Movers）是剑桥少儿英语（YLE）体系第二级，对标欧洲语言框架 CEFR A1 级别，适合完成 Starters 学习后的小学中年级学员，是衔接 Flyers、冲刺 KET 的关键过渡阶段。',
        contentTable: {
            title: '课程内容',
            headers: ['模块', '培训内容'],
            rows: [
                ['词汇', '掌握约 600个核心词汇，涉及更多生活场景（如校园活动、出行、日常事务等）'],
                ['语法', '一般现在时、现在进行时、一般过去时；名词单复数、人称代词、介词（in/on/at 等）的拓展用法'],
                ['读写', '看图写理洛 / 句子、短文填空、信息匹配、段落理解（判断 / 选择）、小作文（如写几句话描述图片）'],
                ['听力', '听力：长对话理解、信息排序、图文匹配、填空；口语：话题描述、友动问答、图片讨论']
            ]
        },
        examTable: {
            title: '考级内容',
            headers: ['级别', 'CEFR', { text: '考试内容', colspan: 3 }],
            rows: [
                [
                    { text: '二级\nMovers', rowspan: 3 },
                    { text: 'A1', rowspan: 3 },
                    '听力',
                    '30 分钟',
                    '5大题 25小题'
                ],
                [
                    { text: '', hidden: true },
                    { text: '', hidden: true },
                    '阅读与写作',
                    '30 分钟',
                    '6大题 35小题'
                ],
                [
                    { text: '', hidden: true },
                    { text: '', hidden: true },
                    '口语',
                    '7-9分钟',
                    '4大题'
                ]
            ],
            footer: '时长共计：64 分钟'
        }
    },
    flyers: {
        id: 'flyers',
        name: 'YLE-Flyers',
        intro: 'YLE-Flyers（A2 Flyers）是剑桥少儿英语（YLE）体系第三级，对标欧洲语言框架 CEFR A2 级别，适合完成 Movers 学习后的小学高年级学员，是衔接 KET、搭建综合英语能力的重要收尾阶段。',
        contentTable: {
            title: '课程内容',
            headers: ['模块', '培训内容'],
            rows: [
                ['词汇', '掌握1000+核心词汇，涉及兴趣爱好、自然科学、社计等场景。'],
                ['语法', '一般过去 / 将来完成时在完成时，形容词比较级 / 最高级，情态动词介绍等的拓展用法。'],
                ['读写', '单词与图片匹配、故事 / 场景描述、段落理解、写句子排序、简历撰事之变变、基础书信留言等。'],
                ['听力', '听懂慢长对话理解、信息排序、图文匹配等等指令指题；可进行话题描述、情景互动、个人观点陈述表达等。']
            ]
        },
        examTable: {
            title: '考级内容',
            headers: ['级别', 'CEFR', { text: '考核内容', colspan: 3 }],
            rows: [
                [
                    { text: '三级\nFlyers', rowspan: 3 },
                    { text: 'A2', rowspan: 3 },
                    '读写',
                    '40分钟',
                    '7大题型'
                ],
                [
                    { text: '', hidden: true },
                    { text: '', hidden: true },
                    '听力',
                    '25分钟',
                    '5大题型'
                ],
                [
                    { text: '', hidden: true },
                    { text: '', hidden: true },
                    '口语',
                    '7-9分钟',
                    '4步引导式问答'
                ]
            ],
            footer: '时长共计：72-74 分钟'
        }
    },
    ket: {
        id: 'ket',
        name: 'KET',
        intro: 'KET（A2 Key）是剑桥通用英语五级体系第一级，对标欧洲语言框架 CEFR A2 级别，适合完成 Flyers 学习后的小学高段至初中低年级学员，是衔接 PET、搭建实用日常英语能力的基础进阶阶段。',
        contentTable: {
            title: 'KET 培训内容',
            headers: ['词汇', '语法', '读写', '听力'],
            rows: [
                [
                    '掌握约1500+核心词汇，涉及校园生活、旅行、健康、社会交流、个人经历等场景。',
                    '一般过去时、现在完成时、将来时、比较级与最高级、条件句、被动语态、介词与从句等基座',
                    '阅读理解、完形填空、句型转换、句子还原、短文写作，能写邮件、故事、观点说明等',
                    '听懂短对话、公告、采访、故事片段；能进行日常对话、话题描述、观点表达与情景交流。'
                ]
            ]
        },
        examTable: {
            title: '考核内容',
            headers: ['级别', 'CEFR', { text: '考核内容', colspan: 1 }],
            rows: [
                [
                    '一级 KET',
                    'A2',
                    '阅读总议系列'
                ],
                [
                    'A2 Key',
                    '阅读与写作 60分钟 9大题',
                    '8-10分钟'
                ],
                [
                    '听力 约30分钟 5大题',
                    '口语',
                    '2部分'
                ]
            ],
            footer: '时长共计：约90分钟'
        }
    },
    pet: {
        id: 'pet',
        name: 'PET',
        intro: 'PET（B1 Preliminary）是剑桥通用英语五级体系第二级，对标欧洲语言框架 CEFR B1 级别，适合完成 KET 学习后的初中学员，是衔接 FCE、培养独立英语读写听说能力的核心提升阶段。',
        contentTable: {
            title: 'PET培训内容',
            headers: ['', '词汇', '语法', '读写', '听口'],
            rows: [
                [
                    '词汇',
                    '掌握约2000+核心词汇，涉及工作学习、社会生活、情感态度、娱乐运动、旅行服务等主题。',
                    '时态综合、被动语态、虚拟语气基础、关系从句、非谓语动词、比较结构、比较结构、状语从句与定语表示。',
                    '长篇阅读、完形填空、段落匹配、句子还原、观点写作、邮件与议论文达，能清晰说明观点与经历',
                    '听懂采访、讲座、对话与广播信息；能进行深度对话、主题讨论、观点陈述和即兴表达。'
                ]
            ]
        },
        examTable: {
            title: '考核内容',
            headers: ['级别', 'CEFR', '考核内容'],
            rows: [
                ['二级 PET', 'B1', '阅读与写作'],
                ['B1 Preliminary', '75分钟', '8大题'],
                ['听力', '约30分钟', '4大题'],
                ['口语', '口语 10-12分钟', '4部分']
            ],
            footer: '时长共计：约105分钟'
        }
    },
    fce: {
        id: 'fce',
        name: 'FCE',
        intro: 'FCE（B2 First）是剑桥通用英语五级体系第三级，对标欧洲语言框架 CEFR B2 级别，适合完成 PET 学习后的初高中学员，是衔接 CAE、达到海外本科基础语言门槛的高阶能力阶段。',
        contentTable: {
            title: 'FCE培训内容',
            headers: ['', '词汇', '语法', '读写', '听口'],
            rows: [
                [
                    '参考理',
                    '掌握约3000+核心词汇，涉及抽象话题、社会文化、教育技、环境健康、观点论证等内容。',
                    '复杂句、虚拟语气、分词结构、不定式、被动与主动转换、倒倒装、强调句、从句综合与逻辑连接。',
                    '结构化阅读、长篇理解、完形填空、文学作品节选、议论文与说明文写作，能进行观点论证和逻辑表达。',
                    '听懂讲座、访谈、新闻与故事叙述；能进行流利讨论、观点辩解、即兴兴演讲和双人互动。'
                ]
            ]
        },
        examTable: {
            title: '考核内容',
            headers: ['级别', 'CEFR', '考核内容'],
            rows: [
                ['三级 FCE', 'B2', '阅读与写作'],
                ['B2 First', '80分钟 7大题', '约40分钟'],
                ['听力', '4大题', '口语 14分钟 4部分']
            ],
            footer: '时长共计：约120分钟'
        }
    }
});

const currentCourse = computed(() => courses.value[activeTab.value]);
</script>

<style scoped lang="scss">
.course-intro-section {
    padding: clamp(5rem, 9vw, 9rem) 0;
    background: var(--brand-navy);
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

.section-heading>p {
    color: var(--brand-gold-light);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.2em;
}

.section-heading>span {
    color: rgba(255, 255, 255, 0.62);
}

.section-title {
    margin: 0.75rem 0;
    color: #fff;
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
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 999px;
    font-size: clamp(0.875rem, 1.8vw, 1rem);
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        border-color: var(--brand-gold-light);
        color: #fff;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    &.active {
        background: var(--brand-gold);
        border-color: var(--brand-gold);
        color: var(--brand-navy);
    }
}

.course-content {
    background: #ffffff;
    border-radius: 0.5rem;
    padding: clamp(1.5rem, 4vw, 2.5rem);
    box-shadow: 0 25px 65px rgba(1, 15, 26, 0.25);
}

.course-intro {
    font-size: clamp(0.9375rem, 2vw, 1.0625rem);
    line-height: 1.8;
    color: var(--text-primary);
    margin-bottom: 2rem;
}

.content-table-wrapper,
.exam-table-wrapper {
    margin-top: 2.5rem;
}

.table-title {
    font-size: clamp(1.125rem, 2.5vw, 1.5rem);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
}

.table-container {
    overflow-x: auto;
    border-radius: 12px;
    background: #f8fafc;
    border: 1px solid var(--border-color-light);
}

.content-table,
.exam-table {
    width: 100%;
    border-collapse: collapse;
    font-size: clamp(0.875rem, 1.8vw, 0.9375rem);

    th {
        background: var(--brand-navy);
        color: #ffffff;
        padding: 1rem;
        text-align: left;
        font-weight: 600;
        border: 1px solid rgba(255, 255, 255, 0.12);
    }

    td {
        padding: 1rem;
        color: var(--text-secondary);
        border: 1px solid var(--border-color-light);
        line-height: 1.6;
        white-space: pre-line;
        background: #ffffff;
    }

    tbody tr {
        transition: background 0.2s ease;

        &:hover {
            td {
                background: rgba(56, 189, 248, 0.05);
            }
        }
    }
}

.exam-table {
    th {
        text-align: center;
    }

    td {
        text-align: center;
    }
}

.table-footer {
    margin-top: 1rem;
    padding: 1rem;
    background: #ffffff;
    border-radius: 8px;
    text-align: center;
    font-size: clamp(0.9375rem, 2vw, 1.0625rem);
    font-weight: 500;
    color: #333333;
    border: 2px solid #d1d5db;
}
</style>
