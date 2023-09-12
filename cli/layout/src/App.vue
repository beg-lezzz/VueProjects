<template>
  <div id="app">
    <header-component />
    <BlogAllComponent />
<!--    <router-view />-->
    <footer-component />
  </div>
</template>

<script>

import store from '@/store'
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import BlogAllComponent from '@/components/blog/BlogAllComponent.vue'

export default {
  name: 'App',
  components: { BlogAllComponent, FooterComponent, HeaderComponent },
  store,
  data () {
    return {
      imgBanner: 'img/banner-blog.jpg',
      activeElem: 'TopComponent',
      blog:
        {
          id: 1,
          header: '#1 Let’s Get Solution for Building Construction Work',
          img: 'img/blog-1.png',
          date: '26 December,2022',
          crumbs: 'Interior / Home / Decore',
          text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.\n' +
            '\n' +
            'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
          tags: ['Bedroom', 'Architecture', 'Kitchen Planning'],
          detailsHeader: '#1 Design sprints are great',
          detailsText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n\n' +
            '1. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
            '\n' +
            '2. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n' +
            '3. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.\n',
          detailsImg: 'img/details-sub.png',
          detailsSubText: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
        }
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
