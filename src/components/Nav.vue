<template lang="">
   <nav class="navbar-nav container">
    <div class="navbar-nav__logo-menu">
      <router-link to="/"><img class="" :src="logoImage" /></router-link>
      <div
        class="navbar-nav__menu-toggle"
        :class="[navToggler ? 'navbar-nav--toggle-close' : 'navbar-nav--toggle-open']"
        @click="navToggler = !navToggler" v-if="isMobile()"></div>
    </div>
    <div class="navbar-nav__links" :class="[navToggler ? 'navbar-nav--nav-close' : 'navbar-nav--nav-open']">
      <router-link :to="{ name: 'Stories' }">Stories</router-link>
      <router-link :to="{ name: 'Features'}">Features</router-link>
      <router-link :to="{ name: 'Pricing'}">Pricing</router-link>
    </div>
    <router-link to="/" class="btn btn--primary-dark" :class="[navToggler ? 'navbar-nav--nav-close' : 'navbar-nav--nav-open']">Get an invite</router-link>
  </nav>
</template>
<script>
import logoImage from '../assets/images/logo.svg';

export default {
    name: 'App',
    data () {
        return {
            logoImage,
            navToggler: true,
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
        justify-content: space-between;
        align-items: center;

        @media(min-width: $tablet) {
            display: flex;
            height: 72px;
        }

        &--nav-close {
            display: none;
            
            @media(min-width: $tablet) {
                display: grid;
            }
        }

        &--nav-open {
            display: grid;
        }

        &--toggle-close {
            position: relative;
            height: 6px;
            width: 20px;
            
            &::before {
                content: "";
                height: 2px;
                width: 20px;
                background-color: $pureBlack;
                position: absolute;
            }

            &::after {
                top: 5px;
                content: "";
                height: 2px;
                width: 20px;
                background-color: $pureBlack;
                position: absolute;
            }
        }

        &--toggle-open {
            position: relative;
            width: 20px;
            height: 20px;
            
            &::before {
                content: "";
                height: 2px;
                width: 20px;
                background-color: $pureBlack;
                position: absolute;
                transform: rotateZ(-45deg) scaleX(1) translate(-6px, 6px);
            }

            &::after {
                top: 5px;
                content: "";
                height: 2px;
                width: 20px;
                background-color: $pureBlack;
                position: absolute;
                transform: rotateZ(45deg) scaleX(1) translate(3px, 3px);
            }
        }

        &__links {
            gap: 20px;
            text-transform: uppercase;
            font-size: 12px;
            font-weight: bold;
            text-align: center;
            padding-top: 32px;
            padding-bottom: 20px;
            border-bottom: 1px $lightGrey solid;
            margin-bottom: 20px;

            @media(min-width: $tablet) {
                display: flex;
                text-align: left;
                gap: 37px;
                border-bottom: none;
            }

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

        &__logo-menu {
            display: flex;
            justify-content: space-between;
            padding: 28px 24px;
            align-items: center;
        }
    }
</style>