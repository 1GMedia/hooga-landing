"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
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
        style={{ filter: 'grayscale(100%) brightness(0.7)' }}
      >
        <source src="/images/hooga-video1.mp4" type="video/mp4" />
      </video>
      
      {/* Dark fallback background + overlay */}
      <div className="absolute inset-0 bg-black" style={{ zIndex: -1 }} />
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs font-medium tracking-[0.4em] text-white/80 uppercase mb-8"
        >
          By FS Performance — Vista, California
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-7xl md:text-9xl lg:text-[10rem] font-bold text-white leading-none mb-8 tracking-tight"
        >
          HOOGA
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-none mb-8"
        >
          E-Powersports
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-white/70 font-light italic mb-12"
        >
          Adapt. Transform. Lead.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="#dealer-form"
            className="px-10 py-5 bg-white text-black font-bold text-lg tracking-wide hover:bg-gray-200 transition-colors"
          >
            Claim Your Territory
          </a>
          <a
            href="#products"
            className="px-10 py-5 border border-white text-white font-bold text-lg tracking-wide hover:bg-white hover:text-black transition-colors"
          >
            View Lineup
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-white/30" />
      </motion.div>
    </section>
  );
}

// Products Section
function ProductsSection() {
  const products = [
    {
      name: "HOOGA 8850",
      tagline: "25kW of Pure Dual-Sport Power",
      specs: [
        { label: "Top Speed", value: "115 km/h" },
        { label: "Range", value: "140 km" },
        { label: "Power", value: "25 kW" },
        { label: "Battery", value: "88V 50Ah" },
        { label: "Charge Time", value: "3.5 hrs" },
        { label: "Seat Heights", value: "900mm / 845mm" },
      ],
      colors: ["Rave Red", "Storm Grey", "Arctic White"],
      featured: true,
    },
    {
      name: "HOOGA 7270",
      tagline: "180km Range — Ride All Day, Charge Overnight",
      specs: [
        { label: "Top Speed", value: "100 km/h" },
        { label: "Range", value: "180 km" },
        { label: "Power", value: "16 kW" },
        { label: "Battery", value: "72V 70Ah" },
        { label: "Charge Time", value: "4.5 hrs" },
        { label: "Seat Heights", value: "900mm / 845mm" },
      ],
      colors: ["Rave Red", "Storm Grey", "Arctic White"],
      featured: false,
    },
  ];

  return (
    <AnimatedSection id="products" className="py-32 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-24">
          <p className="text-xs font-medium tracking-[0.3em] text-gray-500 uppercase mb-4">The Bikes</p>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Two Models, <span className="text-[#E31937]">Every Rider</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto font-light">
            The 8850 for riders who want raw power and top speed. The 7270 for all-day range and trail versatility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              variants={fadeInUp}
              className={`${product.featured ? 'border-l-4 border-[#E31937] pl-8' : 'pl-0'} transition-all`}
            >
              {product.featured && (
                <p className="text-xs font-bold tracking-widest text-[#E31937] uppercase mb-4">Flagship Model</p>
              )}
              
              {/* Product image */}
              <div className="w-full aspect-[4/3] mb-8 bg-gray-100 relative overflow-hidden">
                <img
                  src={product.featured ? "/images/page-06.png" : "/images/page-15.png"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-5xl font-bold mb-2">{product.name}</h3>
              <p className="text-xl text-gray-500 font-light mb-8">{product.tagline}</p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {product.specs.slice(0, 6).map((spec) => (
                  <div key={spec.label}>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">{spec.label}</p>
                    <p className="text-lg font-semibold">{spec.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mb-8">
                {product.colors.map((color) => (
                  <span key={color} className="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium">
                    {color}
                  </span>
                ))}
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">Riding Modes</p>
                <div className="flex gap-4">
                  {['ECO', 'SPORTS', 'BEAST'].map((mode) => (
                    <span
                      key={mode}
                      className={`px-6 py-3 text-sm font-bold tracking-wider ${
                        mode === 'BEAST'
                          ? 'bg-[#E31937] text-white'
                          : mode === 'SPORTS'
                          ? 'bg-gray-100 text-black'
                          : 'border border-gray-300 text-gray-500'
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
      name: "Street",
      wheel: "19/18",
      description: "Commuter-ready with DOT-approved tires for daily riders",
      features: ["Street tires", "Urban suspension", "DOT brakes"],
    },
    {
      name: "Trail",
      wheel: "21/18",
      description: "240mm KKE suspension and knobby tires for trails and fire roads",
      features: ["Knobby tires", "KKE 240mm suspension", "Reinforced frame"],
    },
    {
      name: "Supermoto",
      wheel: "17/17",
      description: "Sticky 17-inch wheels and sport suspension for flat track and parking lot rippers",
      features: ["Slick tires", "Sport suspension", "Quick-release wheels"],
    },
  ];

  return (
    <AnimatedSection className="py-32 px-6 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <p className="text-xs font-medium tracking-[0.3em] text-gray-500 uppercase mb-4">Configuration</p>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Choose Your <span className="text-[#E31937]">Variant</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto font-light">
            Three wheel packages. Two body styles. Every model built to order for your market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {variants.map((variant, index) => (
            <motion.div
              key={variant.name}
              variants={fadeInUp}
              className="p-10 bg-white"
            >
              <div className="w-full h-40 mb-8 bg-gray-100 flex items-center justify-center">
                <span className="text-3xl font-light text-gray-400">{variant.wheel}</span>
              </div>
              <h3 className="text-3xl font-bold mb-3">{variant.name}</h3>
              <p className="text-gray-500 font-light mb-6 leading-relaxed">{variant.description}</p>
              <ul className="space-y-3">
                {variant.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-600">
                    <span className="w-2 h-2 bg-[#E31937] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="text-center pt-16 border-t border-gray-200">
          <h3 className="text-2xl font-bold mb-8">Body Styles</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="p-8 bg-white">
              <h4 className="text-xl font-bold mb-2">Semi-Shroud</h4>
              <p className="text-gray-500 font-light">Open frame, lighter weight, easier maintenance access</p>
            </div>
            <div className="p-8 bg-white">
              <h4 className="text-xl font-bold mb-2">Full-Fairing</h4>
              <p className="text-gray-500 font-light">Full wind protection for longer rides and highway speeds</p>
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
    { title: "3-in-1 Light Module", description: "Headlight, DRL, and amber turn signals in one sealed unit — fewer parts, fewer warranty claims" },
    { title: "Dual Battery System", description: "Swap batteries in under 60 seconds. Customers can double their range between charges" },
    { title: "Battery Lock & Indicator", description: "Tamper-proof locking with at-a-glance charge status — no guessing, no theft risk" },
    { title: "Aluminum Bash Plate", description: "CNC aluminum skid plate protects the motor and frame on trail variants" },
    { title: "External Charging Port", description: "Plug into any standard outlet — no battery removal needed, no special equipment" },
    { title: "Chain Drive Motor", description: "Mid-mount electric motor with standard chain drive — any shop can service it" },
    { title: "KKE Suspension", description: "240mm travel front and rear. Fully adjustable for rider weight and terrain" },
    { title: "Rear Foot Brake", description: "Optional foot brake lets riders choose their preferred braking setup" },
  ];

  return (
    <AnimatedSection className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <p className="text-xs font-medium tracking-[0.3em] text-gray-500 uppercase mb-4">Engineering</p>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Built to <span className="text-[#E31937]">Sell</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto font-light">
            Every detail designed to reduce service calls, impress on the showroom floor, and keep riders coming back.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="p-8 bg-[#f8f8f8]"
            >
              <div className="w-12 h-12 border-2 border-[#E31937] mb-6 flex items-center justify-center">
                <span className="text-[#E31937] font-bold">{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">{feature.description}</p>
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
    { title: "Market Timing", description: "Electric powersports is growing 40%+ year-over-year. Early dealers own their region", stat: "40%", label: "YoY Growth" },
    { title: "No Gas, No Oil Changes", description: "Your service dept stays busy with upgrades and accessories, not oil changes customers skip", stat: "Zero", label: "Fluids" },
    { title: "Turnkey Dealer Program", description: "We provide POP displays, digital assets, product training, and a dedicated B2B portal", stat: "Done", label: "For You" },
    { title: "Six Configurations", description: "Three variants and two body styles per model — stock fewer SKUs, serve more customers", stat: "6", label: "Per Model" },
  ];

  return (
    <AnimatedSection className="py-32 px-6 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <p className="text-xs font-medium tracking-[0.3em] text-gray-500 uppercase mb-4">Partnership</p>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Why Partner <span className="text-[#E31937]">With HOOGA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto font-light">
            Add electric to your floor without the risk. We handle the learning curve so you can focus on selling.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={fadeInUp}
              className="p-8 bg-white text-center"
            >
              <div className="text-5xl font-bold text-[#E31937] mb-2">{benefit.stat}</div>
              <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">{benefit.label}</div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-500 font-light text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          className="mt-20 text-center p-16 bg-white"
        >
          <h3 className="text-3xl font-bold mb-4">2026 Territories Are Filling Up</h3>
          <p className="text-gray-500 font-light mb-8 max-w-md mx-auto">
            We are onboarding a limited number of dealers per region. Once your area is claimed, it is closed.
          </p>
          <a
            href="#dealer-form"
            className="inline-block px-10 py-5 bg-[#E31937] text-white font-bold text-lg tracking-wide hover:bg-[#c41530] transition-colors"
          >
            Reserve Your Territory
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
    <AnimatedSection id="dealer-form" className="py-32 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.3em] text-gray-500 uppercase mb-4">Limited Availability</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Lock In Your <span className="text-[#E31937]">Region</span>
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Submit your details to reserve dealer rights in your area. Our team responds within 2-3 business days.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-16 bg-[#f8f8f8]"
          >
            <div className="text-6xl text-[#E31937] mb-6">✓</div>
            <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
            <p className="text-gray-500 font-light">
              Your dealer application has been submitted. Our team will contact you within 2-3 business days.
            </p>
          </motion.div>
        ) : (
          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="space-y-8 p-10 bg-[#f8f8f8]"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white border border-gray-200 text-black text-lg focus:border-[#E31937] outline-none"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                  Business Name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white border border-gray-200 text-black text-lg focus:border-[#E31937] outline-none"
                  placeholder="XYZ Motorsports"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white border border-gray-200 text-black text-lg focus:border-[#E31937] outline-none"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white border border-gray-200 text-black text-lg focus:border-[#E31937] outline-none"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                Location *
              </label>
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white border border-gray-200 text-black text-lg focus:border-[#E31937] outline-none"
                placeholder="City, State"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                Message (Optional)
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white border border-gray-200 text-black text-lg focus:border-[#E31937] outline-none resize-none"
                placeholder="Tell us about your dealership experience..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-[#E31937] text-white font-bold text-lg tracking-wide hover:bg-[#c41530] transition-colors"
            >
              Secure My Dealer Spot
            </button>

            <p className="text-center text-gray-400 text-sm font-light">
              By submitting, you agree to be contacted by our dealer team.
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
    <footer className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              HOOGA <span className="text-[#E31937]">E-POWERSPORTS</span>
            </h3>
            <p className="text-gray-400 font-light">
              By FS Performance<br />
              Vista, CA 92081
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Contact</h4>
            <ul className="space-y-3 font-light text-gray-300">
              <li>
                <a href="tel:8889058243" className="hover:text-[#E31937] transition-colors">
                  (888) 905-8243
                </a>
              </li>
              <li>
                <a href="mailto:dealers@hoogapowersports.com" className="hover:text-[#E31937] transition-colors">
                  dealers@hoogapowersports.com
                </a>
              </li>
              <li>
                <a href="https://hoogapowersports.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E31937] transition-colors">
                  hoogapowersports.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Quick Links</h4>
            <ul className="space-y-3 font-light text-gray-300">
              <li><a href="#products" className="hover:text-[#E31937] transition-colors">Products</a></li>
              <li><a href="#dealer-form" className="hover:text-[#E31937] transition-colors">Become a Dealer</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-gray-800 text-center">
          <p className="text-gray-500 font-light text-sm">
            © 2026 HOOGA E-Powersports by FS Performance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function EditorialPage() {
  return (
    <main className="min-h-screen bg-white">
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