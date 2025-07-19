import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Experiences = () => {
  const [activeTab, setActiveTab] = useState("experience");
  
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

  const experiences = [
    {
      title: "Software Developer",
      org: "Harbor - ZeroX Consulting Group",
      date: "Oct 2024 – Dec 2024",
      location: "Remote - Atlanta, GA",
      type: "Remote",
      icon: "💼",
      color: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      achievements: [
        { metric: "40%", description: "Faster page loads with SSR" },
        { metric: "60%", description: "Boost in core web vitals" },
        { metric: "35%", description: "Increase in user engagement" },
        { metric: "99.99%", description: "Platform uptime" },
      ],
      bullets: [
        "Designed and engineered a large-scale Next.js platform (SSR, server-side rendering, 40% faster page loads, 60% boost in core web vitals)",
        "Built a design system of 20+ reusable components (Tailwind, ShadCN/UI, Framer Motion)",
        "Implemented animated UI patterns, increasing user engagement by 35%",
        "Architected serverless authentication (Next.js API, Github OAuth 2.0)",
        "Achieved sub-100ms response times and 99.99% uptime"
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN/UI", "Framer Motion", "GitHub OAuth 2.0"],
    },
    {
      title: "Software Developer Intern",
      org: "K&G Technologies",
      date: "Jul 2024 – Dec 2024",
      location: "Ho Chi Minh City, Vietnam",
      type: "Hybrid",
      icon: "🚀",
      color: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      achievements: [
        { metric: "50+", description: "RESTful APIs built" },
        { metric: "30%", description: "Reduction in dev time" },
        { metric: "99.9%", description: "API reliability" },
      ],
      bullets: [
        "Led frontend for enterprise web apps (VueJS, TypeScript, Sass, Bootstrap)",
        "Streamlined UI across modules, reduced dev time for new features",
        "Built 50 RESTful APIs (PHP Laravel) for web/mobile, robust data handling"
      ],
      technologies: ["Vue.js", "TypeScript", "PHP", "Laravel", "Bootstrap", "Sass"],
    },
    {
      title: "Frontend Developer Intern",
      org: "Excel Technologies", 
      date: "May 2023 – Oct 2023",
      location: "Ho Chi Minh City, Vietnam",
      type: "On-site",
      icon: "⚡",
      color: "from-green-600 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      achievements: [
        { metric: "98%", description: "Design-to-dev accuracy" },
        { metric: "96%", description: "Lighthouse score" },
        { metric: "40%", description: "Faster load times" },
        { metric: "28%", description: "Reduction in data-fetch bugs" },
      ],
      bullets: [
        "Led frontend for SaaS platform (React.js, TypeScript, SCSS/Sass)",
        "Achieved 98% design-to-dev accuracy, 96% Lighthouse score, 40% faster load",
        "Integrated 20+ RESTful APIs, 99.9% reliability, 28% reduction in data-fetch bugs"
      ],
      technologies: ["React.js", "TypeScript", "SCSS", "REST APIs"],
    },
  ];

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Modern, responsive portfolio showcasing projects and skills",
      stack: ["ReactJS", "Javascript", "HTML", "CSS/Sass"],
      date: "Aug 2023",
      category: "Web Development",
      status: "Live",
      icon: "🌐",
      color: "from-blue-500 to-cyan-500",
      achievements: [
        { metric: "92%", description: "Lighthouse score" },
        { metric: "<1s", description: "Load time" },
      ],
      bullets: [
        "Built responsive, interactive UI with custom React components and smooth animations",
        "Achieved exceptional Lighthouse performance score with sub-second load times",
        "Implemented advanced SEO optimization and accessibility features"
      ],
      github: "https://github.com/BachNguyenT",
      demo: "https://bachnguyen.vercel.app",
    },
    {
      title: "GarbageFlow",
      description: "AI-powered waste classification system for environmental sustainability",
      stack: ["Next.js", "React.js", "Node.js", "HTML/CSS", "TensorFlow", "Flask"],
      date: "Mar 2023",
      category: "AI/ML",
      status: "Live",
      icon: "🤖",
      color: "from-green-500 to-emerald-500",
      achievements: [
        { metric: "95%", description: "Classification accuracy" },
        { metric: "<1s", description: "Inference time" },
      ],
      bullets: [
        "Developed advanced waste classification AI using ResNet50 with 95% accuracy",
        "Built real-time web application with Next.js featuring sub-second inference",
        "Created seamless user experience with intuitive interface design"
      ],
    },
    {
      title: "Aave Liquidity App",
      description: "DeFi position monitoring and risk assessment platform",
      stack: ["web3.py", "Ethereum"],
      date: "Jan 2023 – Apr 2023",
      category: "Blockchain",
      status: "Completed",
      icon: "⛓️",
      color: "from-purple-500 to-indigo-500",
      achievements: [
        { metric: "95%", description: "Risk assessment accuracy" },
        { metric: "60%", description: "API latency reduction" },
      ],
      bullets: [
        "Built real-time DeFi position monitoring with dynamic risk assessment",
        "Implemented high-frequency MEV monitoring and analysis capabilities",
        "Achieved significant API latency reduction through optimization techniques"
      ],
    },
    {
      title: "Elevated Vehicle Routing Problem",
      description: "NP-Hard optimization solver for municipal waste collection",
      stack: ["Python", "Gurobi", "Google Maps API"],
      date: "Sep 2021 – Apr 2022",
      category: "Research",
      status: "Published",
      icon: "🗺️",
      color: "from-orange-500 to-red-500",
      achievements: [
        { metric: "40%+", description: "Efficiency improvement" },
        { metric: "98.6%", description: "Solver accuracy" },
      ],
      bullets: [
        "Developed NP-Hard optimization solver for municipal garbage collection routes",
        "Achieved significant efficiency improvements in route optimization",
        "Successfully deployed solution with Google Maps API integration"
      ],
    },
  ];

  const tabs = [
    { id: "experience", label: "Professional Experience", icon: "💼", count: experiences.length },
    { id: "projects", label: "Featured Projects", icon: "🚀", count: projects.length },
  ];

  return (
    <div className="section-padding">
      <div className="container-max">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div className="text-center space-y-6" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full border border-indigo-200"
              variants={itemVariants}
            >
              <span className="text-indigo-700 font-semibold">Work & Projects</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text">
              Professional Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              A comprehensive overview of my professional experience and notable projects, 
              showcasing growth in software development and technical leadership.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div className="flex justify-center" variants={itemVariants}>
            <div className="flex bg-white/50 backdrop-blur-md rounded-2xl p-2 border border-white/20 shadow-lg">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-slate-700 hover:bg-white/70"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                    {tab.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    className="grid lg:grid-cols-3 gap-8 glass-effect p-8 rounded-3xl floating-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    {/* Header Section */}
                    <div className="lg:col-span-3 mb-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <motion.div
                            className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            {exp.icon}
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-800">{exp.title}</h3>
                            <p className="text-xl font-semibold text-blue-600">{exp.org}</p>
                            <div className="flex flex-wrap gap-4 mt-2 text-slate-600">
                              <span className="flex items-center gap-2">
                                <i className="fas fa-calendar text-blue-500"></i>
                                {exp.date}
                              </span>
                              <span className="flex items-center gap-2">
                                <i className="fas fa-map-marker-alt text-red-500"></i>
                                {exp.location}
                              </span>
                              <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${exp.bgGradient} ${exp.color.includes('blue') ? 'text-blue-700' : exp.color.includes('purple') ? 'text-purple-700' : 'text-green-700'}`}>
                                {exp.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            className="text-center p-4 bg-gradient-to-br from-white to-blue-50 rounded-xl border border-blue-200"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="text-2xl font-bold gradient-text">{achievement.metric}</div>
                            <div className="text-xs text-slate-600">{achievement.description}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="skill-tag"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (index * 0.1) + (techIndex * 0.05) + 0.4 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, bulletIndex) => (
                          <motion.li
                            key={bulletIndex}
                            className="flex items-start gap-3 text-slate-600"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.1) + (bulletIndex * 0.05) + 0.3 }}
                          >
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{bullet}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-8"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="group floating-card glass-effect p-8 rounded-3xl border border-white/20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, rotateY: 2 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className={`w-14 h-14 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 10 }}
                        >
                          {project.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-800 mb-1">{project.title}</h3>
                          <p className="text-slate-600 text-sm mb-2">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                              {project.category}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              project.status === 'Live' ? 'bg-green-100 text-green-700' : 
                              project.status === 'Completed' ? 'bg-blue-100 text-blue-700' : 
                              'bg-purple-100 text-purple-700'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-slate-500">{project.date}</span>
                    </div>

                    {/* Achievements */}
                    {project.achievements && (
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {project.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="text-center p-3 bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-200"
                          >
                            <div className="text-lg font-bold gradient-text">{achievement.metric}</div>
                            <div className="text-xs text-slate-600">{achievement.description}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Description */}
                    <ul className="space-y-2 mb-6">
                      {project.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="space-y-3 mb-6">
                      <h4 className="text-sm font-semibold text-slate-800">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm px-4 py-2 flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="fas fa-external-link-alt"></i>
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline text-sm px-4 py-2 flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="fab fa-github"></i>
                          <span>Code</span>
                        </motion.a>
                      )}
                    </div>

                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Experiences;
