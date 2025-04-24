"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Star,
  Shield,
  Award,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary">
            Mashallah Mutton Center
          </h1>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {["Home", "About", "Products", "Order", "Gallery", "Contact"].map(
                (item) => (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink
                      className="px-4 py-2 text-sm hover:text-primary cursor-pointer"
                      onClick={() => scrollToSection(item.toLowerCase())}
                    >
                      {item}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
          <Button
            className="hidden md:flex"
            onClick={() => window.open("https://wa.me/+919876543210")}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Order Now
          </Button>
        </div>
      </nav>

      {/* Floating WhatsApp button (mobile) */}
      <Button
        className="fixed bottom-4 right-4 rounded-full md:hidden z-50 bg-green-500 hover:bg-green-600"
        size="icon"
        onClick={() => window.open("https://wa.me/+919876543210")}
      >
        <MessageSquare className="w-6 h-6" />
      </Button>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen relative flex items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/6896379/pexels-photo-6896379.jpeg"
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
                className="bg-green-600 hover:bg-green-700"
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

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
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
            ].map((feature, index) => (
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

      {/* Products Section */}
      <section id="products" className="py-16 bg-secondary/20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Premium Cuts
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Special Curry Cut",
                description: "Perfect size pieces for your curry dishes",
                price: "₹800/kg",
                image:
                  "https://images.pexels.com/photos/6896428/pexels-photo-6896428.jpeg",
              },
              {
                name: "Premium Biryani Cut",
                description: "Large, juicy pieces ideal for biryani",
                price: "₹850/kg",
                image:
                  "https://images.pexels.com/photos/7474203/pexels-photo-7474203.jpeg",
              },
              {
                name: "Boneless Premium",
                description: "Tender, clean boneless meat",
                price: "₹950/kg",
                image:
                  "https://images.pexels.com/photos/6896378/pexels-photo-6896378.jpeg",
              },
              {
                name: "Fresh Liver",
                description: "Clean and fresh mutton liver",
                price: "₹400/kg",
                image:
                  "https://images.pexels.com/photos/6896386/pexels-photo-6896386.jpeg",
              },
              {
                name: "Soup Special",
                description: "Perfect for nutritious soups",
                price: "₹600/kg",
                image:
                  "https://images.pexels.com/photos/6896397/pexels-photo-6896397.jpeg",
              },
              {
                name: "Whole Goat",
                description: "Farm-fresh whole goat, custom cut",
                price: "Price on request",
                image:
                  "https://images.pexels.com/photos/6896401/pexels-photo-6896401.jpeg",
              },
            ].map((product, index) => (
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

      {/* Contact Section */}
      <section id="contact" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Visit Our Store
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="space-y-4 pt-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <p>123, Sample Street, Bangalore - 560001</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+919876543210" className="hover:text-primary">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <p>Open daily: 7 AM to 9 PM</p>
                </div>
                <div className="aspect-video w-full mt-6 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708835436044!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} Mashallah Mutton Center - Premium
            Quality Halal Meat
          </p>
          <p className="text-sm mt-2">Designed with ♥ by VISDAK</p>
        </div>
      </footer>
    </div>
  );
}
