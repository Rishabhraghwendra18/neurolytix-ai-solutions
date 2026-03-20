import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

export const ContactForm = () => {
  return (
    <section id="contact" className="py-24 bg-[#0F172A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-[#38BDF8] uppercase mb-3">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to <span className="text-gradient">Accelerate.</span>
            </h3>
            <p className="text-gray-400 text-lg mb-12 font-body max-w-md">
              Whether you need scalable software or an intelligent AI integration, our team is ready to engineer your vision.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#818CF8]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold font-heading mb-1">Email Us</h4>
                  <p className="text-gray-400">rishabhraghwendra2002@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#38BDF8]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold font-heading mb-1">Phone</h4>
                  <p className="text-gray-400">+91 9990777682</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#38BDF8]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold font-heading mb-1">Office Location</h4>
                  <p className="text-gray-400">A/156 St. No 6<br />Vikas Vihar, New Delhi-59</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: HTML Form Engine ready for Netlify/Formspree */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative"
          >
            {/* Soft backdrop glow behind form */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] rounded-[2rem] blur-xl opacity-20 pointer-events-none"></div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="relative z-10 space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-[#0F172A]/50 border border-gray-700 text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Company Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-[#0F172A]/50 border border-gray-700 text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all placeholder-gray-500"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-300">Service Type</label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="w-full bg-[#0F172A]/50 border border-gray-700 text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="app">App Development</option>
                    <option value="custom">Custom Software</option>
                    <option value="ai">AI Solutions</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-[#0F172A]/50 border border-gray-700 text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all placeholder-gray-500 resize-none"
                  placeholder="Tell us about your technical requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:opacity-90 text-white font-semibold rounded-xl px-6 py-4 flex items-center justify-center gap-2 transition-all duration-300 group"
              >
                Send Request
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
