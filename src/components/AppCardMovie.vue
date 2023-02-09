<script>
export default {
      name: 'AppCardMovie',
      props: {
            movie: Object,
      },
      computed: {

            starsVote() {
                  return Math.ceil(this.movie.vote_average / 2);
            },

            imgPath() {
                  if (this.movie.backdrop_path == null) {
                        return new URL(`../assets/not-found-image.jpg`, import.meta.url).href;
                  }

                  return `https://image.tmdb.org/t/p/w342` + this.movie.backdrop_path;
            },

            // flag() {
            //       return `fi fi-` + this.movie.original_language;
            // }

      }
}
</script>

<template>

      <ul>
            <li><font-awesome-icon icon="fa-solid fa-star" /></li>
            <li><font-awesome-icon icon="fa-regular fa-star" /></li>
            <li><img :src="imgPath" :alt="movie.title"></li>
            <li>Titolo: {{ movie.title }}</li>
            <li>Titolo originale: {{ movie.original_title }}</li>
            <li>Lingua: {{ movie.original_language }} <span :class="`fi fi-${movie.original_language}`"></span></li>
            <li>Media voto: {{ starsVote }}</li>
      </ul>

</template>

<style lang="scss">

</style>