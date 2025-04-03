'use client'
import React, { Suspense } from "react";
import { assets } from "@/assets/assets";
import Image from "next/legacy/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const About = () => {
    return (
      <>  
      <Suspense fallback={<p>Loading...</p>}>
        <Navbar />  
        <div className="px-6 md:px-16 lg:px-32">
            {/* About Header Section */}
            <div className="relative h-[40vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
            <Image 
                src={assets.banner1} 
                alt="Background Banner" 
                layout="fill" 
                objectFit="cover" 
                quality={100} 
                className="-z-10"
          />
                <h2 className="text-white text-3xl font-bold relative">#About us</h2>
                <p className="text-white text-lg relative">Home of the best quality branded outfits and apparel.</p>
            </div>
    
            {/* About Content Section */}
            <div className="flex flex-col md:flex-row items-center p-6 md:p-12">
                <Image src={assets.a6} alt="Branded outfit example" className="w-full md:w-1/2 h-auto rounded-lg shadow-lg" />
                
                <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
                    <h2 className="text-2xl font-bold">Who we are?</h2>
                    <p className="text-gray-700 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit enim sed voluptas, porro numquam ducimus. 
                    Magni quisquam obcaecati placeat natus fugit asperiores, ab deserunt, reprehenderit aperiam assumenda rerum, ad consectetur!
                    </p>
        
                    <abbr title="Photography Modes" className="block mt-4 text-gray-600 italic">
                    Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.
                    </abbr>
        
                    {/* Animated Scrolling Text */}
                    <div className="mt-6 bg-gray-300 py-2 overflow-hidden">
                    <p className="animate-marquee whitespace-nowrap text-gray-800 font-semibold">
                        Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
      </Suspense>
      </>
    );
  };
  
  export default About;
  