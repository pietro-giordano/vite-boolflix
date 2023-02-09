<script>
export default {
      name: 'AppCardTv',
      props: {
            tv: Object
      },
      data() {
            return {
                  stars: [],
                  emptyStars: []
            }
      },
      computed: {

            starsFull() {
                  this.stars = [];
                  for (let i = 0; i < Math.ceil(this.tv.vote_average / 2); i++) {
                        this.stars.push('+1');
                  }
            },

            starsEmpty() {
                  this.emptyStars = [];
                  for (let i = 0; i < Math.floor(5 - (this.tv.vote_average / 2)); i++) {
                        this.emptyStars.push('-1');
                  }
            },

            imgPath() {
                  if (this.tv.backdrop_path == null) {
                        return new URL(`../assets/not-found-image.jpg`, import.meta.url).href;
                  }

                  return `https://image.tmdb.org/t/p/w342` + this.tv.backdrop_path;
            },

      }
}
</script>

<template>

      <ul>
            <li><img :src="imgPath" :alt="tv.name"></li>
            <li>Titolo: {{ tv.name }}</li>
            <li>Titolo originale: {{ tv.original_name }}</li>
            <li>Lingua: {{ tv.original_language }} <span :class="`fi fi-${tv.original_language}`"></span></li>
            <li>Media voto: {{ tv.vote_average }} {{ starsFull }} {{ starsEmpty }}
                  <font-awesome-icon v-for="star in stars" icon="fa-solid fa-star" />
                  <font-awesome-icon v-for="star in emptyStars" icon="fa-regular fa-star" />
            </li>
      </ul>

</template>

<style lang="scss">

</style>