import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
// import Blog from '@/views/Blog.vue'
import OurProjects from '@/views/OurProjects.vue'
import Page404 from '@/views/Page404.vue'
import BlogAllComponent from '@/components/blog/BlogAllComponent.vue'
import Articles from '@/components/Articles.vue'
import TestRouterChild from '@/views/TestRouterChild.vue'
import Blog from '@/views/Blog.vue'

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
    component: Blog,
    children: [
      {
        path: 'article/:id',
        name: 'article',
        component: TestRouterChild
      },
      {
        path: '',
        component: BlogAllComponent
      }
    ]
  },
  {
    path: '/project',
    name: 'project',
    component: OurProjects
  },
  {
    path: '/test',
    name: 'test',
    component: TestRouterChild,
    children: [
      {
        path: 'blog',
        component: Articles
      },
      {
        path: '',
        component: BlogAllComponent
      }
    ]
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
