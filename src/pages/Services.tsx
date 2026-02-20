import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-pale-mint pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-black text-primary leading-tight mb-6"
            >
              Our Dental <br />Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-700 mb-8 max-w-2xl leading-relaxed"
            >
              We combine clinical excellence with a compassionate touch. Discover our comprehensive range of treatments designed to give you a healthier, more confident smile.
            </motion.p>
          </div>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg className="relative block w-full h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path className="fill-background-light" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,10,21.5,10,21.5c42.14,21,95.14,46.12,143,58.86,52.26,13.91,108.68,14.45,168.39-23.92Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-xl border border-primary/10 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="size-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.details?.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-medium">
                      <CheckCircle2 className="text-primary" size={18} /> {detail}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implant Deep Dive */}
      <section className="py-24 bg-gradient-to-br from-primary to-[#084a4a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-bold mb-4">Specialized Clinic</span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Expert Implantology <br />Precision Meets Art</h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                Our clinic is a regional leader in dental implant technology. We utilize advanced diagnostics and premium materials to ensure your restoration feels and looks exactly like a natural tooth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'biotech', title: '3D Precision Scan', text: 'High-accuracy mapping.' },
                  { icon: 'precision_manufacturing', title: 'Titanium Grade', text: 'Medical grade durability.' },
                  { icon: 'medical_services', title: 'Expert Surgeons', text: 'Board-certified specialists.' },
                  { icon: 'verified', title: 'Lifelong Results', text: 'A natural look that lasts.' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/5">
                    <span className="material-symbols-outlined text-3xl mb-3">{item.icon}</span>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-white/70">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl bg-white/5 p-4 border border-white/10">
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-[4/5] rounded-lg bg-cover bg-center overflow-hidden relative group">
                    <img src="https://picsum.photos/seed/before/400/500" alt="Before" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <span className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full">BEFORE</span>
                  </div>
                  <div className="aspect-[4/5] rounded-lg bg-cover bg-center overflow-hidden relative group">
                    <img src="https://picsum.photos/seed/after/400/500" alt="After" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full">AFTER</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm font-medium text-white/80">Real Patient Transformation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
