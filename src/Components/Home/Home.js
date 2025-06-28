import React from "react";
import { motion } from "framer-motion";
import Avatar from "../../Assets/avatar.svg";

const Home = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const socials = [
    { name: "LinkedIn", url: "https://linkedin.com/in/Bach-Nguyen-T", icon: "fab fa-linkedin" },
    { name: "GitHub", url: "https://github.com/BachNguyenT", icon: "fab fa-github" },
    { name: "Email", url: "mailto:s4044878@rmit.edu.vn", icon: "fas fa-envelope" },
    { name: "Portfolio", url: "https://bachnguyen.vercel.app", icon: "fas fa-globe" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.p
              className="text-2xl sm:text-3xl font-light text-slate-600"
              variants={itemVariants}
            >
              Hi, I'm
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text"
              style={{ lineHeight: 1.5 }}
              variants={itemVariants}
            >
              Bach Nguyen
            </motion.h1>
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-700"
              variants={itemVariants}
            >
              Software Engineer | Frontend Specialist | Blockchain Enthusiast
            </motion.h2>
            <motion.div className="space-y-3 text-lg text-slate-600" variants={itemVariants}>
              <p>
                Honours Bachelor of Software Engineering @
                <a
                  href="https://www.rmit.edu.vn"
                  className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 underline decoration-primary-300 hover:decoration-primary-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RMIT Vietnam
                </a>
                <span className="ml-2 text-slate-400">(Sep 2023 – May 2027)</span>
              </p>
              <p>
                Passionate about building scalable, performant web apps and AI solutions. Experienced in React, Next.js, Tailwind, Framer Motion, and more.
              </p>
            </motion.div>
            <motion.div className="flex flex-wrap gap-4 pt-4" variants={itemVariants}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2"
                >
                  <i className={s.icon}></i> {s.name}
                </a>
              ))}
            </motion.div>
          </motion.div>
          {/* Right Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <motion.div
              className="relative"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full blur-3xl"></div>
              <motion.img
                src={Avatar}
                alt="Bach Nguyen"
                className="relative w-80 h-80 sm:w-96 sm:h-96 object-cover rounded-full shadow-2xl border-4 border-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
