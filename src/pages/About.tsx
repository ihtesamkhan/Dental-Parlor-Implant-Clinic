import React from 'react';
import { motion } from 'motion/react';
import { History, CheckCircle, Quote, Users, ShieldCheck, Microscope, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-primary relative pt-20 pb-32 overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black leading-tight max-w-3xl"
          >
            About Dental Parlor & Implant Clinic
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-white/80 text-lg max-w-2xl leading-relaxed"
          >
            We are dedicated to providing the highest quality dental care in G-13/3, Islamabad, blending artistry with advanced medical science.
          </motion.p>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-[0]">
          <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#f6f8f8"></path>
          </svg>
        </div>
      </section>

      {/* Clinic Story */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-xl transition-transform group-hover:scale-105"></div>
            <img 
              alt="Clinic Interior" 
              className="relative w-full aspect-[4/3] object-cover rounded-xl shadow-2xl" 
              src="https://picsum.photos/seed/clinic-story/800/600"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent-gold p-8 rounded-xl shadow-xl hidden md:block">
              <p className="text-white text-3xl font-black leading-none">10+</p>
              <p className="text-white/90 text-xs uppercase tracking-widest font-bold mt-1">Years Excellence</p>
            </div>
          </motion.div>
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full w-fit">
              <History size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Our Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">A Legacy of Smiles in the Heart of G-13/3</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>Founded with a vision to redefine oral healthcare, Dental Parlor & Implant Clinic has grown from a boutique practice into a premier destination for dental implants and restorative dentistry.</p>
              <p>Located in the vibrant community of G-13/3, our clinic was built on three core pillars: <span className="text-primary font-semibold">Uncompromising Hygiene</span>, <span className="text-primary font-semibold">Specialized Expertise</span>, and <span className="text-primary font-semibold">Empathetic Care</span>.</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              {['Sterilization Protocols', 'Certified Surgeons', 'Digital Workflow'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="text-primary" size={18} />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="bg-pale-mint py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote size={80} className="mx-auto text-accent-gold/20 mb-8" />
          <h3 className="font-serif italic text-2xl md:text-4xl leading-relaxed text-slate-800">
            "Our mission is simple — to deliver world-class dental care that restores not just smiles, but the confidence and quality of life for every individual we serve."
          </h3>
          <div className="mt-8">
            <p className="font-bold text-primary uppercase tracking-widest text-sm">Dr. Sarah Ahmed</p>
            <p className="text-slate-500 text-xs mt-1">Founding Director & Chief Surgeon</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Why Patients Trust Us</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">Experience a higher standard of dentistry where every detail is designed for your comfort and health.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: Users, title: 'Skilled & Compassionate Staff', text: 'Our team comprises board-certified specialists who are dedicated to continuous education.' },
            { icon: ShieldCheck, title: 'Pristine Hygiene Standards', text: 'We maintain a hospital-grade sterilization environment, ensuring complete safety.' },
            { icon: Microscope, title: 'Advanced Technology', text: 'From 3D CT scans to painless laser treatments, we invest in the latest technology.' },
            { icon: Heart, title: 'Patient-Centered Experience', text: 'Your comfort is our priority. We offer sedation options and a calming atmosphere.' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-10 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-6">
                <item.icon size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-slate-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
