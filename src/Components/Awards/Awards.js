import React from "react";
import { motion } from "framer-motion";

const Awards = () => {
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

  const achievements = [
    {
      title: "Canada–Wide Science Fair Silver Medalist",
      org: "Youth Science Canada",
      date: "May 2022",
      icon: "🥈",
      color: "from-gray-400 to-gray-600",
      mainAward: "Excellence Award – Silver Medal",
      subAwards: [
        "Excellence Award",
        "Energy Challenge Award",
        "Renewable Energy Award"
      ],
    },
    {
      title: "Vietnam Youth Startup - Top 10",
      org: "Startup Wheel",
      date: "July 2025",
      icon: "🥈",
      color: "from-gray-400 to-gray-600",
      mainAward: "Top 10 Best Startup Ideas - Youth Category",
      subAwards: [
      ],
    },
  ];

  return (
    <div className="section-padding">
      <div className="container-max">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {/* Header */}
          <motion.div className="text-center space-y-6" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-full border border-yellow-200"
              variants={itemVariants}
            >
              <span className="text-yellow-700 font-semibold">Awards & Recognition</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text">
              Achievements & Honors
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Recognition for excellence in scientific research, innovation, and academic achievement
              throughout my educational journey.
            </p>
          </motion.div>

          {/* Awards & Recognition */}
          <motion.div className="space-y-12" variants={itemVariants}>
            <div className="space-y-8">
              {achievements.map((award, index) => (
                <motion.div
                  key={award.title}
                  className="glass-effect p-10 rounded-3xl floating-card"
                  variants={cardVariants}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-start gap-8">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-r ${award.color} rounded-3xl flex items-center justify-center text-3xl shadow-xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {award.icon}
                    </motion.div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h4 className="text-2xl font-bold text-slate-800 mb-2">
                          {award.title}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-slate-600">
                          <span className="font-semibold">{award.org}</span>
                          <span className="text-sm">{award.date}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                          <p className="font-semibold text-yellow-800">🏅 {award.mainAward}</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {award.subAwards.map((subAward, subIndex) => (
                            <div
                              key={subIndex}
                              className="p-3 bg-blue-50 rounded-lg border border-blue-200"
                            >
                              <p className="text-sm text-blue-800">• {subAward}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="glass-effect p-12 rounded-3xl text-center"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-6">Continuing the Journey</h3>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto mb-8">
              These achievements represent milestones in my journey of continuous learning and innovation.
              I'm committed to pushing boundaries and making meaningful contributions to technology and society.
            </p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={itemVariants}
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
                <i className="fas fa-external-link-alt ml-2"></i>
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <i className="fas fa-envelope ml-2"></i>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Awards;
