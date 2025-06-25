{/*'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';

const SearchClient = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("query") || "";
  const category = searchParams.get("category") || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    router.push(`/search?query=${query}&category=${selectedCategory}`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = `/api/products?query=${encodeURIComponent(query)}&category=${encodeURIComponent(category)}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.success) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query, category]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Search Results for {query} {category && `in ${category}`}
      </h1>

      <div className="mb-4">
        <label htmlFor="category" className="font-semibold mr-2">Filter by Category:</label>
        <select
          id="category"
          value={category}
          onChange={handleCategoryChange}
          className="border p-2 rounded-md"
        >
          <option value="">All Categories</option>
          <option value="T shirt">T Shirts</option>
          <option value="Hoodie">Hoodie</option>
          <option value="Collage">Collage</option>
          <option value="SweatShirt">Sweatshirt</option>
          <option value="Polos">Polos</option>
          <option value="Kids">Kids</option>
          <option value="Caps">Caps</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No results found.</p>
      )}
    </div>
  );
};

export default SearchClient;*/}
