"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, ChevronRight, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import Image from "next/image";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function LeadCaptureForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Registration successful!");
  };

  const handleWhatsAppClick = () => {
    const whatsappUrl =
      "https://wa.me/2348034023726?text=I'm%20interested%20in%20VIDA%20Estate";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-muted/40">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 w-[90%] mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-midnight-blue dark:text-white">
            Register Your <span className="text-vida-yellow">Interest</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Be among the first to secure your place in VIDA Estate. Fill out the
            form below, and our dedicated sales team will reach out to you with
            more information.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-[95%] lg:w-[80%] lg2:w-[70%] mx-auto"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
                alt="VIDA Estate Site Plan"
                fill
                className="object-cover rounded-lg "
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/10 rounded-lg"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-midnight-blue text-white p-4 rounded-lg shadow-lg">
              <p className="text-lg font-semibold">Site Plan</p>
              <p className="text-sm">Surulere, Lagos</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-vida-yellow/20 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="font-playfair text-2xl">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        placeholder="John Doe"
                        {...register("fullName")}
                      />
                      {errors.fullName && (
                        <p className="text-destructive text-sm">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="+234 123 456 7890"
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="I'm interested in..."
                        rows={3}
                        {...register("message")}
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col md2:flex-row gap-4">
                      <Button
                        type="submit"
                        className="flex-1 bg-vida-yellow text-midnight-blue hover:bg-midnight-blue hover:text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <span className="animate-spin mr-2">⟳</span>{" "}
                            Submitting...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Register Interest{" "}
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </span>
                        )}
                      </Button>

                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 bg-green-50 text-green-600 border-green-200 hover:bg-green-100 hover:text-green-700 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800 dark:hover:bg-green-900/30"
                        onClick={handleWhatsAppClick}
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Ask on WhatsApp
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="py-8 text-center">
                    <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">
                      Registration Successful!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for your interest in VIDA Estate. Our team will
                      contact you shortly with more information about this
                      premium development.
                    </p>
                    <Button
                      variant="outline"
                      className="bg-green-50 text-green-600 border-green-200 hover:bg-green-100 hover:text-green-700 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800 dark:hover:bg-green-900/30"
                      onClick={handleWhatsAppClick}
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Chat with Us on WhatsApp
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
