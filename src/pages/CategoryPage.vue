<template>
  <title-page title="Категории" subtitle="Работа с категориями" />

  <div class="xl:flex gap-[20px] items-start content-page">
    <category-form />
    <category-show />
  </div>
</template>

<script>
import titlePage from "@/components/TitlePage";
import categoryForm from "@/components/Category/CategoryForm";
import categoryShow from "@/components/Category/CategoryShow";

export default {
  name: "CategoryPage",
  components: {
    "title-page": titlePage,
    "category-form": categoryForm,
    "category-show": categoryShow,
  },
};
</script>

<style scoped></style>
