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

      <main class="px-5">
            <div>
                  <h2 v-if="store.moviesVisibility">Film trovati: {{ store.moviesResults.length }}</h2>

                  <div class="d-flex flex-wrap">
                        <AppCardMovie :movie="movie" v-for="movie in store.moviesResults" />
                  </div>
            </div>

            <!-- <ul v-for="movie in store.moviesResults">
                  <li>movie</li>
                  <li>Titolo: {{ movie.title }}</li>
                  <li>Titolo originale: {{ movie.original_title }}</li>
                  <li>Lingua: {{ movie.original_language }}</li>
                  <li>Media voto: {{ movie.vote_average }}</li>
            </ul> -->

            <div>
                  <h2 v-if="store.seriesVisibility">Serie trovate: {{ store.seriesResults.length }}</h2>

                  <AppCardTv :tv="serie" v-for="serie in store.seriesResults" />
            </div>
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
main {
      background-color: gray;
      height: calc(100vh - 100px);
      color: white;
      overflow: auto;

      .poster {
            width: 342px;
            height: 510px;
            position: relative;
            border: 2px solid white;

            img {
                  width: 100%;
                  height: 100%;
            }

            .overlay {
                  // display: none;
                  position: absolute;
                  top: 0;
                  left: 0;
                  background-color: rgba($color: #000000, $alpha: 0.8);
                  width: 100%;
                  height: 100%;
                  padding: 20% 10px;

                  p {
                        margin-bottom: 0;
                  }
            }
      }
}
</style>