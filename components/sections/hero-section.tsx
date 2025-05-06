"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current && textRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(
        textRef.current.querySelectorAll("div"),
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.2, 
          duration: 1, 
          ease: "power3.out" 
        }
      );
    }
  }, []);

  const scrollToContactForm = () => {
    const contactForm = document.getElementById("contact");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen">
      <div className="video-container">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="video-background"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
        >
          <source 
            src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47b5385a138a4dd&profile_id=139&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="video-overlay"></div>
        
        {/* Hero Content */}
        <div 
          ref={textRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 md:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-primary">
                VIDA Estate
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl font-light text-stroke">
                Introducing VIDA – The Pinnacle of Luxury
              </p>
            </div>
            
            <div className="py-2">
              <p className="text-base md:text-lg lg:text-xl mb-4">
                The biggest real estate investment on the mainland is here, located at 
                <span className="font-semibold"> Surulere, Lagos, Nigeria.</span>
              </p>
              <p className="text-sm md:text-base italic max-w-3xl mx-auto">
                "VIDA isn't just a development, it's a vision, it's a lifestyle revolution. 
                Strategically located right behind the National Stadium, this masterpiece is 
                set to redefine luxury living."
              </p>
            </div>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                className="text-md animate-pulse"
                onClick={scrollToContactForm}
              >
                Register Interest
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="h-8 w-8 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}