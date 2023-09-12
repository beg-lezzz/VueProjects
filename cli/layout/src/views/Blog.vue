<template>
  <div class="wrapper">
    <TopBannerComponent :imgBanner="imgBanner" :textLabel="textLabel" :crumbs="crumbs" />
    <BlogListComponent />
  </div>
</template>

<script>
import BlogListComponent from '@/components/blog/BlogListComponent.vue'
import TopBannerComponent from '@/components/TopBannerComponent.vue'

export default {
  name: 'Home',
  data () {
    return {
      imgBanner: 'img/our-projects.png',
      textLabel: 'Articles & News',
      crumbs: 'Home / Blog',
      tags: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area']
    }
  },
  components: { TopBannerComponent, BlogListComponent }
}
</script>

<style scoped lang="scss">

</style>
