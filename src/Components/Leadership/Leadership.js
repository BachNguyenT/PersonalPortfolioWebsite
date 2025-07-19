import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Leadership = () => {
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

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div className="space-y-12">
          {/* Header */}
          <motion.div className="text-center space-y-6">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-700 font-semibold">Leadership & Impact</span>
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Empowering Teams
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Leading innovative projects and fostering collaborative environments where teams thrive and achieve extraordinary results.
            </motion.p>
          </motion.div>
          <div className="space-y-12">
            {leadership.map((role, index) => (
              <motion.div
                key={role.title}
                className="group floating-card glass-effect p-8 rounded-3xl border border-white/20 relative"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
      </div>
    </div>
  );
};

export default Leadership;
