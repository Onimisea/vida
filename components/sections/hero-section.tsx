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
          ease: "power3.out",
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
            src="https://videos.pexels.com/video-files/4770380/4770380-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="video-overlay group"></div>

        {/* Hero Content */}
        <div
          ref={textRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 md:px-8 w-[90%] mx-auto "
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto space-y-4"
          >
            <div>
              <span className="text-xl font-light">Introducing...</span>
              <h1 className="text-[min(10vw,72px)] font-bold text-vida-yellow">
                The Pinnacle of Luxury
              </h1>
            </div>

            <div className="py-2">
              <p className="text-[min(10vw,20px)] mb-2 text-white">
                The biggest real estate investment on the mainland is here,
                located at
                <span className="font-semibold">
                  {" "}
                  Surulere, Lagos, Nigeria.
                </span>
              </p>
              <p className="text-base italic max-w-3xl mx-auto">
                &ldquo;VIDA isn&apos;t just a development, it&apos;s a vision,
                it&apos;s a lifestyle revolution. Strategically located right
                behind the National Stadium, this masterpiece is set to redefine
                luxury living.&rdquo;
              </p>
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-vida-yellow text-black dark:bg-vida-yellow dark:hover:bg-midnight-blue dark:hover:text-white text-md rounded-full hover:text-white hover:bg-midnight-blue transition-all duration-300"
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
              onClick={() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer"
            >
              <ArrowDown className="h-8 w-8 text-vida-yellow" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
