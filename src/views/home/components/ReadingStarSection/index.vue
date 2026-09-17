<template>
    <section class="reading-star-section">
        <div class="section-content">
            <div class="section-header">
                <span class="section-badge">英文素养课</span>
                <h2 class="section-title">小学即可达到高中英语水平</h2>
                <p class="section-subtitle">科学分级 · 系统课程 · 能力进阶</p>
                <p class="section-description">
                    从幼儿园到小学六年级，8大等级体系循序渐进，<br />
                    涵盖精读、泛读双主线，对标国际权威标准，让孩子在小学阶段即可达到高中毕业水平
                </p>
            </div>

            <div class="card-wrapper">
                <div class="star-card">
                    <!-- 阶梯图表 -->
                    <div class="ladder-chart">
                        <!-- 标签列 + 8个等级列 -->
                        <div class="chart-grid">
                            <!-- 左侧标签列 -->
                            <div class="labels-column">
                                <div v-for="(label, idx) in labels" :key="idx" class="label-cell" :class="label.class">
                                    {{ label.text }}
                                </div>
                            </div>

                            <!-- 8个等级列 -->
                            <div v-for="(level, levelIdx) in levels" :key="levelIdx" class="level-column">
                                <div v-for="(cell, cellIdx) in level.cells" :key="cellIdx" class="level-cell"
                                    :class="`level-${levelIdx}`">
                                    <div class="cell-content">
                                        <div v-for="(text, textIdx) in cell.texts" :key="textIdx" class="cell-text">
                                            {{ text }}
                                        </div>
                                    </div>
                                </div>
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

interface Label {
    text: string;
    class: string;
}

interface Cell {
    texts: string[];
}

interface Level {
    cells: Cell[];
}

const labels = ref<Label[]>([
    { text: '类别', class: 'red' },
    { text: '精读主线', class: 'red' },
    { text: '泛读主线', class: 'red' },
    { text: '泛读辅线', class: 'red' },
    { text: 'Lexile', class: 'red' },
    { text: '国内标准', class: 'red' },
    { text: '剑桥考试', class: 'red' },
    { text: 'CEFR', class: 'red' },
    { text: '雅思考试', class: 'red' },
    { text: '托福考试', class: 'red' },
    { text: 'min', class: 'red' },
]);

const levels = ref<Level[]>([
    {
        // GK
        cells: [
            { texts: ['GK'] },
            { texts: ['海尼曼基本', '歌谣 + 动画'] },
            { texts: ['大猫启蒙级1-2'] },
            { texts: ['RAZ', '牛津树'] },
            { texts: ['BR40'] },
            { texts: ['小低年级'] },
            { texts: ['Pre-Starters'] },
            { texts: ['Pre-A1'] },
            { texts: ['<2.5'] },
            { texts: ['<30'] },
            { texts: ['60mins'] },
        ],
    },
    {
        // GK-G1
        cells: [
            { texts: ['GK-G1'] },
            { texts: ['Poptropica', '歌谣+动画'] },
            { texts: ['大猫预备级1-2'] },
            { texts: ['RAZ', '牛津树'] },
            { texts: ['BR40-140L'] },
            { texts: ['小低年级'] },
            { texts: ['Pre-Starters'] },
            { texts: ['Pre-A1'] },
            { texts: ['<2.5'] },
            { texts: ['<30'] },
            { texts: ['90mins'] },
        ],
    },
    {
        // G1
        cells: [
            { texts: ['G1'] },
            { texts: ['PU1', '歌谣+动画'] },
            { texts: ['大猫：一级 二级', '国家地理PM分级', '预备级别'] },
            { texts: ['RAZ', '牛津树'] },
            { texts: ['BR40-140L'] },
            { texts: ['4-5年级'] },
            { texts: ['Starters(YLE)'] },
            { texts: ['Pre-A1'] },
            { texts: ['<2.5'] },
            { texts: ['<30'] },
            { texts: ['120mins'] },
        ],
    },
    {
        // G2
        cells: [
            { texts: ['G2'] },
            { texts: ['PU2', '歌谣+动画'] },
            { texts: ['大猫：三级 四级', '国家地理PM分级', '初级'] },
            { texts: ['RAZ', '牛津树'] },
            { texts: ['160-310L'] },
            { texts: ['5-6年级'] },
            { texts: ['Movers(YLE)'] },
            { texts: ['Pre-A1'] },
            { texts: ['<2.5'] },
            { texts: ['<30'] },
            { texts: ['120mins'] },
        ],
    },
    {
        // G3
        cells: [
            { texts: ['G3'] },
            { texts: ['PU3', '电影+歌曲'] },
            { texts: ['大猫：四级 五级', '国家地理PM分级', '中级'] },
            { texts: ['RAZ', '牛津树', '桥梁书'] },
            { texts: ['330-450L'] },
            { texts: ['6-7年级'] },
            { texts: ['Movers(YLE)'] },
            { texts: ['A1'] },
            { texts: ['2.5-3.0'] },
            { texts: ['<30'] },
            { texts: ['120mins'] },
        ],
    },
    {
        // G4
        cells: [
            { texts: ['G4'] },
            { texts: ['PU4', '电影+歌曲'] },
            { texts: ['大猫：六级 七级', '国家地理PM分级', '高级'] },
            { texts: ['RAZ', '牛津树', '初级章节书'] },
            { texts: ['430-530L'] },
            { texts: ['7~8年级'] },
            { texts: ['Flyers(YLE)'] },
            { texts: ['A1+'] },
            { texts: ['3.0-4.0'] },
            { texts: ['<30'] },
            { texts: ['120mins'] },
        ],
    },
    {
        // G5
        cells: [
            { texts: ['G5'] },
            { texts: ['PU5/THINK', '一级', '电影+歌曲'] },
            { texts: ['大猫：八级 九级', '国家地理PM分级', 'KET阶段'] },
            { texts: ['RAZ', '牛津树', '中级章节书'] },
            { texts: ['530-810L'] },
            { texts: ['初中毕业水平'] },
            { texts: ['KET(MSE)'] },
            { texts: ['A2'] },
            { texts: ['4.0-5.5'] },
            { texts: ['35-46'] },
            { texts: ['120mins'] },
        ],
    },
    {
        // G6
        cells: [
            { texts: ['G6'] },
            { texts: ['PU6/THINK', '二级', '电影+歌曲'] },
            { texts: ['大猫：十级 十一级', '国家地理PM分级', 'PET阶段'] },
            { texts: ['RAZ', '牛津树', '高级章节书'] },
            { texts: ['660-930L'] },
            { texts: ['高中毕业水平'] },
            { texts: ['PET(MSE)'] },
            { texts: ['B1'] },
            { texts: ['5.5-6.0'] },
            { texts: ['46-60'] },
            { texts: ['120mins'] },
        ],
    },
]);
</script>

<style scoped lang="scss">
.reading-star-section {
    padding: clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem);
    background: var(--brand-ivory);
    color: var(--brand-navy);

    .section-content {
        max-width: 1600px;
        margin: 0 auto;

        .section-header {
            text-align: center;
            margin-bottom: clamp(3rem, 6vw, 5rem);
            position: relative;

            // &::before {
            //     content: '';
            //     position: absolute;
            //     top: -2rem;
            //     left: 50%;
            //     transform: translateX(-50%);
            //     width: 120px;
            //     height: 120px;
            //     background-image: url(@/assets/images/englishLiteracyCourse/spriteIcon.png);
            //     background-size: cover;
            //     background-position: center;
            //     z-index: 0;
            // }

            .section-badge {
                display: inline-block;
                padding: 0.5rem 1.25rem;
                background: transparent;
                color: var(--brand-blue);
                font-size: 0.875rem;
                font-weight: 500;
                border-radius: 0;
                border: 1px solid rgba(35, 102, 168, 0.28);
                letter-spacing: 0.05em;
                margin-bottom: 1.5rem;
                box-shadow: none;
                position: relative;
                z-index: 1;
            }

            .section-title {
                font-size: clamp(2rem, 4.5vw, 3.25rem);
                font-weight: 600;
                color: var(--brand-navy);
                margin-bottom: 1rem;
                letter-spacing: -0.02em;
                line-height: 1.2;
            }

            .section-subtitle {
                font-size: clamp(1rem, 2vw, 1.25rem);
                color: var(--brand-blue);
                margin-bottom: 1.25rem;
                letter-spacing: 0.05em;
            }

            .section-description {
                font-size: clamp(0.95rem, 1.6vw, 1.05rem);
                color: var(--brand-copy);
                line-height: 1.8;
                max-width: 800px;
                margin: 0 auto;
            }
        }

        .card-wrapper {
            .star-card {
                background: #fff;
                border-radius: 0.5rem;
                padding: clamp(2.5rem, 5vw, 4rem);
                box-shadow: var(--shadow-lg);
                border: 1px solid rgba(13, 41, 66, 0.08);
                position: relative;
                overflow: hidden;

                &::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: url('@/assets/images/englishLiteracyCourse/阶梯纹理.png');
                    background-size: cover;
                    background-position: center;
                    opacity: 0.3;
                    z-index: 0;
                }

                .ladder-chart {
                    position: relative;
                    z-index: 1;
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;

                    &::-webkit-scrollbar {
                        height: 8px;
                    }

                    &::-webkit-scrollbar-track {
                        background: var(--surface-2);
                        border-radius: var(--radius-full);
                    }

                    &::-webkit-scrollbar-thumb {
                        background: var(--border-color);
                        border-radius: var(--radius-full);

                        &:hover {
                            background: var(--text-tertiary);
                        }
                    }

                    .chart-grid {
                        display: grid;
                        grid-template-columns: 120px repeat(8, 1fr);
                        align-items: flex-end;
                        gap: 8px;
                        min-width: 1100px;

                        .labels-column {
                            display: flex;
                            flex-direction: column;
                            gap: 8px;
                            align-items: flex-end;

                            .label-cell {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 0.8rem;
                                font-weight: 500;
                                color: white;
                                border-radius: var(--radius-sm);
                                text-align: center;
                                padding: 0.5rem;
                                width: 100%;
                                align-self: flex-end;

                                &.red {
                                    background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
                                }

                                // 每一行独立高度
                                &:nth-child(1) {
                                    height: 40px;
                                }

                                &:nth-child(2) {
                                    height: 60px;
                                }

                                &:nth-child(3) {
                                    height: 55px;
                                }

                                &:nth-child(4) {
                                    height: 50px;
                                }

                                &:nth-child(5) {
                                    height: 25px;
                                }

                                &:nth-child(6) {
                                    height: 25px;
                                }

                                &:nth-child(7) {
                                    height: 25px;
                                }

                                &:nth-child(8) {
                                    height: 20px;
                                }

                                &:nth-child(9) {
                                    height: 20px;
                                }

                                &:nth-child(10) {
                                    height: 20px;
                                }

                                &:nth-child(11) {
                                    height: 20px;
                                }
                            }
                        }

                        .level-column {
                            display: flex;
                            flex-direction: column;
                            gap: 8px;
                            align-items: flex-end;

                            .level-cell {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border-radius: var(--radius-sm);
                                padding: 0.5rem;
                                transition: transform 0.2s ease, box-shadow 0.2s ease;
                                box-shadow: var(--shadow-sm);
                                width: 100%;
                                align-self: flex-end;

                                &:hover {
                                    transform: translateY(-2px);
                                    box-shadow: var(--shadow-md);
                                }

                                .cell-content {
                                    text-align: center;
                                    width: 100%;

                                    .cell-text {
                                        font-size: 0.75rem;
                                        font-weight: 500;
                                        line-height: 1.4;
                                        color: rgba(0, 0, 0, 0.8);
                                    }
                                }

                                // 每一行独立高度
                                &:nth-child(1) {
                                    height: 70px;
                                }

                                &:nth-child(2) {
                                    height: 60px;
                                }

                                &:nth-child(3) {
                                    height: 55px;
                                }

                                &:nth-child(4) {
                                    height: 50px;
                                }

                                &:nth-child(5) {
                                    height: 25px;
                                }

                                &:nth-child(6) {
                                    height: 25px;
                                }

                                &:nth-child(7) {
                                    height: 25px;
                                }

                                &:nth-child(8) {
                                    height: 20px;
                                }

                                &:nth-child(9) {
                                    height: 20px;
                                }

                                &:nth-child(10) {
                                    height: 20px;
                                }

                                &:nth-child(11) {
                                    height: 20px;
                                }
                            }

                            // 8个等级的颜色 - 更现代的渐变色
                            &:nth-child(2) .level-cell {
                                background: linear-gradient(135deg, #f0abfc 0%, #e879f9 100%);
                            }

                            &:nth-child(3) .level-cell {
                                background: linear-gradient(135deg, #c084fc 0%, #a855f7 100%);
                            }

                            &:nth-child(4) .level-cell {
                                background: linear-gradient(135deg, #818cf8 0%, #6366f1 100%);
                            }

                            &:nth-child(5) .level-cell {
                                background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
                            }

                            &:nth-child(6) .level-cell {
                                background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
                            }

                            &:nth-child(7) .level-cell {
                                background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
                            }

                            &:nth-child(8) .level-cell {
                                background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
                            }

                            &:nth-child(9) .level-cell {
                                background: linear-gradient(135deg, #f87171 0%, #ef4444 100%);
                            }

                            // 第一行"类别"每个等级递增高度形成阶梯
                            &:nth-child(2) .level-cell:nth-child(1) {
                                height: 60px;
                            }

                            &:nth-child(3) .level-cell:nth-child(1) {
                                height: 80px;
                            }

                            &:nth-child(4) .level-cell:nth-child(1) {
                                height: 100px;
                            }

                            &:nth-child(5) .level-cell:nth-child(1) {
                                height: 120px;
                            }

                            &:nth-child(6) .level-cell:nth-child(1) {
                                height: 140px;
                            }

                            &:nth-child(7) .level-cell:nth-child(1) {
                                height: 160px;
                            }

                            &:nth-child(8) .level-cell:nth-child(1) {
                                height: 180px;
                            }

                            &:nth-child(9) .level-cell:nth-child(1) {
                                height: 200px;
                            }
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .reading-star-section {
        .ladder-chart {
            .chart-grid {
                min-width: 900px !important;

                .labels-column .label-cell {
                    font-size: 0.7rem !important;
                }

                .level-column .level-cell .cell-content .cell-text {
                    font-size: 0.65rem !important;
                }
            }
        }
    }
}
</style>
