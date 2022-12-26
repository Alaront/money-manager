<template>
  <div class="bg-[#FFFFFF] w-[90%] p-[32px] xl:w-[40%] rounded-[12px] mx-auto">
    <h1
      class="text-[23px] leading-[26px] font-medium text-[#202020] mb-[20px] text-center"
    >
      Войдите или зарегистрируйтесь
    </h1>

    <login-wrapper />
  </div>
</template>

<script>
import LoginWrapper from "@/components/Login/LoginWrapper";

export default {
  name: "LoginPage",
  components: {
    "login-wrapper": LoginWrapper,
  },
};
</script>

<style scoped></style>
