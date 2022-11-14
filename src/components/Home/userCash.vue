<template>
  <div
    class="w-[100%] mb-[20px] box-border xl:mb-0 xl:w-[30%] bg-[#FFFFFF] p-[32px] rounded-[12px] relative after:absolute after:bg-[url('../assets/home/balance-wallet.svg')] after:bg-cover after:w-[34px] after:h-[34px] after:top-[23px] after:right-[23px]"
  >
    <h2 class="text-[23px] leading-[26px] font-medium text-[#202020] mb-[20px]">
      Ваш кошелёк
    </h2>
    <label class="relative">
      <input
        type="text"
        v-model="valueCash"
        class="w-[100%] mb-[15px] bg-[#ffffff] px-[15px] box-border py-[10px] text-[24px] font-bold leading-[35px] text-[#202020] outline-none border-b-[2px] border-b-[#202020] border-solid"
      />
    </label>
    <span class="text-[#898989] text-[14px]"
      >Сумма на кошельке (нажмите, чтобы изменить)</span
    >
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "user-cash",

  data() {
    return {
      valueCash: 0,
    };
  },

  mounted() {
    this.valueCash = this.getValueCash;
  },

  methods: {
    ...mapMutations("cash", ["changeCashStore"]),
  },

  watch: {
    valueCash: function (newCash) {
      if (typeof newCash === "number") return;

      let str = "";
      newCash.split("").forEach((c) => {
        if (/[0-9]/gi.test(c)) str += c;
      });

      this.valueCash = Number(str);
      this.changeCashStore(Number(str));
      console.log("this.valueCash", this.getValueCash);
    },
  },

  computed: {
    ...mapGetters("cash", ["getValueCash"]),
  },
};
</script>

<style scoped>
label:before {
  content: " ₽";
  position: absolute;
  top: 6px;
  right: 6px;
}
</style>
