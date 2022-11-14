<template>
  <div
    class="grow-[1] bg-[#FFFFFF] p-[32px] rounded-[12px] box-content flex flex-wrap gap-[10px]"
  >
    <span
      v-for="item in getAllCategory"
      v-bind:key="item.id"
      class="py-[10px] pl-[13px] pr-[35px] rounded-[25px] bg-[#d9d6d6] box-border text-[#323131] uppercase text-[15px] relative leading-[20px]"
    >
      {{ item.name }}
      <span
        @click="() => dellCategory(item.id)"
        class="absolute bg-[url('./../assets/close-icon.svg')] bg-no-repeat bg-center bg-[length:7px_7px] bg-[#ababab] w-[15px] h-[15px] top-[12px] right-[10px] cursor-pointer rounded-[50%] box-border"
      ></span>
    </span>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CategoryShow",
  methods: {
    ...mapMutations("category", ["dellCategory"]),
  },
  computed: {
    ...mapGetters("category", ["getAllCategory"]),
  },
};
</script>

<style scoped></style>
