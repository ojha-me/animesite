import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAnime,
  fetchRecentEpisodes,
  fetchTopAiring,
  fetchAnimeInfoById,
  fetchEpisodeStream,
} from "../api";

const initialState = {
  animeList: [],
  recentEpisodes: [],
  topAiring: [],
  hasNextPage: false,
  currentPage: 1,
  animeInfo: null,
  episodeStream: null,
  status: "idle",
  error: null,
};

export const fetchAnimeList = createAsyncThunk(
  "anime/fetchAnimeList",
  async ({ query, page }) => {
    const response = await fetchAnime(query, page);
    console.log(response);
    return response;
  }
);

export const fetchRecentEpisodesList = createAsyncThunk(
  "anime/fetchRecentEpisodesList",
  async (page, { dispatch }) => {
    const response = await fetchRecentEpisodes(page);
    dispatch(increasePageNumber);

    return response;
  }
);

export const fetchTopAiringList = createAsyncThunk(
  "anime/fetchTopAiringList",
  async (page, { dispatch }) => {
    dispatch(increasePageNumber());
    const response = await fetchTopAiring(page);
    return response;
  }
);

export const fetchAnimeInfo = createAsyncThunk(
  "anime/fetchAnimeInfoById",
  async (id) => {
    const response = await fetchAnimeInfoById(id);
    return response;
  }
);

export const fetchEpisodeStreamById = createAsyncThunk(
  "anime/fetchEpisodeStreamById",
  async ({ episodeId, serverName }) => {
    const response = await fetchEpisodeStream(episodeId, serverName);
    return response;
  }
);

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    increasePageNumber: (state) => {
      state.currentPage += 1;
    },
    decreasePageNumber: (state) => {
      state.currentPage -= 1;
    },
  },
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
      })
      .addCase(fetchRecentEpisodesList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecentEpisodesList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recentEpisodes = action.payload;
      })
      .addCase(fetchRecentEpisodesList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchTopAiringList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTopAiringList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.topAiring = action.payload;
        state.hasNextPage = action.payload.hasNextPage;
      })
      .addCase(fetchTopAiringList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchAnimeInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAnimeInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.animeInfo = action.payload;
      })
      .addCase(fetchAnimeInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchEpisodeStreamById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEpisodeStreamById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.episodeStream = action.payload;
      })
      .addCase(fetchEpisodeStreamById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default animeSlice.reducer;
export const { increasePageNumber, decreasePageNumber } = animeSlice.actions;
