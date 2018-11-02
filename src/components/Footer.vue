<template>
  <footer>
    <div>
    </div>
    <div>
      <img src="static/facebook.svg"/>
      <img src="static/youtube.svg"/>
      <img src="static/instagram.svg"/>
    </div>
  </footer>

</template>

<script>
  export default {
    name: 'Footer',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer {
    display: grid;
    grid-template-columns: 1fr auto  auto;
    padding: 1em;
  }

  img {
    width: 2rem;
  }
</style>
