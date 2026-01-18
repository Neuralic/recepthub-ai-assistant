import { motion } from "framer-motion";
import { Calendar, Zap, Bell, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Smart Booking",
    subtitle: "AI handles bookings 24/7",
    description: "Customers book appointments via WhatsApp. AI checks real-time calendar availability, suggests times, and confirms bookings instantly.",
  },
  {
    icon: Zap,
    title: "Instant Responses",
    subtitle: "Answer FAQs automatically",
    description: "Train your AI receptionist with your business policies, pricing, and services. Customers get instant, accurate answers about discounts, hours, and policies.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    subtitle: "Reduce no-shows by 70%",
    description: "Automated appointment reminders sent 24 hours and 2 hours before. Customers can confirm with a single tap.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">[HOW RECEPTHUB HELPS]</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-foreground">
            Automate <span className="heading-italic gradient-text">everything</span> with AI
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="feature-card group"
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-primary font-medium mb-4">{feature.subtitle}</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>

              {/* Chat mockup preview */}
              <div className="bg-muted rounded-xl p-4 mb-6">
                <div className="space-y-2">
                  <div className="flex justify-end">
                    <div className="bg-green-600 text-white text-xs px-3 py-2 rounded-lg max-w-[80%]">
                      {index === 0 && "Hi! I'd like to book an appointment for tomorrow"}
                      {index === 1 && "What are your prices for haircuts?"}
                      {index === 2 && "Can you remind me about my appointment?"}
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-card border border-border text-foreground text-xs px-3 py-2 rounded-lg max-w-[80%]">
                      {index === 0 && "Sure! I have 10am, 2pm, or 4pm available. Which works best?"}
                      {index === 1 && "Our haircuts start at $25. Would you like to book one?"}
                      {index === 2 && "Your appointment is tomorrow at 3pm. Reply 1 to confirm!"}
                    </div>
                  </div>
                </div>
              </div>
              
              <a href="#" className="inline-flex items-center text-primary font-medium text-sm hover:gap-3 gap-2 transition-all">
                LEARN MORE <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
