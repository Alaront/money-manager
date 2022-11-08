<template>
  <div class="mb-[35px]">
    <h1 class="text-[36px] leading-[46px] font-bold text-[#202020]">
      {{ title }}
    </h1>
    <span class="text-[#898989] text-[14px]">{{ subtitle }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
      default: "-",
    },
    subtitle: {
      type: String,
      require: true,
      default: "-",
    },
  },
  name: "title-page",
};
</script>

<style scoped></style>
