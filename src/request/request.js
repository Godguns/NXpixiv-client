/****   request.js   ****/
// 导入axios
import axios from 'axios'
import cookie from 'js-cookie';

//1. 创建新的axios实例，
const service = axios.create({
  // 公共接口--这里注意后面会讲
   baseURL: process.env.VUE_APP_BASE_API,
  // 超时时间 单位是ms，这里设置了3s的超时时间
  timeout: 5 * 1000
})
// 2.请求拦截器
service.interceptors.request.use(config => {
  //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
   // eslint-disable-next-line no-self-assign
   config.data = config.data; //数据转化,也可以使用qs转换
   config.headers = {
     'Content-Type':'application/json' //配置请求头
   }
   //注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，推荐js-cookie
   const token = getCookie ('名称');//这里取token之前，你肯定需要先拿到token,存一下
   if(token){
      config.params = {'token':token} //如果要求携带在参数中
      config.headers.token= token; //如果要求携带在请求头中
      config.headers.authorization = token
    }
  return config
}, error => {
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        const res = response.data
        if (response.config.responseType !== 'blob') {
            if (res.code !== 0) {
                this.$Message({
                    message: res.msg || 'Error',
                    type: 'error',
                    duration: 3 * 1000,
                })
                return Promise.reject(new Error(res.msg || 'Error'))
            } else {
                return res
            }
        }
        return res
    },
    (error) => {
        let res = error.response
        if (error.response) {
            if (res.status == 401) {
                console.log("响应401")
                // 登录过期
      cookie.remove('jwt');
      localStorage.removeItem('user');
               // Vue.prototype.parentFns.portal_logout()
            }
        }
        return Promise.reject(error)
    }
)
function getCookie(name){
  var strcookie = document.cookie;//获取cookie字符串
  var arrcookie = strcookie.split("; ");//分割
  //遍历匹配
  for ( var i = 0; i < arrcookie.length; i++) {
      var arr = arrcookie[i].split("=");
      if (arr[0] == name){
          return arr[1];
      }
  }
  return "";
}
//4.导入文件
export default service

