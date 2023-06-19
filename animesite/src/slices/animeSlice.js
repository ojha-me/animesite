import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchAnime from "../api";

const initialState = {
  animeList: [],
  status: "idle",
  error: null,
};

export const fetchAnimeList = createAsyncThunk(
  "anime/fetchAnimeList",
  async () => {
    const response = await fetchAnime(url);
    return response;
  }
);

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimeList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAnimeList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.animeList = action.payload;
      })
      .addCase(fetchAnimeList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default animeSlice.reducer;
