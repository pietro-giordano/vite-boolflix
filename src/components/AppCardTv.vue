<script>
export default {
      name: 'AppCardTv',
      props: {
            tv: Object
      }
}
</script>

<template>

      <ul>
            <li><img :src="`https://image.tmdb.org/t/p/w342${tv.backdrop_path}`" :alt="tv.name"></li>
            <li>Titolo: {{ tv.name }}</li>
            <li>Titolo originale: {{ tv.original_name }}</li>
            <li>Lingua: {{ tv.original_language }} <span :class="`fi fi-${tv.original_language}`"></span></li>
            <li>Media voto: {{ tv.vote_average }}</li>
      </ul>

</template>

<style lang="scss">

</style>