<template>
  <title-page title="Статистика" subtitle="Статистика трат и доходов" />
  <div class="">
    <last-reports />
  </div>
</template>

<script>
import titlePage from "../components/TitlePage";
import lastReports from "@/components/Statistics/LastReports";

export default {
  name: "StatisticsPage",
  components: {
    "title-page": titlePage,
    "last-reports": lastReports,
  },
};
</script>

<style scoped></style>
