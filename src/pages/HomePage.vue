<template>
  <header-title />
  <home-content />
</template>

<script>
import Title from "@/components/Home/TitleHome";
import ContentHome from "@/components/Home/ContentHome";

export default {
  name: "App",

  components: {
    "header-title": Title,
    "home-content": ContentHome,
  },
};
</script>

<style lang="sass" src="../assets/style.sass"></style>
