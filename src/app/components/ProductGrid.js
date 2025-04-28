"use client";

import { useEffect, useState } from "react";

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('/api/products-grid');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img 
              src={product.image || "/images/default.png"} 
              alt={product.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
