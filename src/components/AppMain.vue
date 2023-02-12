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
                  this.$refs.showcase.scrollLeft += 745;
            },

            scrollLeft() {
                  this.$refs.showcase.scrollLeft -= 745;
            },
      }
}
</script>

<template>
      <main>
            <div class="position-relative">
                  <div class="showcase" ref="showcase">
                        <div class="previous" @click="scrollLeft">
                              <font-awesome-icon icon="fa-solid fa-chevron-left" size="xl" />
                        </div>

                        <div class="next" @click="scrollRight">
                              <font-awesome-icon icon="fa-solid fa-chevron-right" size="xl" />
                        </div>

                        <AppCard :content="movie" v-for="movie in store.moviesResults" />
                        <AppCard :content="tv" v-for="tv in store.seriesResults" />
                  </div>
            </div>
      </main>
</template>

<style lang="scss">
main {
      background-color: black;
      height: calc(100vh - 100px);
      color: white;
      overflow: auto;
      padding: 30px 0;

      h2 {
            padding-left: 20px;
      }

      .showcase {
            overflow: hidden;
            white-space: nowrap;
            margin: 10px 0 20px;
            padding-left: 20px;
            scroll-behavior: smooth;

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
                  transform: translateY(-50%);
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
                  height: 506px;
                  position: relative;
                  border: 2px solid white;
                  display: inline-block;
                  margin-right: 30px;
                  white-space: normal;
                  // overflow: auto;

                  &:hover {
                        border: 2px solid #D81F26;
                  }

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
                        padding: 5px 10px;

                        h5 {
                              color: #D81F26;

                              >* {
                                    color: white;
                              }
                        }

                        p {
                              margin-bottom: 0;
                              color: #D81F26;

                              >* {
                                    font-size: smaller;
                                    color: white;
                              }
                        }

                        button {
                              background-color: #D81F26;
                              color: white;
                              cursor: pointer;
                              width: 100px;
                        }
                  }
            }
      }
}
</style>