<template>
  <form>
    <form class="flex flex-col" v-on:submit.prevent="(e) => signUpLogic(e)">
      <input
        type="name"
        placeholder="Введите имя"
        :class="getInputStyle"
        class="mb-[25px]"
        v-model="nameData"
      />

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
          >Email не подходит или уже используется, пример test@mail.com
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
          >Пароль не подходит, пример qwertyW1@
        </span>
      </label>

      <label class="relative mb-[15px]">
        <input
          type="text"
          placeholder="Повторите Пароль"
          :class="getInputStyle"
          class="mb-[20px]"
          v-model="passwordDataTwo"
        />
        <span
          class="text-[12px] text-[#FF5555] absolute bottom-0 left-0"
          v-if="!passwordErrorDataTwo"
          >Пароли не совпадают
        </span>
      </label>

      <button type="submit" :class="this.formBtnStyle" :disabled="formBlocked">
        Регистрация
      </button>
    </form>
  </form>
</template>

<script>
import { localStorageRead, localStorageWrite } from "@/helpers";
import { auth, db } from "@/firebase";
import validator from "validator";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default {
  name: "LoginUpBlock",

  data() {
    return {
      nameData: "",
      emailData: "",
      passwordData: "",
      passwordDataTwo: "",

      emailErrorData: false,
      passwordErrorData: false,
      passwordErrorDataTwo: true,

      formBlocked: false,
    };
  },

  mounted() {
    const data = localStorageRead("moneyManagerSignUpForm");
    this.nameData = data.name;
    this.emailData = data.email;
  },

  methods: {
    validation() {
      console.log(this.passwordData);
      this.emailErrorData = !validator.isEmail(this.emailData);
      this.passwordErrorData = !validator.isStrongPassword(this.passwordData);
      this.passwordErrorDataTwo = this.passwordData === this.passwordDataTwo;

      return (
        !this.emailErrorData &&
        !this.passwordErrorData &&
        this.passwordErrorDataTwo
      );
    },

    signUpLogic() {
      if (this.validation() && !this.formBlocked) {
        this.formBlocked = true;
        createUserWithEmailAndPassword(auth, this.emailData, this.passwordData)
          .then((userCredential) => userCredential.user.uid)
          .then((userId) => {
            console.log("userId", userId);
            setDoc(doc(db, "category", userId), {
              0: "Учёба",
              1: "Медицина",
              2: "Еда",
            });
          })
          .then(() => {
            this.$router.push("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("made error", errorMessage, "###", errorCode);
            if (errorCode === "auth/email-already-in-use")
              this.emailErrorData = true;
          })
          .finally(() => {
            this.formBlocked = false;
          });
      }
    },
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
