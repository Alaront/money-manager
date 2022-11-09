<template>
  <div class="w-[30%] bg-[#FFFFFF] p-[32px] rounded-[12px] box-content">
    <form v-on:submit.stop.prevent="makeNewCategory">
      <p class="font-[20px] leading-[25px] font-medium mb-[30px]">
        Создание новой категории
      </p>
      <label class="flex flex-col text-[#898989] text-[14px] mb-[50px]">
        Название
        <input
          class="border-b-[2px] border-b-[#202020] border-solid text-[20px] py-[5px] px-[10px] text-[#202020] outline-none mt-[5px]"
          type="text"
          v-model="categoriesName"
        />
      </label>
      <button
        class="bg-[#775da6] py-[10px] text-center text-[#ffffff] font-medium rounded-[12px] w-[100%] block"
      >
        Добавить
      </button>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "CategoryForm",
  data() {
    return {
      categoriesName: "",
    };
  },
  methods: {
    makeNewCategory() {
      this.addNewCategory({
        id: this.getLastId + 1,
        name: this.categoriesName,
      });

      this.changeLastId();

      this.categoriesName = "";
    },

    ...mapMutations("category", ["addNewCategory", "changeLastId"]),
  },

  computed: {
    ...mapGetters("category", ["getLastId"]),
  },
};
</script>

<style scoped></style>
