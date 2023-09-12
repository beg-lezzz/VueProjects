<template>
  <div class="wrapper">
    <TopBannerComponent :imgBanner="imgBanner" :textLabel="textLabel" :crumbs="crumbs" />
    <tags-component :tags="tags" class="center"/>
    <projects-list-component class="center"/>
  </div>
</template>

<script>
import TopBannerComponent from '@/components/TopBannerComponent.vue'
import TagsComponent from '@/components/TagsComponent.vue'
import ProjectsListComponent from '@/components/ProjectsListComponent.vue'

export default {
  name: 'OurProjects',
  data () {
    return {
      imgBanner: 'img/our-projects.png',
      textLabel: 'Our Projects',
      crumbs: 'Home / Project',
      tags: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area']
    }
  },
  components: { ProjectsListComponent, TagsComponent, TopBannerComponent }
}
</script>

<style scoped lang="scss">
.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}
</style>
