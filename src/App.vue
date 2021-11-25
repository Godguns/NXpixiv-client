<template>
<el-button>I am ElButton</el-button>
  <router-view></router-view>
</template>

<script>
import * as api from '../src/request/api'
import { ElButton } from 'element-plus'
export default {
  name: 'App',
components: { ElButton },
  mounted(){
    this.getList();
  },
  methods: {
     getList() {
       let data = {
	user_name:"小艾5",
	password:"123456"
}
        api.postFormAPI(data).then(res => {
          //数据处理
          console.log(res)
        }).catch(err => console.log(err))
      }
    }  
}
</script>

<style>
</style>
