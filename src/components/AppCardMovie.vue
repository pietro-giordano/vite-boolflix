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
                  return `https://image.tmdb.org/t/p/w342` + this.movie.backdrop_path;
            },

            flag() {
                  return `fi fi-` + this.movie.original_language;
            }

      }
}
</script>

<template>

      <ul>
            <li><img :src="imgPath" :alt="movie.title"></li>
            <li>Titolo: {{ movie.title }}</li>
            <li>Titolo originale: {{ movie.original_title }}</li>
            <li>Lingua: {{ movie.original_language }} <span :class="flag"></span></li>
            <li>Media voto: {{ starsVote }}</li>
      </ul>

</template>

<style lang="scss">

</style>