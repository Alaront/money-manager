<template>
  <div class="flex-grow-[1] bg-[#FFFFFF] p-[32px] rounded-[12px] box-content">
    <h2 class="text-[23px] leading-[26px] font-medium text-[#202020] mb-[20px]">
      Ваш кошелёк в других валютных парах (ЦБ РФ)
    </h2>
    <table class="table-info">
      <tr>
        <th>Валютная пара</th>
        <th>Ваши средства в ₽</th>
        <th>Сумма в другой валюте</th>
      </tr>
      <tr v-for="item in exchangesData" v-bind:key="item.id">
        <td>{{ item.pair }}</td>
        <td>{{ getValueCash }}</td>
        <td>{{ item.data.toFixed(2) }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "exchange-rates",

  data() {
    return {
      exchange: {
        USD: 1,
        EUR: 1,
        JPY: 1,
      },
    };
  },

  mounted() {
    this.getExchangeRates();
  },

  methods: {
    async getExchangeRates() {
      let data = await axios
        .get("https://cdn.cur.su/api/cbr.json", {})
        .then((r) => r.data);

      console.log(data);
      this.exchange.USD = data.rates.RUB;

      this.exchange.EUR = data.rates.EUR / data.rates.RUB;

      this.exchange.JPY = data.rates.JPY / data.rates.RUB;

      console.log(this.exchange.EUR);
    },
  },

  computed: {
    exchangesData() {
      return [
        {
          id: 1,
          pair: "RUBUSD",
          data: this.getValueCash / this.exchange.USD,
        },
        {
          id: 2,
          pair: "EUR",
          data: this.getValueCash * this.exchange.EUR,
        },
        {
          id: 3,
          pair: "JPY",
          data: this.getValueCash * this.exchange.JPY,
        },
      ];
    },

    ...mapGetters("cash", ["getValueCash"]),
  },
};
</script>

<style scoped lang="sass"></style>
