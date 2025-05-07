import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  Mail,
  MessageSquare,
  Instagram,
  Facebook,
  LinkedinIcon,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground pt-12 pb-6">
      <div className="w-[90%] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center flex-col md:flex-row gap-10 mb-10">
          {/* Column 2 - Location */}
          <div className="space-y-4 w-full md:w-[30%] flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-vida-brown dark:text-vida-yellow">
              VIDA Estate
            </h3>
            <div className="space-y-2 flex flex-col items-center">
              <p className="text-muted-foreground text-center">
                Behind National Stadium,
                <br />
                Surulere, Lagos Mainland,
                <br />
                Lagos, Nigeria
              </p>
              <div className="pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:text-primary"
                >
                  View on Map
                </Button>
              </div>
            </div>
          </div>

          {/* Column 3 - Contact */}
          <div className="space-y-4 w-full md:w-[30%] flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-vida-brown text-vida-yellow">
              Contact
            </h3>
            <ul className="space-y-2 flex flex-col items-center">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:+2348034023726"
                  className="hover:text-primary transition-colors"
                >
                  +234 803 402 3726
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:hello@vidaestate.ng"
                  className="hover:text-primary transition-colors"
                >
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

            <div className="">
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary"
                >
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="pt-6 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} VIDA Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
