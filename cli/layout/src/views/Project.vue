<template>
  <div class="wrapper">
    <header-component />
    <p>Projects</p>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'Home',
  components: { FooterComponent, HeaderComponent }
}
</script>

<style scoped lang="scss">

</style>
