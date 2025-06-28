import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";

const Footer = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const handleClickEmail = () => {
    window.location.href = "mailto:bachesnguyen@gmail.com";
  };

  const socialLinks = [
    {
      icon: <FaLinkedin size={24} />,
      url: "https://linkedin.com/in/bach-nguyen-t",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/bachnguyent",
      label: "GitHub",
    },
    {
      icon: <MdEmail size={24} />,
      url: "mailto:bachesnguyen@gmail.com",
      label: "Email",
    },
  ];

  const navItems = [
    { name: "Home", to: "Home" },
    { name: "About", to: "About" },
    { name: "Skills", to: "Skills" },
    { name: "Experiences", to: "Experiences" },
    { name: "Contact", to: "Contact" },
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

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Top Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Brand */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <Link
                to="Home"
                spy={true}
                smooth={true}
                duration={700}
                className="inline-block"
              >
                <motion.h2
                  className="text-3xl font-bold gradient-text cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Bach Nguyen
                </motion.h2>
              </Link>
              <p className="text-slate-300 max-w-md">
                A passionate software engineer and leader dedicated to creating innovative solutions 
                and fostering collaborative environments.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
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
                      className="text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer block py-2"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="border-t border-slate-700"
            variants={itemVariants}
          />

          {/* Bottom Section */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            variants={itemVariants}
          >
            <div className="text-center md:text-left">
              <p className="text-slate-400">
                Designed & Developed from scratch by Bach Nguyen
              </p>
              <p className="text-slate-400 text-sm mt-1">
                Using ReactJS, JavaScript, HTML, CSS, Tailwind CSS & Framer Motion
              </p>
            </div>
            
            <motion.div
              className="flex items-center space-x-2 text-slate-400"
              whileHover={{ scale: 1.05 }}
            >
              <span>© 2025 Bach Nguyen. All rights reserved.</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          to="Home"
          spy={true}
          smooth={true}
          duration={700}
          className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ y: -2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </motion.svg>
        </Link>
      </motion.div>
    </footer>
  );
};

export default Footer;
