import React from 'react';
import { motion } from 'motion/react';
import { Star, Phone, CheckCircle, ArrowRight, MapPin, Clock } from 'lucide-react';
import { SERVICES, REVIEWS } from '../constants';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/60 to-transparent z-10"></div>
          <img 
            alt="Modern Dental Clinic Interior" 
            className="w-full h-full object-cover" 
            src="https://picsum.photos/seed/dental/1920/1080"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-gold/20 backdrop-blur-md border border-accent-gold/30 rounded-full text-accent-gold text-xs font-bold uppercase tracking-widest">
              <CheckCircle size={14} />
              Islamabad's Top-Rated Implant Clinic
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              Where <span className="text-accent-gold">Beautiful</span> <br /> Smiles Begin
            </h1>
            <p className="text-lg text-slate-100/90 max-w-xl leading-relaxed">
              Trust, Hygiene, and Clinical Excellence. Experience premium dental care in the heart of G-13 Islamabad with our expert implantologists.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex text-accent-gold">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <span className="font-bold">4.9 Stars (568 Reviews)</span>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-accent-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl transition-all transform hover:scale-105">
                Book Your Appointment
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2">
                <Phone size={20} />
                +92 332 8880891
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="glass p-8 rounded-xl shadow-2xl space-y-6 border-white/20">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-primary text-xl tracking-tight">Visit Our Clinic</h3>
                <MapPin className="text-primary" />
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Location</p>
                    <p className="text-sm text-slate-600">Street 169, G-13/3, Islamabad</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Working Hours</p>
                    <p className="text-sm text-slate-600">Mon - Sat: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-40 bg-slate-200 rounded-xl overflow-hidden relative group">
                <img 
                  alt="Map placeholder" 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 transition-all" 
                  src="https://picsum.photos/seed/map/400/200"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-primary text-white p-2 rounded-full shadow-lg animate-bounce">
                    <MapPin size={24} />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center items-center">
            {[
              { label: '4.9 Rated', sub: 'On Google' },
              { label: 'Implants', sub: 'Specialized' },
              { label: '100%', sub: 'Hygienic' },
              { label: 'Expert', sub: 'Clinical Staff' },
              { label: 'Premium', sub: 'Patient Care' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-1"
              >
                <p className="text-accent-gold text-2xl font-black">{stat.label}</p>
                <p className="text-white/70 text-sm font-medium uppercase tracking-widest">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <section className="py-24 bg-pale-mint">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Comprehensive Care</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary">Our Dental Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Expert dental solutions tailored to your unique needs, from routine checkups to complex surgeries.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-all duration-300 border border-primary/5 group"
              >
                <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-black text-primary mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <a className="text-accent-gold font-bold flex items-center gap-1 hover:gap-3 transition-all" href="#">
                  Details <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implant Spotlight */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-black leading-tight">Restore Your Smile With Premium Implants</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                We specialize in advanced dental implants that feel and look exactly like your natural teeth. Our clinic uses global-grade titanium implants and Swiss technology for 100% success rates.
              </p>
              <div className="space-y-4">
                {[
                  'Computer-Guided Precision Surgery',
                  'Lifetime Warranty on Dental Implants',
                  'Single-Day Tooth Replacement Options'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <CheckCircle className="text-accent-gold" size={20} />
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <button className="bg-accent-gold text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-accent-gold/20 hover:scale-105 transition-transform">Book Free Consultation</button>
                <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">See Gallery</button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, rotate: 5 }}
              whileInView={{ opacity: 1, rotate: 2 }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <img 
                alt="Implant Procedure" 
                className="w-full h-[500px] object-cover" 
                src="https://picsum.photos/seed/implant/800/1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Patient Stories</span>
          <h2 className="text-4xl md:text-5xl font-black text-primary mt-2">Voices from Islamabad</h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-xl space-y-6 hover:shadow-2xl transition-all"
            >
              <div className="flex text-accent-gold">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 italic leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img className="size-12 rounded-full object-cover" src={review.image} alt={review.name} referrerPolicy="no-referrer" />
                <div className="text-left">
                  <p className="font-black text-primary">{review.name}</p>
                  <p className="text-xs text-slate-500">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-4">
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
              Available Now
            </div>
            <h2 className="text-4xl md:text-5xl font-black">Dental Emergency?</h2>
            <p className="text-lg text-white/80">Pain, accident, or broken tooth? We provide immediate assistance for all dental emergencies during our working hours.</p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <button className="bg-accent-gold text-white px-10 py-4 rounded-full font-black text-xl shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform">
              <Phone size={24} />
              Call +92 332 8880891
            </button>
            <button className="bg-white text-primary px-10 py-4 rounded-full font-black text-xl flex items-center gap-3 hover:bg-slate-100 transition-colors">
              WhatsApp Us
            </button>
          </div>
        </div>
        <div className="absolute inset-0 z-0 bg-accent-gold diagonal-split opacity-10 transform scale-150 rotate-12"></div>
      </section>
    </div>
  );
}
