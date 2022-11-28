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
      <exchange-rates-items />
    </table>
  </div>
</template>

<script>
import ExchangeRatesItems from "@/components/Home/ExchangeRatesItems";

export default {
  name: "exchange-rates",

  components: {
    "exchange-rates-items": ExchangeRatesItems,
  },
};
</script>

<style scoped lang="sass"></style>
