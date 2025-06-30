import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

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

  const leadership = [
    {
      title: "RMIT Golden Flames Competition Club",
      role: "Competition Support Manager",
      date: "Nov 2024 – Present",
      icon: "🏆",
      color: "from-yellow-500 to-orange-500",
      description: "Managing business competition events and supporting participants in case competitions, pitch contests, and entrepreneurship challenges.",
      images: [
        { url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "Business Competition Event" },
        { url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "Team Strategy Session" },
        { url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "Pitch Contest Finals" }
      ]
    },
    {
      title: "RMIT Fintech Club",
      role: "Project Leader",
      date: "Nov 2024 – Feb 2025",
      icon: "💰",
      color: "from-green-500 to-emerald-500",
      description: "Leading blockchain and financial technology projects with cross-functional teams of students.",
      images: [
        { url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "Blockchain Workshop" },
        { url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "Fintech Project Demo" },
        { url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "Team Collaboration" }
      ]
    },
    {
      title: "RMIT Human Development Club",
      role: "Project Member",
      date: "Nov 2024 – Mar 2025",
      icon: "🌱",
      color: "from-blue-500 to-cyan-500",
      description: "Contributing to student wellness initiatives and personal development programs for the RMIT community.",
      images: [
        { url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "Wellness Workshop" },
        { url: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "Personal Development Session" },
        { url: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "Community Outreach" }
      ]
    },
    {
      title: "RMIT International Student Support",
      role: "Buddy Program",
      date: "Jan 2024 – Jan 2025",
      icon: "🤝",
      color: "from-purple-500 to-pink-500",
      description: "Supporting newly arrived international students through cultural adaptation and academic integration.",
      images: [
        { url: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "International Student Welcome" },
        { url: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "Cultural Exchange Event" },
        { url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "Buddy Mentoring Session" }
      ]
    },
    {
      title: "UW Blockchain Club",
      role: "Developer",
      date: "Jan 2023 – May 2023",
      icon: "⛓️",
      color: "from-indigo-500 to-purple-500",
      description: "Developed smart contracts and DeFi applications during exchange program at University of Waterloo, Canada.",
      images: [
        { url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "Smart Contract Development" },
        { url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "DeFi Workshop" },
        { url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", caption: "Blockchain Hackathon" }
      ]
    },
  ];

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
  ];

  // Carousel component for leadership images using ShadCN
  const ImageCarousel = ({ images, roleTitle, color }) => {
    return (
      <div className="relative w-full z-10">
        <Carousel className="w-full relative">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 z-20" />
          <CarouselNext className="right-2 z-20" />
        </Carousel>
      </div>
    );
  };

  const stats = [
    { number: "3.8+", label: "GPA", icon: "📚", color: "from-blue-500 to-blue-600" },
    { number: "5+", label: "Leadership Roles", icon: "👑", color: "from-purple-500 to-purple-600" },
    { number: "200+", label: "Students Mentored", icon: "🎓", color: "from-green-500 to-green-600" },
    { number: "3+", label: "Awards Won", icon: "🏆", color: "from-yellow-500 to-orange-500" },
  ];

  const personalValues = [
    {
      title: "Innovation",
      description: "Constantly pushing boundaries and exploring new technologies to solve complex problems.",
      icon: "💡",
    },
    {
      title: "Leadership",
      description: "Empowering teams and individuals to achieve their full potential through collaborative guidance.",
      icon: "🚀",
    },
    {
      title: "Excellence",
      description: "Committed to delivering high-quality work and maintaining the highest standards in every project.",
      icon: "⭐",
    },
    {
      title: "Community",
      description: "Building inclusive environments where everyone can thrive and contribute meaningfully.",
      icon: "🌍",
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
              <span className="text-2xl">👤</span>
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
                <span className="text-3xl">🎓</span>
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
                        Sep 2023 – May 2027
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
                <span className="text-3xl">💫</span>
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
                      <span className="text-2xl">{value.icon}</span>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">{value.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          {/* Leadership & Impact */}
          <motion.div className="space-y-12" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center text-slate-800 mb-8 flex items-center justify-center gap-3">
              <span className="text-3xl">🎯</span>
              Leadership & Impact
            </h3>
            <div className="space-y-12">
              {leadership.map((role, index) => (
                <motion.div
                  key={role.title}
                  className="group floating-card glass-effect p-8 rounded-3xl border border-white/20 relative"
                  variants={cardVariants}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Role Information */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-r ${role.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}
                          whileHover={{ scale: 1.1, rotate: 10 }}
                        >
                          {role.icon}
                        </motion.div>
                        <div className="flex-1 space-y-2">
                          <h4 className="text-xl font-bold text-slate-800">
                            {role.title}
                          </h4>
                          <p className="text-lg font-semibold text-blue-600">
                            {role.role}
                          </p>
                          <p className="text-sm text-slate-500 font-medium">
                            {role.date}
                          </p>
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {role.description}
                      </p>
                    </div>

                    {/* Image Carousel */}
                    <div className="lg:order-last relative z-10">
                      <ImageCarousel 
                        images={role.images} 
                        roleTitle={role.title} 
                        color={role.color} 
                      />
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${role.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 z-0`}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards & Recognition */}
          <motion.div className="space-y-12" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center text-slate-800 mb-8 flex items-center justify-center gap-3">
              <span className="text-3xl">🏆</span>
              Awards & Recognition
            </h3>
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
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <i className="fas fa-external-link-alt ml-2"></i>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
