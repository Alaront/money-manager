<template>
  <title-page title="Home" subtitle="Текущие финансы" />
  <home-content @open-popup="togglePopup" />
  <popup-exchange v-if="showPopupExchange" @close-popup="togglePopup" />
</template>

<script>
import Title from "@/components/TitlePage";
import ContentHome from "@/components/Home/ContentHome";
import popupExchange from "@/components/Home/PopupExchange";

export default {
  name: "App",

  components: {
    "title-page": Title,
    "home-content": ContentHome,
    "popup-exchange": popupExchange,
  },

  data() {
    return {
      showPopupExchange: false,
    };
  },

  methods: {
    togglePopup() {
      this.showPopupExchange = !this.showPopupExchange;
    },
  },
};
</script>

<style lang="sass" src="../assets/style.sass"></style>
