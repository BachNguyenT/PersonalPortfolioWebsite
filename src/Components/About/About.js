import React from "react";
import { motion } from "framer-motion";

const About = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { number: "3.8+", label: "GPA", icon: "📚", color: "from-blue-500 to-blue-600" },
    { number: "5+", label: "Leadership Roles", icon: "👑", color: "from-purple-500 to-purple-600" },
    { number: "100+", label: "Students Mentored", icon: "🎓", color: "from-green-500 to-green-600" },
    { number: "3+", label: "Awards Won", icon: "🏆", color: "from-yellow-500 to-orange-500" },
  ];

  const personalValues = [
    {
      title: "Innovation",
      description: "Constantly pushing boundaries and exploring new technologies to solve complex problems.",
    },
    {
      title: "Leadership",
      description: "Empowering teams and individuals to achieve their full potential through collaborative guidance.",
    },
    {
      title: "Excellence",
      description: "Committed to delivering high-quality work and maintaining the highest standards in every project.",
    },
    {
      title: "Community",
      description: "Building inclusive environments where everyone can thrive and contribute meaningfully.",
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full border border-purple-200"
              variants={itemVariants}
            >
              <span className="text-purple-700 font-semibold">About Me</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text">
              My Journey & Story
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              A passionate software engineer combining technical expertise with leadership experience,
              driven by innovation and a commitment to making a positive impact through technology.
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-6" variants={itemVariants}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 glass-effect rounded-2xl card-hover"
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg`}
                  whileHover={{ rotate: 10 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education & Summary */}
          <motion.div className="grid lg:grid-cols-2 gap-12" variants={itemVariants}>
            {/* Education */}
            <motion.div className="space-y-6" variants={cardVariants}>
              <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                Education
              </h3>
              <div className="glass-effect p-8 rounded-3xl floating-card">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    🏛️
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-800 mb-2">
                      Royal Melbourne Institute of Technology
                    </h4>
                    <p className="text-lg font-semibold text-blue-600 mb-2">
                      Honours Bachelor of Software Engineering
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-slate-600">
                      <span className="flex items-center gap-2">
                        <i className="fas fa-map-marker-alt text-red-500"></i>
                        Ho Chi Minh City, Vietnam
                      </span>
                      <span className="flex items-center gap-2">
                        <i className="fas fa-calendar text-blue-500"></i>
                        Sep 2023 – Present
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        GPA: 3.8+
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        Honours Program
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Personal Values */}
            <motion.div className="space-y-6" variants={cardVariants}>
              <h3 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                Core Values
              </h3>
              <div className="space-y-4">
                {personalValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="glass-effect p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">{value.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>          </motion.div>

          {/* Personal Summary */}
          <motion.div
            className="glass-effect p-12 rounded-3xl text-center"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-6">My Mission</h3>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              I am passionate about leveraging technology to create meaningful solutions that make a positive impact.
              Through my journey in software engineering, leadership roles, and competitive achievements, I've developed
              a unique perspective that combines technical excellence with human-centered design. My goal is to continue
              pushing the boundaries of what's possible while fostering inclusive communities where innovation thrives.
            </p>
            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-4"
              variants={itemVariants}
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
                <i className="fas fa-download ml-2"></i>
              </motion.button>
              <motion.a
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/BachNguyenT"
              >
                View Projects
                <i className="fas fa-external-link-alt ml-2"></i>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
