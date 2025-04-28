"use client"

import { useEffect, useState } from "react";

function OurProducts() {
  const [ourProducts, setOurProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOurProducts() {
      const response = await fetch('/api/our-products');
      const data = await response.json();
      setOurProducts(data);
      setLoading(false);
    }
    fetchOurProducts();
  }, []);

  if (loading) {
    return <div>Loading our Products Page...</div>; // Show loading message when data is loading
  }

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {ourProducts.map((product) => (
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
    </section>
  );
}

export default OurProducts;
