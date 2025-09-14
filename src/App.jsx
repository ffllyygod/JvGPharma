// App.jsx
import React, { useState, useEffect, useCallback } from 'react';
import {
  Menu, X, Phone, Mail, MapPin, ArrowRight, CheckCircle, Shield, Award, Users,
  Microscope, Heart, Globe, Beaker, Building, FlaskConical, Brain, Dna, Send,
  ChevronDown, Star, TrendingUp, Target
} from 'lucide-react';

const JvGPharmaceuticals = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Vision', id: 'vision' },
    { name: 'Products', id: 'products' },
    { name: 'Contact', id: 'contact' }
  ];

  const products = [
    {
      name: "JvG-Cardio Plus",
      category: "Cardiovascular",
      description: "Advanced cardiovascular health management solution",
      stage: "Phase III Clinical Trials",
      icon: <Heart className="w-8 h-8" />,
      benefits: ["Reduces cardiovascular risk by 40%", "Once-daily dosing", "Minimal side effects"],
      color: "red"
    },
    {
      name: "NeuroShield",
      category: "Neurology",
      description: "Breakthrough treatment for neurodegenerative disorders",
      stage: "FDA Review",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Slows disease progression", "Improves cognitive function", "Enhanced quality of life"],
      color: "purple"
    },
    {
      name: "ImmunoBoost Pro",
      category: "Immunology",
      description: "Next-generation immunotherapy platform",
      stage: "Market Ready",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Targeted immune response", "Reduced treatment time", "Personalized therapy options"],
      color: "green"
    },
    {
      name: "GeneTherapy X1",
      category: "Gene Therapy",
      description: "Precision gene editing for rare diseases",
      stage: "Phase II Clinical Trials",
      icon: <Dna className="w-8 h-8" />,
      benefits: ["One-time treatment", "Long-lasting effects", "Minimal invasiveness"],
      color: "blue"
    }
  ];

  useEffect(() => {
    // scroll detection for nav styling & active section detection
    const offset = 100; // how far from top we consider the "in view" threshold
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + offset;
      const sections = navigation.map(n => n.id);

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    // close mobile menu on resize (desktop)
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [navigation]);

  const scrollToSection = useCallback((sectionId) => {
    const el = document.getElementById(sectionId);
    const navOffset = 80; // fixed nav height
    if (el) {
      window.scrollTo({
        top: el.offsetTop - navOffset,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    alert('Thank you for contacting JvGPharmaceuticals. We will respond within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      type: 'general'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl py-3' : 'bg-white/90 backdrop-blur-md py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-30 rounded-full"></div>
                
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  JvGPharmaceuticals
                </h1>
                <p className="hidden sm:block text-xs text-gray-600">Advancing Healthcare Through Innovation</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative font-medium transition-all duration-300 ${activeSection === item.id ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded" />
                  )}
                </button>
              ))}

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMenuOpen(v => !v)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down menu (appears under nav) */}
        <div className={`md:hidden absolute inset-x-0 top-full z-40 transition-transform duration-400 transform origin-top ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
          <div className="bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-2xl px-4 py-4">
            <div className="space-y-2">
              {navigation.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${activeSection === item.id ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* HERO (note increased top padding on mobile so menu doesn't cover content) */}
      <section id="home" className="scroll-mt-20 relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 md:pt-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Animated Background */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-30 animate-pulse rounded-full"></div>
                <FlaskConical className="relative w-24 h-24 text-blue-600" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
              Advancing Healthcare
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Through Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              JvGPharmaceuticals is pioneering next-generation therapies to transform patient lives worldwide through cutting-edge research and unwavering commitment to excellence
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <button
                onClick={() => scrollToSection('products')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Explore Our Pipeline
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold rounded-full border-2"
                style={{ borderImage: 'linear-gradient(to right,#2563eb,#9333ea) 1' }}
              >
                Learn About Us
              </button>
            </div>

            <div className="pt-16 animate-bounce">
              <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
            </div>
          </div>
        </div>
      </section>



      {/* About */}
      <section id="about" className="scroll-mt-20 py-20 lg:py-32 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-xl uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">Pioneering Tomorrow's Medicine</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded with a vision to revolutionize pharmaceutical development through cutting-edge science and unwavering commitment to patient care
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Story</h3>
                  <p className="text-gray-600 leading-relaxed">JvGPharmaceuticals was founded in 2020 by renowned scientists and pharmaceutical industry veterans who shared a common vision: to accelerate the development of innovative therapies for patients with unmet medical needs.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Growth</h3>
                  <p className="text-gray-600 leading-relaxed">Our journey began with a breakthrough discovery in targeted drug delivery systems, which has since evolved into a comprehensive pipeline of transformative medicines spanning multiple therapeutic areas.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Impact</h3>
                  <p className="text-gray-600 leading-relaxed">Today, we collaborate with leading research institutions, healthcare providers, and patient advocacy groups worldwide to ensure our innovations reach those who need them most.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Excellence</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group cursor-pointer">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Building className="w-10 h-10 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">State-of-the-Art</h4>
                    <p className="text-sm text-gray-600 mt-1">Modern Facilities</p>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Globe className="w-10 h-10 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Global Reach</h4>
                    <p className="text-sm text-gray-600 mt-1">25+ Countries</p>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Award className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">FDA Approved</h4>
                    <p className="text-sm text-gray-600 mt-1">Fully Certified</p>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Users className="w-10 h-10 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Expert Team</h4>
                    <p className="text-sm text-gray-600 mt-1">500+ Scientists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Certifications & Compliance</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">FDA Registered</h3>
                <p className="text-gray-600">Fully compliant with FDA regulations and guidelines</p>
              </div>
              <div className="text-center">
                <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">ISO 9001:2015</h3>
                <p className="text-gray-600">Quality management systems certification</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">GMP Certified</h3>
                <p className="text-gray-600">Good Manufacturing Practice standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="scroll-mt-20 pt-20 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Vision & Mission</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Shaping the future of healthcare through innovation, compassion, and scientific excellence</p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-1 mb-12">
            <div className="bg-white rounded-3xl p-12">
              <div className="max-w-4xl mx-auto text-center">
                <Microscope className="w-20 h-20 text-blue-600 mx-auto mb-8" />
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">To become a global leader in pharmaceutical innovation, delivering breakthrough therapies that transform patient lives and advance human health across the world.</p>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Global Impact</h3>
                    <p className="text-gray-600">Reaching patients in every corner of the world</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Beaker className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Scientific Leadership</h3>
                    <p className="text-gray-600">Pioneering research in multiple therapeutic areas</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Patient-Centric</h3>
                    <p className="text-gray-600">Every decision guided by patient needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3"><CheckCircle className="w-6 h-6 text-blue-600" /> Accelerate Drug Discovery</h3>
              <p className="text-gray-600">Leverage cutting-edge technologies including AI and machine learning to accelerate the discovery and development of novel therapeutics.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3"><CheckCircle className="w-6 h-6 text-purple-600" /> Ensure Global Access</h3>
              <p className="text-gray-600">Work with healthcare systems worldwide to ensure our medicines reach all patients who need them, regardless of geographic or economic barriers.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-600" /> Foster Collaboration</h3>
              <p className="text-gray-600">Build strategic partnerships with research institutions, biotech companies, and healthcare providers to advance scientific knowledge.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3"><CheckCircle className="w-6 h-6 text-orange-600" /> Maintain Highest Standards</h3>
              <p className="text-gray-600">Uphold the highest standards of quality, safety, and ethics in all aspects of our research, development, and manufacturing processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="scroll-mt-20 py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Product Pipeline</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Innovative therapies in development to address critical unmet medical needs</p>
          </div>

          <div className="mb-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div><div className="text-3xl font-bold mb-2">4</div><div className="text-blue-100">Phase III Trials</div></div>
              <div><div className="text-3xl font-bold mb-2">3</div><div className="text-blue-100">Phase II Trials</div></div>
              <div><div className="text-3xl font-bold mb-2">5</div><div className="text-blue-100">Preclinical</div></div>
              <div><div className="text-3xl font-bold mb-2">2</div><div className="text-blue-100">Market Ready</div></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className={`h-2 ${index === 0 ? 'bg-red-500' : index === 1 ? 'bg-yellow-500' : index === 2 ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${index === 0 ? 'bg-red-100 text-red-600' : index === 1 ? 'bg-yellow-100 text-yellow-600' : index === 2 ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                      {product.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${product.stage === 'Market Ready' ? 'bg-green-100 text-green-800' : product.stage === 'FDA Review' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                      {product.stage}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-blue-600 mb-4">{product.category}</p>
                  <p className="text-gray-600 mb-6">{product.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                    {product.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{b}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Therapeutic Areas</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cardiovascular</h3>
                <p className="text-gray-600">Advanced treatments for heart disease and vascular conditions</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Neurology</h3>
                <p className="text-gray-600">Innovative therapies for neurological and psychiatric disorders</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Dna className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rare Diseases</h3>
                <p className="text-gray-600">Breakthrough treatments for rare genetic conditions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We're here to answer your questions and explore partnership opportunities</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Inquiry Type</label>
                  <select name="type" value={formData.type} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all">
                    <option value="general">General Inquiry</option>
                    <option value="medical">Medical Information</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="clinical">Clinical Trials</option>
                    <option value="investor">Investor Relations</option>
                    <option value="media">Media Inquiry</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input name="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="John Doe" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="john@example.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                    <input name="subject" value={formData.subject} onChange={handleInputChange} type="text" placeholder="How can we help?" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows="5" placeholder="Please provide details about your inquiry..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>

                <button onClick={handleSubmit} className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Quick Contact</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-100">General Inquiries</p>
                      <p className="text-xl font-semibold">+1 (800) 584-7423</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-100">Email</p>
                      <p className="text-xl font-semibold">jvgpharmaceuticals@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-100">Headquarters</p>
                      <p className="text-xl font-semibold">Boston, MA 02110, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FlaskConical className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">JvGPharmaceuticals</span>
              </div>
              <p className="text-gray-400 text-sm">Pioneering next-generation therapies to transform patient lives worldwide.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors">Products</button></li>
                <li><button onClick={() => scrollToSection('vision')} className="hover:text-white transition-colors">Our Vision</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Clinical Trials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Patient Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Healthcare Professionals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investors</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety Reporting</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 JvGPharmaceuticals. All rights reserved. | FDA Registered | ISO 9001:2015 Certified</p>
          </div>
        </div>
      </footer>

      {/* Inline styles & animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 1s ease-out; }
      `}</style>
    </div>
  );
};

export default JvGPharmaceuticals;
