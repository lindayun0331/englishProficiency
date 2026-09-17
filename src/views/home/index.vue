<template>
    <div class="home-container">
        <HeroSection />
        <ReadingStarSection />
        <AchievementsSection />
    </div>
</template>

<script setup lang="ts">
import HeroSection from './components/HeroSection/index.vue';
import ReadingStarSection from './components/ReadingStarSection/index.vue';
import AchievementsSection from './components/AchievementsSection/index.vue';
</script>

<style scoped lang="scss">
.home-container {
    min-height: 100vh;
    color: var(--brand-navy);
    background: var(--brand-ivory);
}
</style>
