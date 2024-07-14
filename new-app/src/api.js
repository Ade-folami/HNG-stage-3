import axios from "axios";

const api = axios.create({
  baseURL: "https://api.timbu.cloud/v1",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TIMBU_API_KEY}`,
  },
});

export const getProducts = async (page = 1, limit = 10) => {
  try {
    const response = await api.get(`/products`, {
      params: { page, limit },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
