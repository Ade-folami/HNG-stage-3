import React, { useEffect, useState } from "react";
import axios from "axios";
import { getProducts } from "../api";
import AddToCartButton from "./AddToCartButton";

//   useEffect(() => {
//     const fetchProducts = async (page) => {
//     //   const data = await getProducts(page, 10);
//     //   setProducts(data.products);

//     };
//     fetchProducts();
//   }, [page]);

const fetchProducts = async (page) => {
  const response = await axios.get(
    "https://timbu-get-all-products.reavdev.workers.dev",
    {
      params: {
        organization_id: "929d090c9fe8411282d332c3c6efa209",
        reverse_sort: false,
        page: page,
        size: 5,
        appid: "7QGDD2BQ5OU1QY6",
        apikey: "7c19b29c18f9459085ce5c029c4dbc0820240713121827698072",
      },
    }
  );
  return response.data;
};
const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await fetchProducts(page);
        setProducts(data.items);
        setIsEmpty(data.total === 0);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, [page]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching products</div>;
  if (isEmpty) return <div>No products found</div>;

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img
            src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
            alt={product.name}
          />
          <h2>{product.name}</h2>
          <p> ${product?.current_price[0].USD[0]}</p>
          <p>{product?.description}</p>
          <AddToCartButton product={product} />
        </div>
      ))}
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Products;
