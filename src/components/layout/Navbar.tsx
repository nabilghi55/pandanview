"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "#rooms" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-8",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-2xl shadow-primary-dark/5 py-4"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className={cn(
            "p-2 rounded-2xl transition-all duration-500 group-hover:rotate-[360deg]",
            isScrolled ? "bg-primary" : "bg-white/10 backdrop-blur-md"
          )}>
            {/* Using the original logo if possible, but keep the icon as fallback/aesthetic element */}
            <Waves className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "text-2xl font-serif font-bold tracking-tight leading-none",
                isScrolled ? "text-primary-dark" : "text-white drop-shadow-lg"
              )}
            >
              PANDAN VIEW
            </span>
            <span className={cn(
              "text-[8px] font-bold tracking-[0.4em] uppercase mt-1",
              isScrolled ? "text-primary" : "text-secondary"
            )}>
              Mandeh Archipelago
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-secondary relative group",
                isScrolled ? "text-primary-dark/70" : "text-white/90 drop-shadow-md"
              )}
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Button
            variant={isScrolled ? "default" : "secondary"}
            className="px-8 h-12 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-xl transition-all duration-500 hover:scale-105 active:scale-95"
            asChild
          >
            <Link href="https://pandanview.com/" target="_blank">
              Book Now
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-3 rounded-2xl bg-white/10 backdrop-blur-md text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-primary-dark" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-primary-dark" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-6 right-6 mt-4 bg-white rounded-[2.5rem] shadow-2xl p-10 md:hidden flex flex-col gap-6 animate-in slide-in-from-top-10 duration-500 border border-slate-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-serif font-bold text-primary-dark hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full h-16 rounded-2xl text-lg font-bold mt-4" asChild>
            <Link href="https://pandanview.com/" target="_blank">
              Book Now
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
