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
import { Phone, MapPin, Clock, MessageSquare } from "lucide-react";

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
        className="pt-24 md:pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fresh Khasi Mutton in Bangalore
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              100% Halal | Home Delivery Available | Custom Cuts
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => window.open("https://wa.me/+919876543210")}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Order Now on WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("tel:+919876543210")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "100% Halal",
                description:
                  "All our meat is certified Halal and processed according to Islamic guidelines.",
              },
              {
                title: "Farm-Fresh Quality",
                description:
                  "We source our goats directly from trusted local farms to ensure the best quality.",
              },
              {
                title: "Hygienic Processing",
                description:
                  "Our facility maintains the highest standards of cleanliness and hygiene.",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-secondary/20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Curry Cut",
                description: "Perfect size pieces for your curry dishes",
                price: "₹800/kg",
              },
              {
                name: "Biryani Cut",
                description: "Specially cut pieces ideal for biryani",
                price: "₹850/kg",
              },
              {
                name: "Boneless",
                description: "Premium quality boneless meat",
                price: "₹950/kg",
              },
              {
                name: "Liver",
                description: "Fresh and clean mutton liver",
                price: "₹400/kg",
              },
              {
                name: "Paya",
                description: "Goat trotters for soup",
                price: "₹200/piece",
              },
              {
                name: "Whole Goat",
                description: "Full goat, custom cut as per requirement",
                price: "Price on request",
              },
            ].map((product, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <p className="font-semibold">{product.price}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Order Now</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Delivery Information</CardTitle>
                <CardDescription>
                  We deliver across Bangalore city
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <p>Delivery available in: All major areas of Bangalore</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <p>Delivery timing: 8 AM to 8 PM</p>
                </div>
                <Button
                  className="w-full"
                  onClick={() => window.open("https://wa.me/+919876543210")}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Order on WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-secondary/20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="aspect-square relative overflow-hidden rounded-lg"
              >
                <Image
                  src={`https://images.pexels.com/photos/${
                    10000 + index
                  }/pexels-photo-${10000 + index}.jpeg`}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="space-y-4 pt-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <p>123, Sample Street, Bangalore - 560001</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <a href="tel:+919876543210" className="hover:text-primary">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <p>Open daily: 7 AM to 9 PM</p>
                </div>
                <div className="aspect-video w-full mt-6">
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
          <p>Copyright © {new Date().getFullYear()} Mashallah Mutton Center</p>
          <p className="text-sm mt-2">Designed by VISDAK</p>
        </div>
      </footer>
    </div>
  );
}
