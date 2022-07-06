<template>
  <h1>{{title}}</h1>
  <Modal :header="header" :content="content"/>
</template>

<script>
  import Modal from './components/Modal.vue'

  export default {
    name: 'App',
    components: { Modal },
    data() {
      return {
        title: 'my first post',
        header: 'Sign up!',
        content: 'here',
      }
    }
  }  
</script>

<style lang="scss">
@import './assets/styles/variable.scss';

#app {
  font-family: $DMSans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
