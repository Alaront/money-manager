import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router";
import store from "@/store/index";
import { styleMixin } from "@/mixins/styleMixin";

createApp(App).use(router).mixin(styleMixin).use(store).mount("#app");
