<script setup lang="ts">
import { ConfigProvider as VanConfigProvider } from "vant";
import { storeToRefs } from "pinia";
import { useAppStore } from "@/store";
import { watchEffect } from "vue";

const appStore = useAppStore();

const { theme, vantBaseStyle, vantThemeStyle } = storeToRefs(appStore);
const { toggleTheme } = appStore;

watchEffect(() => {
  console.log("set vant base style");
  document.body.setAttribute("style", JSON.stringify(vantBaseStyle.value));
});

const media = window.matchMedia("(prefers-color-scheme: dark)");
const listenTheme = (e: MediaQueryListEvent | MediaQueryList) => {
  if (e.matches) {
    console.log("dark mode");
    toggleTheme("dark");
  } else {
    console.log("light mode");
    toggleTheme("light");
  }
};
listenTheme(media);
media.addEventListener("change", listenTheme);
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
