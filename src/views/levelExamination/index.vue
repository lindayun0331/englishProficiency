<template>
    <div class="level-examination-container">
        <HeroImageSection />
        <CourseSystemSection />
        <CourseIntroSection />
    </div>
</template>

<script setup lang="ts">
import HeroImageSection from './components/HeroImageSection/index.vue';
import CourseSystemSection from './components/CourseSystemSection/index.vue';
import CourseIntroSection from './components/CourseIntroSection/index.vue';
</script>

<style scoped lang="scss">
.level-examination-container {
    min-height: 100vh;
    color: var(--brand-navy);
    background: var(--brand-ivory);
}
</style>
