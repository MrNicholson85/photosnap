<template>
  <nav class="navbar-nav container">
    <div class="navbar-nav__logo-menu">
      <router-link to="/">
        <img :src="logoImage" alt="Logo" />
      </router-link>
      <div
        class="navbar-nav__menu-toggle"
        :class="[
          isNavOpen ? 'navbar-nav--toggle-open' : 'navbar-nav--toggle-close',
        ]"
        @click="isNavOpen = !isNavOpen"
        v-if="isMobileView"
      ></div>
    </div>

    <div
      class="navbar-nav__links"
      :class="[isNavOpen ? 'navbar-nav--nav-open' : 'navbar-nav--nav-close']"
      v-show="isMobileView || !isMobileView"
    >
      <router-link :to="{ name: 'Stories' }">Stories</router-link>
      <router-link :to="{ name: 'Features' }">Features</router-link>
      <router-link :to="{ name: 'Pricing' }">Pricing</router-link>
      <hr v-if="isMobileView" />
      <router-link
        to="/"
        class="btn btn--primary-dark"
        :class="[isNavOpen ? 'navbar-nav--nav-open' : 'navbar-nav--nav-close']"
      >
        Get an invite
      </router-link>
    </div>
  </nav>
</template>

<script>
import logoImage from "../assets/images/logo.svg";

export default {
  name: "NavbarNav",
  data() {
    return {
      logoImage,
      isNavOpen: false,
      isMobileView: false,
    };
  },
  mounted() {
    this.checkViewport();
    window.addEventListener("resize", this.checkViewport);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkViewport);
  },
  methods: {
    checkViewport() {
      this.isMobileView = window.innerWidth < 768;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/variable.scss";
@import "../assets/styles/buttons.scss";

.navbar-nav {
  top: 0;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 9;
  height: 72px;
  background-color: $pureWhite;

  @media (min-width: $tablet) {
    display: flex;
    height: 72px;
    position: relative;
  }

  &--nav-close {
    display: none;

    @media (min-width: $tablet) {
      display: grid;
    }
  }

  &--nav-open {
    display: grid;
  }

  &--toggle-close,
  &--toggle-open {
    position: relative;
    width: 20px;
    height: 20px;

    &::before,
    &::after {
      content: "";
      height: 2px;
      width: 20px;
      background-color: $pureBlack;
      position: absolute;
    }
  }

  &--toggle-close {
    &::before {
      top: 0;
    }

    &::after {
      top: 5px;
    }
  }

  &--toggle-open {
    &::before {
      transform: rotateZ(-45deg) translate(-6px, 6px);
    }

    &::after {
      top: 5px;
      transform: rotateZ(45deg) translate(3px, 3px);
    }
  }

  &__links {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    padding: 32px 33px 0;
    position: relative;
    background-color: $pureWhite;

    @media (min-width: $tablet) {
      display: flex;
      text-align: left;
      gap: 37px;
      border-bottom: none;
      padding: 0;
      align-items: center;
    }

    a {
      margin-bottom: 20px;
      color: $pureBlack;
      transition: all 0.2s ease-in-out;
      text-decoration: none;
      letter-spacing: 2px;

      @media (min-width: $tablet) {
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
        padding: 16px 24px;
      }
    }

    hr {
      display: block;
      width: 100%;
      height: 1px;
      border: none;
      background-color: $dividerColor;
      margin-bottom: 20px;

      @media (min-width: $desktop) {
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
