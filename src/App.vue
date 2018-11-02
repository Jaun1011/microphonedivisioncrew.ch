<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Navigation from "./components/Navigation";
  import Footer from "./components/Footer";

  export default {
    name: 'App',
    components: {Navigation,Footer}
  }
</script>

<style>
  html, body, #app{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }

  #app{

    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr auto;
  }
</style>
