import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import GameStart from '@/components/GameStart'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Register from '@/components/user/Register'
import GameHill from '@/components/hill/GameHill'
Vue.use(ElementUI)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GameStart',
      component: GameStart
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path:'/gamehill',
      name:'gamehill',
      component:GameHill
    }
    
  ]
})
