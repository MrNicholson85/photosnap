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
          <p>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
        </template>
        <template #link>
          <div>
            READ THE STORY
          </div>
        </template>
      </heroInternal>
  </div>
</template>

<script>
import heroInternal from '@/components/HeroInternal';

export default {
  components: { heroInternal }
}
</script>
<style lang="scss">
  
</style>