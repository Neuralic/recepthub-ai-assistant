import { motion } from "framer-motion";
import { Scissors, Sparkles, Dumbbell, Building2, Heart } from "lucide-react";

const industries = [
  { icon: Scissors, name: "Salons" },
  { icon: Sparkles, name: "Spas" },
  { icon: Dumbbell, name: "Gyms" },
  { icon: Building2, name: "Clinics" },
  { icon: Heart, name: "Beauty Studios" },
];

export const TrustSection = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Industry Icons */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <industry.icon className="w-6 h-6" />
                <span className="text-sm font-medium">{industry.name}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-foreground font-semibold text-lg">
            Trusted by businesses worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
};
