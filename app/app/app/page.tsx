'use client';
import { useState } from 'react';
import { ArrowRight, Leaf, Users, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const products = [
  { name: "Quarter-Sawn Oak Morris Chair", wood: "Oak", type: "Living", img: "https://picsum.photos/id/1015/600/400", alt: "Classic Arts & Crafts Morris Chair in quarter-sawn oak" },
  { name: "Walnut Trestle Dining Table", wood: "Walnut", type: "Dining", img: "https://picsum.photos/id/201/600/400", alt: "Mission style walnut dining table" },
  { name: "Cherry Nightstand", wood: "Cherry", type: "Bedroom", img: "https://picsum.photos/id/106/600/400", alt: "Handcrafted cherry nightstand" },
  { name: "Mission Oak Bookcase", wood: "Oak", type: "Office", img: "https://picsum.photos/id/107/600/400", alt: "Arts & Crafts oak bookcase" },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#2C2118]/95 backdrop-blur-md z-50 border-b border-[#C19A6B]/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#C19A6B] rotate-45" />
            <span className="font-playfair text-2xl tracking-tight">Winding River Workshop</span>
          </div>
          <div className="flex gap-8 text-sm uppercase tracking-widest">
            <a href="#collections" className="hover:text-[#C19A6B] transition">Collections</a>
            <a href="#custom" className="hover:text-[#C19A6B] transition">Custom</a>
            <a href="#about" className="hover:text-[#C19A6B] transition">About</a>
            <a href="#contact" className="hover:text-[#C19A6B] transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image src="https://picsum.photos/id/1015/2000/1200" alt="Quarter-sawn oak Morris chair in a California bungalow living room" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-playfair text-7xl md:text-8xl mb-4 tracking-tighter">Winding River Workshop</h1>
          <p className="text-2xl md:text-3xl text-[#EDE4D5]/90 mb-10">Timeless handcrafted furniture in the Arts & Crafts tradition</p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a href="#collections" className="px-10 py-4 bg-[#C19A6B] text-[#2C2118] font-medium hover:bg-white transition flex items-center gap-3 group">
              Browse Collections <ArrowRight className="group-hover:translate-x-1 transition" />
            </a>
            <a href="#contact" className="px-10 py-4 border border-[#C19A6B] hover:bg-[#C19A6B]/10 transition">Start Your Custom Project</a>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 bg-[#1F2A1F]">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-playfair text-5xl mb-8">Crafted by hand.<br />Built to last generations.</h2>
            <p className="text-lg leading-relaxed text-[#EDE4D5]/80">
              At Winding River Workshop we build furniture the old way — using traditional joinery, solid hardwoods, and time-honored Arts & Crafts techniques. 
              No nails, no shortcuts. Every piece tells a story of patience and craftsmanship.
            </p>
            <div className="flex gap-8 mt-12">
              <div><Leaf className="w-8 h-8 text-[#C19A6B] mb-2" /> Sustainable sourcing</div>
              <div><Users className="w-8 h-8 text-[#C19A6B] mb-2" /> Family-owned</div>
              <div><Award className="w-8 h-8 text-[#C19A6B] mb-2" /> Generational legacy</div>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image src="https://picsum.photos/id/133/800/800" alt="Workshop interior with hand tools and oak lumber" fill className="object-cover rounded" />
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-playfair text-6xl text-center mb-4">Collections</h2>
          <p className="text-center text-[#EDE4D5]/70 mb-12">Mission • California Bungalow • Arts & Crafts</p>

          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            {['All', 'Oak', 'Walnut', 'Cherry'].map((f) => (
              <button 
                key={f} 
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2 border transition ${activeFilter === f ? 'border-[#C19A6B] text-[#C19A6B]' : 'border-[#C19A6B]/30 hover:border-[#C19A6B]/70'}`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p, i) => (
              <motion.div key={i} whileHover={{ y: -12 }} className="group bg-[#1F2A1F] overflow-hidden rounded">
                <div className="relative h-80">
                  <Image src={p.img} alt={p.alt} fill className="object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-6">
                  <p className="text-[#C19A6B] text-sm tracking-widest">{p.wood} • {p.type}</p>
                  <h3 className="font-playfair text-2xl mt-2">{p.name}</h3>
                  <button className="mt-6 text-sm uppercase tracking-widest flex items-center gap-2 hover:text-[#C19A6B]">
                    View Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Design Process */}
      <section id="custom" className="py-24 bg-[#1F2A1F]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-5xl mb-6">Your Vision, Our Craftsmanship</h2>
          <p className="max-w-md mx-auto mb-16">A collaborative five-step journey from concept to heirloom piece.</p>

          <div className="grid md:grid-cols-5 gap-8">
            {["Consultation", "Design", "Wood & Finish Selection", "Crafting", "Delivery & Care"].map((step, i) => (
              <div key={i} className="bg-[#2C2118] p-8 rounded border border-[#C19A6B]/20">
                <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[#C19A6B]/10 flex items-center justify-center text-2xl font-playfair text-[#C19A6B]">{i+1}</div>
                <h4 className="font-medium text-xl">{step}</h4>
              </div>
            ))}
          </div>
          <a href="#contact" className="mt-16 inline-block px-12 py-5 bg-[#C19A6B] text-[#2C2118] font-medium text-lg hover:bg-white transition">Begin Your Custom Commission →</a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-[#C19A6B]/20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-playfair text-5xl text-center mb-12">Start Your Project</h2>
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="bg-transparent border border-[#C19A6B]/40 p-4 focus:border-[#C19A6B] outline-none rounded" />
              <input type="email" placeholder="Email Address" className="bg-transparent border border-[#C19A6B]/40 p-4 focus:border-[#C19A6B] outline-none rounded" />
            </div>
            <textarea placeholder="Tell us about your project (room, preferred woods, style, dimensions, etc.)" rows={6} className="w-full bg-transparent border border-[#C19A6B]/40 p-4 focus:border-[#C19A6B] outline-none rounded"></textarea>
            <button type="submit" className="w-full py-5 bg-[#C19A6B] text-[#2C2118] font-medium text-lg hover:bg-white transition rounded">Send Inquiry</button>
          </form>
          <p className="text-center text-sm mt-8 text-[#EDE4D5]/60">We typically respond within 48 hours.</p>
        </div>
      </section>

      <footer className="bg-black py-16 border-t border-[#C19A6B]/20">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-[#EDE4D5]/60">
          © {new Date().getFullYear()} Winding River Workshop • Handcrafted in the Arts & Crafts Tradition
        </div>
      </footer>
    </>
  );
}
