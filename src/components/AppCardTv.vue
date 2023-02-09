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
                  if (this.tv.backdrop_path == null) {
                        return "../assets/not-found-image.jpg";
                  }

                  return `https://image.tmdb.org/t/p/w342` + this.tv.backdrop_path;
            },

      }
}
</script>

<template>

      <ul>
            <li><img :src="`../assets/not-found-image.jpg`" :alt="tv.name"></li>
            <li>Titolo: {{ tv.name }}</li>
            <li>Titolo originale: {{ tv.original_name }}</li>
            <li>Lingua: {{ tv.original_language }} <span :class="`fi fi-${tv.original_language}`"></span></li>
            <li>Media voto: {{ starsVote }}</li>
      </ul>

</template>

<style lang="scss">

</style>