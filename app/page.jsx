'use client'
import React, { Suspense } from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchComponent from "@/components/Search";

const Home = () => {
  return (
    <>
    <Suspense fallback={<p>Loading...</p>}>
      <Navbar/>
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />
        <HomeProducts />
        <FeaturedProduct />
        <NewsLetter />
      </div>
      <Footer />
    </Suspense>
    </>
  );
};

export default Home;
