<template>
  <article class="wrapper" :class="{ wrapper__column: !isRow }">
    <div class="content" :class="{ content__column: !isRow, content__row: isRow }">
      <div class="imgwrapper" :class="{ imgwrapper__row: isRow }">
        <img class="img" :class="{ img__row: isRow }" :src="article.img" alt="article-img">
        <div class="badge" v-if="!isRow">
          <p class="badge__text">
            {{ article.badge }}
          </p>
        </div>
      </div>
      <div class="infowrapper" :class="{ infowrapper__row: isRow }">
        <div class="info" :class="{ info__row: isRow }">
          <p class="header" :class="{ header__row: isRow }">
            {{ article.textMini }}
          </p>
          <p class="text" :class="{ text__row: isRow }" v-if="isRow">
            {{ article.textFull }}
          </p>
        </div>
        <div class="footer">
          <div class="footer__date">
            {{ article.date }}
          </div>
          <div class="footer__button">
            <router-link :to="{ name: 'article', params: { id: article.id }}">
            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
              <circle cx="26.5" cy="26.2671" r="26" fill="#F4F0EC"/>
              <path d="M24.271 32.9526L30.2139 26.2669L24.271 19.5812" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ArticleComponent',
  props: ['article', 'direction'],
  computed: {
    isRow () {
      return this.direction === 'row'
    }
  }
}
</script>

<style scoped lang="scss">

.wrapper {
  &__column {
    width: 30%;
  }
  &:hover .content{
    background-color: #F4F0EC;
  }

  &:hover .footer__button svg circle{
    background-color: #F4F0EC;
    fill: white;
  }
}

.content {
  &__row {
    justify-content: space-between;
    gap: 65px;
  }
  &__column {
    flex-direction: column;
    gap: 20px;
  }
  width: 100%;
  display: flex;
  padding: 21px;
  border-radius: 62px;
  border: 1px solid #E7E7E7;
  box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);
}

.imgwrapper {
  position: relative;
  //
  &__row {
    width: 50%;
  }
}

.img {
  //
  &__row {
    border-radius: 45px;
  }
  width: 100%;
  border-radius: 45px 45px 0 0;
  background: #EAEAEA;
}

.infowrapper {
  //
  &__row {
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.info {
  //
  &__row {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.header {
  //
  &__row {
    max-width: 489px;
  }
  text-align: left;
  color: #292F36;
  font-family: DM Serif Display,sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
}
.text {
  //
  &__row {
    max-width: 489px;
  }
  text-align: left;
  color: #4D5053;
  font-family: Jost,sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}
.badge {
  border-radius: 8px 8px 8px 0px;
  background: #FFF;
  position: absolute;
  left: 31px;
  bottom: 31px;
  padding: 4px 5px 8px 11px;
  &__text {
    color: #4D5053;
    font-family: Jost, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__date {
    color: #4D5053;
    font-family: Jost,sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }
  &__button {
  }
}
</style>
