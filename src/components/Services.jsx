import { motion } from 'framer-motion';
import { Globe, Smartphone, Code2, Cpu } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'High-performance, SEO-optimized static and dynamic sites engineered for scale and speed.',
    icon: Globe,
    color: 'from-blue-400 to-[#38BDF8]',
  },
  {
    title: 'App Development',
    description: 'Seamless cross-platform mobile experiences for iOS and Android, focusing on intuitive UX.',
    icon: Smartphone,
    color: 'from-[#818CF8] to-indigo-400',
  },
  {
    title: 'Custom Software',
    description: 'Bespoke enterprise solutions designed specifically to automate and optimize your complex workflows.',
    icon: Code2,
    color: 'from-purple-400 to-[#818CF8]',
  },
  {
    title: 'AI Solutions',
    description: 'Cutting-edge LLM integration, intelligent automation, and predictive analytics to future-proof your business.',
    icon: Cpu,
    color: 'from-cyan-400 to-[#38BDF8]',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-[#38BDF8] uppercase mb-3">Our Core Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Solutions Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#818CF8]">For Scale.</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-body">
              We translate complex challenges into elegant, high-performance technology solutions.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 group relative overflow-hidden"
              >
                {/* Hover gradient effect inside card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-[#0F172A] border border-white/10 shadow-lg`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 rounded-xl blur-md group-hover:opacity-40 transition-opacity duration-300`}></div>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h4 className="text-2xl font-bold font-heading text-white mb-4 group-hover:text-[#38BDF8] transition-colors">{service.title}</h4>
                  <p className="text-gray-400 font-body leading-relaxed max-w-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
