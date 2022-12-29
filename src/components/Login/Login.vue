<template>
  <form class="flex flex-col" v-on:submit.prevent="(e) => loginLogic(e)">
    <label class="relative mb-[5px]">
      <input
        type="email"
        placeholder="Введите Email"
        :class="getInputStyle"
        class="mb-[20px]"
        v-model="emailData"
      />
      <span
        class="text-[12px] text-[#FF5555] absolute bottom-0 left-0"
        v-if="emailErrorData"
        >Введите корректный email
      </span>
    </label>

    <label class="relative mb-[5px]">
      <input
        type="text"
        placeholder="Введите Пароль"
        :class="getInputStyle"
        class="mb-[20px]"
        v-model="passwordData"
      />
      <span
        class="text-[12px] text-[#FF5555] absolute bottom-0 left-0"
        v-if="passwordErrorData"
        >Введите корректный пароль
      </span>
    </label>

    <label class="relative">
      <button
        type="submit"
        class="mb-[20px]"
        :class="this.formBtnStyle"
        :disabled="formBlocked"
      >
        Войти
      </button>
      <span
        class="text-[12px] text-[#FF5555] absolute bottom-0 left-0"
        v-if="userNotFound"
        >Пользователь не найден
      </span>
    </label>
  </form>
</template>

<script>
import { localStorageRead, localStorageWrite } from "./../../helpers/index";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import validator from "validator";

export default {
  name: "LoginBlock",

  data() {
    return {
      emailData: "",
      passwordData: "",

      emailErrorData: "",
      passwordErrorData: "",
      userNotFound: false,

      formBlocked: false,
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
    validation() {
      this.emailErrorData = !validator.isEmail(this.emailData);
      this.passwordErrorData = !validator.isStrongPassword(this.passwordData);

      return !this.emailErrorData && !this.passwordErrorData;
    },

    loginLogic() {
      if (this.validation() && !this.formBlocked) {
        this.formBlocked = true;
        signInWithEmailAndPassword(auth, this.emailData, this.passwordData)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            this.$router.push("/");
          })
          .catch((error) => {
            if (error.code === "auth/user-not-found") this.userNotFound = true;
          })
          .finally(() => {
            this.formBlocked = false;
          });
      }
    },
  },

  computed: {
    getInputStyle: () =>
      "w-[100%] block border-[1px] border-solid border-[#202020] py-[8px] px-[4px] rounded-[5px]",
  },
};
</script>

<style scoped></style>
