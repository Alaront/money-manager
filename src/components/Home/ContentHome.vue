<template>
  <div class="block xl:flex gap-[20px] items-start">
    <user-cash />

    <exchange-rates />
  </div>
</template>

<script>
import userCash from "@/components/Home/userCash";
import exchangeRates from "@/components/Home/ExchangeRates";

export default {
  name: "home-content",

  components: {
    "user-cash": userCash,
    "exchange-rates": exchangeRates,
  },
};
</script>

<style scoped></style>
