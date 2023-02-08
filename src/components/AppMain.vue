<script>
import { store } from '../store';
import AppCard from './AppCard.vue';

export default {
      name: 'AppMain',
      components: {
            AppCard
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
            <ul v-for="film in this.store.results">
                  <li>Titolo: {{ film.title }}</li>
                  <li>Titolo originale: {{ film.original_title }}</li>
                  <li>Lingua: {{ film.original_language }}</li>
                  <li>Media voto: {{ film.vote_average }}</li>
            </ul>
      </main>

</template>

<style lang="scss">

</style>