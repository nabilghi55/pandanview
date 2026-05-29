"use client";

import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-100">
          {/* Info Side */}
          <div className="bg-primary p-12 md:p-16 text-white md:w-2/5">
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-white/80 mb-12">
              Ready to start your adventure? Contact our team for personalized booking assistance or any inquiries about your stay.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-2xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-wider font-bold mb-1">Call Us</p>
                  <p className="text-lg font-medium">+62 812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-2xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-wider font-bold mb-1">Email Us</p>
                  <p className="text-lg font-medium">info@pandanview.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-2xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-wider font-bold mb-1">Location</p>
                  <p className="text-lg font-medium leading-relaxed">Kawasan Wisata Mandeh, Pesisir Selatan, Sumatera Barat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 md:p-16 md:w-3/5">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary-dark/60 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary-dark/60 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary-dark/60 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Inquiry about Villa Apung"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary-dark/60 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>
              <Button size="lg" className="w-full h-14 text-lg font-bold gap-3 rounded-2xl">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
