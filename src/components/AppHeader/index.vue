<template>
    <header class="app-header">
        <div class="header-content">
            <div class="logo">英文素养课</div>
            <nav class="nav-menu">
                <template v-for="item in menuList" :key="item.id">
                    <RouterLink v-if="item.action !== 'consult'" :to="item.link" class="nav-item"
                        :class="{ 'is-active': route.path === item.link }">
                        {{ item.label }}
                    </RouterLink>
                    <button v-else type="button" class="nav-item nav-button" @click="consultOpen = true">
                        {{ item.label }}
                    </button>
                </template>
            </nav>
        </div>
    </header>
    <ConsultationDialog v-model="consultOpen" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import ConsultationDialog from '@/components/ConsultationDialog/index.vue';

interface MenuItem {
    id: number;
    label: string;
    link: string;
    action?: 'consult';
}

const route = useRoute();
const consultOpen = ref(false);

const menuList = ref<MenuItem[]>([
    { id: 1, label: '首页', link: '/' },
    { id: 2, label: '英文素养课', link: '/english-literacy-course' },
    { id: 3, label: '等级考试', link: '/level-examination' },
    { id: 4, label: '夏校冬季插班', link: '/insert-class' },
    { id: 5, label: '新加坡留学', link: '/studying-abroad' },
    { id: 6, label: '联系我们', link: '#', action: 'consult' },
]);
</script>

<style scoped lang="scss">
.app-header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border-color-light);

    .header-content {
        max-width: 1600px;
        margin: 0 auto;
        padding: 0 clamp(1.5rem, 5vw, 4rem);
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 3rem;
        height: 80px;

        .logo {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--text-primary);
            letter-spacing: -0.02em;
        }

        .nav-menu {
            display: flex;
            align-items: center;
            gap: clamp(2rem, 4vw, 3rem);
            justify-content: flex-end;

            .nav-item {
                font-size: 0.95rem;
                font-weight: 500;
                color: var(--text-secondary);
                text-decoration: none;
                position: relative;
                transition: color 0.2s ease;

                &::after {
                    content: '';
                    position: absolute;
                    bottom: -6px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: var(--accent-primary);
                    transition: width 0.3s ease;
                }

                &:hover {
                    color: var(--text-primary);

                    &::after {
                        width: 100%;
                    }
                }

                &.is-active {
                    color: var(--accent-primary);

                    &::after {
                        width: 100%;
                    }
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .app-header {
        .header-content {
            grid-template-columns: 1fr;
            height: auto;
            padding: 1rem;

            .nav-menu {
                justify-content: flex-start;
                overflow-x: auto;
                gap: 1.5rem;
                padding-bottom: 0.2rem;
                scrollbar-width: none;

                &::-webkit-scrollbar {
                    display: none;
                }

                .nav-item {
                    flex: 0 0 auto;
                    white-space: nowrap;
                }
            }
        }
    }
}

.nav-button {
    padding: 0;
    font: inherit;
    background: transparent;
    border: 0;
    cursor: pointer;
}
</style>
