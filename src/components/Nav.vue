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
        <hr />
        <router-link to="/" v-if="isMobile()" class="navbar-nav__btn-contact-mobile btn btn--primary-dark btn--nav-mobile">Get an invite</router-link>
    </div>
    <router-link to="/" class="navbar-nav__btn-contact-desktop btn btn--primary-dark">Get an invite</router-link>
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
        top: 0;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        z-index: 9;
        height: 72px;
        background-color: $pureWhite;

        @media(min-width: $tablet) {
            display: flex;
            height: 72px;
            position: relative;
        }

        &__btn-contact-desktop {
            display: none;

            @media(min-width: $tablet) {
                display: block;
            }
        }

        &__btn-contact-mobile {
            display: block;

            @media(min-width: $tablet) {
                display: none;
            }
        }

        &__menu-toggle {
            display: block;

            @media(min-width: $tablet) {
                display: none;
            }
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
            text-transform: uppercase;
            font-size: 12px;
            font-weight: bold;
            text-align: center;
            padding: 32px 33px 0;
            top: -5px;
            position: relative;
            background-color: $pureWhite;


            @media(min-width: $tablet) {
                display: flex;
                align-items: center;
                text-align: left;
                gap: 37px;
                border-bottom: none;
                padding: 0;
            }

            a {
                margin-bottom: 20px;
                color: $pureBlack;
                transition: all .2s ease-in-out;
                text-decoration: none;
                letter-spacing: 2px;

                @media(min-width:$tablet) {
                    margin-bottom: 0;
                }

                &:hover {
                    color: $lightGrey;
                }
                &.router-link-exact-active {
                    color: $pureBlack;
                }

                &:last-child {
                    color: $pureWhite;
                    padding: 16px 0;
                }
            }

            hr {
                display: block;
                width: 100%;
                height: 1px;
                border: none;
                background-color: $dividerColor;
                margin-bottom: 20px;

                @media(min-width: $desktop) {
                    display: none;
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