<template>
  <div class='wrapper'>
    <ProjectComponent v-for="project in projects" :key="project.id" :project="project"/>
  </div>
</template>

<script>
import ProjectComponent from '@/components/projects/ProjectComponent.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'ProjectsListComponent',
  components: { ProjectComponent },
  data () {
    return {
      projects: []
    }
  },
  computed: {
    ...mapGetters(['getProjects'])
  },
  mounted () {
    this.projects = this.getProjects
  }
}
</script>

<style scoped lang="scss">

.wrapper {
  columns: 2;
}
</style>
