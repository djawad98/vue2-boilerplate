<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
  </div>
</template>

<script>



// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',


  mounted(){
    this.$store.commit("increment");
    console.log(this.$store.state.var1)
  },
}
</script>


<style lang="scss">

@import 'tailwindcss/tailwind.css';
@import './assets/custom.scss';
@import './assets/font.scss';

body {
  font-family: $prefered-font;
}

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
