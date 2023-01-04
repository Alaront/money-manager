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

import { auth, db } from "@/firebase";
import { doc } from "firebase/firestore";
import { getDataByRef } from "@/firebase/helpers";

export default {
  name: "history-cash",

  components: {
    Line: Line,
  },

  data() {
    return {
      historyChangeCash: [],
      historyChangeCashDate: [],
    };
  },

  mounted() {
    this.getHistoryChangeCash();
    this.getHistoryChangeCashDate();
  },

  methods: {
    async getHistoryChangeCash() {
      const user = auth.currentUser;
      const cashRef = doc(db, "cash", user.uid);

      const data = await getDataByRef(cashRef);
      this.historyChangeCash = data.historyChangeCash;
    },

    async getHistoryChangeCashDate() {
      const user = auth.currentUser;
      const cashRef = doc(db, "cash", user.uid);

      const data = await getDataByRef(cashRef);
      this.historyChangeCashDate = data.historyChangeCashDate;
    },
  },

  computed: {
    chartData() {
      return {
        labels: this.historyChangeCashDate,
        datasets: [
          {
            label: "График",
            data: this.historyChangeCash,
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
  },
};
</script>

<style lang="sass">
canvas
  margin: 0 auto
</style>
