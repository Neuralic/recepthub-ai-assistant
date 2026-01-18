import { motion } from "framer-motion";
import { MessageSquare, Brain, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MessageSquare,
    title: "Connect WhatsApp",
    description: "Link your WhatsApp Business account in 2 minutes",
  },
  {
    number: "2",
    icon: Brain,
    title: "Train Your AI",
    description: "Add your services, staff, hours, and policies",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Go Live",
    description: "Your AI receptionist starts handling customers instantly",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-24 light-section bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">[GET STARTED IN 3 STEPS]</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-secondary-foreground">
            GET STARTED IN 3 STEPS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative text-center"
            >
              {/* Step number */}
              <div className="text-8xl font-bold text-primary/10 absolute -top-8 left-1/2 -translate-x-1/2 select-none">
                {step.number}
              </div>
              
              {/* Icon box */}
              <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-white shadow-xl border border-gray-100 flex items-center justify-center">
                <step.icon className="w-10 h-10 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-secondary-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-primary/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
