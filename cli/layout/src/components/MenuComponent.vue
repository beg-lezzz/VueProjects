<template>
  <div class="header-menu">
    <div v-for="(element, index) in menu" :key="index" @click="getMenuName(index)" class="header-menu__element">
      <a :href=element.href class="header-menu__text">{{ element.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent',
  props: ['menu'],
  methods: {
    getMenuName (index) {
      this.$emit('MenuElement', this.menu[index].name)
      console.log(`menu item ${this.menu[index].name}`)
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  &-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    &__element {

    }

    &__text {
      color: #292F36;
      text-align: center;
      font-family: Jost, sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 25px */
    }
  }
}
</style>
