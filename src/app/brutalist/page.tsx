"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

function AnimatedSection({ children, className = "", id = "", style = {} }: { children: React.ReactNode; className?: string; id?: string; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  );
}

// Hero Section with Video
function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'contrast(1.2) brightness(0.8) sepia(20%) saturate(0.8)' }}
      >
        <source src="/videos/hooga-video1.mp4" type="video/mp4" />
      </video>
      
      {/* Heavy overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Diagonal stripe pattern */}
      <div className="absolute inset-0" style={{
        background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(227,25,55,0.05) 10px, rgba(227,25,55,0.05) 20px)'
      }} />
      
      {/* Content - Bold and Raw */}
      <div className="relative z-10 px-4 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
          className="border-l-8 border-[#E31937] pl-6 py-2 mb-8"
        >
          <p className="text-[#E31937] font-black tracking-[0.2em] text-sm uppercase">
            FS PERFORMANCE — VISTA CA
          </p>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[12vw] md:text-[10rem] font-black text-white leading-[0.85] tracking-tighter"
        >
          HOOGA
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[6vw] md:text-5xl font-black text-[#E31937] leading-none tracking-tighter"
        >
          E-POWERSPORTS
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl md:text-4xl text-white font-bold mt-8 max-w-2xl uppercase"
        >
          ADAPT. TRANSFORM. LEAD.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-0 mt-12"
        >
          <a
            href="#dealer-form"
            className="px-10 py-6 bg-[#E31937] text-black font-black text-xl uppercase tracking-wider hover:bg-white transition-colors border-4 border-[#E31937]"
          >
            BECOME A DEALER
          </a>
          <a
            href="#products"
            className="px-10 py-6 bg-black text-white font-black text-xl uppercase tracking-wider hover:bg-[#E31937] hover:text-black transition-colors border-4 border-white md:border-black"
          >
            VIEW LINEUP
          </a>
        </motion.div>
      </div>
      
      {/* Big scroll text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 right-8 text-[#E31937] font-black text-6xl md:text-8xl opacity-30 rotate-90 md:rotate-0"
      >
        ↓
      </motion.div>
    </section>
  );
}

// Products Section
function ProductsSection() {
  const products = [
    {
      name: "8850",
      fullName: "HOOGA 8850",
      tagline: "FLAGGHSHIP PERFORMANCE",
      specs: [
        { label: "TOP SPEED", value: "115 km/h" },
        { label: "RANGE", value: "140 km" },
        { label: "POWER", value: "25 kW" },
        { label: "BATTERY", value: "88V 50Ah" },
        { label: "CHARGE", value: "3.5 hrs" },
        { label: "SEAT", value: "900mm" },
      ],
      colors: ["RAVE RED", "STORM GREY", "ARCTIC WHITE"],
      featured: true,
    },
    {
      name: "7270",
      fullName: "HOOGA 7270",
      tagline: "LONG RANGE CHAMPION",
      specs: [
        { label: "TOP SPEED", value: "100 km/h" },
        { label: "RANGE", value: "180 km" },
        { label: "POWER", value: "16 kW" },
        { label: "BATTERY", value: "72V 70Ah" },
        { label: "CHARGE", value: "4.5 hrs" },
        { label: "SEAT", value: "900mm" },
      ],
      colors: ["RAVE RED", "STORM GREY", "ARCTIC WHITE"],
      featured: false,
    },
  ];

  return (
    <AnimatedSection id="products" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="mb-16 px-6">
          <div className="w-24 h-2 bg-[#E31937]" />
          <h2 className="text-7xl md:text-9xl font-black mt-4 tracking-tighter">
            LINEUP
          </h2>
          <p className="text-xl font-bold mt-4 max-w-xl">
            TWO MODELS. ONE MISSION. ZERO COMPROMISES.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 border-t-8 border-black">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              variants={fadeInUp}
              className={`p-8 md:p-12 ${index === 0 ? 'bg-[#E31937]' : 'bg-black text-white'} border-r-0 md:border-r-8 border-black`}
              style={{ borderBottomWidth: 8 }}
            >
              {product.featured && (
                <div className="inline-block bg-white text-black px-4 py-2 font-black text-sm mb-6">
                  ★ FLAGSHIP
                </div>
              )}
              
              {/* Product image */}
              <div className="w-full h-64 mb-8 bg-black/10 flex items-center justify-center border-4 border-current">
                <span className="font-black text-4xl opacity-50">{product.name}</span>
              </div>

              <h3 className="text-6xl md:text-8xl font-black mb-2 tracking-tighter">{product.name}</h3>
              <p className="font-bold text-lg mb-8 opacity-80">{product.tagline}</p>

              <div className="grid grid-cols-2 gap-6 mb-8 font-black">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="border-l-4 border-current pl-4">
                    <p className="text-xs opacity-70">{spec.label}</p>
                    <p className="text-xl">{spec.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 flex-wrap mb-8">
                {product.colors.map((color) => (
                  <span key={color} className="px-4 py-2 border-2 border-current text-sm font-bold uppercase">
                    {color}
                  </span>
                ))}
              </div>

              <div className="pt-8 border-t-4 border-current">
                <p className="font-black text-sm mb-4">RIDING MODES</p>
                <div className="flex gap-0">
                  {['ECO', 'SPORTS', 'BEAST'].map((mode) => (
                    <span
                      key={mode}
                      className={`px-6 py-4 font-black text-sm flex-1 text-center ${
                        mode === 'BEAST'
                          ? 'bg-white text-black'
                          : mode === 'SPORTS'
                          ? 'bg-white/20'
                          : 'bg-transparent'
                      }`}
                    >
                      {mode}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

// Variants Section
function VariantsSection() {
  const variants = [
    {
      name: "STREET",
      wheel: "19/18",
      description: "URBAN-READY WITH STREET TIRES",
      features: ["STREET TIRES", "URBAN SUSPENSION", "DOT BRAKES"],
    },
    {
      name: "TRAIL",
      wheel: "21/18",
      description: "KNOBBY TIRES FOR OFF-ROAD",
      features: ["KNOBBY TIRES", "KKE 240MM", "REINF FRAME"],
    },
    {
      name: "SUPERMOTO",
      wheel: "17/17",
      description: "TRACK-FOCUSED AGGRESSION",
      features: ["SLICK TIRES", "SPORT SUSPENSION", "QUICK REL"],
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="mb-16 px-6">
          <div className="w-24 h-2 bg-[#E31937]" />
          <h2 className="text-7xl md:text-9xl font-black mt-4 tracking-tighter">
            VARIANTS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0 border-8 border-[#E31937]">
          {variants.map((variant, index) => (
            <motion.div
              key={variant.name}
              variants={fadeInUp}
              className={`p-8 bg-black hover:bg-[#E31937] hover:text-black transition-colors ${index < 2 ? 'border-b-8 md:border-b-0 md:border-r-8 border-[#E31937]' : ''}`}
            >
              <div className="w-full h-32 mb-6 bg-[#E31937] flex items-center justify-center">
                <span className="text-5xl font-black text-black">{variant.wheel}</span>
              </div>
              <h3 className="text-4xl font-black mb-4">{variant.name}</h3>
              <p className="font-bold text-sm mb-6">{variant.description}</p>
              <ul className="space-y-3">
                {variant.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 font-black text-sm">
                    <span className="w-4 h-4 bg-[#E31937]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="mt-16 px-6">
          <h3 className="text-4xl font-black mb-8 text-[#E31937]">BODY STYLES</h3>
          <div className="grid md:grid-cols-2 gap-0 border-8 border-white">
            <div className="p-8 bg-white text-black border-r-8 border-black">
              <h4 className="text-3xl font-black mb-2">SEMI-SHROUD</h4>
              <p className="font-bold">MINIMAL COVERAGE, MAX PERFORMANCE</p>
            </div>
            <div className="p-8 bg-[#E31937] text-black">
              <h4 className="text-3xl font-black mb-2">FULL-FAIRING</h4>
              <p className="font-bold">COMPLETE WIND PROTECTION</p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    { title: "3-IN-1 LIGHT", desc: "HEADLIGHT + DRL + AMBER" },
    { title: "DUAL BATTERY", desc: "QUICK-REMOVE STRAPS" },
    { title: "BATTERY LOCK", desc: "SECURE + CHARGE INDICATOR" },
    { title: "ALUMINUM PLATE", desc: "HIGH-STRENGTH PROTECTION" },
    { title: "EXT CHG PORT", desc: "CHARGE WITHOUT REMOVING" },
    { title: "CHAIN DRIVE", desc: "ELECTRIC MID-MOUNT" },
    { title: "KKE SUSPENSION", desc: "240MM TRAVEL" },
    { title: "REAR FOOT BRAKE", desc: "OPTIONAL CUSTOM STYLE" },
  ];

  return (
    <AnimatedSection className="py-24 bg-[#E31937] text-black">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="mb-16 px-6">
          <div className="w-24 h-2 bg-black" />
          <h2 className="text-7xl md:text-9xl font-black mt-4 tracking-tighter">
            FEATURES
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-8 border-black">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="p-8 bg-[#E31937] hover:bg-black hover:text-[#E31937] transition-colors border border-black"
            >
              <div className="font-black text-4xl mb-4">{index + 1}</div>
              <h3 className="font-black text-xl mb-2 uppercase">{feature.title}</h3>
              <p className="font-bold text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

// Why Partner Section
function WhyPartnerSection() {
  const benefits = [
    { title: "EV MARKET", desc: "40%+ ANNUAL GROWTH", stat: "+40%", label: "GROWTH" },
    { title: "PREMIUM", desc: "QUALITY + INNOVATION", stat: "PRM", label: "BRAND" },
    { title: "SUPPORT", desc: "MARKETING + TRAINING", stat: "FULL", label: "SUPPORT" },
    { title: "MARGINS", desc: "COMPETITIVE PRICING", stat: "HIGH", label: "PROFIT" },
  ];

  return (
    <AnimatedSection className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="mb-16 px-6">
          <div className="w-24 h-2 bg-[#E31937]" />
          <h2 className="text-7xl md:text-9xl font-black mt-4 tracking-tighter">
            WHY US
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-0 border-8 border-[#E31937]">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={fadeInUp}
              className="p-8 bg-black text-center border-r-4 border-[#E31937] hover:bg-[#E31937] hover:text-black transition-colors"
            >
              <div className="text-6xl font-black mb-2">{benefit.stat}</div>
              <div className="text-xs font-black mb-4 opacity-60">{benefit.label}</div>
              <h3 className="font-black text-lg mb-2">{benefit.title}</h3>
              <p className="font-bold text-sm opacity-70">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          className="mt-16 p-12 bg-[#E31937] border-8 border-white"
        >
          <h3 className="text-5xl md:text-7xl font-black mb-4">READY?</h3>
          <p className="font-bold text-xl mb-8 max-w-xl">
            LIMITED DEALER SPOTS FOR 2026. SECURE YOUR TERRITORY TODAY.
          </p>
          <a
            href="#dealer-form"
            className="inline-block px-12 py-6 bg-black text-[#E31937] font-black text-xl uppercase tracking-wider hover:bg-white transition-colors"
          >
            APPLY NOW →
          </a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

// Dealer Form
function DealerForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatedSection id="dealer-form" className="py-24 bg-white text-black">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div variants={fadeInUp} className="mb-16">
          <div className="w-24 h-2 bg-[#E31937]" />
          <h2 className="text-7xl md:text-9xl font-black mt-4 tracking-tighter">
            DEALER
          </h2>
          <p className="text-xl font-bold mt-4">
            JOIN THE WAITLIST. GET IN TOUCH.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 bg-[#E31937] border-8 border-black"
          >
            <div className="text-8xl font-black mb-6">✓</div>
            <h3 className="text-5xl font-black mb-4">THANKS!</h3>
            <p className="font-bold text-xl">
              APPLICATION SUBMITTED. WE'LL BE IN TOUCH IN 2-3 DAYS.
            </p>
          </motion.div>
        ) : (
          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="space-y-0 border-8 border-black"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-6 border-b-4 border-r-4 border-black">
                <label className="block font-black text-sm uppercase mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border-2 border-black text-black font-bold focus:bg-[#E31937] outline-none"
                  placeholder="YOUR NAME"
                />
              </div>
              <div className="p-6 border-b-4 border-black">
                <label className="block font-black text-sm uppercase mb-2">
                  Business *
                </label>
                <input
                  type="text"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border-2 border-black text-black font-bold focus:bg-[#E31937] outline-none"
                  placeholder="BUSINESS NAME"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2">
              <div className="p-6 border-b-4 border-r-4 border-black">
                <label className="block font-black text-sm uppercase mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border-2 border-black text-black font-bold focus:bg-[#E31937] outline-none"
                  placeholder="EMAIL"
                />
              </div>
              <div className="p-6 border-b-4 border-black">
                <label className="block font-black text-sm uppercase mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border-2 border-black text-black font-bold focus:bg-[#E31937] outline-none"
                  placeholder="PHONE"
                />
              </div>
            </div>

            <div className="p-6 border-b-4 border-black">
              <label className="block font-black text-sm uppercase mb-2">
                Location *
              </label>
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border-2 border-black text-black font-bold focus:bg-[#E31937] outline-none"
                placeholder="CITY, STATE"
              />
            </div>

            <div className="p-6 border-b-4 border-black">
              <label className="block font-black text-sm uppercase mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border-2 border-black text-black font-bold focus:bg-[#E31937] outline-none resize-none"
                placeholder="YOUR MESSAGE"
              />
            </div>

            <button
              type="submit"
              className="w-full py-8 bg-[#E31937] text-black font-black text-2xl uppercase tracking-wider hover:bg-black hover:text-[#E31937] transition-colors"
            >
              SUBMIT →
            </button>
          </motion.form>
        )}
      </div>
    </AnimatedSection>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-20 px-6 bg-black text-white border-t-8 border-[#E31937]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-4xl font-black mb-4">
              HOOGA
            </h3>
            <p className="font-bold">
              BY FS PERFORMANCE<br />
              VISTA CA 92081
            </p>
          </div>
          <div>
            <h4 className="font-black text-lg mb-4 text-[#E31937]">CONTACT</h4>
            <ul className="space-y-3 font-bold">
              <li>
                <a href="tel:8889058243" className="hover:text-[#E31937]">
                  (888) 905-8243
                </a>
              </li>
              <li>
                <a href="mailto:dealers@hoogapowersports.com" className="hover:text-[#E31937]">
                  DEALERS@HOOGAPOWERSPORTS.COM
                </a>
              </li>
              <li>
                <a href="https://hoogapowersports.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E31937]">
                  HOOGAPOWERSPORTS.COM
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-lg mb-4 text-[#E31937]">LINKS</h4>
            <ul className="space-y-3 font-bold">
              <li><a href="#products" className="hover:text-[#E31937]">→ PRODUCTS</a></li>
              <li><a href="#dealer-form" className="hover:text-[#E31937]">→ BECOME DEALER</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t-4 border-gray-800 text-center">
          <p className="font-black text-lg">
            © 2026 HOOGA E-POWERSPORTS — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function BrutalistPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <VariantsSection />
      <FeaturesSection />
      <WhyPartnerSection />
      <DealerForm />
      <Footer />
    </main>
  );
}