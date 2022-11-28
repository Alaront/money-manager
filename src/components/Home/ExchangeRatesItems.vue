<template>
  <tr v-for="item in exchangesData" v-bind:key="item.id">
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
    return {};
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

      console.log("data.conversion_rates", data.conversion_rates);

      const allPairKeys = Object.keys(this.getPairExchange);
      console.log("allPairKeys", allPairKeys);

      allPairKeys.forEach(
        (item) => (this.getPairExchange[item] = data.conversion_rates[item])
      );

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
      const allPairKeys = Object.keys(this.getPairExchange);

      return allPairKeys.map((item, index) => ({
        id: index,
        pair: `RUB-${item}`,
        data: this.getValueCash * this.getPairExchange[item],
      }));
    },

    ...mapGetters("cash", ["getValueCash", "getPairExchange"]),
  },
};
</script>
