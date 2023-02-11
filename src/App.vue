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

            getDatabase(endpoint) {
                  axios
                        .get('https://api.themoviedb.org/3/search/' + endpoint, {
                              params: {
                                    api_key: '36cc4da84d9ffde2d7f4c2ba9f8a6a4f',
                                    query: this.store.searchValue,
                                    language: 'it-IT'
                              }
                        })
                        .then((response) => {
                              if (endpoint == 'movie') {
                                    this.store.moviesResults = response.data.results;
                                    console.log(this.store.moviesResults);
                              } else {
                                    this.store.seriesResults = response.data.results;
                                    console.log(this.store.seriesResults);
                              }
                        })
            },

            searchEvent() {
                  this.getDatabase('movie');
                  this.getDatabase('tv');
            },
      }
}
</script>

<template>
      <AppHeader @search="searchEvent()" />

      <AppMain />
</template>

<style lang="scss">
@import './styles/main.scss';
</style>
