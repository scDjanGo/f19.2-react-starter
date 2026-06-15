import { useEffect, useState } from "react";
import ProductCard from "./components/cards/ProductCard";

const BASE_URL = `https://69f8242bdd0c226688ee2bc2.mockapi.io/products/`;

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };



  return (
    <div>
    <button onClick={() => setProducts([])}>click</button>
      {products.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        "Empty"
      )}
    </div>
  );
}

export default App;
