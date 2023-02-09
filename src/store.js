import { reactive } from 'vue';

export const store = reactive({
      searchValue: '',
      moviesResults: [],
      seriesResults: []
});