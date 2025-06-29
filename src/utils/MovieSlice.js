import { createSlice } from '@reduxjs/toolkit';

const MovieSlice = createSlice({
  name: 'movies',
  initialState: {
    suggestedMovies: [],
  },
  reducers: {
    setSuggestedMovies: (state, action) => {
      state.suggestedMovies = action.payload;
    },
  },
});

export const { setSuggestedMovies } = MovieSlice.actions;
export default MovieSlice.reducer;
