import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async () => {
    const querySnapshot = await getDocs(collection(db, "movies"));
    const movies = [];

    querySnapshot.forEach((doc) => {
      movies.push({ id: doc.id, ...doc.data() });
    });

    return movies;
  }
);

const initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.recommend = action.payload.filter(
        (movie) => movie.type === "recommend"
      );
      state.newDisney = action.payload.filter(
        (movie) => movie.type === "new"
      );
      state.original = action.payload.filter(
        (movie) => movie.type === "original"
      );
      state.trending = action.payload.filter(
        (movie) => movie.type === "trending"
      );
    });
  },
});

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
