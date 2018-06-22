import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import About from '@/components/About'
import Service from '@/components/Service'
import Project from '@/components/Project'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/home',
      component: HomePage
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/service',
      component: Service
    },
    {
      path: '/project',
      component: Project
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
