import { Code, Database, Server, Smartphone, Cloud, Triangle, Hexagon, Circle, Square } from 'lucide-react';
import { motion } from 'framer-motion';

const techLogos = [
  { name: 'React', icon: Code },
  { name: 'Python', icon: Triangle },
  { name: 'AWS', icon: Cloud },
  { name: 'TensorFlow', icon: Hexagon },
  { name: 'Astro', icon: Circle },
  { name: 'Node.js', icon: Server },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Flutter', icon: Smartphone },
  { name: 'Tailwind CSS', icon: Square },
];

export const TechStack = () => {
  // We duplicate the array to create a seamless infinite scroll effect
  const duplicatedTechs = [...techLogos, ...techLogos];

  return (
    <section id="tech-stack" className="py-20 bg-[#0A1020] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#818CF8] uppercase mb-2">Powered By</h2>
          <h3 className="text-3xl font-heading font-bold text-white">Our Technology Stack</h3>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden flex bg-[#0F172A]/50 py-10">
        
        {/* Left and Right Fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A1020] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A1020] to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="flex animate-ticker items-center min-w-max gap-12 md:gap-24 px-12">
          {duplicatedTechs.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div 
                key={index} 
                className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer"
              >
                <Icon className="w-8 h-8 text-[#38BDF8]" />
                <span className="text-xl font-heading font-semibold text-gray-300 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
