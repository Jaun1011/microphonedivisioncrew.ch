<template>
    <article>
        <h1>Songs</h1>
        <table>

            <tbody>
            <tr  v-for="song in songs">
                <td>
                    <audio controls>
                        <source v-bind:src="song.src" type="audio/ogg">
                    </audio>
                </td>
                <td>{{song.label}}</td>
            </tr>


            </tbody>


        </table>


    </article>


</template>

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
