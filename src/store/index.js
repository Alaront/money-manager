import { createStore } from "vuex";
import CashModule from "./modules/cash";
import Category from "@/store/modules/category";
import reports from "@/store/modules/reports";

export default createStore({
  modules: {
    cash: CashModule,
    category: Category,
    reports: reports,
  },
});
