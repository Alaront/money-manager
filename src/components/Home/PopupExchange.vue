<template>
  <div
    class="fixed top-0 left-0 w-[100%] h-[100%] z-[3] flex items-center justify-center bg-[#242323bf]"
  >
    <div
      class="max-w-[700px] w-[50%] h-[80%] max-h-[500px] bg-[#dddddd] rounded-[20px] py-[30px] px-[20px] relative popup-exchange"
    >
      <h4
        class="text-center uppercase text-[19px] leading-[26px] font-medium text-[#202020] mb-[40px]"
      >
        Выбор валютных пар
      </h4>
      <div class="overflow-y-scroll max-h-[81%]">
        <div
          v-for="item in getPairExchange"
          v-bind:key="item.id"
          class="flex mb-[25px] items-center cursor-pointer max-w-max"
          @click="() => changePairStatus(item.id)"
        >
          <span
            class="block w-[20px] h-[20px] border-[2px] border-[#959292]"
            :class="{ 'exchange-ok': item.status }"
          ></span>
          <p class="ml-[10px]">{{ item.value }}</p>
        </div>
      </div>
      <span
        @click="() => dellCategory()"
        class="absolute bg-[url('./../assets/close-icon.svg')] bg-no-repeat bg-center bg-[length:17px_17px] bg-[#ababab] w-[35px] h-[35px] top-[12px] right-[10px] cursor-pointer rounded-[50%] box-border"
      ></span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "popup-exchange",

  data() {
    return {};
  },

  methods: {
    dellCategory() {
      this.$emit("close-popup");
    },

    ...mapMutations("setting", ["changePairStatus"]),
  },

  computed: {
    ...mapGetters("setting", ["getPairExchange"]),
  },
};
</script>
