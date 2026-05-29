"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Wind, Wifi, Coffee, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const rooms = [
  {
    title: "Villa Apung",
    description: "Experience the unique sensation of living directly above the crystal clear turquoise waters of Mandeh.",
    image: "https://pandanview.com/images/uploads/586/3874_Pandan_View_Mandeh_cottage_villa_apung__3_.webp",
    price: "1,500,000",
    amenities: [<Users key="u" className="w-4 h-4" />, <Wind key="w" className="w-4 h-4" />, <Wifi key="wf" className="w-4 h-4" />, <Coffee key="c" className="w-4 h-4" />],
    guests: "2-4",
    tag: "Most Popular"
  },
  {
    title: "Villa Family",
    description: "Spacious and comfortable retreat with panoramic ocean views, perfect for your family gathering.",
    image: "https://pandanview.com/images/uploads/586/3874_Pandan_View_Mandeh_villa_family__5_.webp",
    price: "2,500,000",
    amenities: [<Users key="u" className="w-4 h-4" />, <Wind key="w" className="w-4 h-4" />, <Wifi key="wf" className="w-4 h-4" />, <Coffee key="c" className="w-4 h-4" />],
    guests: "4-6",
    tag: "Luxury"
  },
  {
    title: "Cottage Lumbung",
    description: "Traditional architecture meets modern comfort. A cozy escape for couples and small families.",
    image: "https://pandanview.com/images/uploads/586/3874_889Pandan_View_Mandeh_cottage_lumbung__4_.webp",
    price: "1,200,000",
    amenities: [<Users key="u" className="w-4 h-4" />, <Wind key="w" className="w-4 h-4" />, <Wifi key="wf" className="w-4 h-4" />],
    guests: "2",
    tag: "Authentic"
  }
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              Exquisite Living
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-extrabold text-primary-dark leading-tight"
            >
              Our Private <span className="italic text-primary font-light">Sanctuaries</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary-dark/60 max-w-sm text-lg"
          >
            Each villa is thoughtfully designed to blend with the natural surroundings while providing world-class luxury.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {rooms.map((room, index) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl shadow-primary-dark/10">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Tag */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-primary-dark font-bold text-[10px] uppercase tracking-widest">
                  {room.tag}
                </div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-10 left-10 right-10 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-3 mb-4">
                    {room.amenities.map((icon, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        {icon}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-white text-primary-dark hover:bg-secondary hover:text-primary-dark rounded-2xl h-12 font-bold transition-colors">
                    Book This Villa
                  </Button>
                </div>
              </div>
              
              <div className="px-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-primary-dark">{room.title}</h3>
                  <div className="flex items-center gap-1 text-secondary">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold text-primary-dark">4.9</span>
                  </div>
                </div>
                <p className="text-primary-dark/60 leading-relaxed font-light">
                  {room.description}
                </p>
                <div className="pt-2">
                  <span className="text-xs text-primary-dark/40 uppercase tracking-widest font-bold">Starting from</span>
                  <div className="text-2xl font-bold text-primary">IDR {room.price}<span className="text-sm text-primary-dark/40 font-normal"> / night</span></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
