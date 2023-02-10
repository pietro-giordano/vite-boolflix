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
      <div class="showcase">
            <h2 v-if="store.moviesVisibility">Film trovati: {{ store.moviesResults.length }}</h2>
            <h2 v-else-if="store.seriesVisibility">Serie trovate: {{ store.seriesResults.length }}</h2>

            <div class="previous">
                  <font-awesome-icon icon="fa-solid fa-chevron-left" size="xl" />
            </div>

            <div class="next">
                  <font-awesome-icon icon="fa-solid fa-chevron-right" size="xl" />
            </div>

            <AppCard :content="movie" v-for="movie in store.moviesResults" />
            <AppCard :content="serie" v-for="serie in store.seriesResults" />
      </div>
</template>

<style lang="scss">

</style>