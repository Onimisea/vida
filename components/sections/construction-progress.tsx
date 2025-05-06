"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, CalendarDays } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type MilestoneCardProps = {
  title: string;
  date: string;
  description: string;
  status: "completed" | "in-progress" | "upcoming";
  index: number;
};

function MilestoneCard({ title, date, description, status, index }: MilestoneCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const getStatusIcon = () => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-amber-500 animate-pulse" />;
      case "upcoming":
        return <CalendarDays className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusClass = () => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "in-progress":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
      case "upcoming":
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={`h-full border-l-4 ${
        status === "completed" ? "border-l-green-500" : 
        status === "in-progress" ? "border-l-amber-500" : 
        "border-l-muted"
      }`}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-medium">{title}</CardTitle>
            {getStatusIcon()}
          </div>
        </CardHeader>
        <CardContent className="py-2">
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="pt-2">
          <span className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${getStatusClass()}`}>
            {status === "completed" ? "Completed" : 
             status === "in-progress" ? "In Progress" : 
             "Upcoming"} • {date}
          </span>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function ConstructionProgress() {
  const milestones = [
    {
      title: "Land Clearing & Preparation",
      date: "January 2025",
      description: "Complete clearing of the site and preparation for foundation work.",
      status: "completed" as const,
    },
    {
      title: "Foundation Phase",
      date: "March 2025",
      description: "Laying the foundations for all buildings and structural elements.",
      status: "in-progress" as const,
    },
    {
      title: "Infrastructure Development",
      date: "June 2025",
      description: "Installation of main utilities, roads, and essential infrastructure.",
      status: "upcoming" as const,
    },
    {
      title: "Building Structures",
      date: "October 2025",
      description: "Completion of main structural elements for all residential buildings.",
      status: "upcoming" as const,
    },
    {
      title: "Interior & Finishing",
      date: "February 2026",
      description: "Interior work, finishing, and installation of premium features.",
      status: "upcoming" as const,
    },
    {
      title: "Final Inspection & Handover",
      date: "May 2026",
      description: "Quality assurance checks and property handover to owners.",
      status: "upcoming" as const,
    },
  ];

  // Calculate overall progress percentage
  const completedMilestones = milestones.filter(m => m.status === "completed").length;
  const inProgressMilestones = milestones.filter(m => m.status === "in-progress").length;
  const progressPercentage = Math.round(((completedMilestones + inProgressMilestones * 0.5) / milestones.length) * 100);

  return (
    <section id="progress" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Construction <span className="text-primary">Progress</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Track the development journey of VIDA Estate as we transform our vision into reality.
            Construction is moving forward according to our timeline.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex justify-between mb-2 text-sm">
              <span>Overall Progress</span>
              <span className="font-medium">{progressPercentage}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((milestone, index) => (
            <MilestoneCard key={index} {...milestone} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}