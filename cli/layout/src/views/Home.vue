<template>
  <div class="wrapper">
    <top-component />
    <follow-project />
    <counter-achievements />
    <Articles />
  </div>
</template>

<script>
import TopComponent from '@/components/banner/TopComponent.vue'
import FollowProject from '@/components/homePageElements/FollowProject.vue'
import CounterAchievements from '@/components/homePageElements/CounterAchievements.vue'
import Articles from '@/components/homePageElements/Articles.vue'

export default {
  name: 'Home',
  components: {
    Articles,
    CounterAchievements,
    FollowProject,
    TopComponent
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
