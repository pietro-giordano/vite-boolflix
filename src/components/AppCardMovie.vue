<script>
export default {
      name: 'AppCardMovie',
      props: {
            movie: Object,
      },
      data() {
            return {
                  stars: [],
                  emptyStars: [],
                  overlay: false
            }
      },
      computed: {

            starsFull() {
                  this.stars = [];
                  for (let i = 0; i < Math.ceil(this.movie.vote_average / 2); i++) {
                        this.stars.push('+1');
                  }
            },

            starsEmpty() {
                  this.emptyStars = [];
                  for (let i = 0; i < Math.floor(5 - (this.movie.vote_average / 2)); i++) {
                        this.emptyStars.push('-1');
                  }
            },

            imgPath() {
                  if (this.movie.backdrop_path == null) {
                        return new URL(`../assets/not-found-image.jpg`, import.meta.url).href;
                  }

                  return `https://image.tmdb.org/t/p/w342` + this.movie.poster_path;
            },
      }
}
</script>

<template>

      <div class="poster">
            <img :src="imgPath" :alt="movie.title" @mouseover="overlay = true" @mouseleave="overlay = false">

            <div class="overlay" v-show="overlay">
                  <h5>Titolo: {{ movie.title }}</h5>
                  <p>Titolo originale: {{ movie.original_title }}</p>
                  <p>Lingua: <span :class="`fi fi-${movie.original_language}`"></span></p>
                  <p>Voto: {{ movie.vote_average }} {{ starsFull }} {{ starsEmpty }}
                        <font-awesome-icon v-for="star in stars" icon="fa-solid fa-star" />
                        <font-awesome-icon v-for="star in emptyStars" icon="fa-regular fa-star" />
                  </p>
            </div>
      </div>

</template>

<style lang="scss">

</style>