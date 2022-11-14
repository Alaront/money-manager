<template>
  <div class="flex h-min-[100%] content">
    <header-components
      class="w-[310px] bg-[#FFFFFF] py-[23px] px-[12px] box-border border-r-[1px] border-r-[#ada9a9] border-r-solid mr-[23px] h-[100vh] top-[0] left-[-310px] z-2"
      :class="{
        fixed: windowWidth <= 1280,
        'top-[0] left-[0px]': openMenu,
      }"
    />
    <div
      class="content grow-[1] xl:pt-[25px] xl:pr-[23px] box-border w-[95%] xl:w-auto"
    >
      <router-view></router-view>
    </div>
    <button
      class="menu-btn fixed bottom-[10px] left-[50%] translate-x-[-50%] block bg-[#775da670] font-medium text-[16px] leading-[19px] py-[9px] px-[12px] rounded-[12px] text-[#202020]"
      v-on:click="() => (openMenu = !openMenu)"
      :class="windowWidth <= 1280 ? 'block' : 'hidden'"
    >
      {{ openMenu ? "CLOSE MENU" : "OPEN MENU" }}
    </button>
  </div>
</template>

<script>
import Header from "@/layouts/Header";

export default {
  name: "App",
  components: {
    "header-components": Header,
  },
  data() {
    return {
      openMenu: false,
      windowWidth: window.innerWidth,
    };
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
  },
  methods: {
    updateWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<style lang="sass" src="./assets/style.sass"></style>
