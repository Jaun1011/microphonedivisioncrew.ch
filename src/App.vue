<template>
    <div id="app">
        <navigation></navigation>
        <router-view/>
        <div></div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Navigation from "./components/Navigation";
    import Footer from "./components/Footer";

    export default {
        name: 'App',
        components: {Navigation, Footer}
    }
</script>

<style>
    html, body, #app {
        font-family: Consolas, serif;

        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: #181717;
    }

    #app {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: 1fr auto;
    }

    article, footer {
        background-color: white;
        padding: 0 1rem;
    }

    h1 {
        font-size: 2em;
    }
    article {
        font-size: 1.5em;
    }
</style>
