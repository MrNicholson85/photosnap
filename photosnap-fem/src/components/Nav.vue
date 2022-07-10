<template lang="">
   <nav class="navbar-nav">
    <div class="navbar-nav__logo-menu">
      <router-link to="/"><img class="" :src="logoImage" /></router-link>
      <div class="navbar-nav__menu-toggle" v-if="isMobile()">toggle menu</div>
    </div>
    <div class="navbar-nav__links">
      <router-link :to="{ name: 'Stories' }">Stories</router-link>
      <router-link :to="{ name: 'Features'}">Features</router-link>
      <router-link :to="{ name: 'Pricing'}">Pricing</router-link>
    </div>
    <router-link to="*" class="btn btn--primary-dark">Get an invite</router-link>
  </nav>
</template>
<script>
import logoImage from '../assets/images/logo.svg';

export default {
    name: 'App',
    data () {
        return {
            logoImage
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
<style lang="scss">
    @import '../assets/styles/variable.scss';
    @import '../assets/styles/buttons.scss';

    .navbar-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;

    &__links {
        display: flex;
        gap: 37px;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;

        a {
        color: $pureBlack;
        transition: all .2s ease-in-out;
        text-decoration: none;
        letter-spacing: 2px;

        &:hover {
            color: $lightGrey;
        }
        &.router-link-exact-active {
            color: $pureBlack;
        }
        }
    }
    }
</style>