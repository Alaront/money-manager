<template>
  <form class="flex flex-col" v-on:submit.prevent="(e) => loginLogic(e)">
    <input
      type="email"
      placeholder="Введите Email"
      :class="getInputStyle"
      class="mb-[20px]"
      v-model="emailData"
    />
    <input
      type="text"
      placeholder="Введите Пароль"
      :class="getInputStyle"
      class="mb-[20px]"
      v-model="passwordData"
    />

    <button type="submit" :class="this.formBtnStyle">Войти</button>
  </form>
</template>

<script>
import { localStorageRead, localStorageWrite } from "./../../helpers/index";

export default {
  name: "LoginBlock",

  data() {
    return {
      emailData: "",
      passwordData: "",
    };
  },

  mounted() {
    const data = localStorageRead("moneyManagerLoginForm");
    this.emailData = data.email;
  },

  unmounted() {
    localStorageWrite("moneyManagerLoginForm", { email: this.emailData });
  },

  methods: {
    loginLogic(e) {
      console.log("login start", e, this.emailData, this.passwordData);
    },
  },

  computed: {
    getInputStyle: () =>
      "w-[100%] block border-[1px] border-solid border-[#202020] py-[8px] px-[4px] rounded-[5px]",
  },
};
</script>

<style scoped></style>
