<template>
  <div id="app">
    <HeaderComponent @MenuElement="chooseElement" />
    <div class="products center">
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
    </div>
    <component :is="activeElem" :imgBanner="imgBanner"/>
    <FooterComponent />
<!--    <TopBannerComponent :imgBanner="imgBanner"/>-->
<!--    <TopComponent />-->
<!--    <BlogListComponent class="center"/>-->
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import TopComponent from '@/components/TopComponent.vue'
import BlogListComponent from '@/components/BlogListComponent.vue'
import TopBannerComponent from './components/TopBannerComponent.vue'
import FooterComponent from '@/components/img/FooterComponent.vue'
import ProductDetails from '@/components/ProductDetails.vue'
// import TopComponent from '@/components/TopComponent.vue'

export default {
  name: 'App',
  methods: {
    chooseElement (nameElement) {
      if (nameElement === 'Home') {
        this.activeElem = 'TopBannerComponent'
      } else if (nameElement === 'Project') {
        this.activeElem = 'TopComponent'
      } else if (nameElement === 'Blog') {
        this.activeElem = 'BlogListComponent'
      }
      console.log(`app ${nameElement}`)
    }
  },
  data () {
    return {
      imgBanner: 'img/banner-blog.jpg',
      activeElem: 'TopComponent'
    }
  },
  components: {
    ProductDetails,
    FooterComponent,
    TopBannerComponent,
    HeaderComponent,
    TopComponent,
    BlogListComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  transition: all .3s ease;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

.products {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 50px 0;
}
</style>
