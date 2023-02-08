<script>
export default {
      name: 'AppCardMovie',
      props: {
            movie: Object,
      },
      // methods: {

      //       starsVote() {

      //             movie = Math.ceil(movie.vote_average / 2);

      //       }

      // }
}
</script>

<template>

      <ul>
            <li><img :src="`https://image.tmdb.org/t/p/w342${movie.backdrop_path}`" :alt="movie.title"></li>
            <li>Titolo: {{ movie.title }}</li>
            <li>Titolo originale: {{ movie.original_title }}</li>
            <li>Lingua: {{ movie.original_language }} <span :class="`fi fi-${movie.original_language}`"></span></li>
            <li>Media voto: {{ movie.vote_average }}</li>
      </ul>

</template>

<style lang="scss">

</style>