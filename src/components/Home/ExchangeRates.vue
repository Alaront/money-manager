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
        .get(
          "https://v6.exchangerate-api.com/v6/f5abc80e7b49e13d843b7a90/latest/RUB",
          {}
        )
        .then((r) => r.data);

      this.exchange.USD = data.conversion_rates.USD;
      this.exchange.EUR = data.conversion_rates.EUR;
      this.exchange.JPY = data.conversion_rates.JPY;

      // var requestURL = "https://api.exchangerate.host/latest";
      // var request = new XMLHttpRequest();
      // request.open("GET", requestURL);
      // request.responseType = "json";
      // request.send();
      //
      // request.onload = function () {
      //   var response = request.response;
      //   console.log(response);
      // };
    },
  },

  computed: {
    exchangesData() {
      return [
        {
          id: 1,
          pair: "RUB-USD",
          data: this.getValueCash * this.exchange.USD,
        },
        {
          id: 2,
          pair: "RUB-EUR",
          data: this.getValueCash * this.exchange.EUR,
        },
        {
          id: 3,
          pair: "RUB-JPY",
          data: this.getValueCash * this.exchange.JPY,
        },
      ];
    },

    ...mapGetters("cash", ["getValueCash"]),
  },
};
</script>

<style scoped lang="sass"></style>
