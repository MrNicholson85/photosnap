<template>
  <div class="home">
    <Hero>
      <template #title>
        <h1>Create and share your photo stories.</h1>
      </template>
      <template #content>
        <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
      </template>
      <template #link>
        <a href="#">GET AN INVITE <span><img :src="arrowWhite"/></span></a>
      </template>
      <template #image>
        <img :src="createImage" />
      </template>
    </Hero>

    <ContentImage theme="imgLeft">
      <template #title>
        <h1>BEAUTIFUL STORIES EVERY TIME</h1>
      </template>
      <template #content>
        <p>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
      </template>
      <template #link>
        <a href="#">VIEW THE STORIES <span><img :src="arrowBlack"/></span></a>
      </template>
      <template #image>
        <div :style="{ backgroundImage: `url(${storyImage1})` }"></div>
      </template>
    </ContentImage>
    
    <ContentImage>
      <template #title>
        <h1>Create and share your photo stories.</h1>
      </template>
      <template #content>
        <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
      </template>
      <template #link>
        <a href="#">GET AN INVITE <span><img :src="arrowBlack"/></span></a>
      </template>
      <template #image>
        <div :style="{ backgroundImage: `url(${storyImage2})` }"></div>
      </template>
    </ContentImage>

    <Stories />

    <services/>
  </div>
</template>

<script>
import createImage from '../assets/images/create-and-share.jpg';
import storyImage1 from '../assets/images/beautiful-stories.jpg';
import storyImage2 from '../assets/images/designed-for-everyone.jpg';
import arrowWhite from '../assets/images/arrow-white.svg';
import arrowBlack from '../assets/images/arrow.svg';

import Hero from '@/components/Hero.vue';
import ContentImage from '@/components/ContentImage.vue';
import Stories from '@/components/Stories.vue';
import Services from '@/components/Services.vue';

export default {
  components: {Hero, ContentImage, Stories, Services},
  data () {
      return {
          createImage,
          storyImage1,
          storyImage2,
          arrowWhite,
          arrowBlack
      }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variable.scss';

  .home {

  }
</style>

