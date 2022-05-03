<script setup lang="ts">
import { ConfigProvider } from "vant";
import { storeToRefs } from "pinia";
import { useAppStore } from "@/store";

const appStore = useAppStore();

const { theme, vantThemeStyle } = storeToRefs(appStore);
</script>

<template>
  <VanConfigProvider :theme="theme" :theme-vars="vantThemeStyle">
    <router-view></router-view>
  </VanConfigProvider>
</template>

<style>
#app {
  height: 100vh;
  width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
