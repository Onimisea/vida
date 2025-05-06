"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function PartnerLogos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && containerRef.current) {
      const logos = containerRef.current.querySelectorAll('.partner-logo');
      
      gsap.fromTo(
        logos,
        { 
          opacity: 0,
          y: 20,
          filter: "grayscale(1)" 
        },
        { 
          opacity: 1,
          y: 0,
          filter: "grayscale(0.5)",
          stagger: 0.15,
          duration: 0.7,
          ease: "power2.out"
        }
      );
    }
  }, [inView]);

  const partners = [
    {
      name: "Architect Co",
      logo: "https://images.pexels.com/photos/2180780/pexels-photo-2180780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Urban Developers",
      logo: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Premier Homes",
      logo: "https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Estate Financiers",
      logo: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Luxury Design",
      logo: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Global Investments",
      logo: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            In Partnership <span className="text-primary">With</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            VIDA Estate is proudly developed in collaboration with industry-leading partners 
            and trusted developers committed to delivering excellence.
          </p>
        </motion.div>

        <Separator className="mb-12" />

        <div 
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="partner-logo flex items-center justify-center h-20 px-6 opacity-0 group"
            >
              <div className="relative w-full h-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain filter transition-all duration-300 group-hover:filter-none group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}