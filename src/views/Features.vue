<template>
      <Hero>
        <template #title>
          <h1>FEATURES</h1>
        </template>
        <template #content>
          <p>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>
        </template>
        <template #link>
          <a href="#"></a>
        </template>
        <template #image>
          <img :src="createImage" alt="section hero image"/>
        </template>
      </Hero>
      <FeatServices/>
      <cta/>
</template>

<script>
import Hero from '@/components/Hero.vue';
import FeatServices from '@/components/FeaturesServices.vue';
import cta from '@/components/ctaBanner.vue';

import createImage from '../assets/images/hero.jpg';


export default {
  components: {Hero, FeatServices, cta},
  data () {
      return {
          createImage
      }
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }
  }
}
</script>
<style lang="">
  
</style>
