"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator as Elevator, TreePine, Wifi, ShieldCheck, BabyIcon, DumbbellIcon, HeartPulse, Car, Users, Building } from "lucide-react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
};

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full amenity-card border-vida-yellow/10 hover:border-vida-yellow/50">
        <CardContent className="flex flex-col items-center text-center p-6">
          <div className="mb-4 p-3 rounded-full bg-vida-yellow/10 text-vida-yellow">
            {icon}
          </div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: <Elevator size={24} />,
      title: "Elevator / Lift",
      description: "Modern elevators for convenient access to all floors of the complex.",
    },
    {
      icon: <TreePine size={24} />,
      title: "Eco-Friendly Neighborhood",
      description: "Sustainable design with green spaces and energy-efficient systems.",
    },
    {
      icon: <Wifi size={24} />,
      title: "High-Speed Internet",
      description: "Fiber-optic infrastructure ensuring fast and reliable connectivity.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Smart Security System",
      description: "24/7 surveillance and advanced access control for peace of mind.",
    },
    {
      icon: <BabyIcon size={24} />,
      title: "Children's Playground",
      description: "Safe and engaging play area designed for children of all ages.",
    },
    {
      icon: <DumbbellIcon size={24} />,
      title: "Fitness Center",
      description: "State-of-the-art gym equipment for maintaining an active lifestyle.",
    },
    {
      icon: <Car size={24} />,
      title: "Ample Parking",
      description: "Designated parking spaces for residents and visitors.",
    },
    {
      icon: <Building size={24} />,
      title: "Modern Architecture",
      description: "Contemporary design with premium finishes and attention to detail.",
    },
    {
      icon: <HeartPulse size={24} />,
      title: "Wellness Areas",
      description: "Dedicated spaces for relaxation and maintaining a healthy lifestyle.",
    },
    {
      icon: <Users size={24} />,
      title: "Community Spaces",
      description: "Shared areas designed to foster connections among residents.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-midnight-blue dark:text-white">
            Features & <span className="text-vida-yellow">Amenities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            VIDA Estate offers a comprehensive range of premium amenities designed to enhance your living experience
            and provide unparalleled comfort and convenience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}