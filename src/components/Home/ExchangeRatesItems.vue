<template>
  <tr v-for="item in exchangesRatesData" v-bind:key="item.id">
    <td>{{ item.pair }}</td>
    <td>{{ getValueCash }}</td>
    <td>{{ item.data.toFixed(2) }}</td>
  </tr>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "exchange-rates-items",

  data() {
    return {
      dataExchangeRates: [],
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

      this.dataExchangeRates = data.conversion_rates;

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

    getExchangeByKey(key) {
      return Object.keys(this.dataExchangeRates).length > 0
        ? this.dataExchangeRates[key]
        : 1;
    },
  },

  computed: {
    exchangesRatesData() {
      const allPairKeys = this.getPairExchange;

      const newAllPai = allPairKeys.map((item) => ({
        id: item.id,
        pair: item.value,
        status: item.status,
        data: this.getValueCash * this.getExchangeByKey(item.key),
      }));

      return newAllPai.filter((item) => item.status);
    },

    ...mapGetters("cash", ["getValueCash", "getPairExchange"]),
  },
};
</script>
