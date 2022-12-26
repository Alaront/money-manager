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
