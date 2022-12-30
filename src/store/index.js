import { createStore } from "vuex";
import CashModule from "./modules/cash";
import reports from "@/store/modules/reports";

export default createStore({
  modules: {
    cash: CashModule,
    reports: reports,
  },
});
