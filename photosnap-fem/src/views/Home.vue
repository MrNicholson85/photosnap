<template>
  <div class="home">
    <SixtyForty>
      <template #title>
        <h1>Create and share your photo stories.</h1>
      </template>
      <template #content>
        <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
      </template>
      <template #link>
        <a href="#">GET AN INVITE <span><img :src="arrowLink"/></span></a>
      </template>
      <template #image>
        <img :src="createImage" />
      </template>
    </SixtyForty>
  </div>
</template>

<script>
import createImage from '../assets/images/create-and-share.jpg';
import arrowLink from '../assets/images/arrow-white.svg';
import SixtyForty from '@/components/SixtyForty.vue';
export default {
  components: {SixtyForty},
  data () {
      return {
          createImage,
          arrowLink
      }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variable.scss';

  .home {

  }
</style>

