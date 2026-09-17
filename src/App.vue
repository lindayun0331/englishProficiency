<template>
    <div id="app">
        <AppHeader />
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader/index.vue';
</script>

<style>
@import './styles/global.css';
</style>
