<template>
  <div class="stories-page">
      <heroInternal>
        <template #subTitle>
          <h4>LAST MONTH’S FEATURED STORY</h4>
        </template>
        <template #title>
          <h1>
            HAZY FULL MOON OF APPALACHIA
          </h1>
        </template>
        <template #author>
          <p>
            March 2nd 2020 <span>by John Appleseed</span>
          </p>
        </template>
        <template #content>
          <p class="copy">The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
        </template>
        <template #link>
          <div>
            <p>READ THE STORY</p> <img :src="arrowWhite" alt="white arrow"/>
          </div>
        </template>
      </heroInternal>
      <StoriesGrid/>
  </div>
</template>

<script>
import heroInternal from '@/components/HeroInternal';
import StoriesGrid from '../components/StoriesGrid.vue';
import arrowWhite from '../assets/images/arrow-white.svg';


export default {
  components: { heroInternal, StoriesGrid },
  data () {
    return {
      arrowWhite
    }
  }
}
</script>
<style lang="scss">
  
</style>