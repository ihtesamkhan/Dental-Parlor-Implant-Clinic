import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="size-8 bg-primary rounded flex items-center justify-center text-accent-gold">
                <span className="material-symbols-outlined text-xl">dentistry</span>
              </div>
              <h2 className="text-white font-black text-lg tracking-tight">Dental Parlor</h2>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Providing high-end dental solutions in Islamabad with a focus on surgical excellence and aesthetic perfection.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all text-slate-400 hover:text-white">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-black text-white">Quick Links</h3>
            <ul className="space-y-4 text-slate-400">
              {['About Our Clinic', 'Our Specializations', 'Implant Procedure', 'Patient Testimonials', 'Contact Support'].map((link) => (
                <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-black text-white">Our Services</h3>
            <ul className="space-y-4 text-slate-400">
              {['Dental Implants', 'Root Canal Therapy', 'Teeth Whitening', 'Dental Crowns', 'Invisible Braces'].map((link) => (
                <li key={link}><a href="#" className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-black text-white">Working Hours</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex justify-between"><span>Mon - Sat:</span> <span className="text-white">10 AM - 5 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span className="text-red-400 font-bold">Closed</span></li>
              <li className="pt-4 border-t border-slate-800">
                <p className="text-sm">Street 169, G-13/3,<br />Islamabad, Pakistan</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© 2024 Dental Parlor and Implant Clinic Islamabad. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
