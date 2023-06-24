import axios from "axios";

const BASE_URL = "https://api.consumet.org/anime/gogoanime";

export const fetchAnime = async (query, page) => {
  try {
    const response = await axios.get(`${BASE_URL}/${query}?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching anime:", error);
    throw error;
  }
};

export const fetchRecentEpisodes = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/recent-episodes`, {
      params: { page: page },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recent episodes:", error);
    throw error;
  }
};

export const fetchTopAiring = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/top-airing`, {
      params: { page: page ?? 1 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching top airing anime:", error);
    throw error;
  }
};

export const fetchAnimeInfoById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/info/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching anime info:", error);
    throw error;
  }
};

export const fetchEpisodeStream = async (episodeId) => {
  try {
    const response = await axios.get(`${BASE_URL}/watch/${episodeId}`, {
      params: { server: "vidstreaming" },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching episode stream:", error);
    throw error;
  }
};
