import { motion } from "framer-motion";
import { Smartphone, CalendarClock, BellOff } from "lucide-react";

const problems = [
  {
    icon: Smartphone,
    title: "Missed Messages",
    description: "Lost revenue from unanswered inquiries",
  },
  {
    icon: CalendarClock,
    title: "Manual Booking",
    description: "Hours wasted managing appointments",
  },
  {
    icon: BellOff,
    title: "No Follow-ups",
    description: "Customers forget appointments, leading to no-shows",
  },
];

export const ProblemSection = () => {
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
          <span className="section-label">[THE PROBLEM]</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-secondary-foreground">
            Your customers expect <span className="heading-italic">instant</span> responses
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="text-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <problem.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary-foreground">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
