<script>
import { store } from '../store';
import AppCard from './AppCard.vue';

export default {
      name: 'AppMain',
      components: {
            AppCard
      },
      data() {
            return {
                  store
            }
      },
      methods: {

            scrollRight() {
                  this.scrollLeft += 50;
            }

      }
}
</script>

<template>
      <main>
            <div class="showcase">
                  <h2 v-if="store.moviesVisibility">Film trovati: {{ store.moviesResults.length }}</h2>

                  <div class="previous" @click="scrollRight">
                        <font-awesome-icon icon="fa-solid fa-chevron-left" size="xl" />
                  </div>

                  <div class="next">
                        <font-awesome-icon icon="fa-solid fa-chevron-right" size="xl" />
                  </div>

                  <AppCard :content="movie" v-for="movie in store.moviesResults" />
            </div>

            <div class="showcase">
                  <h2 v-if="store.seriesVisibility">Serie trovate: {{ store.seriesResults.length }}</h2>

                  <div class="previous">
                        <font-awesome-icon icon="fa-solid fa-chevron-left" size="xl" />
                  </div>

                  <div class="next">
                        <font-awesome-icon icon="fa-solid fa-chevron-right" size="xl" />
                  </div>

                  <AppCard :content="serie" v-for="serie in store.seriesResults" />
            </div>
      </main>
</template>

<style lang="scss">
main {
      background-color: gray;
      height: calc(100vh - 100px);
      color: white;
      overflow: auto;

      .showcase {
            overflow-x: auto;
            white-space: nowrap;
            margin: 10px 0 20px 20px;
            position: relative;

            &:hover .previous,
            &:hover .next {
                  display: block;
            }

            .previous,
            .next {
                  display: none;
                  width: 50px;
                  height: 50px;
                  border-radius: 50%;
                  background-color: rgba(255, 255, 255, 0.7);
                  color: black;
                  position: absolute;
                  z-index: 2;
                  top: 50%;
                  text-align: center;
                  line-height: 50px;
                  cursor: pointer;
            }

            .previous {
                  left: 2vw;
            }

            .next {
                  right: 2vw;
            }

            .poster {
                  width: 342px;
                  height: 510px;
                  position: relative;
                  border: 2px solid white;
                  display: inline-block;
                  margin-right: 30px;
                  white-space: pre-wrap;

                  img {
                        width: 100%;
                        height: 100%;

                  }

                  &:hover .overlay {
                        display: block;
                  }

                  .overlay {
                        display: none;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background-color: rgba($color: #000000, $alpha: 0.8);
                        width: 100%;
                        height: 100%;
                        padding: 20% 10px;

                        p {
                              margin-bottom: 0;
                        }
                  }
            }
      }
}
</style>