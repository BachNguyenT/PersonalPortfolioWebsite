import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
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

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const personalSkills = [
    {
      title: "Badminton Excellence",
      description: "Led varsity boys' team for 2+ years, achieving multiple provincial championships. Developed exceptional tactical leadership and team management skills through high-stakes competitions.",
      icon: "🏸",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      stats: "2+ Years Leadership",
    },
    {
      title: "Classical Piano",
      description: "Self-taught classical pianist with years of dedicated practice. Developed discipline, emotional expression, and time management through mastering romantic compositions.",
      icon: "🎹",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      stats: "5+ Years Experience",
    },
    {
      title: "Full-Stack Development",
      description: "Comprehensive programming journey from simple games to complex web applications. Expertise in Vehicle Routing Problems research, hackathons, and professional frontend development.",
      icon: "💻",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      stats: "15+ Projects Built",
    },
    {
      title: "Cultural Leadership",
      description: "Founded and led cultural integration clubs as an international student in Canada. Bridged gaps between international and indigenous students, fostering inclusive communities.",
      icon: "🌍",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      stats: "100+ Students Impacted",
    },
  ];

  const technicalSkills = [
    {
      category: "Languages",
      icon: "⚡",
      color: "from-blue-600 to-indigo-600",
      skills: ["Python", "C/C++", "JavaScript/TypeScript", "HTML/CSS", "Solidity", "SQL", "PHP"],
    },
    {
      category: "Frameworks",
      icon: "🚀",
      color: "from-purple-600 to-pink-600",
      skills: ["Next.js", "React.js", "Vue.js", "Laravel", "Bootstrap", "TailwindCSS"],
    },
    {
      category: "Libraries",
      icon: "🛠️",
      color: "from-green-600 to-teal-600",
      skills: ["Pandas", "NumPy", "Tensorflow", "Matplotlib", "Redux", "React Query", "ShadCN/UI", "Lucide", "Framer Motion"],
    },
  ];

  const softSkills = [
    { name: "Leadership", level: 95, icon: "👑" },
    { name: "Problem Solving", level: 92, icon: "🧩" },
    { name: "Communication", level: 88, icon: "💬" },
    { name: "Teamwork", level: 90, icon: "🤝" },
    { name: "Adaptability", level: 87, icon: "🌟" },
    { name: "Creativity", level: 85, icon: "🎨" },
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200"
              variants={itemVariants}
            >
              <span className="text-2xl">⚡</span>
              <span className="text-blue-700 font-semibold">Skills & Expertise</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text">
              What I Bring to the Table
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              A unique blend of technical expertise, leadership experience, and creative problem-solving abilities 
              developed through diverse experiences in competitive sports, cultural leadership, and software development.
            </p>
          </motion.div>

          {/* Personal Skills Showcase */}
          <motion.div className="space-y-12" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">
              Personal Excellence & Leadership
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {personalSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  className="group floating-card glass-effect p-8 rounded-3xl border border-white/20"
                  variants={skillCardVariants}
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="flex items-start gap-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h4 className="text-2xl font-bold text-slate-800 mb-2">
                          {skill.title}
                        </h4>
                        <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${skill.bgColor} rounded-full`}>
                          <span className="text-sm font-medium text-slate-700">{skill.stats}</span>
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div className="space-y-12" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">
              Technical Proficiency
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalSkills.map((category, index) => (
                <motion.div
                  key={category.category}
                  className="glass-effect p-6 rounded-2xl card-hover"
                  variants={skillCardVariants}
                  whileHover={{ y: -10 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-center mb-6">
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h4 className="text-xl font-bold text-slate-800">
                      {category.category}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        className="skill-tag"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.05 }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills with Progress Bars */}
          <motion.div className="glass-effect p-12 rounded-3xl" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="space-y-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-semibold text-slate-800">{skill.name}</span>
                    </div>
                    <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full shadow-sm"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold mb-6">Ready to Collaborate?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Let's combine these skills to create something extraordinary together.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
              <i className="fas fa-arrow-right ml-2"></i>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
