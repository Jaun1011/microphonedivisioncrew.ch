<template>
  <div class="navigation">
    <img src="static/navigation.svg">
    <ul>
      <li v-for="i in nav"
          v-on:click="route(i.route)">
        {{i.label}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    data() {
      return {
        nav: [
          {label: "Songs & Videos", route: "/songs"},
          {label: "Crew", route: "/crew"},
          {label: "Pics", route: "/pictures"},
        ]
      }
    },
    methods: {
      route: function (route) {
        this.$router.push(route)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
