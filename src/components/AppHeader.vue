<template>
  <div>
    <h3>AppHeader.vue</h3>
    <button class="btn" v-show="loggedIn">Logout</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loggedIn: false
      }
    }
  }

  // function lintTest() {
  //   let a = "myVar";
  // }
</script>