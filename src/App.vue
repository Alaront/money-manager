<template>
  <div class="flex h-min-[100%] content">
    <header-components
      class="w-[25%] max-w-[310px] bg-[#FFFFFF] py-[23px] px-[12px] box-border border-r-[1px] border-r-[#ada9a9] border-r-solid mr-[23px]"
    />
    <div class="content grow-[1] pt-[25px] pr-[23px] box-border">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/layouts/Header";

export default {
  name: "App",
  components: {
    "header-components": Header,
  },
};
</script>

<style lang="sass" src="./assets/style.sass"></style>
