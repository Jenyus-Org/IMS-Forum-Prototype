<template>
  <div id="app">
    <Navigation/>
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import {Header, Navigation} from '@/components/index';

  export default{
    name: "App",
    components:{
      Header,
      Navigation
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
}

</style>
