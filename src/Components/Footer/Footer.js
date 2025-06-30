import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/bach-nguyen-t",
      icon: "fab fa-linkedin",
      color: "from-blue-600 to-blue-700",
      description: "Professional network",
    },
    {
      name: "GitHub",
      url: "https://github.com/BachNguyenT",
      icon: "fab fa-github",
      color: "from-gray-700 to-gray-900",
      description: "Code repositories",
    },
    {
      name: "Email",
      url: "mailto:s4044878@rmit.edu.vn",
      icon: "fas fa-envelope",
      color: "from-red-500 to-red-600",
      description: "Direct contact",
    },
    {
      name: "Portfolio",
      url: "https://bachnguyen.vercel.app",
      icon: "fas fa-globe",
      color: "from-green-500 to-green-600",
      description: "Live website",
    },
  ];

  const navItems = [
    { name: "Home", to: "Home", icon: "🏠" },
    { name: "About", to: "About", icon: "👤" },
    { name: "Skills", to: "Skills", icon: "⚡" },
    { name: "Experiences", to: "Experiences", icon: "💼" },
    { name: "Contact", to: "Contact", icon: "📧" },
  ];

  const quickInfo = [
    {
      label: "Location",
      value: "Ho Chi Minh City, Vietnam",
      icon: "📍",
    },
    {
      label: "Status",
      value: "Available for opportunities",
      icon: "🟢",
    },
    {
      label: "Experience",
      value: "3+ Years in Development",
      icon: "💻",
    },
    {
      label: "Education",
      value: "Software Engineering @ RMIT",
      icon: "🎓",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:50px_50px]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {/* Main Content */}
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Brand & Description */}
              <motion.div className="lg:col-span-2 space-y-8" variants={itemVariants}>
                <div>
                  <Link
                    to="Home"
                    spy={true}
                    smooth={true}
                    duration={700}
                    className="inline-block group cursor-pointer"
                  >
                    <motion.h2
                      className="text-4xl font-bold gradient-text mb-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      Bach Nguyen
                    </motion.h2>
                    <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
                  </Link>
                  <p className="text-xl font-semibold text-blue-300 mt-4">
                    Software Engineer & Tech Enthusiast
                  </p>
                </div>

                <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                  Passionate about building innovative web applications and leading teams to success. 
                  Combining technical expertise with creative problem-solving to deliver exceptional user experiences.
                </p>

                {/* Quick Info Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {quickInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-xl">{info.icon}</span>
                      <div>
                        <p className="text-slate-400 text-sm">{info.label}</p>
                        <p className="text-white font-medium text-sm">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Connect With Me</h3>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-3 px-4 py-3 bg-gradient-to-r ${social.color} rounded-xl text-white hover:shadow-lg transition-all duration-300`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <i className={`${social.icon} text-lg`}></i>
                        <div className="hidden sm:block">
                          <p className="font-semibold text-sm">{social.name}</p>
                          <p className="text-xs opacity-90">{social.description}</p>
                        </div>
                        <i className="fas fa-external-link-alt text-xs opacity-70 group-hover:opacity-100 transition-opacity"></i>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <motion.div className="space-y-6" variants={itemVariants}>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-2xl">🧭</span>
                  Quick Navigation
                </h3>
                <div className="space-y-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.to}
                        spy={true}
                        smooth={true}
                        duration={700}
                        className="group flex items-center gap-3 p-3 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 cursor-pointer"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                        <i className="fas fa-arrow-right text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ml-auto"></i>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact & CTA */}
              <motion.div className="space-y-6" variants={itemVariants}>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  Let's Work Together
                </h3>
                
                <div className="space-y-4">
                  <p className="text-slate-300">
                    Ready to start your next project? I'm always excited to collaborate on innovative ideas.
                  </p>
                  
                  <div className="space-y-3">
                    <motion.a
                      href="mailto:s4044878@rmit.edu.vn"
                      className="block w-full p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <i className="fas fa-envelope mr-2"></i>
                      Send me an email
                    </motion.a>
                    
                    <motion.a
                      href="#"
                      className="block w-full p-3 border-2 border-white/20 text-white rounded-xl font-medium text-center hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <i className="fas fa-download mr-2"></i>
                      Download CV
                    </motion.a>
                  </div>
                </div>

                {/* Availability Status */}
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-semibold">Available for hire</span>
                  </div>
                  <p className="text-green-300 text-sm">
                    Open to new opportunities and exciting projects
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Divider with decorative elements */}
            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="px-6 bg-slate-800">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Section */}
            <motion.div
              className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0"
              variants={itemVariants}
            >
              <div className="text-center lg:text-left space-y-2">
                <p className="text-slate-400 font-medium">
                  Designed & Developed with ❤️ by Bach Nguyen
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-slate-500 text-sm">
                  <span className="px-2 py-1 bg-slate-700 rounded">React.js</span>
                  <span className="px-2 py-1 bg-slate-700 rounded">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-slate-700 rounded">Framer Motion</span>
                  <span className="px-2 py-1 bg-slate-700 rounded">JavaScript</span>
                </div>
              </div>

              <motion.div
                className="flex items-center space-x-6 text-slate-400"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center lg:text-right">
                  <p className="font-medium">© {currentYear} Bach Nguyen</p>
                  <p className="text-sm">All rights reserved</p>
                </div>
                <div className="text-3xl">🌟</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <motion.div
        className={`fixed bottom-8 right-8 z-50 ${showBackToTop ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0, 
          scale: showBackToTop ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="Home"
          spy={true}
          smooth={true}
          duration={700}
          className="group w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          <motion.i
            className="fas fa-arrow-up text-lg"
            whileHover={{ y: -2 }}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Tooltip */}
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Back to top
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default Footer;
