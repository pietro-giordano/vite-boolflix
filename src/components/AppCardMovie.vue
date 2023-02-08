<script>
export default {
      name: 'AppCardMovie',
      props: {
            movie: Object,
      }
}
</script>

<template>

      <ul>
            <li>Titolo: {{ movie.title }}</li>
            <li>Titolo originale: {{ movie.original_title }}</li>
            <li>Lingua: {{ movie.original_language }} <span :class="`fi fi-${movie.original_language}`"></span></li>
            <li>Media voto: {{ movie.vote_average }}</li>
      </ul>

</template>

<style lang="scss">

</style>