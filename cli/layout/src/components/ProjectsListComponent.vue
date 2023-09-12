<template>
  <div class='wrapper'>
    <ProjectComponent v-for="project in projects" :key="project.id" :project="project"/>
  </div>
</template>

<script>
import ProjectComponent from '@/components/ProjectComponent.vue'

export default {
  name: 'ProjectsListComponent',
  components: { ProjectComponent },
  data () {
    return {
      projects: [
        {
          id: 1,
          header: 'Minimal Bedroom',
          crumbs: 'Decor / Artchitecture',
          imgProject: 'img/project-1.png'
        },
        {
          id: 1,
          header: 'Classic Minimal Bedroom',
          crumbs: 'Decor / Artchitecture',
          imgProject: 'img/project-3.png'
        },
        {
          id: 1,
          header: 'Minimal Bedroom table',
          crumbs: 'Decor / Artchitecture',
          imgProject: 'img/project-5.png'
        },
        {
          id: 1,
          header: 'Modern Medroom',
          crumbs: 'Decor / Artchitecture',
          imgProject: 'img/project-7.png'
        },
        {
          id: 1,
          header: 'Minimal Bedroom',
          crumbs: 'Decor / Artchitecture',
          imgProject: 'img/project-2.png'
        },
        {
          id: 1,
          header: 'Modern Bedroom',
          crumbs: 'Decor / Artchitecture',
          imgProject: 'img/project-4.png'
        },
        {
          id: 1,
          header: 'System Table',
          crumbs: 'Decor / Artchitecture',
          imgProject: 'img/project-6.png'
        },
        {
          id: 1,
          header: 'Modern Bedroom',
          crumbs: 'Decor / Artchitecture',
          imgProject: 'img/project-8.png'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

.wrapper {
  columns: 2;
}
</style>
