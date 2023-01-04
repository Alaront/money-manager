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
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/firebase";
import { getDataByRef } from "@/firebase/helpers";

export default {
  name: "user-cash",

  data() {
    return {
      valueCash: 0,
    };
  },

  mounted() {
    this.getValueCashData();
  },

  methods: {
    changeCashStore(number) {
      const user = auth.currentUser;

      const cashRef = doc(db, "cash", user.uid);
      updateDoc(cashRef, {
        valueCash: number,
      });
    },

    async getValueCashData() {
      const user = auth.currentUser;
      const cashRef = doc(db, "cash", user.uid);

      const data = await getDataByRef(cashRef);
      this.valueCash = data.valueCash;
    },
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
    },
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
