<template>
  <h1>{{title}}</h1>
  <div v-if="showModal">
      <Modal :header="header" :content="content" theme="sale" @close="toggleModal"/>
  </div>
  <button @click="toggleModal">Open Modal</button>
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
        showModal: false
      }
    },
    methods: {
      toggleModal() {
        this.showModal = !this.showModal
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
