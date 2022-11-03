<template>
  <div>
    <!-- <HolaMundo />
    <HomeComponent />
    <CineComponent />
    <MusicaComponent />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <h1>Elemento estático</h1>
    <hr />
    <!-- ELEMENTO DINAMICO -->
    <MenuComponent />
    <router-view></router-view>
    <hr />
    <h2>Pie de pagina</h2>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import HolaMundo from './components/HolaMundo.vue';
// import HomeComponent from './components/HomeComponent.vue';
// import CineComponent from './components/CineComponent.vue';
// import MusicaComponent from './components/MusicaComponent.vue';
import MenuComponent from './components/MenuComponent.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld, HolaMundo , HomeComponent , CineComponent , MusicaComponent
    MenuComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
