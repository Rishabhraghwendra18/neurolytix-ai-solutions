import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex text-center flex-col justify-center items-center bg-mesh overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-[2px] z-0"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-[#38BDF8]/20 bg-[#38BDF8]/5 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
          <span className="text-sm font-medium text-[#38BDF8] uppercase tracking-wider">Next-Gen Software Development</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold font-heading text-white leading-tight mb-6"
        >
          Engineering <span className="text-gradient">Intelligence.</span><br />
          Delivering Innovation.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mb-12 font-body leading-relaxed"
        >
          Neurolytix AI Solutions provides cutting-edge Web, App, and Custom AI software development tailored to your business needs. Scalability and precision engineered.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
        >
          <a 
            href="#services" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:opacity-90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] group"
          >
            Explore Our Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 glass px-8 py-4 rounded-full font-semibold text-lg text-white hover:bg-white/10 transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center"
      >
        <span className="text-gray-400 text-sm mb-2 font-medium tracking-widest uppercase">Scroll to explore</span>
        <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-[#38BDF8]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
