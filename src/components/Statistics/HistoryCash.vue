<template>
  <div class="bg-[#FFFFFF] p-[32px] rounded-[12px] box-content mb-[40px]">
    <h2 class="text-[20px] leading-[26px] font-medium text-[#202020] mb-[20px]">
      График смены средств
    </h2>
    <div>
      <Line
        :chart-options="chartOptions"
        :chart-data="chartData"
        chart-id="chartId"
        dataset-id-key="datasetIdKey"
        css-classes="history-cash-chart"
      />
    </div>
  </div>
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

import { mapGetters } from "vuex";

export default {
  name: "history-cash",
  components: {
    Line: Line,
  },
  computed: {
    chartData() {
      return {
        labels: this.getHistoryChangeCashDate,
        datasets: [
          {
            label: "График",
            data: this.getHistoryChangeCash,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      };
    },
    chartOptions() {
      return {
        responsive: true,
      };
    },
    ...mapGetters("cash", ["getHistoryChangeCash", "getHistoryChangeCashDate"]),
  },
};
</script>

<style lang="sass">
canvas
  margin: 0 auto
</style>
