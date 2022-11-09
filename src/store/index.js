import { createStore } from "vuex";
import CashModule from "./modules/cash";
import Category from "@/store/modules/category";

export default createStore({
  modules: {
    cash: CashModule,
    category: Category,
  },
});
