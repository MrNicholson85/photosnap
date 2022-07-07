<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'Stories' }">Stories</router-link>
    <router-link :to="{ name: 'Features'}">Features</router-link>
    <router-link :to="{ name: 'Pricing'}">Pricing</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import './assets/styles/variable.scss';

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: $pureBlack;
    }
  }
}
</style>
