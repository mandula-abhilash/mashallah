"use client";

import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar scrollToSection={scrollToSection} />

      {/* Floating WhatsApp button (mobile) */}
      <Button
        className="fixed bottom-4 right-4 rounded-full md:hidden z-50 bg-accent hover:bg-accent/90 text-accent-foreground"
        size="icon"
        onClick={() => window.open("https://wa.me/+919876543210")}
      >
        <MessageSquare className="w-6 h-6" />
      </Button>

      <Hero />
      <Features />
      <Products />

      {/* Quality Guarantee Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Quality Guarantee</h2>
            <p className="text-lg mb-8">
              We take pride in delivering the freshest, highest-quality mutton
              to your doorstep. Every piece is carefully selected, properly cut,
              and hygienically packed to ensure you get nothing but the best.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/20"
              onClick={() => window.open("https://wa.me/+919876543210")}
            >
              Order Premium Mutton Now
            </Button>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
