<template>
  <div class="wrapper">
    <header-component />
    <top-component />
    <follow-project />
    <counter-achievements />
    <articles />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import TopComponent from '@/components/TopComponent.vue'
import FollowProject from '@/components/FollowProject.vue'
import CounterAchievements from '@/components/CounterAchievements.vue'
import Articles from '@/components/Articles.vue'

export default {
  name: 'Home',
  components: {
    Articles,
    CounterAchievements,
    FollowProject,
    TopComponent,
    FooterComponent,
    HeaderComponent
  },
  data () {
    return {
      imgBanner: 'img/banner-blog.jpg'
    }
  }
}
</script>

<style scoped lang="scss">

</style>
