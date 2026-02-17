"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const glitchVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

function AnimatedSection({ children, className = "", id = "", style = {} }: { children: React.ReactNode; className?: string; id?: string; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

// Glitch text component
function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      variants={glitchVariants}
      initial="hidden"
      whileInView="visible"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { delay: i * 0.02 }
            }
          }}
          className="inline-block"
          style={{ textShadow: i % 2 === 0 ? '2px 0 #E31937, -2px 0 #00ffff' : '0' }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// HUD Line component
function HUDLine() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8 }}
      className="h-px bg-gradient-to-r from-transparent via-[#E31937] to-transparent opacity-50"
    />
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
        style={{ filter: 'brightness(0.3) saturate(1.5)' }}
      >
        <source src="/images/hooga-video1.mp4" type="video/mp4" />
      </video>
      
      {/* Scanlines overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 2px)',
        animation: 'scanlines 0.1s linear infinite'
      }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(rgba(227, 25, 55, 0.5) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(227, 25, 55, 0.5) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Corner brackets HUD */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-[#E31937]" />
      <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-[#E31937]" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-[#E31937]" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-[#E31937]" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1 border border-[#E31937] text-[#E31937] text-xs font-mono tracking-[0.5em]">
            SYSTEM ONLINE
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-mono text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
        >
          <span className="text-white">HOOGA</span>
          <br />
          <span className="text-[#E31937] neon-glow" style={{ textShadow: '0 0 10px #E31937, 0 0 20px #E31937, 0 0 40px #E31937' }}>
            <GlitchText text="E-POWERSPORTS" />
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-mono text-xl md:text-2xl text-[#E31937] mb-8"
        >
          &gt; ADAPT. TRANSFORM. LEAD.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#dealer-form"
            className="px-8 py-4 bg-[#E31937] font-mono font-bold text-black text-lg hover:bg-[#ff3366] transition-colors"
            style={{ boxShadow: '0 0 20px rgba(227, 25, 55, 0.5)' }}
          >
            [ CLAIM_TERRITORY ]
          </a>
          <a
            href="#products"
            className="px-8 py-4 border border-[#E31937] font-mono font-bold text-[#E31937] hover:bg-[#E31937] hover:text-black transition-colors"
          >
            {'>'} ACCESS LINEUP
          </a>
        </motion.div>
      </div>
      
      {/* Stats HUD */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block font-mono text-xs text-[#E31937]"
      >
        <div className="space-y-4">
          <div className="border-l-2 border-[#E31937] pl-2">
            <p className="opacity-50">SYS_STATUS</p>
            <p>ONLINE</p>
          </div>
          <div className="border-l-2 border-[#E31937] pl-2">
            <p className="opacity-50">RENDER_MODE</p>
            <p>CYBERPUNK</p>
          </div>
          <div className="border-l-2 border-[#E31937] pl-2">
            <p className="opacity-50">THEME</p>
            <p>NEON_RED</p>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="text-[#E31937] font-mono text-xs"
        >
          ▼ SCROLL_NEXT
        </motion.div>
      </motion.div>
    </section>
  );
}

// Products Section
function ProductsSection() {
  const products = [
    {
      name: "HOOGA 8850",
      tagline: ">> 25KW_DUAL_SPORT_POWER",
      specs: [
        { label: "TOP_SPEED", value: "115 km/h" },
        { label: "RANGE", value: "140 km" },
        { label: "POWER", value: "25 kW" },
        { label: "BATTERY", value: "88V 50Ah" },
        { label: "CHARGE", value: "3.5 hrs" },
        { label: "SEAT", value: "900mm / 845mm" },
      ],
      colors: ["RAVE_RED", "STORM_GREY", "ARCTIC_WHITE"],
      featured: true,
    },
    {
      name: "HOOGA 7270",
      tagline: ">> 180KM_RANGE_ALL_DAY",
      specs: [
        { label: "TOP_SPEED", value: "100 km/h" },
        { label: "RANGE", value: "180 km" },
        { label: "POWER", value: "16 kW" },
        { label: "BATTERY", value: "72V 70Ah" },
        { label: "CHARGE", value: "4.5 hrs" },
        { label: "SEAT", value: "900mm / 845mm" },
      ],
      colors: ["RAVE_RED", "STORM_GREY", "ARCTIC_WHITE"],
      featured: false,
    },
  ];

  return (
    <AnimatedSection id="products" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-[#E31937] text-[#E31937] text-xs font-mono mb-4">
            // SYSTEM_OUTPUT: LINEUP
          </div>
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">OUR </span>
            <span className="text-[#E31937]">LINEUP</span>
          </h2>
          <p className="font-mono text-gray-400 text-lg max-w-2xl mx-auto">
            &gt; The 8850 for raw power. The 7270 for all-day range.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              variants={fadeInUp}
              className={`relative p-8 bg-[#0a0a0a] ${product.featured ? 'neon-border' : 'border border-[#E31937]/30'}`}
              style={{
                boxShadow: product.featured ? '0 0 30px rgba(227, 25, 55, 0.2) inset' : 'none'
              }}
            >
              {product.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E31937] text-black px-4 py-1 font-mono text-xs font-bold">
                  [FLAGSHIP]
                </div>
              )}
              
              {/* Product image */}
              <div className="w-full h-48 mb-6 rounded relative overflow-hidden" style={{
                border: `1px solid ${product.featured ? '#E31937' : '#333'}`
              }}>
                <img
                  src={product.featured ? "/images/page-06.png" : "/images/page-15.png"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E31937]/10 to-transparent animate-pulse" />
              </div>

              <h3 className="font-mono text-3xl font-bold text-white mb-1">{product.name}</h3>
              <p className="font-mono text-[#E31937] text-sm mb-6">{product.tagline}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="border-l-2 border-[#E31937] pl-3">
                    <p className="font-mono text-[#E31937] text-xs opacity-70">{spec.label}</p>
                    <p className="font-mono text-white font-bold">{spec.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 flex-wrap">
                {product.colors.map((color) => (
                  <span key={color} className="px-3 py-1 border border-[#E31937]/50 text-[#E31937] text-xs font-mono">
                    {color}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[#E31937]/30">
                <p className="font-mono text-gray-400 text-xs mb-2">// RIDING_MODES</p>
                <div className="flex gap-3">
                  {['ECO', 'SPORTS', 'BEAST'].map((mode) => (
                    <span
                      key={mode}
                      className={`px-4 py-2 font-mono text-sm font-bold ${
                        mode === 'BEAST'
                          ? 'bg-[#E31937] text-black'
                          : mode === 'SPORTS'
                          ? 'border border-[#E31937] text-[#E31937]'
                          : 'border border-gray-700 text-gray-500'
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
      description: "&gt; 19/18 DOT tires for daily riders",
      features: ["DUAL_PURPOSE_TIRES", "USD_GOLD_FORKS", "DOT_HYDRAULIC_BRAKES"],
    },
    {
      name: "TRAIL",
      wheel: "21/18",
      description: "&gt; 21/18 knobby tires + 240mm KKE travel",
      features: ["KNOBBY_OFF_ROAD", "KKE_240MM_TRAVEL", "ALUMINUM_BASH_PLATE"],
    },
    {
      name: "SUPERMOTO",
      wheel: "17/17",
      description: "&gt; 17/17 sticky wheels for flat track",
      features: ["DUAL_PURPOSE_TIRES", "SPORT_SUSPENSION", "QUICK_RELEASE_WHEELS"],
    },
  ];

  return (
    <AnimatedSection className="py-24 px-4 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-[#E31937] text-[#E31937] text-xs font-mono mb-4">
            // CONFIG_SELECT
          </div>
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">CHOOSE </span>
            <span className="text-[#E31937]">VARIANT</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {variants.map((variant, index) => (
            <motion.div
              key={variant.name}
              variants={fadeInUp}
              className="p-6 bg-[#0a0a0a] border border-[#E31937]/30 hover:border-[#E31937] transition-colors group"
            >
              <div className="w-full h-32 mb-4 rounded flex items-center justify-center bg-gradient-to-br from-[#E31937]/10 to-transparent border border-[#E31937]/30 group-hover:border-[#E31937] transition-colors">
                <span className="font-mono text-[#E31937] text-xl">{variant.wheel}</span>
              </div>
              <h3 className="font-mono text-2xl font-bold text-white mb-2">{variant.name}</h3>
              <p className="font-mono text-[#E31937] text-sm mb-4">{variant.description}</p>
              <ul className="space-y-2">
                {variant.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-400 text-xs font-mono">
                    <span className="w-2 h-2 bg-[#E31937]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <HUDLine />

        <motion.div variants={fadeInUp} className="mt-12 text-center">
          <h3 className="font-mono text-xl font-bold text-white mb-8">// BODY_STYLES</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-[#0a0a0a] border border-[#E31937]/30">
              <h4 className="font-mono text-xl font-bold text-[#E31937] mb-2">SEMI-SHROUD</h4>
              <p className="font-mono text-gray-400 text-sm">&gt; Open frame, lighter weight, easier service</p>
            </div>
            <div className="p-6 bg-[#0a0a0a] border border-[#E31937]/30">
              <h4 className="font-mono text-xl font-bold text-[#E31937] mb-2">FULL-FAIRING</h4>
              <p className="font-mono text-gray-400 text-sm">&gt; Full wind protection for highway speeds</p>
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
    { title: "3-IN-1 LIGHT", desc: "Headlight + DRL + amber in one sealed unit. Fewer parts, fewer claims", icon: "[💡]" },
    { title: "DUAL BATTERY", desc: "Swap in under 60 seconds. Double range between charges", icon: "[🔋]" },
    { title: "BATTERY LOCK", desc: "Tamper-proof locking with at-a-glance charge status", icon: "[🔒]" },
    { title: "ALUMINUM PLATE", desc: "CNC skid plate protects motor and frame on trail variants", icon: "[🛡️]" },
    { title: "EXT_CHG_PORT", desc: "Any standard outlet. No battery removal needed", icon: "[⚡]" },
    { title: "CHAIN DRIVE", desc: "Mid-mount motor with standard chain drive. Any shop can service it", icon: "[⚙️]" },
    { title: "KKE SUSPENSION", desc: "240mm travel front and rear. Fully adjustable", icon: "[🔧]" },
    { title: "REAR_FOOT_BRAKE", desc: "Optional foot brake. Riders choose their setup", icon: "[🦶]" },
  ];

  return (
    <AnimatedSection className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-[#E31937] text-[#E31937] text-xs font-mono mb-4">
            // SPECIFICATIONS
          </div>
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">BUILT_TO </span>
            <span className="text-[#E31937]">SELL</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="p-4 bg-[#0a0a0a] border border-[#E31937]/20 hover:border-[#E31937] transition-colors"
            >
              <div className="font-mono text-[#E31937] mb-3">{feature.icon}</div>
              <h3 className="font-mono text-sm font-bold text-white mb-1">{feature.title}</h3>
              <p className="font-mono text-gray-500 text-xs">{feature.desc}</p>
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
    { title: "MARKET_TIMING", desc: "Electric powersports growing 40%+ YoY. Early dealers own their region", stat: "+40%", label: "YoY_GROWTH" },
    { title: "ZERO_FLUIDS", desc: "Service stays busy with upgrades and accessories, not oil changes", stat: "0", label: "GAS_OIL" },
    { title: "TURNKEY_PROGRAM", desc: "POP displays, digital assets, product training, B2B portal", stat: "DONE", label: "FOR_YOU" },
    { title: "SIX_CONFIGS", desc: "Three variants, two body styles. Fewer SKUs, more customers", stat: "6", label: "PER_MODEL" },
  ];

  return (
    <AnimatedSection className="py-24 px-4 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-[#E31937] text-[#E31937] text-xs font-mono mb-4">
            // PARTNERSHIP_PROTOCOL
          </div>
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">WHY </span>
            <span className="text-[#E31937]">PARTNER</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={fadeInUp}
              className="p-6 bg-[#0a0a0a] border border-[#E31937]/30 text-center"
            >
              <div className="font-mono text-4xl font-black text-[#E31937] mb-2">{benefit.stat}</div>
              <div className="font-mono text-gray-500 text-xs mb-4">{benefit.label}</div>
              <h3 className="font-mono text-sm font-bold text-white mb-2">{benefit.title}</h3>
              <p className="font-mono text-gray-500 text-xs">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          className="mt-16 text-center p-8 border border-[#E31937]/50"
        >
          <h3 className="font-mono text-xl font-bold text-white mb-4">// 2026_TERRITORIES_FILLING</h3>
          <p className="font-mono text-gray-400 mb-6">
            &gt; Limited dealers per region. Once your area is claimed, it is closed.
          </p>
          <a
            href="#dealer-form"
            className="inline-block px-8 py-4 bg-[#E31937] font-mono font-bold text-black hover:bg-[#ff3366] transition-colors"
            style={{ boxShadow: '0 0 20px rgba(227, 25, 55, 0.5)' }}
          >
            [ RESERVE_TERRITORY ]
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
    <AnimatedSection id="dealer-form" className="py-24 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <div className="inline-block px-4 py-1 border border-[#E31937] text-[#E31937] text-xs font-mono mb-4">
            // DEALER_WAITLIST
          </div>
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">LOCK_IN </span>
            <span className="text-[#E31937]">REGION</span>
          </h2>
          <p className="font-mono text-gray-400 text-lg max-w-2xl mx-auto">
            &gt; Submit details to reserve dealer rights. Response within 2-3 business days.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-12 border border-[#E31937]"
          >
            <div className="font-mono text-6xl text-[#E31937] mb-4">[ ✓ ]</div>
            <h3 className="font-mono text-2xl font-bold text-white mb-4">TRANSMISSION_COMPLETE</h3>
            <p className="font-mono text-gray-400">
              &gt; Your request has been logged. Contact within 2-3 business days.
            </p>
          </motion.div>
        ) : (
          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="space-y-6 p-8 bg-[#0a0a0a] border border-[#E31937]/30"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-[#E31937] text-xs uppercase tracking-wider mb-2">
                  NAME *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-[#E31937]/30 text-white font-mono focus:border-[#E31937] outline-none"
                  placeholder="Enter name..."
                />
              </div>
              <div>
                <label className="block font-mono text-[#E31937] text-xs uppercase tracking-wider mb-2">
                  BUSINESS *
                </label>
                <input
                  type="text"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-[#E31937]/30 text-white font-mono focus:border-[#E31937] outline-none"
                  placeholder="Enter business..."
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-[#E31937] text-xs uppercase tracking-wider mb-2">
                  EMAIL *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-[#E31937]/30 text-white font-mono focus:border-[#E31937] outline-none"
                  placeholder="Enter email..."
                />
              </div>
              <div>
                <label className="block font-mono text-gray-500 text-xs uppercase tracking-wider mb-2">
                  PHONE
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-[#E31937]/30 text-white font-mono focus:border-[#E31937] outline-none"
                  placeholder="Enter phone..."
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[#E31937] text-xs uppercase tracking-wider mb-2">
                LOCATION *
              </label>
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-[#E31937]/30 text-white font-mono focus:border-[#E31937] outline-none"
                placeholder="City, State"
              />
            </div>

            <div>
              <label className="block font-mono text-gray-500 text-xs uppercase tracking-wider mb-2">
                MESSAGE [OPTIONAL]
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-[#E31937]/30 text-white font-mono focus:border-[#E31937] outline-none resize-none"
                placeholder="Additional details..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#E31937] font-mono font-bold text-black text-lg hover:bg-[#ff3366] transition-colors"
              style={{ boxShadow: '0 0 30px rgba(227, 25, 55, 0.3)' }}
            >
              [ SECURE_DEALER_SPOT ]
            </button>

            <p className="text-center font-mono text-gray-600 text-xs">
              // By submitting, you agree to dealer protocol
            </p>
          </motion.form>
        )}
      </div>
    </AnimatedSection>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-16 px-4 bg-black border-t border-[#E31937]/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-mono text-xl font-bold text-white mb-4">
              HOOGA <span className="text-[#E31937]">E-POWERSPORTS</span>
            </h3>
            <p className="font-mono text-gray-500 text-xs">
              FS_PERFORMANCE
              <br />
              VISTA_CA_92081
            </p>
          </div>
          <div>
            <h4 className="font-mono text-sm font-bold text-[#E31937] mb-4">// CONTACTS</h4>
            <ul className="space-y-2 font-mono text-gray-500 text-xs">
              <li>
                <a href="tel:8889058243" className="hover:text-[#E31937] transition-colors">
                  [📞] (888) 905-8243
                </a>
              </li>
              <li>
                <a href="mailto:dealers@hoogapowersports.com" className="hover:text-[#E31937] transition-colors">
                  [✉️] dealers@hoogapowersports.com
                </a>
              </li>
              <li>
                <a href="https://hoogapowersports.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E31937] transition-colors">
                  [🌐] hoogapowersports.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-sm font-bold text-[#E31937] mb-4">// NAV_LINKS</h4>
            <ul className="space-y-2 font-mono text-gray-500 text-xs">
              <li><a href="#products" className="hover:text-[#E31937] transition-colors">&gt; PRODUCTS</a></li>
              <li><a href="#dealer-form" className="hover:text-[#E31937] transition-colors">&gt; DEALER_ACCESS</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#E31937]/20 pt-8 text-center">
          <p className="font-mono text-gray-600 text-xs">
            © 2026 HOOGA E-POWERSPORTS // ALL_RIGHTS_RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function CyberpunkPage() {
  return (
    <main className="min-h-screen bg-black">
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