<template>
    <article>
        <h1>Crew</h1>


        <div class="content">
            <img src="static/pics/p1.jpg" class="redBorder"/>

            <div class="text">
                <h3>Reaction</h3>

                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </div>



            <div>
                <h3>Knasti</h3>
            </div>
            <div class="text redBorder">
                <h3>Thomas Eggenberger</h3>
                in münchenbuchsee ufgwachse ha e 12 jährige sohn u bi sozäge der maneger u
                organisator.
            </div>



            <img src="static/pics/p2.jpg"/>
        </div>

    </article>
</template>

<style scoped>
    .content {
        display: grid;
        grid-template-columns: 33% 33% 33%;
    }

    .text{
        border: 1px solid black;
        padding: 0.5rem;
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

