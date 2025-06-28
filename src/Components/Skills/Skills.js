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

  const skills = [
    {
      title: "Badminton",
      description: "Through my two-year tenure as the varsity boys' team lead, encompassing coaching and competing in high-stakes provincial level championships, I diligently honed my technical prowess, tactical acumen, and transformative leadership abilities, reaching an extraordinary level of expertise in guiding and inspiring the team towards remarkable achievements including multiple championships in both singles and doubles.",
      icon: "🏸",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      title: "Piano",
      description: "As a devoted classical music aficionado, I have dedicated years to studying and self-teaching the piano. This pursuit has not only deepened my appreciation for the art form but has also instilled valuable qualities such as time management, resilience, and the ability to express my emotions through the enchanting melodies of romantic pieces that I hold dear.",
      icon: "🎹",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      title: "Programming",
      description: "My journey in programming initially fuelled with simple games like Sudoku and Count to 30. Through various projects, including a research project on Vehicle Routing Problems, hackathons, and internships as a frontend developer at a rising tech corporation, I have refined my skills and embraced a future career dedicated to programming and software developing.",
      icon: "💻",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
    },
    {
      title: "Culture Integration",
      description: "As an international exchange student in Canada, I experienced first-hand the challenges of cultural differences and diversity. To address these issues, I founded a culture club to provide support and foster a sense of belonging for both international and indigenous students. The club served as a platform for dialogue and understanding, promoting cultural integration within our school community.",
      icon: "🌍",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
    },
  ];

  const languages = [
    "Python", "C/C++", "JavaScript/TypeScript", "HTML/CSS", "Solidity", "SQL", "PHP"
  ];
  const frameworks = [
    "Next.js", "React.js", "Vue.js", "Laravel", "Bootstrap", "TailwindCSS"
  ];
  const libraries = [
    "Pandas", "NumPy", "Tensorflow", "Matplotlib", "Redux", "React Query", "ShadCN/UI", "Lucide", "Framer Motion"
  ];

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
          {/* Header */}
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              Skills & Leadership
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              With extensive experiences in club leadership and professional
              corporate roles, I possess exceptional skills in leadership, sports,
              and professional settings. I have a proven track record of
              successfully managing teams, achieving outstanding results, and
              maintaining a high level of professionalism in all aspects of my work.
            </p>
          </motion.div>

          {/* Technical Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span key={lang} className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-accent-700 mb-4">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {frameworks.map((fw) => (
                    <span key={fw} className="px-4 py-2 bg-accent-100 text-accent-700 rounded-full font-medium text-sm">
                      {fw}
                    </span>
                  ))}
                </div>
              </div>
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-secondary-700 mb-4">Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {libraries.map((lib) => (
                    <span key={lib} className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full font-medium text-sm">
                      {lib}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div className="grid md:grid-cols-2 gap-8" variants={itemVariants}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="glass-effect p-8 rounded-2xl card-hover group"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-slate-800 mb-3">
                      {skill.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants}>
            <div className="glass-effect p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                Additional Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Team Leadership", "Problem Solving", "Communication",
                  "Time Management", "Adaptability", "Creativity",
                  "Critical Thinking", "Collaboration"
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full font-medium"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
