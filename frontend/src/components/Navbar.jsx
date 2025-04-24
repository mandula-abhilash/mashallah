"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MessageSquare } from "lucide-react";

export default function Navbar({ scrollToSection }) {
  return (
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
  );
}
