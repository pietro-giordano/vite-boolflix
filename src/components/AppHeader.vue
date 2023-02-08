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

      <form @submit.prevent="$emit('search')" action="">
            <input type="text" v-model="store.searchValue">
            <button type="submit" value="">
                  Search
            </button>
      </form>

</template>

<style lang="scss">

</style>