<template>
    <article>
        <h1>Crew</h1>


        <div class="content">
            <img src="static/pics/p1.jpg" class="redBorder"/>

            <div class="text">
                <h3>Reaction MC</h3>
                Geboren in Zwickau am 4.7.1986 (nähe Leibzig) lebt seit 2009 in der Schweiz 2002 hat er die ersten Freestyles gekickt und 2004 das erste Album aufgenommen.
                Er hat 2 Kinder und beruflich Bierbrauer. Wenn es die Zeit erlaubt, nimmt er an diversen Rapbattles teil.

            </div>



            <img src="static/pics/p4.jpg"/>



            <div class="text redBorder">
                <h3>Thomas Eggenberger</h3>
                in münchenbuchsee ufgwachse ha e 12 jährige sohn u bi sozäge der maneger u
                organisator.
            </div>            <img src="static/pics/p2.jpg"/>




            <div class="text">
                <h3>Daniel</h3>
                Hier folgt noch ein Text
            </div>


        </div>

    </article>
</template>

<style scoped>
    .content {
        display: grid;
        grid-template-columns: 33% 33% 33%;
    }

    @media only screen and (max-width: 1000px) {
        .content {
            display: grid;
            grid-template-columns: auto;
        }
    }


        .text{
        border: 1px solid black;
        padding: 0.5rem;
        margin: 1rem;
    }

    img {
        margin: auto;
        width: 15rem;
        border-radius: 50%;
    }

    .redBorder{
        border: 2px solid red;
    }



</style>


<script>
    export default {
        name: 'Crew',
        data() {
            return {}
        }
    }
</script>

