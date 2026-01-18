import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "ReceptHub saved me 10 hours a week. My customers love getting instant responses!",
    name: "Sarah Johnson",
    business: "Bloom Beauty Salon",
    avatar: "SJ",
  },
  {
    quote: "The AI booking feature is a game-changer. Our no-shows dropped significantly.",
    name: "Mike Davis",
    business: "Elite Fitness Gym",
    avatar: "MD",
  },
  {
    quote: "Setting up was so easy. ReceptHub handles all our FAQs and reminders perfectly.",
    name: "Emily Chen",
    business: "Serenity Spa",
    avatar: "EC",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">[CUSTOMER LOVE]</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-foreground">
            Businesses <span className="heading-italic gradient-text">love</span> ReceptHub
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="testimonial-card"
            >
              {/* Avatar */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">{testimonial.avatar}</span>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-center mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="text-center">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.business}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
