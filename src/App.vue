<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <AppHeader />
    <hr />
    <RandomNumber />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import AppHeader from './components/AppHeader.vue'
import RandomNumber from './components/RandomNumber.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    AppHeader,
    RandomNumber
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
