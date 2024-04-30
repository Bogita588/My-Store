"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Product from '@/components/Product';

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('https://fakestoreapi.com/products/categories');
      const data = await res.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const fetchProductsByCategory = async (category : string) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const productsData = await res.json();
    setProducts(productsData);
    setSelectedCategory(category);
  };

  const handleCategoryClick = (category : string) => {
    fetchProductsByCategory(category);
  };

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-40">
      <section className="flex flex-col space-y-12 pb-44">
        <h1 className="text-5xl font-bold text-center">PRODUCTS IN {selectedCategory.toUpperCase()}</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button key={category} onClick={() => handleCategoryClick(category)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product key={parseInt((product as any).id)} product={product} />

          ))}
        </div>
      </section>
    </main>
  );
}
