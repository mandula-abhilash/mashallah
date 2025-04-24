"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/goat.webp"
          alt="Fresh mutton background"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Premium Quality Mutton
            <br />
            Delivered Fresh Daily
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl mb-8"
          >
            Experience the finest farm-fresh mutton in Bangalore
            <br />
            100% Halal | Free Home Delivery | Custom Cuts
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => window.open("https://wa.me/+919876543210")}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Order Now on WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 border-white text-white"
              onClick={() => window.open("tel:+919876543210")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
