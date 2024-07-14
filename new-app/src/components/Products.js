import React, { useEffect, useState } from "react";
import { getProducts } from "../api";
import AddToCartButton from "./AddToCartButton";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts(page, 10);
      setProducts(data.products);
    };
    fetchProducts();
  }, [page]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.images[0]} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
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
