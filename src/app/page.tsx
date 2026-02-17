"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-tighter text-white">
            HOOGA <span className="text-[#E31937]">E-POWERSPORTS</span>
          </h1>
          <p className="text-sm text-gray-400">Vista, CA</p>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E31937]/10 via-black to-black" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <p className="text-[#E31937] font-bold tracking-[0.5em] text-sm uppercase mb-6">
            FS Performance • Vista, California
          </p>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tight">
            CHOOSE YOUR
            <br />
            <span className="text-[#E31937]">DESIGN</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-4 font-light">
            Adapt. Transform. Lead.
          </p>
          <p className="text-gray-500 mb-16 max-w-xl mx-auto">
            Select a design aesthetic below to preview the HOOGA dealer landing page in different visual styles.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-[#E31937] to-transparent" />
        </div>
      </section>

      {/* Variant Selector */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Cyberpunk */}
            <Link href="/cyberpunk" className="group relative bg-[#0a0a0a] border-2 border-gray-800 hover:border-[#E31937] transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E31937]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="aspect-[4/5] relative overflow-hidden">
                <img src="/images/hooga-hero.png" alt="HOOGA Cyberpunk" className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.4) saturate(1.5)' }} />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(227,25,55,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(227,25,55,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />
              </div>
              <div className="p-6 relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 bg-[#E31937] rounded-full animate-pulse" />
                  <span className="w-3 h-3 bg-[#E31937]/50 rounded-full" />
                  <span className="w-3 h-3 bg-[#E31937]/30 rounded-full" />
                </div>
                <h2 className="text-3xl font-black text-white mb-2 group-hover:text-[#E31937] transition-colors">
                  CYBERPUNK
                </h2>
                <p className="text-gray-400 text-sm">
                  Neon red on black, glitch effects, sci-fi HUD aesthetic
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-[#E31937] font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                  Explore → 
                </div>
              </div>
            </Link>

            {/* Editorial */}
            <Link href="/editorial" className="group relative bg-white border-2 border-gray-200 hover:border-black transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="aspect-[4/5] relative overflow-hidden bg-white">
                <img src="/images/hooga-hero.png" alt="HOOGA Editorial" className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.9) grayscale(100%)' }} />
              </div>
              <div className="p-6 relative z-10 bg-white">
                <h2 className="text-3xl font-black text-black mb-2 group-hover:tracking-wider transition-all">
                  EDITORIAL
                </h2>
                <p className="text-gray-600 text-sm">
                  Clean magazine layout, big typography, generous whitespace
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-black font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                  Explore →
                </div>
              </div>
            </Link>

            {/* Brutalist */}
            <Link href="/brutalist" className="group relative bg-[#E31937] border-2 border-black transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-black transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <div className="aspect-[4/5] relative overflow-hidden bg-[#E31937]">
                <img src="/images/hooga-hero.png" alt="HOOGA Brutalist" className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.6) contrast(1.3)' }} />
                <div className="absolute inset-0 bg-[#E31937]/30" />
              </div>
              <div className="p-6 relative z-10">
                <h2 className="text-3xl font-black text-white mb-2 group-hover:text-[#E31937] transition-colors">
                  BRUTALIST
                </h2>
                <p className="text-white/80 text-sm">
                  Raw, bold, unconventional, heavy contrast
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                  Explore →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-24 px-4 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">HOOGA E-POWERSPORTS</h2>
          <p className="text-xl mb-8">The future of electric motorcycles</p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 border-2 border-black">
              <h3 className="font-black text-lg mb-2">HOOGA 8850</h3>
              <p className="text-sm">25kW • 115 km/h • 140km range • 88V 50Ah</p>
            </div>
            <div className="p-6 border-2 border-black">
              <h3 className="font-black text-lg mb-2">HOOGA 7270</h3>
              <p className="text-sm">16kW • 100 km/h • 180km range • 72V 70Ah</p>
            </div>
            <div className="p-6 border-2 border-black">
              <h3 className="font-black text-lg mb-2">CONTACT</h3>
              <p className="text-sm">888-905-8243<br />hoogapowersports.com<br />Vista, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2026 HOOGA E-Powersports by FS Performance. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
