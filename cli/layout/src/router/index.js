import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import OurProjects from '@/views/OurProjects.vue'
import Page404 from '@/views/Page404.vue'
import Blog from '@/views/Blog.vue'
import BlogComponent from '@/components/blog/BlogComponent.vue'
import BlogDetailsComponent from '@/components/blog/BlogDetailsComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/blog',
    component: Blog,
    children: [
      {
        path: '',
        name: 'blog',
        component: BlogComponent
      },
      {
        path: 'article/:id',
        name: 'article',
        component: BlogDetailsComponent
      }
    ]
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
  // mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
