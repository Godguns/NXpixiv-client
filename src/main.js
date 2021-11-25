import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import { createRouter,createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia';
//import { Message} from 'element-ui';
const router =createRouter({
    history: createWebHashHistory(),
    routes, 
  })
  console.log(process.env.NODE_ENV)
createApp(App).use(router).use(createPinia()).mount('#app')
