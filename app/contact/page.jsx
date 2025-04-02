'use client'
import { assets } from '@/assets/assets';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from "next/legacy/image";
import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <>
        <Navbar />
        <div className="px-6 md:px-16 lg:px-32">
            {/* Banner section */}
            <div className="relative h-[40vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
                <Image 
                    src={assets.conban} 
                    alt="Background Banner" 
                    layout="fill" 
                    objectFit="cover" 
                    quality={100} 
                    className="-z-10"
                />
                <h2 className="text-grey-400 text-3xl font-bold relative">#Contact us</h2>
                <p className="text-grey-400 text-lg relative">Leave a message. We'd love to hear from you!</p>
            </div>

            {/* Details section */}
            <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10 gap-8">
                <div className="w-full md:w-2/5">
                    <span className="text-3xl text-gray-600 font-medium">Get In Touch</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight my-4">
                        Visit our shop or contact us today
                    </h2>
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Head Office</h3>

                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-blue-600 text-lg" />
                            <p>CBD, Nairobi, Kenya</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <FaEnvelope className="text-red-500 text-lg" />
                            <p>trevor96ronny@gmail.com</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <FaPhoneAlt className="text-green-500 text-lg" />
                            <p>+254 719 166 799</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <FaClock className="text-gray-500 text-lg" />
                            <p>Monday to Saturday: 9:00 AM - 5:00 PM</p>
                        </li>
                    </ul>
                </div>

                {/* Google Map */}
                <div className="w-full md:w-3/5 h-64 md:h-96">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.814221508135!2d36.82409317408069!3d-1.2854595356233514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11cce26e7913%3A0x966945e229804083!2sDynamic%20Mall!5e0!3m2!1sen!2ske!4v1718216928726!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>


        </div>
        <Footer />
    </>
    
  )
}

export default Contact;