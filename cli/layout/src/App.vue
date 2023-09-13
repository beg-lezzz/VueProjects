<template>
  <div id="app">
    <header-component />
    <router-view />
    <footer-component />
  </div>
</template>

<script>

import store from '@/store'
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'App',
  components: { FooterComponent, HeaderComponent },
  store,
  data () {
    return {
      imgBanner: 'img/banner-blog.jpg',
      activeElem: 'TopComponent'
    }
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

.wrapper-art {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  //gap: 10px;
  margin: 50px 0;
}
</style>
