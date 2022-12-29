<template>
  <header>
    <div class="flex items-center mb-[40px]">
      <logo-svg class="w-[30px] h-[30px] mr-[10px]" />
      <h1 class="text-[30px] leading-[38px] text-[#2E2C34] font-bold">
        Money manager
      </h1>
    </div>
    <nav>
      <ul>
        <li class="relative">
          <router-link
            class="block hover:bg-[#775da670] header-btn font-medium text-[16px] leading-[19px] py-[16px] pr-[12px] rounded-[12px] text-[#202020] pl-[48px] after:absolute after:bg-[url('../assets/header/home-icon.svg')] after:bg-cover after:w-[24px] after:h-[24px] after:top-[13px] after:left-[12px]"
            to="/"
            >Home</router-link
          >
        </li>
        <li class="relative">
          <router-link
            class="block hover:bg-[#775da670] header-btn font-medium text-[16px] leading-[19px] py-[16px] pr-[12px] rounded-[12px] text-[#202020] pl-[48px] after:absolute after:bg-[url('../assets/header/category-icon.svg')] after:bg-cover after:w-[24px] after:h-[24px] after:top-[13px] after:left-[12px]"
            to="/category"
            >Сategory</router-link
          >
        </li>
        <li class="relative">
          <router-link
            class="block hover:bg-[#775da670] header-btn font-medium text-[16px] leading-[19px] py-[16px] pr-[12px] rounded-[12px] text-[#202020] pl-[48px] after:absolute after:bg-[url('../assets/header/entry-icon.svg')] after:bg-cover after:w-[24px] after:h-[24px] after:top-[13px] after:left-[12px]"
            to="/changeCash"
            >Новая запись</router-link
          >
        </li>
        <li class="relative">
          <router-link
            class="block hover:bg-[#775da670] header-btn font-medium text-[16px] leading-[19px] py-[16px] pr-[12px] rounded-[12px] text-[#202020] pl-[48px] after:absolute after:bg-[url('../assets/header/statistics-icon.svg')] after:bg-contain after:w-[20px] after:h-[20px] after:top-[13px] after:left-[18px]"
            to="/statistics"
            >Статистика</router-link
          >
        </li>
        <li class="relative">
          <span
            @click="escape"
            class="block cursor-pointer hover:bg-[#775da670] header-btn font-medium text-[16px] leading-[19px] py-[16px] pr-[12px] rounded-[12px] text-[#202020] pl-[48px] after:absolute after:bg-[url('../assets/header/home-exit.png')] after:bg-contain after:w-[20px] after:h-[20px] after:top-[13px] after:left-[18px]"
            to="/statistics"
            >Выход</span
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import LogoSvg from "@/components/LogoSvg";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

export default {
  name: "HeaderComponent",
  components: {
    "logo-svg": LogoSvg,
  },

  methods: {
    escape() {
      signOut(auth)
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
