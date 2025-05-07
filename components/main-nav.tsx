"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Properties", href: "#properties" },
    { name: "Features", href: "#features" },
    { name: "Progress", href: "#progress" },
    { name: "Why Invest", href: "#why-invest" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled
            ? "bg-[#121212] backdrop-blur-md shadow-md"
            : "bg-transparent"
        } transition-all duration-300`}
      >
        <div className="w-[90%] mx-auto flex items-center justify-between h-[80px]">
          <Link href="/" className="">
            <span
              className={`text-[min(10vw,48px)] font-itc block -mb-3  ${
                isScrolled
                  ? "text-white dark:text-white"
                  : "text-white [-webkit-text-stroke:1px_white]"
              } transition-all duration-300`}
            >
              VIDA
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md2:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[15px] ${
                  isScrolled ? "text-white dark:text-white" : "text-white"
                } font-medium hover:font-bold transition-all hover:text-vida-yellow`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              size="lg"
              className="hidden lg:flex bg-vida-yellow text-black dark:bg-vida-yellow dark:hover:bg-midnight-blue dark:hover:text-white text-md rounded-full hover:text-white hover:bg-midnight-blue transition-all duration-300"
            >
              Register Interest
            </Button>
            <ModeToggle isScrolled={isScrolled} />
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md2:hidden">
            <ModeToggle />
            <Button
              variant="link"
              size="sm"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className={`${
                isScrolled ? "text-white " : "text-white "
              } transition-all hover:text-vida-yellow duration-300`}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile navigation menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-chefchaouen-blue pt-16"
          >
            <nav className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className=" py-2 border-b border-border font-medium transition-colors text-midnight-blue hover:text-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                className="bg-vida-yellow text-black dark:bg-vida-yellow dark:hover:bg-midnight-blue dark:hover:text-white text-md rounded-lg hover:text-white hover:bg-midnight-blue transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Register Interest
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
