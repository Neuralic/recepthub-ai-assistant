import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free Plan",
    price: "Free Forever",
    features: [
      "50 conversations/month",
      "Basic AI features",
      "Calendar sync",
    ],
    cta: "Start Free",
    featured: false,
  },
  {
    name: "Pro Plan",
    price: "$49/month",
    features: [
      "Unlimited conversations",
      "Advanced AI training",
      "Custom knowledge base",
      "Review automation",
      "Priority support",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    features: [
      "Everything in Pro",
      "Multiple locations",
      "Custom integrations",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 light-section bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">[SIMPLE PRICING]</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-secondary-foreground">
            Start <span className="heading-italic">free</span>. Scale as you grow.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`pricing-card ${plan.featured ? "pricing-card-featured border-primary" : "bg-white border-gray-200"}`}
            >
              <h3 className={`text-lg font-semibold mb-2 ${plan.featured ? "text-primary" : "text-secondary-foreground"}`}>
                {plan.name}
              </h3>
              <div className={`text-3xl font-bold mb-6 ${plan.featured ? "text-primary" : "text-secondary-foreground"}`}>
                {plan.price}
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.featured ? "text-primary" : "text-primary"}`} />
                    <span className={plan.featured ? "text-foreground" : "text-muted-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  plan.featured 
                    ? "cta-gradient text-primary-foreground" 
                    : "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
                variant={plan.featured ? "default" : "outline"}
              >
                <a href="https://receptionist-hub.onrender.com/" target="_blank" rel="noopener noreferrer">
                  {plan.cta}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
