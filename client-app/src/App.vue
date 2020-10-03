<template>
  <div id="app">
    <Navigation/>
    <Header/>
    <Footer/>
    <router-view/>
  </div>
</template>

<script>
import {Header, Navigation, Footer} from '@/components/index';

  export default{
    name: "App",
    components:{
      Header,
      Navigation,
      Footer
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
