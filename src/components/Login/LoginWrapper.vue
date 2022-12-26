<template>
  <div class="">
    <div class="flex border-b-[1px] border-solid border-[#000000] mb-[20px]">
      <span
        class="mr-[30px] py-[5px] px-[10px] box-border cursor-pointer"
        :class="{ 'font-bold': isLogin }"
        v-on:click="isLogin = true"
        >Вход</span
      >
      <span
        class="py-[5px] px-[10px] box-border cursor-pointer"
        v-on:click="isLogin = false"
        :class="{ 'font-bold': !isLogin }"
        >Регистрация</span
      >
    </div>
    <login-block v-if="isLogin" />
    <LoginUp-block v-if="!isLogin" />
  </div>
</template>

<script>
import LoginBlock from "./Login";
import LoginUpBlock from "./SignUp";

export default {
  name: "LoginWrapper",
  components: {
    "login-block": LoginBlock,
    "LoginUp-block": LoginUpBlock,
  },
  data() {
    return {
      isLogin: true,
    };
  },
};
</script>

<style scoped></style>
