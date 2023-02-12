<script>
import { store } from '../store';
import axios from 'axios';

export default {
      name: 'AppCard',
      props: {
            content: Object,
      },
      data() {
            return {
                  store,
                  credits: [],
                  genres: [],
                  moreInfoVisibility: false,
                  buttonInfo: true
            }
      },
      computed: {

            starsFull() {
                  return Math.ceil(this.content.vote_average / 2);
            },

            starsEmpty() {
                  return Math.floor(5 - (this.content.vote_average / 2));
            },

            imgPath() {
                  if (this.content.poster_path == null) {
                        return new URL(`../assets/not-found-image.jpg`, import.meta.url).href;
                  }
                  return `https://image.tmdb.org/t/p/w342` + this.content.poster_path;
            },

            shortOverview() {
                  return this.content.overview.slice(0, 200) + '...';
            },
      },
      methods: {

            getCredits() {
                  this.moreInfoVisibility = true;
                  this.buttonInfo = false;
                  let endpoint;

                  if (this.content.hasOwnProperty('title')) {
                        endpoint = 'movie';
                  } else {
                        endpoint = 'tv';
                  }

                  axios
                        .get('https://api.themoviedb.org/3/' + endpoint + '/' + this.content.id + '/credits', {
                              params: {
                                    api_key: '36cc4da84d9ffde2d7f4c2ba9f8a6a4f',
                                    language: 'it-IT'
                              }
                        })
                        .then((response) => {
                              this.credits = response.data.cast.slice(0, 5);
                              // console.log(this.credits);
                        })
            },

            translateGenres() {
                  this.store.genresMovies.forEach((genre) => {
                        if (this.content.genre_ids.includes(genre.id)) {
                              console.log(genre.id)
                              if (!this.genres.includes(genre.name)) {
                                    this.genres.push(genre.name);
                                    console.log(this.genres)
                              }
                        }
                  });
                  this.store.genresSeries.forEach((genre) => {
                        if (this.content.genre_ids.includes(genre.id)) {
                              console.log(genre.id)
                              if (!this.genres.includes(genre.name)) {
                                    this.genres.push(genre.name);
                                    console.log(this.genres)
                              }
                        }
                  });
            },

            lessInfo() {
                  this.moreInfoVisibility = false;
                  this.buttonInfo = true;
            },
      }
}
</script>

<template>

      <div class="poster">
            <img :src="imgPath" :alt="content.title">

            <div class="overlay">
                  <h5>Titolo: <span>{{ content.title || content.name }}</span></h5>
                  <p>Titolo originale: <span>{{ content.original_title || content.original_name }}</span></p>
                  <p>Lingua: <span :class="`fi fi-${content.original_language}`"></span></p>
                  <p>Voto:
                        <font-awesome-icon v-for="n in starsFull" icon="fa-solid fa-star" />
                        <font-awesome-icon v-for="n in starsEmpty" icon="fa-regular fa-star" />
                  </p>
                  <p>Overview: <span>{{ shortOverview }}</span></p>
                  <button v-if="buttonInfo" @click="getCredits(), translateGenres()">More info...</button>
                  <button v-if="moreInfoVisibility" @click="lessInfo">Less info...</button>
                  <div v-if="moreInfoVisibility">
                        <p>Genere: <span v-for="genre in genres">"{{ genre }}" </span></p>
                        <p>Cast:</p>
                        <p v-for="actor in credits"><span>{{ actor.name }}</span></p>
                  </div>
            </div>
      </div>

</template>

<style lang="scss">

</style>