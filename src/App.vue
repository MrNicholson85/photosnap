<template>
  <Nav/>
  <router-view/>
  <Footer/>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';

export default{
  name: 'App',
  components: { Nav, Footer },
}
</script>


<style lang="scss">
@import '@/assets/styles/variable.scss';

  #app {
    padding-top: 74px;

    @media (min-width: $tablet) {
      padding-top: 0;
    }
  }
</style>
