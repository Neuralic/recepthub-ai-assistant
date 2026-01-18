import { motion } from "framer-motion";
import { Clock, CalendarCheck, ShieldCheck, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { icon: Clock, value: 80, suffix: "%", label: "Time Saved" },
  { icon: CalendarCheck, value: 50, suffix: "%", label: "More Bookings" },
  { icon: ShieldCheck, value: 70, suffix: "%", label: "Fewer No-Shows" },
  { icon: Sun, value: 24, suffix: "/7", label: "Availability" },
];

const CountUpNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <motion.div
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
    >
      <span className="stat-number">{count}{suffix}</span>
    </motion.div>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 pointer-events-none" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <CountUpNumber value={stat.value} suffix={stat.suffix} />
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
