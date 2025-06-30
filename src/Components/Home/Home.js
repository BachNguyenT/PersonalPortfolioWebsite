import React from "react";
import { motion } from "framer-motion";
import Avatar from "../../assets/avatar.svg";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const socials = [
    { name: "LinkedIn", url: "https://linkedin.com/in/Bach-Nguyen-T", icon: "fab fa-linkedin", color: "from-blue-600 to-blue-700" },
    { name: "GitHub", url: "https://github.com/BachNguyenT", icon: "fab fa-github", color: "from-gray-700 to-gray-900" },
    { name: "Email", url: "mailto:s4044878@rmit.edu.vn", icon: "fas fa-envelope", color: "from-red-500 to-red-600" },
    { name: "Portfolio", url: "https://bachnguyen.vercel.app", icon: "fas fa-globe", color: "from-green-500 to-green-600" },
  ];

  const stats = [
    { number: "3+", label: "Years Experience", icon: "💼" },
    { number: "15+", label: "Projects Built", icon: "🚀" },
    { number: "5+", label: "Tech Stacks", icon: "⚡" },
    { number: "100%", label: "Commitment", icon: "🎯" },
  ];

  return (
    <div className="hero-section section-padding">
      <div className="container-max">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.p
                className="text-xl sm:text-2xl font-medium text-slate-600 tracking-wide"
                variants={itemVariants}
              >
                👋 Hello, I'm
              </motion.p>
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text text-shadow"
                style={{ lineHeight: 1.2 }}
                variants={itemVariants}
              >
                Bach Nguyen
              </motion.h1>
              <motion.div
                className="space-y-2"
                variants={itemVariants}
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-700">
                  Software Engineer
                </h2>
                <div className="flex flex-wrap gap-3 text-lg font-medium">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full border border-blue-200">
                    Frontend Specialist
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full border border-purple-200">
                    Blockchain Enthusiast
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="space-y-4 text-lg text-slate-600 leading-relaxed" variants={itemVariants}>
              <p>
                🎓 Honours Bachelor of Software Engineering @{" "}
                <a
                  href="https://www.rmit.edu.vn"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 underline decoration-blue-300 hover:decoration-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RMIT Vietnam
                </a>
                <span className="ml-2 text-slate-500 font-medium">(Sep 2023 – May 2027)</span>
              </p>
              <p className="text-slate-700">
                🚀 Passionate about building{" "}
                <span className="font-semibold text-blue-600">scalable, performant web applications</span>{" "}
                and AI solutions. Experienced in React, Next.js, Tailwind CSS, and modern web technologies.
              </p>
            </motion.div>

            /* Stats */
                  <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4" variants={itemVariants}>
                    {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center p-4 glass-effect rounded-2xl card-hover flex flex-col items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {/* <div className="text-2xl mb-2">{stat.icon}</div> */}
                  <div className="text-4xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex flex-wrap gap-4 pt-4" variants={itemVariants}>
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-outline hover:bg-gradient-to-r ${social.color} hover:text-white hover:border-transparent flex items-center gap-3 group`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-wrap gap-4 pt-6" variants={itemVariants}>
              <motion.button
                className="btn-primary flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Work</span>
                <i className="fas fa-arrow-right"></i>
              </motion.button>
              <motion.button
                className="btn-secondary flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Download CV</span>
                <i className="fas fa-download"></i>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <motion.div
              className="relative"
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-70"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-60"
                animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Main Avatar Container */}
              <div className="relative p-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
                <motion.div
                  className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden glass-effect p-2"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={Avatar}
                    alt="Bach Nguyen"
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-full"></div>
                </motion.div>
              </div>

              {/* Skill Icons */}
              <motion.div
                className="absolute top-16 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <i className="fab fa-react text-blue-500 text-xl"></i>
              </motion.div>
              <motion.div
                className="absolute bottom-16 -left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <i className="fab fa-js-square text-yellow-500 text-xl"></i>
              </motion.div>
              <motion.div
                className="absolute top-32 -left-8 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <i className="fab fa-python text-green-500 text-lg"></i>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
