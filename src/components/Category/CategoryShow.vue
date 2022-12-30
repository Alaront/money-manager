<template>
  <div
    class="grow-[1] bg-[#FFFFFF] p-[32px] rounded-[12px] box-content flex flex-wrap gap-[10px]"
  >
    <span
      v-for="[id, name] of Object.entries(allCategory)"
      v-bind:key="id"
      class="py-[10px] pl-[13px] pr-[35px] rounded-[25px] bg-[#d9d6d6] box-border text-[#323131] uppercase text-[15px] relative leading-[20px]"
    >
      {{ name }}
      <span
        @click="() => dellCategory(id)"
        class="absolute bg-[url('./../assets/close-icon.svg')] bg-no-repeat bg-center bg-[length:7px_7px] bg-[#ababab] w-[15px] h-[15px] top-[12px] right-[10px] cursor-pointer rounded-[50%] box-border"
      ></span>
    </span>
  </div>
</template>

<script>
import { doc, onSnapshot, updateDoc, deleteField } from "firebase/firestore";
import { db, auth } from "@/firebase";

export default {
  name: "CategoryShow",
  data() {
    return {
      allCategory: [],
    };
  },
  methods: {
    dellCategory(id) {
      console.log(id);
      const user = auth.currentUser;

      updateDoc(doc(db, "category", user.uid), {
        [id]: deleteField(),
      });
    },
  },
  mounted() {
    const user = auth.currentUser;

    onSnapshot(doc(db, "category", user.uid), (doc) => {
      this.allCategory = doc.data();
    });
  },
};
</script>

<style scoped></style>
