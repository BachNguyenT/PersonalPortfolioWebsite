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

  const leadership = [
    {
      title: "RMIT Golden Flames Competition Club",
      role: "Competition Support Manager",
      date: "Nov 2024 – Present",
    },
    {
      title: "RMIT Fintech Club",
      role: "Project Leader",
      date: "Nov 2024 – Feb 2025",
    },
    {
      title: "RMIT Human Development Club",
      role: "Project Member",
      date: "Nov 2024 – Mar 2025",
    },
    {
      title: "RMIT International Student Support",
      role: "Buddy Program",
      date: "Jan 2024 – Jan 2025",
    },
    {
      title: "UW Blockchain Club",
      role: "Developer",
      date: "Jan 2023 – May 2023",
    },
  ];

  const awards = [
    {
      title: "Canada–Wide Science Fair Silver Medalist",
      org: "Youth Science Canada",
      date: "May 2022",
      details: [
        "Excellence Award – Silver Medal recipient, awarded in recognition of STEM excellence.",
        "Energy Challenge Award – Senior recipient, awarded to the best Senior research paper in the Energy category.",
        "Renewable Energy Award – Senior recipient, awarded to the best Senior research paper for Renewable Energy.",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Education */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 gradient-text">
              About Me
            </h2>
            <div className="glass-effect p-8 rounded-2xl mb-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Education</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <span className="font-bold">Royal Melbourne Institute of Technology</span>
                  <span className="block italic text-slate-600">Honours Bachelor of Software Engineering</span>
                </div>
                <div className="text-slate-500">Ho Chi Minh City, Vietnam<br/>Sep 2023 – May 2027</div>
              </div>
            </div>
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Summary</h3>
              <p className="text-slate-600 leading-relaxed">
                I am a passionate software engineer with a strong background in frontend development, AI, and leadership. I thrive on building scalable, performant web applications and leading teams to success. My experience spans React, Next.js, Vue.js, Tailwind, Framer Motion, and more. I am recognized for my achievements in national competitions and my commitment to excellence.
              </p>
            </div>
          </motion.div>
          {/* Leadership */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Leadership</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {leadership.map((item, idx) => (
                <div key={item.title} className="glass-effect p-6 rounded-xl">
                  <div className="font-bold text-primary-700">{item.title}</div>
                  <div className="text-slate-700">{item.role}</div>
                  <div className="text-slate-500 text-sm">{item.date}</div>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Awards */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Awards</h3>
            <div className="space-y-6">
              {awards.map((award, idx) => (
                <div key={award.title} className="glass-effect p-6 rounded-xl">
                  <div className="font-bold text-accent-700">{award.title}</div>
                  <div className="text-slate-700">{award.org}</div>
                  <div className="text-slate-500 text-sm mb-2">{award.date}</div>
                  <ul className="list-disc ml-6 text-slate-600">
                    {award.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
