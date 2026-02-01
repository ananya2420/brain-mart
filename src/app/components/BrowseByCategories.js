"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function BrowseByCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  if (categories.length === 0) {
    return <p>Loading categories...</p>;
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <Image
                src={category.image}
                alt={category.title}
                width={500}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold z-10">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrowseByCategories;
