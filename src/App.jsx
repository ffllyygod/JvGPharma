import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, MapPin, ArrowRight, CheckCircle, Shield, Award, Users, Microscope, Heart, Globe, Beaker, Building, Calendar, Star, FlaskConical, Activity, Pill, TestTube, Brain, Dna, Stethoscope, FileText, Send } from 'lucide-react';

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      benefits: ["Reduces cardiovascular risk by 40%", "Once-daily dosing", "Minimal side effects"]
    },
    {
      name: "NeuroShield",
      category: "Neurology",
      description: "Breakthrough treatment for neurodegenerative disorders",
      stage: "FDA Review",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Slows disease progression", "Improves cognitive function", "Enhanced quality of life"]
    },
    {
      name: "ImmunoBoost Pro",
      category: "Immunology",
      description: "Next-generation immunotherapy platform",
      stage: "Market Ready",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Targeted immune response", "Reduced treatment time", "Personalized therapy options"]
    },
    {
      name: "GeneTherapy X1",
      category: "Gene Therapy",
      description: "Precision gene editing for rare diseases",
      stage: "Phase II Clinical Trials",
      icon: <Dna className="w-8 h-8" />,
      benefits: ["One-time treatment", "Long-lasting effects", "Minimal invasiveness"]
    }
  ];

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Patient Safety First",
      description: "Uncompromising commitment to patient safety and well-being"
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Scientific Excellence",
      description: "Rigorous research and development with highest standards"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Global Access",
      description: "Making innovative medicines accessible worldwide"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "FDA-compliant manufacturing and quality control"
    }
  ];

  const stats = [
    { number: "50+", label: "Research Partners", icon: <Users className="w-5 h-5" /> },
    { number: "12", label: "Products in Pipeline", icon: <TestTube className="w-5 h-5" /> },
    { number: "30M+", label: "Patients Served", icon: <Heart className="w-5 h-5" /> },
    { number: "15", label: "Countries Reached", icon: <Globe className="w-5 h-5" /> }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "20+ years in pharmaceutical leadership",
      image: "👩‍⚕️"
    },
    {
      name: "Dr. Michael Chen",
      role: "Chief Scientific Officer",
      bio: "Former FDA reviewer, 15 years R&D experience",
      image: "👨‍🔬"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Head of Clinical Development",
      bio: "Led 30+ successful clinical trials",
      image: "👩‍🔬"
    },
    {
      name: "Dr. James Wilson",
      role: "Chief Medical Officer",
      bio: "Board-certified physician, patient advocate",
      image: "👨‍⚕️"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="relative">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center space-y-8 animate-fade-in">
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 animate-pulse"></div>
                      <FlaskConical className="relative w-20 h-20 text-blue-600" />
                    </div>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                    Advancing Healthcare
                    <span className="block text-blue-600">Through Innovation</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    JvGPharmaceuticals is pioneering next-generation therapies to transform patient lives worldwide
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center pt-8">
                    <button 
                      onClick={() => setActiveSection('products')}
                      className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg"
                    >
                      Explore Our Pipeline <ArrowRight className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => setActiveSection('about')}
                      className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      Learn About Us
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Animated molecules background */}
              <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
              <div className="absolute top-40 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center text-white">
                      <div className="flex justify-center mb-4">{stat.icon}</div>
                      <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                      <div className="text-blue-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                  <p className="text-xl text-gray-600">Guiding principles that drive our mission</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((value, index) => (
                    <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">Partner With Us</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Join us in our mission to develop life-changing therapies
                </p>
                <button 
                  onClick={() => setActiveSection('contact')}
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Get In Touch
                </button>
              </div>
            </section>
          </div>
        );

      case 'about':
        return (
          <div className="pt-20">
            {/* About Hero */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h1 className="text-5xl font-bold text-gray-900 mb-6">About JvGPharmaceuticals</h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Founded with a vision to revolutionize pharmaceutical development through cutting-edge science and unwavering commitment to patient care
                  </p>
                </div>

                {/* Company Story */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                    <p className="text-gray-600 leading-relaxed">
                      JvGPharmaceuticals was founded in 2020 by a team of renowned scientists and pharmaceutical industry veterans who shared a common vision: to accelerate the development of innovative therapies for patients with unmet medical needs.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Our journey began with a breakthrough discovery in targeted drug delivery systems, which has since evolved into a comprehensive pipeline of transformative medicines spanning multiple therapeutic areas.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Today, we collaborate with leading research institutions, healthcare providers, and patient advocacy groups worldwide to ensure our innovations reach those who need them most.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-2xl">
                    <div className="bg-white p-8 rounded-2xl">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center">
                          <Building className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                          <h4 className="font-semibold text-gray-900">State-of-the-Art Facilities</h4>
                        </div>
                        <div className="text-center">
                          <Globe className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                          <h4 className="font-semibold text-gray-900">Global Reach</h4>
                        </div>
                        <div className="text-center">
                          <Award className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                          <h4 className="font-semibold text-gray-900">FDA Approved</h4>
                        </div>
                        <div className="text-center">
                          <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                          <h4 className="font-semibold text-gray-900">Expert Team</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Leadership Team */}
                <div className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Leadership Team</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl">
                          {member.image}
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                          <p className="text-blue-600 text-sm mb-3">{member.role}</p>
                          <p className="text-gray-600 text-sm">{member.bio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="bg-gray-50 rounded-2xl p-12">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Certifications & Compliance</h2>
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
          </div>
        );

      case 'vision':
        return (
          <div className="pt-20">
            <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Vision & Mission</h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Shaping the future of healthcare through innovation, compassion, and scientific excellence
                  </p>
                </div>

                {/* Vision Statement */}
                <div className="mb-20">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-1">
                    <div className="bg-white rounded-3xl p-12">
                      <div className="max-w-4xl mx-auto text-center">
                        <Microscope className="w-20 h-20 text-blue-600 mx-auto mb-8" />
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">
                          To become a global leader in pharmaceutical innovation, delivering breakthrough therapies that transform patient lives and advance human health across the world.
                        </p>
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
                </div>

                {/* Mission Points */}
                <div className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Mission</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                        Accelerate Drug Discovery
                      </h3>
                      <p className="text-gray-600">
                        Leverage cutting-edge technologies including AI and machine learning to accelerate the discovery and development of novel therapeutics.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-600">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-purple-600" />
                        Ensure Global Access
                      </h3>
                      <p className="text-gray-600">
                        Work with healthcare systems worldwide to ensure our medicines reach all patients who need them, regardless of geographic or economic barriers.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        Foster Collaboration
                      </h3>
                      <p className="text-gray-600">
                        Build strategic partnerships with research institutions, biotech companies, and healthcare providers to advance scientific knowledge.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange-600">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-orange-600" />
                        Maintain Highest Standards
                      </h3>
                      <p className="text-gray-600">
                        Uphold the highest standards of quality, safety, and ethics in all aspects of our research, development, and manufacturing processes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Future Goals */}
                <div className="bg-gray-50 rounded-2xl p-12">
                  <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">2030 Strategic Goals</h2>
                  <div className="space-y-6 max-w-3xl mx-auto">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Launch 10 New Therapies</h3>
                        <p className="text-gray-600">Bring at least 10 innovative medicines to market across oncology, neurology, and rare diseases.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Expand to 50 Countries</h3>
                        <p className="text-gray-600">Establish presence in 50 countries to ensure global access to our life-saving therapies.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Impact 100 Million Lives</h3>
                        <p className="text-gray-600">Positively impact the lives of 100 million patients through our medicines and patient support programs.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Carbon Neutral Operations</h3>
                        <p className="text-gray-600">Achieve carbon neutrality across all manufacturing and research facilities.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      case 'products':
        return (
          <div className="pt-20">
            <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Product Pipeline</h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Innovative therapies in development to address critical unmet medical needs
                  </p>
                </div>

                {/* Pipeline Overview */}
                <div className="mb-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                  <div className="grid md:grid-cols-4 gap-8 text-center">
                    <div>
                      <div className="text-3xl font-bold mb-2">4</div>
                      <div className="text-blue-100">Phase III Trials</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">3</div>
                      <div className="text-blue-100">Phase II Trials</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">5</div>
                      <div className="text-blue-100">Preclinical</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">2</div>
                      <div className="text-blue-100">Market Ready</div>
                    </div>
                  </div>
                </div>

                {/* Product Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {products.map((product, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                      <div className={`h-2 ${index === 0 ? 'bg-red-500' : index === 1 ? 'bg-yellow-500' : index === 2 ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                            index === 0 ? 'bg-red-100 text-red-600' : 
                            index === 1 ? 'bg-yellow-100 text-yellow-600' : 
                            index === 2 ? 'bg-green-100 text-green-600' : 
                            'bg-blue-100 text-blue-600'
                          }`}>
                            {product.icon}
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            product.stage === 'Market Ready' ? 'bg-green-100 text-green-800' :
                            product.stage === 'FDA Review' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {product.stage}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-sm text-blue-600 mb-4">{product.category}</p>
                        <p className="text-gray-600 mb-6">{product.description}</p>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                          {product.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600 text-sm">{benefit}</span>
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

                {/* Therapeutic Areas */}
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

                {/* Safety Information */}
                <div className="mt-16 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Important Safety Information</h3>
                      <p className="text-gray-700 text-sm">
                        All products are subject to regulatory approval. Clinical trial results and product information are for healthcare professional use only. 
                        For adverse events reporting, please contact our 24/7 safety hotline at 1-800-JVG-SAFE or visit our patient safety portal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      case 'contact':
        return (
          <div className="pt-20">
            <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We're here to answer your questions and explore partnership opportunities
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Inquiry Type</label>
                        <select 
                          name="type"
                          value={formData.type}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        >
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
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="How can we help?"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows="5"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Please provide details about your inquiry..."
                        />
                      </div>

                      <button
                        onClick={handleSubmit}
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Send Message <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-8">
                    {/* Quick Contact */}
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
                            <p className="text-xl font-semibold">info@jvgpharmaceuticals.com</p>
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

                    {/* Department Contacts */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Department Contacts</h3>
                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-600 pl-4">
                          <p className="font-semibold text-gray-900">Medical Information</p>
                          <p className="text-gray-600">medical@jvgpharmaceuticals.com</p>
                          <p className="text-gray-600">+1 (800) 584-6333</p>
                        </div>
                        <div className="border-l-4 border-purple-600 pl-4">
                          <p className="font-semibold text-gray-900">Clinical Trials</p>
                          <p className="text-gray-600">trials@jvgpharmaceuticals.com</p>
                          <p className="text-gray-600">+1 (800) 584-2747</p>
                        </div>
                        <div className="border-l-4 border-green-600 pl-4">
                          <p className="font-semibold text-gray-900">Partnership Inquiries</p>
                          <p className="text-gray-600">partners@jvgpharmaceuticals.com</p>
                          <p className="text-gray-600">+1 (800) 584-7278</p>
                        </div>
                        <div className="border-l-4 border-orange-600 pl-4">
                          <p className="font-semibold text-gray-900">Investor Relations</p>
                          <p className="text-gray-600">investors@jvgpharmaceuticals.com</p>
                          <p className="text-gray-600">+1 (800) 584-4683</p>
                        </div>
                      </div>
                    </div>

                    {/* Emergency Contact */}
                    <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">24/7 Safety Reporting</h3>
                          <p className="text-gray-700 text-sm mb-2">
                            For adverse events or product quality complaints:
                          </p>
                          <p className="font-semibold text-red-600">1-800-JVG-SAFE (584-7233)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <FlaskConical className="w-10 h-10 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">JvGPharmaceuticals</h1>
                <p className="text-xs text-gray-600">Advancing Healthcare Through Innovation</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      {renderSection()}

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FlaskConical className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">JvGPharmaceuticals</span>
              </div>
              <p className="text-gray-400 text-sm">
                Pioneering next-generation therapies to transform patient lives worldwide.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setActiveSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => setActiveSection('products')} className="hover:text-white transition-colors">Products</button></li>
                <li><button onClick={() => setActiveSection('vision')} className="hover:text-white transition-colors">Our Vision</button></li>
                <li><button onClick={() => setActiveSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
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

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default JvGPharmaceuticals;