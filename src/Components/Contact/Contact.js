import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const contactMethods = [
    {
      name: "Email",
      value: "s4044878@rmit.edu.vn",
      href: "mailto:s4044878@rmit.edu.vn",
      icon: "📧",
      color: "from-blue-500 to-blue-600",
      description: "Drop me a line anytime",
    },
    {
      name: "Phone",
      value: "+84 86 8615948",
      href: "tel:+84868615948",
      icon: "📱",
      color: "from-green-500 to-green-600", 
      description: "Call me directly",
    },
    {
      name: "Location",
      value: "Ho Chi Minh City, Vietnam",
      href: "https://maps.google.com/?q=Ho+Chi+Minh+City,Vietnam",
      icon: "📍",
      color: "from-orange-500 to-orange-600", 
      description: "Based in vibrant HCMC",
    },
    {
      name: "LinkedIn",
      value: "Bach Nguyen",
      href: "https://linkedin.com/in/Bach-Nguyen-T",
      icon: "💼",
      color: "from-blue-600 to-indigo-600",
      description: "Let's connect professionally",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/Bach-Nguyen-T",
      icon: "fab fa-linkedin",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "GitHub", 
      url: "https://github.com/BachNguyenT",
      icon: "fab fa-github",
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "Email",
      url: "mailto:s4044878@rmit.edu.vn",
      icon: "fas fa-envelope",
      color: "from-red-500 to-red-600",
    },
    {
      name: "Portfolio",
      url: "https://bachnguyen.vercel.app",
      icon: "fas fa-globe",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Discord",
      url: "#",
      icon: "fab fa-discord",
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Telegram",
      url: "#",
      icon: "fab fa-telegram",
      color: "from-blue-400 to-blue-500",
    },
  ];

  const quickActions = [
    {
      title: "Schedule a Call",
      description: "Book a 30-minute chat about opportunities",
      icon: "📅",
      action: "https://calendly.com/bach-nguyen",
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Download Resume",
      description: "Get my latest CV and portfolio",
      icon: "📄",
      action: "#",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "View Projects",
      description: "Explore my latest work and case studies",
      icon: "🚀",
      action: "#",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="section-padding">
      <div className="container-max">
        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {/* Header */}
          <motion.div className="text-center space-y-6" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-full border border-green-200"
              variants={itemVariants}
            >
              <span className="text-2xl">📧</span>
              <span className="text-green-700 font-semibold">Get In Touch</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              I'm always excited to discuss new opportunities, innovative projects, or just connect with fellow tech enthusiasts. 
              Whether you have a specific project in mind or want to explore potential collaborations, I'd love to hear from you!
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={itemVariants}>
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.name}
                href={method.href}
                target={method.href.startsWith('http') ? "_blank" : "_self"}
                rel={method.href.startsWith('http') ? "noopener noreferrer" : ""}
                className="group floating-card glass-effect p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {method.icon}
                </motion.div>
                <h3 className="font-bold text-slate-800 mb-2">{method.name}</h3>
                <p className="text-sm text-slate-600 mb-2">{method.description}</p>
                <p className="text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="glass-effect p-8 rounded-3xl">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                    <span className="text-3xl">✉️</span>
                    Send me a message
                  </h3>
                  <p className="text-slate-600">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80 backdrop-blur-sm hover:border-slate-300"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80 backdrop-blur-sm hover:border-slate-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80 backdrop-blur-sm hover:border-slate-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80 backdrop-blur-sm resize-none hover:border-slate-300"
                      placeholder="Tell me about your project, ideas, or just say hello..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-8 rounded-xl font-semibold text-white transition-all duration-300 transform ${
                      isSubmitting 
                        ? "bg-gray-400 cursor-not-allowed" 
                        : submitStatus === "success"
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl"
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>Sending...</span>
                      </div>
                    ) : submitStatus === "success" ? (
                      <div className="flex items-center justify-center gap-3">
                        <i className="fas fa-check"></i>
                        <span>Message Sent Successfully!</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-3">
                        <span>Send Message</span>
                        <i className="fas fa-paper-plane"></i>
                      </div>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* Quick Actions */}
              <div className="glass-effect p-6 rounded-3xl">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="text-2xl">⚡</span>
                  Quick Actions
                </h3>
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <motion.a
                      key={action.title}
                      href={action.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-4 border border-slate-200 rounded-xl hover:border-blue-300 transition-all duration-300 hover:shadow-md"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center text-lg`}>
                          {action.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                            {action.title}
                          </h4>
                          <p className="text-sm text-slate-600">{action.description}</p>
                        </div>
                        <i className="fas fa-external-link-alt text-slate-400 group-hover:text-blue-500 transition-colors"></i>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-effect p-6 rounded-3xl">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="text-2xl">🌐</span>
                  Connect With Me
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 bg-gradient-to-r ${social.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 text-sm font-medium`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className={social.icon}></i>
                      <span className="hidden sm:inline">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="glass-effect p-6 rounded-3xl">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                  <span className="text-2xl">🟢</span>
                  Availability
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 font-semibold">Available for new projects</span>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Currently open to freelance opportunities, full-time positions, and exciting collaborations.
                  </p>
                  <div className="pt-2">
                    <p className="text-xs text-slate-500">
                      <i className="fas fa-clock mr-1"></i>
                      Response time: Usually within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Let's turn your ideas into reality. I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="mailto:s4044878@rmit.edu.vn"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-envelope"></i>
                <span>Send Email</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/Bach-Nguyen-T"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-linkedin"></i>
                <span>Connect on LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
