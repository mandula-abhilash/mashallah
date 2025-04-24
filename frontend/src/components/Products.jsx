"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const products = [
  {
    name: "Special Curry Cut",
    description: "Perfect size pieces for your curry dishes",
    price: "₹800/kg",
    image: "https://images.pexels.com/photos/6896428/pexels-photo-6896428.jpeg",
  },
  {
    name: "Premium Biryani Cut",
    description: "Large, juicy pieces ideal for biryani",
    price: "₹850/kg",
    image: "https://images.pexels.com/photos/7474203/pexels-photo-7474203.jpeg",
  },
  {
    name: "Boneless Premium",
    description: "Tender, clean boneless meat",
    price: "₹950/kg",
    image: "https://images.pexels.com/photos/6896378/pexels-photo-6896378.jpeg",
  },
  {
    name: "Fresh Liver",
    description: "Clean and fresh mutton liver",
    price: "₹400/kg",
    image: "https://images.pexels.com/photos/6896386/pexels-photo-6896386.jpeg",
  },
  {
    name: "Soup Special",
    description: "Perfect for nutritious soups",
    price: "₹600/kg",
    image: "https://images.pexels.com/photos/6896397/pexels-photo-6896397.jpeg",
  },
  {
    name: "Whole Goat",
    description: "Farm-fresh whole goat, custom cut",
    price: "Price on request",
    image: "https://images.pexels.com/photos/6896401/pexels-photo-6896401.jpeg",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-16 bg-secondary/20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Premium Cuts
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <p className="font-semibold text-lg">{product.price}</p>
                  <Button
                    onClick={() => window.open("https://wa.me/+919876543210")}
                    size="sm"
                  >
                    Order Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
