import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    theme: "light" as "light" | "dark",
    vantBaseStyle: {} as Record<`--van-${string}`, string | number>,
    vantThemeStyle: {} as Record<string, string | number>,
  }),
  actions: {
    toggleTheme(theme?: "light" | "dark") {
      if (theme) {
        this.theme = theme;
      } else {
        this.theme = this.theme === "light" ? "dark" : "light";
      }
    },
  },
});
