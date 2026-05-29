"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const destinations = [
  {
    name: "Sironjong Gadang",
    description: "Iconic island for cliff jumping and swimming in crystal clear waters.",
    image: "https://pandanview.com/images/uploads/586/3874_209pandan_view_mandeh_img__2_.webp",
    size: "large"
  },
  {
    name: "Pulau Setan",
    description: "A piece of heaven with white sandy beaches and calm waves.",
    image: "https://pandanview.com/images/uploads/586/3874_377pandan_view_mandeh_img__3_.webp",
    size: "small"
  },
  {
    name: "Mandeh Bay",
    description: "The panoramic view of the 'Raja Ampat' of West Sumatra.",
    image: "https://pandanview.com/images/uploads/586/11pulau_mandeh_terletak.jpg",
    size: "small"
  },
  {
    name: "Cubadak Island",
    description: "Lush tropical greenery meets the deep blue sea.",
    image: "https://pandanview.com/images/uploads/586/3874_740pandan_view_mandeh_img__4_.webp",
    size: "medium"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6 block"
          >
            Visual Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-extrabold text-primary-dark mb-8"
          >
            Explore the <span className="italic text-primary font-light">Archipelago</span>
          </motion.h2>
          <div className="w-24 h-[2px] bg-secondary mx-auto mb-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[350px]">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={cn(
                "relative group overflow-hidden rounded-[2rem] shadow-2xl shadow-primary-dark/10",
                dest.size === "large" ? "md:col-span-2 md:row-span-2" : "",
                dest.size === "medium" ? "md:col-span-2" : ""
              )}
            >
              <img 
                src={dest.image} 
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-bold text-white mb-3">{dest.name}</h3>
                <p className="text-white/70 text-sm max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-light leading-relaxed">
                  {dest.description}
                </p>
                <div className="mt-6 w-0 group-hover:w-full h-[1px] bg-secondary transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
