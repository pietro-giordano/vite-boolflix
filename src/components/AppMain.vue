<script>
import { store } from '../store';
import AppCardMovie from './AppCardMovie.vue';
import AppCardTv from './AppCardTv.vue';

export default {
      name: 'AppMain',
      components: {
            AppCardMovie,
            AppCardTv
      },
      data() {
            return {
                  store
            }
      }
}
</script>

<template>

      <main>
            <AppCardMovie :movie="movie" v-for="movie in store.moviesResults" />
            <!-- <ul v-for="movie in store.moviesResults">
                  <li>movie</li>
                  <li>Titolo: {{ movie.title }}</li>
                  <li>Titolo originale: {{ movie.original_title }}</li>
                  <li>Lingua: {{ movie.original_language }}</li>
                  <li>Media voto: {{ movie.vote_average }}</li>
            </ul> -->

            <AppCardTv :tv="serie" v-for="serie in store.seriesResults" />
            <!-- <ul v-for="tv in store.seriesResults">
                  <li>serie</li>
                  <li>Titolo: {{ tv.name }}</li>
                  <li>Titolo originale: {{ tv.original_name }}</li>
                  <li>Lingua: {{ tv.original_language }}</li>
                  <li>Media voto: {{ tv.vote_average }}</li>
            </ul> -->
      </main>

</template>

<style lang="scss">

</style>