<script>
export default {
      name: 'AppCardTv',
      props: {
            tv: Object
      },
      computed: {

            starsVote() {
                  return Math.ceil(this.tv.vote_average / 2);
            },

            imgPath() {
                  return `https://image.tmdb.org/t/p/w342` + this.tv.backdrop_path;
            },

            flag() {
                  return `fi fi-` + this.tv.original_language;
            }

      }
}
</script>

<template>

      <ul>
            <li><img :src="imgPath" :alt="tv.name"></li>
            <li>Titolo: {{ tv.name }}</li>
            <li>Titolo originale: {{ tv.original_name }}</li>
            <li>Lingua: {{ tv.original_language }} <span :class="flag"></span></li>
            <li>Media voto: {{ starsVote }}</li>
      </ul>

</template>

<style lang="scss">

</style>