"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const BeachAnimation = () => {
  return (
    <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#7dd3fc] via-[#bae6fd] to-[#e0f2fe] overflow-hidden">
      {/* Golden Tropical Sun */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-[10%] w-[30rem] h-[30rem] bg-orange-200/40 rounded-full blur-[100px]"
      />

      {/* Swaying Palm Trees (Silhouettes) */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
        {[
          { x: "-5%", scale: 1.2, delay: 0, rotate: -5 },
          { x: "85%", scale: 1.1, delay: 1, rotate: 5 },
        ].map((tree, i) => (
          <motion.div
            key={i}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 0.15, rotate: [tree.rotate, tree.rotate + 2, tree.rotate] }}
            transition={{ 
              y: { duration: 1.5, ease: "easeOut" },
              rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-0 w-[40%] aspect-square"
            style={{ left: tree.x, scale: tree.scale }}
          >
            <svg viewBox="0 0 512 512" fill="currentColor" className="w-full h-full text-primary-dark">
              <path d="M256 512c-10.4 0-19.1-7.1-21-17.1-1.3-6.9-4.8-13.3-10-18.4l-11-10.8c-15.6-15.4-23.9-36.4-23-58.1.9-21.7 10.9-42 27.6-56l22.7-19c11.9-10 18.7-24.5 18.7-39.8V176c0-44.1 35.9-80 80-80s80 35.9 80 80v136.7c0 15.3 6.8 29.8 18.7 39.8l22.7 19c16.7 14 26.7 34.3 27.6 56 .9 21.7-7.4 42.7-23 58.1l-11 10.8c-5.2 5.1-8.7 11.5-10 18.4-1.9 10-10.6 17.1-21 17.1H256z" />
              <path d="M128 256c-35.3 0-64-28.7-64-64 0-14.7 5-28.2 13.4-39 12.3-15.9 31.4-25 50.6-25h16c17.7 0 32 14.3 32 32s-14.3 32-32 32h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128z" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Layered Beach Waves - Liquid Motion */}
      <div className="absolute bottom-0 w-full h-[50%]">
        {[
          { color: "#2dd4bf", speed: 15, height: 180, op: 0.5 },
          { color: "#0d9488", speed: 20, height: 140, op: 0.4 },
          { color: "#134e4a", speed: 12, height: 100, op: 0.3 },
          { color: "#fde68a", speed: 25, height: 60, op: 0.6 }, // Sand Shoreline
        ].map((layer, index) => (
          <motion.div
            key={index}
            className="absolute bottom-0 w-[200%] h-full"
            style={{ opacity: layer.op }}
            animate={{ x: index % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{ duration: layer.speed, repeat: Infinity, ease: "linear" }}
          >
            <svg className="w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="none">
              <path
                d={`M0 400V${layer.height}C360 ${layer.height - 40} 720 ${layer.height + 40} 1080 ${layer.height}C1260 ${layer.height - 20} 1440 ${layer.height} 1440 ${layer.height}V400H0ZM1440 400V${layer.height}C1800 ${layer.height - 40} 2160 ${layer.height + 40} 2520 ${layer.height}C2700 ${layer.height - 20} 2880 ${layer.height} 2880 ${layer.height}V400H1440Z`}
                fill={layer.color}
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Sea Foam / Bubbles */}
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          initial={{ y: "100%", x: `${i * 20}%` }}
          animate={{ y: "-10%", opacity: [0, 0.5, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: i * 2 }}
          className="absolute bottom-0 w-4 h-4 bg-white/40 rounded-full blur-sm"
        />
      ))}

      {/* Overall Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 via-transparent to-transparent" />
    </div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <BeachAnimation />

      {/* Floating Content Area */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center"
          >
            <span className="inline-block py-3 px-10 rounded-full bg-white/20 border border-white/40 text-primary-dark text-xs font-black uppercase tracking-[0.5em] backdrop-blur-3xl shadow-2xl">
              Mandeh Archipelago
            </span>
          </motion.div>
          
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl md:text-[11rem] font-black text-primary-dark tracking-tighter leading-[0.8] uppercase"
            >
              Pandan <span className="text-primary italic font-light lowercase tracking-normal block md:inline md:ml-4">View</span>
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-2xl text-primary-dark/70 mb-12 max-w-3xl mx-auto leading-relaxed font-bold tracking-tight"
          >
            Your ultimate tropical sanctuary where the golden sun kisses the turquoise waves of West Sumatra.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8"
          >
            <Button size="lg" className="px-16 h-20 text-xl font-black rounded-full bg-primary text-white hover:bg-primary-dark hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(42,157,143,0.3)] group overflow-hidden relative">
              <span className="relative z-10 uppercase tracking-widest">Book Paradise</span>
              <motion.div 
                className="absolute inset-0 bg-primary-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              />
            </Button>
            
            <button className="flex items-center gap-6 text-primary-dark group outline-none">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:border-primary transition-all duration-500 backdrop-blur-md">
                  <Play className="w-6 h-6 fill-primary text-primary group-hover:scale-110 transition-transform" />
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 rounded-full border-2 border-primary/50"
                />
              </div>
              <span className="text-lg font-black uppercase tracking-[0.2em] group-hover:text-primary transition-colors">Play Story</span>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Modern Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-1 h-24 bg-primary/10 relative overflow-hidden rounded-full">
          <motion.div 
            animate={{ y: [-96, 96] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
