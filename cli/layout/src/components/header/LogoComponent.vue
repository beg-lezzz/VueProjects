<template>
  <div class="header-logo">
    <router-link :to="logo.href">
      <img src="../img/logo.jpg" alt="logo">
    </router-link>
    <router-link :to="logo.href">
      <p class="header-logo__text">
        {{ logo.header }}
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LogoComponent',
  props: ['logo']
}
</script>

<style scoped lang="scss">
.header {
  &-logo {
    display: flex;
    align-items: center;
    gap: 10px;

    &__text {
      color: #292F36;
      font-family: DM Serif Display, sans-serif;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 50px */
    }
  }
}
</style>
