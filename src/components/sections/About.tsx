"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Map, Shield, Users } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Guest Rating", value: "4.9/5", icon: <Shield className="w-5 h-5" /> },
    { label: "Happy Visitors", value: "10k+", icon: <Users className="w-5 h-5" /> },
    { label: "Hidden Islands", value: "12", icon: <Map className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="py-32 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl group">
              <img 
                src="https://pandanview.com/images/uploads/586/3874_209pandan_view_mandeh_img__2_.webp" 
                alt="Pandan View Landscape"
                className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500" />
            </div>
            
            {/* Floating Info Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2rem] shadow-2xl z-20 max-w-xs border border-slate-50 hidden md:block"
            >
              <p className="text-primary-dark text-2xl font-bold italic leading-tight mb-4">
                &quot;The Jewel of West Sumatra&quot;
              </p>
              <p className="text-primary-dark/40 text-sm font-medium">
                Pandan View Mandeh is where luxury finds its home in the heart of nature.
              </p>
            </motion.div>

            {/* Decorative circles */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-10"
          >
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs block">Our Story</span>
              <h2 className="text-5xl md:text-7xl font-extrabold text-primary-dark leading-tight">
                Beyond the <span className="italic text-primary font-light">Horizon</span>
              </h2>
            </div>
            
            <p className="text-primary-dark/60 text-xl leading-relaxed font-light">
              Pandan View Mandeh isn&apos;t just a destination; it&apos;s a tribute to the raw beauty of the Mandeh Archipelago. We invite you to lose yourself in the turquoise infinity of the ocean and rediscover peace.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-6">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-primary">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary-dark">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary-dark/40">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {["Authentic Hospitality", "Private Island Tours", "Sustainable Luxury"].map((tag) => (
                <div key={tag} className="flex items-center gap-2 py-2 px-5 rounded-full bg-slate-50 border border-slate-100 text-primary-dark/60 text-xs font-bold uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
