<template>
  <title-page title="Статистика" subtitle="Статистика трат и доходов" />
  <div class="">
    <history-cash />
    <last-reports />
  </div>
</template>

<script>
import titlePage from "../components/TitlePage";
import lastReports from "@/components/Statistics/LastReports";
import historyCash from "@/components/Statistics/HistoryCash";

export default {
  name: "StatisticsPage",
  components: {
    "title-page": titlePage,
    "last-reports": lastReports,
    "history-cash": historyCash,
  },
};
</script>

<style lang="sass">
canvas
  width: 100%
  max-height: 400px
</style>
