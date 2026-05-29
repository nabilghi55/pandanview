import React from "react";
import Link from "next/link";
import { Waves, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Waves className="w-8 h-8 text-secondary" />
            <span className="text-2xl font-bold tracking-tight">PANDAN VIEW</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Experience the glory of nature at Mandeh Archipelago. Where luxury meets the tranquil beauty of West Sumatra&apos;s hidden gems.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary-dark transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary hover:text-primary-dark transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-secondary">Quick Links</h3>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="#rooms" className="hover:text-white transition-colors">Our Rooms</Link></li>
            <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="#gallery" className="hover:text-white transition-colors">Gallery</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-secondary">Contact Us</h3>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-secondary shrink-0" />
              <span>Kawasan Wisata Mandeh, Pesisir Selatan, Sumatera Barat, Indonesia</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-secondary shrink-0" />
              <span>+62 812-3456-7890</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-secondary shrink-0" />
              <span>info@pandanview.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter/Action */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-secondary">Stay Updated</h3>
          <p className="text-sm text-white/60 mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-secondary"
            />
            <button className="bg-secondary text-primary-dark px-4 py-2 rounded-lg text-sm font-bold hover:bg-secondary/80 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-sm text-white/40">
        <p>© {new Date().getFullYear()} Pandan View Mandeh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
