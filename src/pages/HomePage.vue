<template>
  <title-page title="Home" subtitle="Текущие финансы" />
  <home-content />
</template>

<script>
import Title from "@/components/TitlePage";
import ContentHome from "@/components/Home/ContentHome";

export default {
  name: "App",

  components: {
    "title-page": Title,
    "home-content": ContentHome,
  },
};
</script>

<style lang="sass" src="../assets/style.sass"></style>
