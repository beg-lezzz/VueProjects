<template>
  <div class="wrapper">
    <TopBannerComponent :imgBanner="imgBanner" :textLabel="textLabel" :crumbs="crumbs" />
    <router-view />
  </div>

</template>

<script>

import TopBannerComponent from '@/components/banner/TopBannerComponent.vue'

export default {
  name: 'Home',
  components: { TopBannerComponent },
  data () {
    return {
      imgBanner: 'img/our-projects.png',
      textLabel: 'Articles & News',
      crumbs: 'Home / Blog',
      tags: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area']
    }
  }
  // components: { TopBannerComponent, BlogListComponent }
}
</script>

<style scoped lang="scss">

</style>
