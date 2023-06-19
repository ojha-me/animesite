import axios from "axios";

const BASE_URL = "https://api.consumet.org/anime/gogoanime";

const fetchAnime = async (url) => {
  try {
    const response = await axios.get(BASE_URL + url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching anime:", error);
    throw error;
  }
};

export default fetchAnime;
