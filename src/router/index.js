import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  }
]



// router.beforeEach(async (to)=>{
//   const token =localStorage.getItem('token')
//   if(!token && to.path !="/login"){
//     return "login"
//   }else if(token && to.path !="/login"){
//     if(router.getRoutes().length==2){
//       //添加路由
//       let routerData =await getRouterList()
//       routerData =routerData.data
//       console.log(routerData);
      
//       routerData.forEach((v)=>{
//         const routerObj={
//           path:v.name,
//           name:v.name,
//           meta:v.meta,
//           component: () => import(/* webpackChunkName: "[request]" */ `../views/${v.path}.vue`)
//         }
//         router.addRoute('home',routerObj)
//       })
//       router.replace(to.path)
      
//     }
//   }else if(token && to.path =="/login" )
//     return '/OrderView'
// })



const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
