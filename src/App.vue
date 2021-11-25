<template>
  <router-view></router-view>
</template>

<script>
import * as api from '../src/request/api'
export default {
  name: 'App',
  components: {
  },
  mounted(){
    this.getList();
  },
  methods: {
     getList() {
       let data = "请求参数"
        api.getListAPI(data).then(res => {
          //数据处理
          console.log(res)
        }).catch(err => console.log(err))
      }
    }  
}
</script>

<style>
</style>
