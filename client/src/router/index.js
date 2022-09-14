import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
  ]
})

// router.beforeEach((to, from) => {
//   if(!localStorage.getItem("access_token")) {
//     return { path: "/login" }
//   } else if (localStorage.getItem("access_token") && to.name === "login" || localStorage.getItem("access_token") && to.name === "register") {
//     return { path: "/" }
//   } else {
//     return { path: "/" }
//   }
// })

export default router
