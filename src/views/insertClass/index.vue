<template>
    <main class="program-page">
        <section class="hero" aria-labelledby="program-hero-title">
            <img class="hero-image" :src="heroImage" alt="国际夏校课堂中的师生正在交流讨论" />
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <p class="eyebrow">GLOBAL STUDY PROGRAMS</p>
                <h1 id="program-hero-title">把世界，<br /><span>变成孩子的课堂</span></h1>
                <p class="hero-copy">
                    策景英学可提供美国官方夏校、英国夏令营、冬季插班营、马来西亚微留学等项目。专业而细致的国际教育服务，助力广大学子实现梦想，进入世界名校。我们与顶尖教育机构紧密合作，拥有独特的资源和渠道，以确保学生获得最佳的教育机会和资源。
                </p>
                <div class="hero-tags" aria-label="项目特色">
                    <span>官方项目</span>
                    <span>沉浸课堂</span>
                    <span>国际视野</span>
                </div>
            </div>
            <div class="hero-index" aria-hidden="true">01 — 03</div>
        </section>

        <section class="programs" aria-labelledby="program-list-title">
            <div class="section-heading">
                <p class="eyebrow">FIND YOUR PROGRAM</p>
                <h2 id="program-list-title">选择适合孩子的国际学习体验</h2>
                <p>从目标、年龄与成长阶段出发，让每一次远行都有清晰的收获。</p>
            </div>

            <div class="tab-wrap">
                <div class="tabs" role="tablist" aria-label="国际学习项目">
                    <button v-for="(program, index) in programs" :id="`program-tab-${index}`" :key="program.key"
                        class="tab-button" :class="{ active: activeTab === index }" type="button" role="tab"
                        :aria-selected="activeTab === index" :aria-controls="`program-panel-${index}`"
                        @click="activeTab = index">
                        <span class="tab-number">0{{ index + 1 }}</span>
                        <span>{{ program.tab }}</span>
                    </button>
                </div>
            </div>

            <Transition name="program-fade" mode="out-in">
                <article :id="`program-panel-${activeTab}`" :key="activeProgram.key" class="program-panel"
                    role="tabpanel" :aria-labelledby="`program-tab-${activeTab}`">
                    <div class="intro-grid">
                        <div class="copy-block">
                            <p class="block-kicker">WHO IT'S FOR</p>
                            <h3>{{ activeProgram.tab }}<br />适合什么样的孩子？</h3>
                            <ol class="point-list">
                                <li v-for="item in activeProgram.audience" :key="item" v-html="item"></li>
                            </ol>
                        </div>
                        <figure class="image-card image-card--primary">
                            <img :src="activeProgram.images[0]" :alt="activeProgram.imageAlts[0]" />
                            <figcaption>{{ activeProgram.captions[0] }}</figcaption>
                        </figure>
                    </div>

                    <div class="advantage-grid">
                        <figure class="image-card image-card--secondary">
                            <img :src="activeProgram.images[1]" :alt="activeProgram.imageAlts[1]" />
                            <figcaption>{{ activeProgram.captions[1] }}</figcaption>
                        </figure>
                        <div class="copy-block advantage-copy">
                            <p class="block-kicker">WHY THIS PROGRAM</p>
                            <h3>{{ activeProgram.advantageTitle }}</h3>
                            <div class="advantage-list">
                                <div v-for="(item, index) in activeProgram.advantages" :key="item.title"
                                    class="advantage-item">
                                    <span class="advantage-number">0{{ index + 1 }}</span>
                                    <div>
                                        <h4>{{ item.title }}</h4>
                                        <p>{{ item.text }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section v-if="activeProgram.projectGroups" class="project-list-section"
                        aria-labelledby="summer-project-list-title">
                        <div class="project-list-heading">
                            <div>
                                <p class="block-kicker">SELECTED PROGRAMS</p>
                                <h3 id="summer-project-list-title">部分夏令营项目名单</h3>
                            </div>
                            <p>精选世界知名高校及研究机构官方项目，具体申请要求与开放时间以项目当年公布信息为准。</p>
                        </div>
                        <div class="project-groups">
                            <div v-for="group in activeProgram.projectGroups" :key="group.title" class="project-group">
                                <div class="project-group-title">
                                    <span>{{ group.code }}</span>
                                    <h4>{{ group.title }}</h4>
                                </div>
                                <ol class="project-items">
                                    <li v-for="project in group.items" :key="project">
                                        <span>{{ project }}</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </section>
                </article>
            </Transition>
        </section>
    </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import heroImage from '@/assets/images/instertClass/顶部插图.png';
import usaImageOne from '@/assets/images/instertClass/美国夏校配图1.png';
import usaImageTwo from '@/assets/images/instertClass/美国夏校配图2.png';
import ukImageOne from '@/assets/images/instertClass/冬季插班配图1.png';
import ukImageTwo from '@/assets/images/instertClass/冬季插班配图2.png';
import malaysiaImageOne from '@/assets/images/instertClass/马来西亚配图1.png';
import malaysiaImageTwo from '@/assets/images/instertClass/马来西亚配图2.png';

interface Advantage {
    title: string;
    text: string;
}

interface Program {
    key: string;
    tab: string;
    audience: string[];
    advantageTitle: string;
    advantages: Advantage[];
    images: [string, string];
    imageAlts: [string, string];
    captions: [string, string];
    projectGroups?: ProjectGroup[];
}

interface ProjectGroup {
    code: string;
    title: string;
    items: string[];
}

const programs: Program[] = [
    {
        key: 'usa',
        tab: '美国夏校',
        audience: [
            '目标未来申请<strong>美本</strong>的 9–12 年级高中生，希望提前体验美式大学课堂、探索专业方向。',
            '英语基础较好（学分夏校通常要求托福 80+／雅思 6.0+），具备独立生活能力；专业方向尚未完全确定，希望跨学科探索 STEM、商科或人文社科。',
            '希望获得官方结业证书；部分优质学分夏校可获大学学分，并有机会获得教授推荐信，丰富美本申请背景。',
            '能够接受远距离出行，并适应时差与较长的飞行时间。',
        ],
        advantageTitle: '美国夏校项目核心优势',
        advantages: [
            { title: '学术多元开放', text: '项目选择丰富，涵盖 STEM 科研、商科、人文、艺术与领导力；采用美式研讨课堂，鼓励批判性思考与项目制实践。' },
            { title: '名校官方背书', text: '藤校、UC 系列及顶尖私立大学开设官方项目；部分学分可获大学认可转换，为美本申请提供有力的学术背景。' },
            { title: '国际化氛围浓厚', text: '与全球学生共同学习，沉浸式体验校园生活，建立跨文化沟通能力，深度感受美国大学文化。' },
        ],
        images: [usaImageOne, usaImageTwo],
        imageAlts: ['美国夏校师生在校园草坪合影', '美国夏校学生参加校园文化活动'],
        captions: ['在真实大学校园里，认识来自世界各地的同伴', '课堂之外，也在生活与交流中成长'],
        projectGroups: [
            {
                code: 'MATH',
                title: '数学类项目',
                items: [
                    '约翰霍普金斯大学天才儿童中心 CTY（8–18 岁）',
                    'Ross Mathematics Program 罗斯数学营（15–18 岁）',
                    'Stanford University Mathematics Camp 斯坦福大学数学营（10–11 年级）',
                    'Program in Mathematics for Young Scientists 青年科学家数学项目（9–11 年级）',
                    'Honors Summer Math Camp 德州州立大学荣誉数学营（9–12 年级）',
                    'Hampshire College Summer Studies in Mathematics 罕布什尔学院数学营（9–12 年级）',
                    'Canada/USA Mathcamp 加拿大／美国数学营（13–18 岁）',
                    'MathILY 数学营（9–12 年级）',
                    'AwesomeMath 神奇数学营（5–12 年级）',
                ],
            },
            {
                code: 'RESEARCH',
                title: '科研类项目',
                items: [
                    '芝加哥大学生物科学夏校 Research in the Biological Sciences（10–11 年级）',
                    '麻省理工暑期科学项目 Summer Science Program（10–11 年级）',
                    '加州大学戴维斯青年学者计划 UC Davis Young Scholars Program（10–11 年级，美籍）',
                    '克拉克学者项目 Clark Scholars Program（11–12 年级）',
                    '加州大学圣巴巴拉研究项目 Research Mentorship Program（10–11 年级）',
                    '加西亚聚合物研究中心夏校 Garcia Center Summer Research Program（10–12 年级）',
                    '爱荷华大学中学生培训计划 Secondary Student Training Program（10–11 年级）',
                ],
            },
        ],
    },
    {
        key: 'uk',
        tab: '英国夏令营&冬季插班',
        audience: [
            '希望体验<strong>英式精英教育</strong>的中小学生，了解英国寄宿学校的课堂节奏与校园文化。',
            '有英国低龄留学规划，希望通过短期插班提前考察学校、适应全英文课堂与寄宿生活。',
            '希望提升英语实际运用能力，在学科课堂、团队协作与日常沟通中建立表达自信。',
            '重视综合素养，希望在学术之外体验体育、艺术、社团及英国历史文化活动。',
        ],
        advantageTitle: '英国夏令营&冬季插班核心优势',
        advantages: [
            { title: '原汁原味的英式课堂', text: '进入英国本土学校，与当地学生共同上课，亲身感受小班教学、启发式学习和完善的学院体系。' },
            { title: '留学规划前置体验', text: '通过真实校园生活检验适应度，帮助家庭更直观地判断学校类型、住宿方式与后续升学方向。' },
            { title: '学术与文化双线成长', text: '课堂学习结合名校参访、人文探索和丰富活动，在自然语境中提升语言能力与独立生活能力。' },
        ],
        images: [ukImageOne, ukImageTwo],
        imageAlts: ['英国寄宿学校校园建筑与草坪', '英国学校学生在教室中上课'],
        captions: ['走进历史悠久的英国校园', '与本土学生一起，体验真实课堂'],
    },
    {
        key: 'malaysia',
        tab: '马来西亚微留学',
        audience: [
            '希望用较短时间体验<strong>国际学校全英文课堂</strong>的中小学生，为未来留学进行低门槛尝试。',
            '英语处于提升阶段，希望在多元、友好的语言环境中克服开口障碍，建立学习兴趣与自信。',
            '希望兼顾学术体验与热带文化探索，在研学、自然课堂和团队任务中开阔国际视野。',
            '首次参加海外项目，希望飞行距离适中、时差小，并重视安全管理与高性价比的家庭。',
        ],
        advantageTitle: '马来西亚微留学核心优势',
        advantages: [
            { title: '多元国际教育环境', text: '国际学校课程体系成熟，师生来自不同文化背景，为孩子提供自然、包容的全英文交流环境。' },
            { title: '体验轻松，收获扎实', text: '距离近、时差小，项目周期灵活；以较低的适应成本体验完整国际课堂与校园生活。' },
            { title: '课堂连接真实世界', text: '融合自然生态、城市文化与主题实践，让知识走出课本，在合作与探索中培养全球视野。' },
        ],
        images: [malaysiaImageOne, malaysiaImageTwo],
        imageAlts: ['马来西亚国际学校现代校园建筑', '马来西亚微留学丰富的研学活动拼图'],
        captions: ['现代化校园，链接多元国际课程', '在体验、协作与探索中打开视野'],
    },
];

const activeTab = ref(0);
const activeProgram = computed(() => programs[activeTab.value]!);
</script>

<style scoped lang="scss">
.program-page {
    --program-navy: #0d2942;
    --program-blue: #2366a8;
    --program-gold: #d8a147;
    color: var(--program-navy);
    background: #f7f4ee;
    overflow: hidden;
}

.hero {
    position: relative;
    min-height: min(720px, calc(100vh - 80px));
    display: flex;
    align-items: center;
    isolation: isolate;
    background: var(--program-navy);
}

.hero-image,
.hero-overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
}

.hero-image {
    z-index: -2;
    object-fit: cover;
    object-position: 66% center;
}

.hero-overlay {
    z-index: -1;
    background:
        linear-gradient(90deg, rgba(9, 35, 57, 0.98) 0%, rgba(9, 35, 57, 0.92) 34%, rgba(9, 35, 57, 0.36) 67%, rgba(9, 35, 57, 0.05) 100%),
        linear-gradient(0deg, rgba(7, 29, 48, 0.35), transparent 45%);
}

.hero-content {
    width: min(1480px, calc(100% - 3rem));
    margin: 0 auto;
    padding: 6rem 2rem;
}

.eyebrow,
.block-kicker {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
}

.hero .eyebrow {
    color: #efc47d;
    margin-bottom: 1.5rem;
}

.hero h1 {
    max-width: 780px;
    color: #fff;
    font-size: clamp(3rem, 5.8vw, 6.25rem);
    font-weight: 350;
    line-height: 1.08;
    letter-spacing: -0.055em;
}

.hero h1 span {
    color: #f1c985;
}

.hero-copy {
    max-width: 620px;
    margin-top: 2.25rem;
    color: rgba(255, 255, 255, 0.82);
    font-size: clamp(1rem, 1.4vw, 1.18rem);
    line-height: 2;
}

.hero-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 2rem;
}

.hero-tags span {
    padding: 0.5rem 1rem;
    color: rgba(255, 255, 255, 0.86);
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    border: 1px solid rgba(255, 255, 255, 0.28);
    border-radius: 999px;
    backdrop-filter: blur(8px);
}

.hero-index {
    position: absolute;
    right: clamp(2rem, 5vw, 5rem);
    bottom: 2rem;
    color: rgba(255, 255, 255, 0.58);
    font-size: 0.72rem;
    letter-spacing: 0.24em;
}

.programs {
    padding: clamp(5rem, 9vw, 9rem) 0;
}

.section-heading {
    width: min(800px, calc(100% - 3rem));
    margin: 0 auto 3.5rem;
    text-align: center;
}

.section-heading .eyebrow,
.block-kicker {
    color: var(--program-blue);
}

.section-heading h2 {
    margin-top: 0.9rem;
    font-size: clamp(2rem, 4vw, 3.4rem);
    font-weight: 500;
    line-height: 1.24;
    letter-spacing: -0.04em;
}

.section-heading>p:last-child {
    margin-top: 1rem;
    color: #65717b;
}

.tab-wrap {
    position: sticky;
    top: 80px;
    z-index: 20;
    padding: 0 1.5rem;
}

.tabs {
    width: min(1120px, 100%);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0.45rem;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(13, 41, 66, 0.09);
    border-radius: 1rem;
    box-shadow: 0 14px 45px rgba(30, 48, 62, 0.09);
    backdrop-filter: blur(16px);
}

.tab-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    min-height: 62px;
    padding: 0.8rem 1rem;
    color: #687681;
    font: inherit;
    font-weight: 600;
    background: transparent;
    border: 0;
    border-radius: 0.72rem;
    cursor: pointer;
    transition: color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
}

.tab-button:hover {
    color: var(--program-blue);
}

.tab-button.active {
    color: #fff;
    background: var(--program-navy);
    box-shadow: 0 8px 24px rgba(13, 41, 66, 0.2);
}

.tab-number {
    font-size: 0.68rem;
    letter-spacing: 0.12em;
    opacity: 0.55;
}

.program-panel {
    width: min(1380px, calc(100% - 3rem));
    margin: clamp(5rem, 8vw, 8rem) auto 0;
}

.intro-grid,
.advantage-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
    gap: clamp(3rem, 7vw, 7rem);
    align-items: center;
}

.advantage-grid {
    grid-template-columns: minmax(0, 1.06fr) minmax(0, 0.94fr);
    margin-top: clamp(6rem, 11vw, 11rem);
}

.copy-block h3 {
    margin-top: 1rem;
    font-size: clamp(2rem, 3.6vw, 3.5rem);
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.04em;
}

.point-list {
    margin-top: 2rem;
    list-style: none;
    counter-reset: audience;
}

.point-list li {
    position: relative;
    padding: 1.1rem 0 1.1rem 3.25rem;
    color: #4f5e69;
    line-height: 1.85;
    border-top: 1px solid rgba(13, 41, 66, 0.12);
    counter-increment: audience;
}

.point-list li::before {
    content: counter(audience, decimal-leading-zero);
    position: absolute;
    top: 1.2rem;
    left: 0;
    color: var(--program-gold);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
}

.point-list :deep(strong) {
    color: var(--program-navy);
    font-weight: 700;
}

.image-card {
    position: relative;
    margin: 0;
}

.image-card::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 72%;
    height: 70%;
    border: 1px solid rgba(35, 102, 168, 0.24);
}

.image-card--primary::before {
    top: -1.5rem;
    right: -1.5rem;
}

.image-card--secondary::before {
    bottom: -1.5rem;
    left: -1.5rem;
    border-color: rgba(216, 161, 71, 0.42);
}

.image-card img {
    display: block;
    width: 100%;
    aspect-ratio: 1.34 / 1;
    object-fit: cover;
    border-radius: 0.35rem;
    box-shadow: 0 25px 65px rgba(21, 42, 58, 0.16);
}

.image-card figcaption {
    position: absolute;
    right: -1rem;
    bottom: -1.2rem;
    max-width: 78%;
    padding: 0.9rem 1.25rem;
    color: #fff;
    font-size: 0.82rem;
    background: var(--program-navy);
    box-shadow: 0 10px 28px rgba(13, 41, 66, 0.2);
}

.image-card--secondary figcaption {
    right: auto;
    left: -1rem;
    background: #a8792f;
}

.advantage-list {
    margin-top: 2rem;
}

.advantage-item {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.25rem;
    padding: 1.35rem 0;
    border-top: 1px solid rgba(13, 41, 66, 0.12);
}

.advantage-number {
    display: grid;
    place-items: center;
    width: 2.5rem;
    height: 2.5rem;
    color: var(--program-blue);
    font-size: 0.68rem;
    font-weight: 700;
    border: 1px solid rgba(35, 102, 168, 0.25);
    border-radius: 50%;
}

.advantage-item h4 {
    margin-bottom: 0.4rem;
    font-size: 1.1rem;
}

.advantage-item p {
    color: #5f6d77;
    font-size: 0.94rem;
    line-height: 1.8;
}

.project-list-section {
    margin-top: clamp(7rem, 12vw, 11rem);
    padding: clamp(2.5rem, 5vw, 4.5rem);
    color: #fff;
    background:
        radial-gradient(circle at 92% 8%, rgba(216, 161, 71, 0.2), transparent 30%),
        var(--program-navy);
    border-radius: 0.5rem;
    box-shadow: 0 28px 70px rgba(13, 41, 66, 0.18);
}

.project-list-heading {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(280px, 0.65fr);
    gap: 3rem;
    align-items: end;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.project-list-heading .block-kicker {
    color: #efc47d;
}

.project-list-heading h3 {
    margin-top: 0.75rem;
    font-size: clamp(2rem, 3.6vw, 3.5rem);
    font-weight: 450;
    line-height: 1.2;
    letter-spacing: -0.04em;
}

.project-list-heading>p {
    color: rgba(255, 255, 255, 0.62);
    font-size: 0.9rem;
    line-height: 1.85;
}

.project-groups {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(2.5rem, 6vw, 6rem);
    padding-top: 3rem;
}

.project-group-title {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;
}

.project-group-title span {
    color: #efc47d;
    font-size: 0.66rem;
    font-weight: 700;
    letter-spacing: 0.14em;
}

.project-group-title h4 {
    font-size: 1.2rem;
    font-weight: 600;
}

.project-items {
    list-style: none;
    counter-reset: project;
}

.project-items li {
    display: grid;
    grid-template-columns: 2rem 1fr;
    gap: 0.8rem;
    padding: 1rem 0;
    color: rgba(255, 255, 255, 0.78);
    font-size: 0.9rem;
    line-height: 1.65;
    border-top: 1px solid rgba(255, 255, 255, 0.11);
    counter-increment: project;
}

.project-items li::before {
    content: counter(project, decimal-leading-zero);
    color: rgba(239, 196, 125, 0.74);
    font-size: 0.67rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding-top: 0.16rem;
}

.program-fade-enter-active,
.program-fade-leave-active {
    transition: opacity 0.18s ease, transform 0.18s ease;
}

.program-fade-enter-from {
    opacity: 0;
    transform: translateY(12px);
}

.program-fade-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}

@media (max-width: 900px) {
    .hero {
        min-height: 650px;
    }

    .hero-image {
        object-position: 64% center;
    }

    .hero-overlay {
        background: linear-gradient(90deg, rgba(9, 35, 57, 0.98) 0%, rgba(9, 35, 57, 0.83) 62%, rgba(9, 35, 57, 0.3) 100%);
    }

    .intro-grid,
    .advantage-grid {
        grid-template-columns: 1fr;
    }

    .intro-grid .image-card {
        margin-top: 1rem;
    }

    .advantage-grid .image-card {
        order: 2;
    }

    .project-list-heading,
    .project-groups {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .hero {
        min-height: 620px;
    }

    .hero-content {
        width: min(100% - 2rem, 680px);
        padding: 4rem 0;
    }

    .hero h1 {
        font-size: clamp(2.65rem, 13vw, 4.3rem);
    }

    .hero-overlay {
        background: linear-gradient(90deg, rgba(9, 35, 57, 0.97), rgba(9, 35, 57, 0.69));
    }

    .tab-wrap {
        top: 116px;
        padding: 0 0.75rem;
    }

    .tabs {
        overflow-x: auto;
        grid-template-columns: repeat(3, minmax(168px, 1fr));
    }

    .tab-button {
        min-height: 54px;
        font-size: 0.86rem;
        white-space: nowrap;
    }

    .program-panel {
        width: min(100% - 2rem, 680px);
    }

    .image-card::before {
        display: none;
    }

    .image-card figcaption,
    .image-card--secondary figcaption {
        right: 0.75rem;
        bottom: 0.75rem;
        left: auto;
    }

    .project-list-section {
        margin-right: -1rem;
        margin-left: -1rem;
        padding: 2.5rem 1.25rem;
        border-radius: 0;
    }

    .project-list-heading {
        gap: 1.25rem;
        padding-bottom: 2rem;
    }

    .project-groups {
        gap: 3rem;
        padding-top: 2.5rem;
    }
}

@media (prefers-reduced-motion: reduce) {

    .program-fade-enter-active,
    .program-fade-leave-active,
    .tab-button {
        transition: none;
    }
}
</style>
