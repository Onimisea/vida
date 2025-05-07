"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-[min(10vw,36px)] font-bold text-midnight-blue dark:text-white font-playfair">
              About <span className="text-vida-yellow font-itc">VIDA</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              We&apos;re bringing you: Studio Apartments, Blocks of Flats (1, 2
              & 3-Bedroom Apartments), Terraces, and Fully Detached &
              Semi-Detached Homes.
            </p>

            <p className="font-semibold text-midnight-blue dark:text-vida-yellow">
              Construction has begun! Secure your unit now with just 20% initial
              down payment and be part of something extraordinary.
            </p>

            <div className="bg-card p-6 rounded-lg shadow-md border border-primary/20">
              <h3 className="text-xl text-vida-yellow font-medium mb-2">Accessible Luxury</h3>
              <p className="text-[min(10vw,17px)]">
                With as little as{" "}
                <span className="text-midnight-blue dark:text-vida-yellow font-bold">₦10M – ₦20M</span>, you
                can own a piece of this premium development.
              </p>
            </div>

            <div className="border-l-4 border-vida-yellow pl-4">
              <p className="text-lg text-accent-foreground italic">
                &ldquo;The first phase is moving fast. Don&apos;t miss
                out!&rdquo;
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
                alt="VIDA Estate Site Plan"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/10 rounded-lg"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-midnight-blue text-white p-4 rounded-lg shadow-lg">
              <p className="text-lg font-semibold">Site Plan</p>
              <p className="text-sm">Surulere, Lagos</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
