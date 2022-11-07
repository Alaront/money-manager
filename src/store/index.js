import { createStore } from "vuex";
import CashModule from "./modules/cash";

export default createStore({
  modules: {
    cash: CashModule,
  },
});
