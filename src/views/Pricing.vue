<template>
  <div class="Pricing">
    <internalHero>
      <template #title>
        <h1>PRICING</h1>
      </template>
      <template #content>
        <p>Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</p>
      </template>
      <template #link>
        <a href="#"></a>
      </template>
      <template #image>
        <img :src="heroImage" alt="hero image"/>
      </template>
    </internalHero>
    <pricingTable/>
    <CompareServices/>
    <ctaBanner/>
  </div>
</template>

<script>
import internalHero from '@/components/Hero.vue';
import pricingTable from '@/components/PricingTier.vue';
import compareServices from '@/components/compareServices.vue';
import ctaBanner from '@/components/ctaBanner.vue';

import heroImage from '../assets/images/pricing-hero.jpg';
import CompareServices from '../components/compareServices.vue';

  export default {
    components: { internalHero, pricingTable, ctaBanner, compareServices, CompareServices },
    data() {
      return {
        heroImage        
      }
    },
  }
</script>

<style lang="scss">
  
</style>
