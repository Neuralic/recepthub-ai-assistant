import { motion } from "framer-motion";

export const GlowLines = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Left glow line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute left-[5%] top-0 bottom-0 w-px"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsl(217 100% 50% / 0.3) 20%, hsl(217 100% 50% / 0.5) 50%, hsl(217 100% 50% / 0.3) 80%, transparent 100%)',
        }}
      />
      
      {/* Right glow line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute right-[5%] top-0 bottom-0 w-px"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsl(217 100% 50% / 0.3) 20%, hsl(217 100% 50% / 0.5) 50%, hsl(217 100% 50% / 0.3) 80%, transparent 100%)',
        }}
      />

      {/* Optional inner glow lines */}
      <div
        className="absolute left-[15%] top-0 bottom-0 w-px opacity-30 hidden lg:block"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsl(217 100% 50% / 0.2) 30%, hsl(217 100% 50% / 0.3) 50%, hsl(217 100% 50% / 0.2) 70%, transparent 100%)',
        }}
      />
      <div
        className="absolute right-[15%] top-0 bottom-0 w-px opacity-30 hidden lg:block"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsl(217 100% 50% / 0.2) 30%, hsl(217 100% 50% / 0.3) 50%, hsl(217 100% 50% / 0.2) 70%, transparent 100%)',
        }}
      />
    </div>
  );
};
