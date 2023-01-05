import TextGray from "./components/Ui/TextGray.vue";

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    TextGray: typeof TextGray,
  }
}