// FeaturedProducts Component (Dynamic version with API call)
"use client";

import { useEffect, useState } from "react";

export default function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        const res = await fetch("/api/featured-products"); // Your API endpoint for featured products
        if (!res.ok) {
          throw new Error("Failed to fetch featured products");
        }
        const data = await res.json();
        setFeaturedProducts(data); // Assuming the response is an array of featured products
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchFeaturedProducts();
  }, []);

  if (loading) {
    return <p>Loading featured products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6">Our Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <div key={product.id} className="bg-yellow-100 p-6 rounded-lg text-center">
            <img
              src={product.image || "/images/default.png"}
              alt={product.name}
              className="mx-auto mb-4 w-24 h-24"
            />
            <p className="font-semibold">{product.name}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
          See All
        </button>
      </div>
    </section>
  );
}
