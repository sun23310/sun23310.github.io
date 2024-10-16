import ArticleDetail from '@/views/ArticleDetail'
import Blog from '@/views/Blog'
import Collect from '@/views/Collect'
import Creat from '@/views/Creat'
import History from '@/views/History'
import Home from '@/views/Home'
import Hotchart from '@/views/Hotchart'
import Layout from '@/views/Layout'
import LoginForm from '@/views/LoginForm'
import Study from '@/views/Study'
import UserDetail from '@/views/UserDetail'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'Hotchart',
          component: Hotchart
        },
        {
          path: 'blog',
          component: Blog
        },
        {
          path: 'loginform',
          component: LoginForm
        },
        {
          path: 'creat',
          component: Creat
        },
        {
          path: 'collect',
          component: Collect
        },
        {
          path: 'history',
          component: History
        },
        {
          path: 'study',
          component: Study
        },
        {
          path: '/detail/:id',
          component: ArticleDetail
        },
        {
          path: '/userdetail/:id',
          component: UserDetail
        }
      ]
    }
  ]
})

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default router
