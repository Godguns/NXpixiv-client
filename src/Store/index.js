// 修改 store.js
import { defineStore } from "pinia";
export const useStore = defineStore({
  id: "myGlobalState",
  state: ()=> ({
    count: '大菠萝测试'
  }),
  getters: {
    // 一个基本的 Getter： 计算 count 的平方
    // 使用参数
    countPow2(state) {
      return state.count ** 2;
    },
    countPow2Getter() {
      return this.countPow2;
    }
  }
});

