import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { HomeIcon, Phone, Mail, MessageSquare, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card text-card-foreground pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Column 1 - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">
                  About VIDA
                </Link>
              </li>
              <li>
                <Link href="#properties" className="hover:text-primary transition-colors">
                  Estate Properties
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-primary transition-colors">
                  Features & Amenities
                </Link>
              </li>
              <li>
                <Link href="#progress" className="hover:text-primary transition-colors">
                  Construction Progress
                </Link>
              </li>
              <li>
                <Link href="#why-invest" className="hover:text-primary transition-colors">
                  Why Invest
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  Register Interest
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 2 - Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <div className="space-y-2">
              <p className="font-medium">VIDA Estate</p>
              <p className="text-muted-foreground">
                Behind National Stadium,<br />
                Surulere, Lagos Mainland,<br />
                Lagos, Nigeria
              </p>
              <div className="pt-4">
                <Button variant="outline" size="sm" className="hover:text-primary">
                  View on Map
                </Button>
              </div>
            </div>
          </div>
          
          {/* Column 3 - Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+2348034023726" className="hover:text-primary transition-colors">
                  +234 803 402 3726
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:hello@vidaestate.ng" className="hover:text-primary transition-colors">
                  hello@vidaestate.ng
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                <a 
                  href="https://wa.me/2348034023726?text=I'm%20interested%20in%20VIDA%20Estate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
            
            <div className="pt-4">
              <h4 className="text-sm font-medium mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <HomeIcon className="h-5 w-5 text-primary" />
            <span className="font-semibold">VIDA Estate</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} VIDA Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}