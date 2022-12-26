<template>
  <form>
    <form class="flex flex-col" v-on:submit.prevent="(e) => signUpLogic(e)">
      <input
        type="name"
        placeholder="Введите имя"
        :class="getInputStyle"
        class="mb-[20px]"
        v-model="nameData"
      />
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
      <input
        type="text"
        placeholder="Повторите Пароль"
        :class="getInputStyle"
        class="mb-[20px]"
        v-model="passwordDataTwo"
      />

      <button type="submit" :class="this.formBtnStyle">Регистрация</button>
    </form>
  </form>
</template>

<script>
import { localStorageRead, localStorageWrite } from "@/helpers";

export default {
  name: "LoginUpBlock",

  data() {
    return {
      nameData: "",
      emailData: "",
      passwordData: "",
      passwordDataTwo: "",
    };
  },

  mounted() {
    const data = localStorageRead("moneyManagerSignUpForm");
    this.nameData = data.name;
    this.emailData = data.email;
  },

  unmounted() {
    localStorageWrite("moneyManagerSignUpForm", {
      email: this.emailData,
      name: this.nameData,
    });
  },

  computed: {
    getInputStyle: () =>
      "w-[100%] block border-[1px] border-solid border-[#202020] py-[8px] px-[4px] rounded-[5px]",
  },
};
</script>

<style scoped></style>
