import { reactive } from 'vue';

export const store = reactive({
      searchValue: '',
      moviesResults: [],
      seriesResults: [],
      genresMovies: [],
      genresSeries: [],
      genres: []
});