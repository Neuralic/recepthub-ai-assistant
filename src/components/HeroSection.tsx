import { motion } from "framer-motion";
import { Play, Clock, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import phoneMockup from "@/assets/phone-mockup.png";

const floatingBadges = [
  { icon: Clock, text: "24/7 Available", position: "top-8 -left-4 md:-left-16" },
  { icon: TrendingUp, text: "80% Time Saved", position: "bottom-24 -left-8 md:-left-20" },
  { icon: Star, text: "5-Star Reviews", position: "top-20 -right-4 md:-right-16" },
];

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-primary/5 to-transparent pointer-events-none" />
      
      {/* Radial spotlight effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[60%] bg-[radial-gradient(ellipse_at_center,hsl(217_100%_50%/0.15)_0%,transparent_70%)] pointer-events-none" />

      {/* Grid perspective floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(217 100% 50% / 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(217 100% 50% / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: 'perspective(400px) rotateX(65deg)',
            transformOrigin: 'center top',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
          }}
        />
        {/* Horizon glow */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm" />
      </div>

      {/* Side glow effects */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-primary/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your AI Receptionist.{" "}
              <span className="gradient-text heading-italic">Always Available.</span>{" "}
              <span className="gradient-text heading-italic">Never Sleeps.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Automate WhatsApp customer service, bookings, and follow-ups for your business. No coding required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="cta-gradient text-primary-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-[0_0_40px_hsl(217_100%_50%/0.4)] transition-all duration-300"
              >
                <a href="https://receptionist-hub.onrender.com/" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-border text-foreground hover:bg-muted px-8 py-6 text-lg group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Subtle blue glow behind phone - removed dark background */}
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] scale-90" />
              
              {/* Phone mockup */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="relative">
                  <img
                    src={phoneMockup}
                    alt="ReceptHub AI WhatsApp Interface"
                    className="w-72 md:w-80 lg:w-96 relative z-10"
                    style={{
                      filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))',
                    }}
                  />
                </div>
              </motion.div>

              {/* Floating badges with BLUE GLOW */}
              {floatingBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                  className={`absolute ${badge.position} z-20`}
                  style={{
                    boxShadow: '0 0 20px rgba(0, 112, 243, 0.5), 0 0 40px rgba(0, 112, 243, 0.3), 0 4px 20px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[hsl(0_0%_10%/0.9)] backdrop-blur-md border border-primary/40">
                    <badge.icon className="w-4 h-4 text-primary" />
                    <span className="text-foreground text-sm">{badge.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
