{/* "use client";
import { assets } from "@/assets/assets";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect, Suspense } from "react";

const SearchComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // Store category filter
  const query = searchParams.get("query") || "";
  const category = searchParams.get("category") || "";

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery) return;

    router.push(`/search?query=${encodeURIComponent(searchQuery)}&category=${encodeURIComponent(selectedCategory)}`);
    
  };

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
    <Suspense fallback={<p>Loading...</p>}>
        <div className="max-w-xl mx-auto p-6">
            <form onSubmit={handleSearch} className="flex items-center gap-2 mb-4">
                {/* Category Filter Dropdown */}
                {/*<label htmlFor="category" className="font-semibold mr-2">Filter by Category:</label>*/}
                {/*<select
                    id="category"
                    className="w-1/5 mt-4 p-3 border rounded-lg shadow-sm"
                    value={category}
                    onChange={handleCategoryChange}
                >
                    <option value="">All</option>
                    <option value="T shirt">T shirt</option>
                    <option value="Hoodie">Hoodie</option>
                    <option value="Collage">Collage</option>
                    <option value="Sweatshirt">Sweatshirt</option>
                    <option value="Polos">Polos</option>
                    <option value="Kids">Kids</option>
                    <option value="Caps">Caps</option>
                </select>*/}



                {/* Search Bar */}
                {/*<div className="flex items-center gap-2">       
                    <input
                        type="text"
                        placeholder="Search products by name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"   
                    />
                    <Link href={`/search?query=${searchQuery}&category=${selectedCategory}`} className="flex items-center justify-center bg-blue-200 text-white p-3 rounded-lg shadow-sm hover:bg-blue-600 transition duration-200">
                        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
                    </Link>
                </div>
                {/* Search Button */}
                {/*<button type="submit" className="hidden">Search</button>
            </form>   
        </div> 
    </Suspense>
  );
};

export default SearchComponent; */}
