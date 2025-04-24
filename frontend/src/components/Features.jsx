"use client";

import { Shield, Award, Truck, Star } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "100% Halal",
    description: "Certified halal meat",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Farm-fresh guarantee",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Same day delivery",
  },
  {
    icon: Star,
    title: "Best Price",
    description: "Competitive rates",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
