import { useEffect, useState } from "react";
import { getProducts } from "./api";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts(page);
        setProducts(data.products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [page]);

  if (loading) return;
  <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <h1>Shop</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image_url} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
      <button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>
        Previous Page
      </button>
    </div>
  );
};

export default Shop;
