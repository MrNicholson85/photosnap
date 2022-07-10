<template>
  <div class="home">
    <h1>Home Page</h1>
  </div>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variable.scss';

  .home {
    width: 100%;
    max-width: $mobile;
    margin: 0 auto;

    @media(min-width: $tablet) {
      max-width: $tablet; 
    }

    @media(min-width: $desktop) {
      max-width: $desktop; 
    }
  }
</style>

