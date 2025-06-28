import React from "react";
import { motion } from "framer-motion";

const Experiences = () => {
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
      bullets: [
        "Designed and engineered a large-scale Next.js platform (SSR, 40% faster page loads, 60% boost in web vitals).",
        "Built a design system of 20+ reusable components (Tailwind, ShadCN/UI, Framer Motion).",
        "Implemented animated UI patterns, increasing user engagement by 35%.",
        "Architected serverless authentication (Next.js API, Github OAuth 2.0).",
        "Achieved sub-100ms response times and 99.99% uptime."
      ],
    },
    {
      title: "Software Developer Intern",
      org: "K&G Technologies",
      date: "Jul 2024 – Dec 2024",
      location: "Ho Chi Minh City, Vietnam",
      bullets: [
        "Led frontend for enterprise web apps (VueJS, TypeScript, Sass, Bootstrap).",
        "Streamlined UI across modules, reduced dev time for new features.",
        "Built 50 RESTful APIs (PHP Laravel) for web/mobile, robust data handling."
      ],
    },
    {
      title: "Frontend Developer Intern",
      org: "Excel Technologies",
      date: "May 2023 – Oct 2023",
      location: "Ho Chi Minh City, Vietnam",
      bullets: [
        "Led frontend for SaaS platform (React.js, TypeScript, SCSS/Sass).",
        "Achieved 98% design-to-dev accuracy, 96% Lighthouse score, 40% faster load.",
        "Integrated 20+ RESTful APIs, 99.9% reliability, 28% reduction in data-fetch bugs."
      ],
    },
  ];

  const projects = [
    {
      title: "Personal Portfolio Website",
      stack: "ReactJS, Javascript, HTML, CSS/Sass",
      date: "Aug 2023",
      bullets: [
        "Responsive, interactive UI, custom React components, smooth animations.",
        "92% Lighthouse score, sub-second load times, advanced SEO."
      ],
    },
    {
      title: "GarbageFlow",
      stack: "Next.js, React.js, Node.js, HTML/CSS, TensorFlow, Flask",
      date: "Mar 2023",
      bullets: [
        "Waste classification AI (ResNet50, 95% accuracy).",
        "Real-time web app (Next.js), sub-second inference, seamless UX."
      ],
    },
    {
      title: "Aave Liquidity App",
      stack: "web3.py, Ethereum",
      date: "Jan 2023 – Apr 2023",
      bullets: [
        "Real-time DeFi position monitoring, dynamic risk scores, 95% accuracy.",
        "60% API latency reduction, high-frequency MEV monitoring."
      ],
    },
    {
      title: "Elevated Vehicle Routing Problem",
      stack: "Python, Gurobi, Google Maps API",
      date: "Sep 2021 – Apr 2022",
      bullets: [
        "NP-Hard solver for municipal garbage collection, 40%+ improvement.",
        "Solver with 98.6% efficiency, deployed with Google Maps APIs."
      ],
    },
  ];

  const handleClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Experience Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text text-center" style={{ lineHeight: 1.5 }}>
              Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {experiences.map((exp, idx) => (
                <div key={exp.title} className="glass-effect p-8 rounded-2xl card-hover">
                  <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                    <div>
                      <span className="font-bold text-primary-700">{exp.title}</span>
                      <span className="block text-slate-700">{exp.org}</span>
                    </div>
                    <div className="text-slate-500 text-sm text-right">
                      {exp.location}<br />{exp.date}
                    </div>
                  </div>
                  <ul className="list-disc ml-6 text-slate-600 space-y-1">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Projects Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text text-center" style={{ lineHeight: 1.5 }}>
              Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((proj, idx) => (
                <div key={proj.title} className="glass-effect p-8 rounded-2xl card-hover">
                  <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                    <div>
                      <span className="font-bold text-accent-700">{proj.title}</span>
                      <span className="block text-slate-700 text-sm">{proj.stack}</span>
                    </div>
                    <div className="text-slate-500 text-sm text-right">{proj.date}</div>
                  </div>
                  <ul className="list-disc ml-6 text-slate-600 space-y-1">
                    {proj.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
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

export default Experiences;
