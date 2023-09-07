<template>
  <div class="projects center">
    <div class="projects-content">
      <div class="projects-info">
        <p class="projects-info__header">
          Follow Our Projects
        </p>
        <p class="projects-info__text">
          It is a long established fact that a reader will
          be distracted by the of readable content of page  lookings at its layouts  points.
        </p>
      </div>
      <div class="projects-cards">
        <div class="projects-card">
          <div class="projects-card-image-wrapper">
            <img class="projects-card-image projects-card__radius_top-right" src="img/card-1.png" alt="" srcset="">
          </div>
          <div class="projects-card-description">
            <div class="project-card-description__info">
              <p class="projects-card-description__name">
                Modern Kitchan
              </p>
              <p class="projects-card-description__crumb">
                Decor / Artchitecture
              </p>
            </div>
            <div class="project-card-description__button">
              <a href="#">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                  <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="projects-card">
          <div class="projects-card-image-wrapper">
            <img class="projects-card-image projects-card__radius_top-left" src="img/card-2.png" alt="" srcset="">
          </div>
          <div class="projects-card-description">
            <div class="project-card-description__info">
              <p class="projects-card-description__name">
                Modern Kitchan
              </p>
              <p class="projects-card-description__crumb">
                Decor / Artchitecture
              </p>
            </div>
            <div class="project-card-description__button">
              <a href="#">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                  <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="projects-card">
          <div class="projects-card-image-wrapper">
            <img class="projects-card-image projects-card__radius_bottom-right" src="img/card-3.png" alt="" srcset="">
          </div>
          <div class="projects-card-description">
            <div class="project-card-description__info">
              <p class="projects-card-description__name">
                Modern Kitchan
              </p>
              <p class="projects-card-description__crumb">
                Decor / Artchitecture
              </p>
            </div>
            <div class="project-card-description__button">
              <a href="#">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                  <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="projects-card">
          <div class="projects-card-image-wrapper">
            <img class="projects-card-image projects-card__radius_bottom-left" src="img/card-4.png" alt="" srcset="">
          </div>
          <div class="projects-card-description">
            <div class="project-card-description__info">
              <p class="projects-card-description__name">
                Modern Kitchan
              </p>
              <p class="projects-card-description__crumb">
                Decor / Artchitecture
              </p>
            </div>
            <div class="project-card-description__button">
              <a href="#">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                  <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FollowProject'
}
</script>

<style scoped lang="scss">
.projects {

  &-content {

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 93px;
  }

  &-info {
    margin-top: 53px;
    max-width: 737px;

    &__header {
      color: #292F36;
      text-align: center;
      font-family: DM Serif Display, sans-serif;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 62.5px */
      letter-spacing: 1px;
    }

    &__text {
      color: #4D5053;
      text-align: center;
      font-family: Jost, sans-serif;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 33px */
      letter-spacing: 0.22px;
    }
  }

  &-cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 30px;
  }

  &-card {
    display: flex;
    flex-direction: column;
    width: 48%;

    &-image {
      height: 100%;
      width: 100%;
    }

    &-description {
      display: flex;
      justify-content: space-between;
      padding-top: 24px;
    }

    &-description__name {
      color: #292F36;
      font-family: DM Serif Display, sans-serif;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 31.25px */
      letter-spacing: 0.5px;
    }

    &-description__crumb {
      color: #4D5053;
      font-family: Jost, sans-serif;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 33px */
      letter-spacing: 0.22px;
    }

    &__radius {

      &_top-left {
        border-top-left-radius: 80px;
      }

      &_top-right {
        border-top-right-radius: 80px;
      }

      &_bottom-left {
        border-bottom-left-radius: 80px;
      }

      &_bottom-right {
        border-bottom-right-radius: 80px;
      }
    }
  }
}
</style>
