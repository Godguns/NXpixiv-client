// otherState.js
import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "otherState",
  state: ()=> ({
    count: 5
  }),
});
