<template>
  <div class="wrapper">
    <header-component />
    <top-banner-component :imgBanner="imgBanner" />
    <div class="project-info-wrapper center">
      <div class="project-info">
        <div class="project-info__header">
          <p>Minimal Look Bedrooms</p>
        </div>
        <div class="project-info__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.

            In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
          </p>
        </div>
      </div>
    </div>
    <slider-component :images="images" />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import TopBannerComponent from '@/components/banner/TopBannerComponent.vue'
import SliderComponent from '@/components/slider/SliderComponent.vue'
import FooterComponent from '@/components/footer/FooterComponent.vue'

export default {
  name: 'ProjectDetails',
  data () {
    return {
      imgBanner: 'img/project-details-top-banner.png',
      images: [
        {
          id: 1,
          src: 'img/project-1-1.png'
        },
        {
          id: 2,
          src: 'img/project-1-2.png'
        },
        {
          id: 3,
          src: 'img/project-1-3.png'
        }
      ]
    }
  },
  components: { FooterComponent, SliderComponent, TopBannerComponent, HeaderComponent }
}
</script>

<style scoped lang="scss">
.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

.project-info {
  &-wrapper {
    display: flex;
    justify-content: center;
    margin: 200px 0 50px 0;
  }
  &__header {
    text-align: left;
    max-width: 658px;
    color: #292F36;
    font-family: DM Serif Display,sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
    letter-spacing: 1px;
  }
  &__text {
    text-align: left;
    max-width: 658px;
    color: #4D5053;
    font-family: Jost,sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
  }
}
</style>
