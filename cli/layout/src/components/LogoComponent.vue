<template>
  <div class="header-logo">
    <a :href=logo.href>
      <img src="@/components/img/logo.jpg" alt="logo">
    </a>
    <a :href=logo.href>
      <p class="header-logo__text">
        {{ logo.header }}
      </p>
    </a>
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
    flex-direction: row;
    justify-content: space-between;
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
