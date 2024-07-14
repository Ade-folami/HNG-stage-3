import axios from "axios";

const fetchProducts = async ({
    organization_id,
    reverse_sort,
    page,
    size,
    Appid,
    Apikey,
  }) => {
    const url = new URL("https://timbu-get-all-products.reavdev.workers.dev/");
    url.searchParams.append("organization_id", organization_id);
    url.searchParams.append("reverse_sort", reverse_sort);
    url.searchParams.append("page", page);
    url.searchParams.append("size", size);
    url.searchParams.append("Appid", Appid);
    url.searchParams.append("Apikey", Apikey);
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };
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

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};
