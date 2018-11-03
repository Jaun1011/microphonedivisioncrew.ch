<template>
    <article>

        <h1>Songs</h1>


        <div class="container">
            <div>
                <table>
                    <tr  v-for="song in songs">
                        <td>
                            <audio controls>
                                <source v-bind:src="song.src" type="audio/ogg">
                            </audio>
                        </td>
                        <td>{{song.label}}</td>
                    </tr>
                </table>
            </div>


            <div>
                <a class="download" href="static/songs/MDC.7z" download="proposed_file_name">Download Full Album</a>
            </div>
        </div>



    </article>
</template>


<style scoped>

    .container{
        display: grid;
        height: 100%;
        grid-template-rows: 50% 50%;
    }

    .download{
        color: black;
        text-decoration: none;
        border: 2px solid black;
        padding: 5px;
    }
    .download:hover{
        color: red;
        border: 2px solid red;

    }

</style>


<script>
    export default {
        name: 'Songs',
        data() {
            return {
                songs: [
                    {src: "static/songs/mp3/die_leute.mp3", label: "Die Leute"},
                    {src: "static/songs/mp3/dini_sitä.mp3", label: "Dini Sitä"},
                    {src: "static/songs/mp3/freitag_nachmittag.mp3", label: "Freitag Nachmittag"},
                    {src: "static/songs/mp3/mdc_träff.mp3", label: "MDC Träff"},
                    {src: "static/songs/mp3/reaction_und_purch.mp3", label: "Reaction und Purch"},
                    {src: "static/songs/mp3/wahrheit.mp3", label: "Warheit"},
                ]
            }
        }
    }
</script>

