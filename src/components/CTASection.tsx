import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-primary" />
      
      {/* Glow overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="section-label text-white/80">[CTA SECTION]</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-white">
            Ready to automate<br />your business?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Join hundreds of businesses saving time with AI
          </p>

          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold px-10 py-6 text-lg shadow-xl"
          >
            <a href="https://receptionist-hub.onrender.com/" target="_blank" rel="noopener noreferrer">
              Start Free Trial
            </a>
          </Button>

          <p className="text-white/60 text-sm mt-6">
            No credit card required • 50 free conversations
          </p>
        </motion.div>
      </div>
    </section>
  );
};
