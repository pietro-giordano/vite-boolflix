<script>
import { store } from '../store';

export default {
      name: 'AppHeader',
      data() {
            return {
                  store
            }
      }
}
</script>

<template>

      <header class="d-flex justify-content-between align-items-center p-3">
            <h1>Boolflix</h1>

            <form @submit.prevent="$emit('search')" class="d-flex">
                  <input type="text" placeholder="Inserisci film/serie-tv..." class="form-control me-2"
                        v-model="store.searchValue">
                  <button type="submit" class="btn btn-light">
                        Search
                  </button>
            </form>
      </header>

</template>

<style lang="scss">
header {
      background-color: black;
      height: 100px;

      h1 {
            color: #D81F26;
            text-transform: uppercase;
      }

      .form-control:focus {
            border-color: gray;
            box-shadow: none;
      }
}
</style>