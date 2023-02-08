<script>
import { store } from './store';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
      name: 'App',
      components: {
            AppHeader,
            AppMain
      },
      data() {
            return {
                  store
            }
      },
      methods: {

            getMovies() {

                  console.log('search premuto')

                  axios
                        .get('https://api.themoviedb.org/3/search/movie', {
                              params: {
                                    api_key: this.store.api_key,
                                    query: this.store.searchValue
                              }
                        })
                        .then((response) => {
                              this.store.moviesResults = response.data.results;
                              console.log(this.store.moviesResults)
                        })

            },

            getSeries() {

                  console.log('search premuto')

                  axios
                        .get('https://api.themoviedb.org/3/search/tv', {
                              params: {
                                    api_key: this.store.api_key,
                                    query: this.store.searchValue
                              }
                        })
                        .then((response) => {
                              this.store.seriesResults = response.data.results;
                              console.log(this.store.seriesResults)
                        })

            }

      }
}
</script>

<template>
      <AppHeader @search="getMovies(), getSeries()" />

      <AppMain />
</template>

<style lang="scss">
@import './styles/main.scss';
</style>
