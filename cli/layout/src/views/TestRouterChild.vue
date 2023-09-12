<template>
  <div class="wrapper center">
    <ArticleComponent
      :article="$store.state.testArticles[$route.params.id - 1]"
      :direction="directionLast" />
<!--    {{ $store.state.testArticles[$route.params.id] }}-->
  </div>
</template>

<script>
import ArticleComponent from '@/components/blog/ArticleComponent.vue'

export default {
  name: 'TestRouterChild',
  components: { ArticleComponent },
  data () {
    return {
      directionLast: 'row'
    }
  }
}
</script>

<style scoped lang="scss">

</style>
