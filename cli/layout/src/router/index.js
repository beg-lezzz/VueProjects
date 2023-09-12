import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
// import Blog from '@/views/Blog.vue'
import OurProjects from '@/views/OurProjects.vue'
import Page404 from '@/views/Page404.vue'
import BlogAllComponent from '@/components/blog/BlogAllComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogAllComponent
  },
  {
    path: '/project',
    name: 'project',
    component: OurProjects
  },
  {
    path: '*',
    name: 'notfound',
    component: Page404
  }
]

const router = new VueRouter({
  routes
})

export default router
