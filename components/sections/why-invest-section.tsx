"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, TrendingUp, MapPin, CreditCard, LineChart, Download, MessageSquareText } from "lucide-react";

export function WhyInvestSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: <TrendingUp className="h-12 w-12 text-vida-yellow mb-4" />,
      title: "Strong ROI Potential",
      description: "Invest in a premium development with promising returns as property values in Surulere continue to appreciate.",
    },
    {
      icon: <MapPin className="h-12 w-12 text-vida-yellow mb-4" />,
      title: "Prime Location",
      description: "Strategically positioned behind the National Stadium in Surulere, one of Lagos Mainland&apos;s most sought-after neighborhoods.",
    },
    {
      icon: <CreditCard className="h-12 w-12 text-vida-yellow mb-4" />,
      title: "Flexible Payment Plans",
      description: "Begin your investment journey with just 20% initial down payment and flexible installment options.",
    },
    {
      icon: <LineChart className="h-12 w-12 text-vida-yellow mb-4" />,
      title: "High Market Demand",
      description: "Meet the growing demand for luxury living spaces in Lagos Mainland with an investment that will remain desirable for years to come.",
    },
  ];

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="why-invest" className="py-20 bg-midnight-blue">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Why Invest in <span className="text-vida-yellow font-itc">VIDA</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Discover the compelling reasons to make VIDA Estate your next investment opportunity
            and secure your place in Lagos&apos; most prestigious mainland development.
          </p>
        </motion.div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Card className="h-full border-primary/10 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col items-center text-center">
                    {benefit.icon}
                    <CardTitle className="font-playfair text-vida-brown dark:text-white">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <Button size="lg" className="min-w-[200px] group bg-vida-yellow text-midnight-blue hover:bg-vida-brown hover:text-white">
            <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            Download Brochure
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="min-w-[200px] group border-vida-yellow text-vida-yellow bg-transparent hover:bg-vida-brown/30 hover:text-white"
            onClick={() => window.open("https://wa.me/2348034023726?text=I&apos;m%20interested%20in%20VIDA%20Estate", "_blank")}
          >
            <MessageSquareText className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            Chat with Sales Rep
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}