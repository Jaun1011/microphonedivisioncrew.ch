<template>
  <div class="navigation">
    <div class="container">
      <img src="static/navigation.svg">
      <ul>
        <li v-for="i in nav"
            v-on:click="route(i.route)"
            v-bind:class="isActive(i.route)" >
          {{i.label}}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .container {
    position: relative;
  }

  .active {
    color: red;
  }
  img {
    width: 180%;
    margin-left: -80%;
    animation: spin 40s linear infinite;
  }

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  ul {
    position: absolute;
    top: 40%;
    left: 50%;
    list-style-type: none;
  }

  li {
    color: white;
    font-size: 2em;
    padding-bottom: 10px;
  }


</style>

<script>
  export default {
    name: 'Navigation',
    data() {
      return {
        activeRoute: '/',
        nav: [
          {label: "Songs", route: "/songs"},
          {label: "Crew", route: "/crew"},
          {label: "Pics", route: "/pictures"},
        ]
      }
    },
    methods: {
      route: function (route) {
        this.activeRoute = route;

        this.$router.push(route)
      },
      isActive(route) {
        return this.activeRoute === route ?
          "active" : "";
      }
    }
  }
</script>


