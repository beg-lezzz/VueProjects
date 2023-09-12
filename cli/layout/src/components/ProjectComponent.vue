<template>
  <div class="project-container">
    <div class="project-container-wrapper">
      <div class="projects-img-wrapper">
        <img :src="project.imgProject" alt="">
      </div>
      <div class="project-footer">
        <div class="project-footer__text">
          <p class="project-text__header">
            {{ project.header }}
          </p>
          <p class="project-text__crumbs">
            {{ project.crumbs }}
          </p>
        </div>
        <div class="project-footer__button">
          <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
            <circle cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectComponent',
  props: ['project']
}
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}
img {
  width: 100%;
  opacity: 0.5;
}
.project-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-bottom: 25px;
  break-inside: avoid-column;
  cursor: pointer;
  &:hover img {
    opacity: 1;
  }
}
.project-text__header {
  color: #292F36;
  font-family: DM Serif Display,sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
  text-align: left;
}
.project-text__crumbs {
  color: #4D5053;
  font-family: Jost,sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
  text-align: left;
}
.project-footer {
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
}
</style>
