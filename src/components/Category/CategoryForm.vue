<template>
  <div
    class="xl:w-[30%] bg-[#FFFFFF] p-[32px] rounded-[12px] box-content mb-[20px] xl:mb-0"
  >
    <form v-on:submit.stop.prevent="makeNewCategory">
      <p class="font-[20px] leading-[25px] font-medium mb-[30px]">
        Создание новой категории
      </p>
      <label class="flex flex-col text-[#898989] text-[14px] mb-[50px]">
        Название
        <input
          class="mt-[5px]"
          :class="this.inputBottomLineStyle"
          type="text"
          v-model="categoriesName"
        />
      </label>
      <button :class="this.formBtnStyle">Добавить</button>
    </form>
  </div>
</template>

<script>
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebase";
import { uid } from "uid";

export default {
  name: "CategoryForm",
  data() {
    return {
      categoriesName: "",
    };
  },
  methods: {
    makeNewCategory() {
      const user = auth.currentUser;

      if (user.uid) {
        setDoc(
          doc(db, "category", user.uid),
          { [uid(16)]: this.categoriesName },
          { merge: true }
        );

        this.categoriesName = "";
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style scoped></style>
