import { createStore } from "vuex";
import Setting from "./modules/setting";

export default createStore({
  modules: {
    setting: Setting,
  },
});
