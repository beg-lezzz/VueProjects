<template>
  <div class="wrapper">
    <top-component />
    <follow-project />
    <counter-achievements />
    <articles />
  </div>
</template>

<script>
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
