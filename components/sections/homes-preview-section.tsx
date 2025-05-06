"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BellIcon } from "lucide-react";

type HomeCardProps = {
  title: string;
  description: string;
  image: string;
  index: number;
};

function HomeCard({ title, description, image, index }: HomeCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-xl">
        <div className="relative h-60 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
            Coming Soon
          </Badge>
        </div>
        <CardHeader>
          <CardTitle className="font-playfair">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full group">
            <BellIcon className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
            Notify Me
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function HomesPreviewSection() {
  const homes = [
    {
      title: "Studio Apartments",
      description: "Compact, elegant living spaces perfect for young professionals seeking comfort and luxury.",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    },
    {
      title: "1-Bedroom Apartments",
      description: "Thoughtfully designed single-bedroom luxury apartments with premium finishing.",
      image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
    },
    {
      title: "2-Bedroom Apartments",
      description: "Spacious two-bedroom units with modern finishes and versatile living spaces.",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    },
    {
      title: "Luxury Terraces",
      description: "Multi-floor luxury terraces with private entrances and exclusive amenities.",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    },
  ];

  return (
    <section id="properties" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Homes Preview <span className="text-primary">Coming Soon</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our range of luxury properties designed for comfort and elegance. 
              Register your interest to be notified when these units become available.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {homes.map((home, index) => (
            <HomeCard key={index} {...home} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}