// app/products/page.js
"use client"

import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false); // Set loading to false after data is fetched
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message until data is fetched
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 text-center">
            <img
              src={product.image || "/images/default.png"}
              alt={product.name}
              className="w-32 h-32 mx-auto mb-4"
            />
            <h3 className="font-semibold">{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
