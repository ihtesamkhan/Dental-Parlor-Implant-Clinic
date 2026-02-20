import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary via-primary to-teal-900 py-20 lg:py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Book Your Appointment
          </motion.h1>
          <p className="text-teal-50 text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Professional dental care and advanced implant solutions in Islamabad. Your smile is our top priority.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Form Column */}
        <div className="p-6 md:p-12 lg:p-20 bg-white">
          <div className="max-w-xl mx-auto lg:mx-0">
            {!submitted ? (
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Schedule a Visit</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                      <input required className="w-full h-14 bg-background-light border-0 rounded-full px-6 focus:ring-2 focus:ring-primary transition-all" placeholder="John Doe" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                      <input required className="w-full h-14 bg-background-light border-0 rounded-full px-6 focus:ring-2 focus:ring-primary transition-all" placeholder="+92 3XX XXXXXXX" type="tel" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input required className="w-full h-14 bg-background-light border-0 rounded-full px-6 focus:ring-2 focus:ring-primary transition-all" placeholder="john@example.com" type="email" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Service Type</label>
                      <select className="w-full h-14 bg-background-light border-0 rounded-full px-6 focus:ring-2 focus:ring-primary transition-all appearance-none">
                        <option>General Consultation</option>
                        <option>Dental Implants</option>
                        <option>Orthodontics</option>
                        <option>Teeth Whitening</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Preferred Date</label>
                      <input required className="w-full h-14 bg-background-light border-0 rounded-full px-6 focus:ring-2 focus:ring-primary transition-all" type="date" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Notes</label>
                    <textarea className="w-full bg-background-light border-0 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all" placeholder="Tell us about your concerns..." rows={3}></textarea>
                  </div>
                  <button type="submit" className="w-full h-16 bg-accent-gold hover:bg-yellow-600 text-white font-black text-lg rounded-full transition-all shadow-xl shadow-accent-gold/20 flex items-center justify-center gap-3">
                    BOOK APPOINTMENT NOW
                    <Send size={20} />
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="size-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-bold mb-4">Request Received!</h2>
                <p className="text-slate-600 mb-8">Our team will contact you shortly to confirm your appointment time.</p>
                <button onClick={() => setSubmitted(false)} className="text-primary font-bold hover:underline">Book another appointment</button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Info Column */}
        <div className="bg-slate-50 p-6 md:p-12 lg:p-20">
          <div className="max-w-xl mx-auto lg:mx-0 space-y-12">
            <h2 className="text-3xl font-bold text-slate-900">Contact Information</h2>
            <div className="space-y-8">
              {[
                { icon: MapPin, label: 'Our Location', value: 'Street 169, G-13/3, Islamabad, Pakistan' },
                { icon: Phone, label: 'Phone Number', value: '+92 332 8880891' },
                { icon: Clock, label: 'Working Hours', value: 'Mon - Sat: 9:00 AM - 9:00 PM' },
                { icon: Mail, label: 'Email Address', value: 'contact@dentalparlor.pk' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-lg font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-64 border border-slate-200 relative group">
              <img 
                src="https://picsum.photos/seed/islamabad-map/600/400" 
                alt="Map" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary text-white p-3 rounded-full shadow-2xl animate-bounce">
                  <MapPin size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
