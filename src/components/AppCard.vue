<script>
export default {
      name: 'AppCard',
      props: {
            content: Object,
      },
      data() {
            return {
                  overlay: false
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
                  if (this.content.backdrop_path == null) {
                        return new URL(`../assets/not-found-image.jpg`, import.meta.url).href;
                  }

                  return `https://image.tmdb.org/t/p/w342` + this.content.poster_path;
            },
      }
}
</script>

<template>

      <div class="poster">
            <img :src="imgPath" :alt="content.title">

            <div class="overlay">
                  <h5>Titolo: {{ content.title || content.name }}</h5>
                  <p>Titolo originale: {{ content.original_title || content.original_name }}</p>
                  <p>Lingua: <span :class="`fi fi-${content.original_language}`"></span></p>
                  <p>Voto:
                        <font-awesome-icon v-for="n in starsFull" icon="fa-solid fa-star" />
                        <font-awesome-icon v-for="n in starsEmpty" icon="fa-regular fa-star" />
                  </p>
                  <p>Overview: {{ content.overview }}</p>
            </div>
      </div>

</template>

<style lang="scss">

</style>