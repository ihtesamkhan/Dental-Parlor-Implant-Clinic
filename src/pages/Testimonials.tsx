import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../constants';

export default function Testimonials() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-primary to-emerald-800 py-24 px-6 text-white">
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Patient Reviews & Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-emerald-50/90 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Real transformations and life-changing dental care experiences from our valued patients in Islamabad.
          </motion.p>
        </div>
      </header>

      {/* Rating Hero Card */}
      <section className="max-w-5xl mx-auto -mt-16 px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-pale-mint rounded-xl md:rounded-full p-8 md:p-12 shadow-2xl border border-white/20 flex flex-col md:flex-row items-center justify-around gap-8"
        >
          <div className="text-center">
            <span className="text-7xl md:text-8xl font-black text-accent-gold drop-shadow-sm">4.9</span>
            <div className="flex justify-center gap-1 mt-2 text-accent-gold">
              {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
            </div>
          </div>
          <div className="h-px w-24 md:h-24 md:w-px bg-primary/10"></div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-2">Excellent Reputation</h3>
            <p className="text-slate-600 font-medium">Based on 568 Verified Patient Reviews</p>
            <div className="mt-4 flex items-center justify-center md:justify-start gap-3">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-white object-cover" src={`https://picsum.photos/seed/avatar${i}/100/100`} alt="Avatar" referrerPolicy="no-referrer" />
                ))}
              </div>
              <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">Verified Reviews</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {REVIEWS.map((review, i) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid bg-white p-8 rounded-xl border-l-[6px] border-primary shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <img className="w-12 h-12 rounded-full object-cover" src={review.image} alt={review.name} referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <div className="flex text-accent-gold scale-90 -ml-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4 italic">"{review.text}"</p>
              <span className="inline-block bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">{review.category}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black mb-8">Ready to Become Our Next Success Story?</h2>
          <button className="bg-accent-gold hover:bg-yellow-600 text-white px-10 py-5 rounded-full font-black text-lg shadow-xl transition-all transform hover:scale-105">
            Book Your Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
