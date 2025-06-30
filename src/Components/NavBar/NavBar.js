import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "Home", icon: "🏠" },
    { name: "About", to: "About", icon: "👤" },
    { name: "Skills", to: "Skills", icon: "⚡" },
    { name: "Experiences", to: "Experiences", icon: "💼" },
    { name: "Contact", to: "Contact", icon: "📧" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-effect py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <div className="container-max">
          <div className="flex items-center justify-between px-4">
            {/* Logo */}
            <motion.div
              className="cursor-pointer group"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h1 className="text-2xl lg:text-3xl font-bold gradient-text">
                Bach Nguyen
              </h1>
              <div className="h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-1 bg-white/50 backdrop-blur-md rounded-full p-2 border border-white/20">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      activeClass="active"
                      className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer flex items-center gap-2 group ${
                        activeSection === item.to
                          ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                          : "text-slate-700 hover:text-blue-600 hover:bg-white/70"
                      }`}
                      to={item.to}
                      spy={true}
                      smooth={true}
                      duration={700}
                      onSetActive={handleSetActive}
                    >
                      {/* <span className="text-sm">{item.icon}</span> */}
                      <span className="hidden lg:inline">{item.name}</span>
                      {activeSection !== item.to && (
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Theme Toggle & CTA */}
              <div className="flex items-center ml-6 space-x-4">
                <motion.button
                  className="p-2 rounded-full bg-white/50 backdrop-blur-md border border-white/20 hover:bg-white/70 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fas fa-sun text-yellow-500"></i>
                </motion.button>
                <motion.button
                  className="btn-primary text-sm px-6 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire Me
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-3 rounded-full glass-effect transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    exit={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IoMdClose className="w-6 h-6 text-slate-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GiHamburgerMenu className="w-6 h-6 text-slate-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] glass-effect border-l border-white/20 z-50 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-6 pt-20">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        className={`flex items-center gap-4 p-4 rounded-xl font-medium transition-all duration-300 cursor-pointer group ${
                          activeSection === item.to
                            ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                            : "text-slate-700 hover:bg-white/50"
                        }`}
                        to={item.to}
                        spy={true}
                        smooth={true}
                        duration={700}
                        onClick={handleNavClick}
                        onSetActive={handleSetActive}
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.name}</span>
                        <i className="fas fa-arrow-right ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8 pt-6 border-t border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="space-y-4">
                    <button className="btn-primary w-full">
                      <span>Hire Me</span>
                      <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                    <div className="flex justify-center gap-4">
                      <button className="p-3 rounded-full bg-white/50 hover:bg-white/70 transition-all duration-300">
                        <i className="fas fa-sun text-yellow-500"></i>
                      </button>
                      <button className="p-3 rounded-full bg-white/50 hover:bg-white/70 transition-all duration-300">
                        <i className="fab fa-github text-slate-700"></i>
                      </button>
                      <button className="p-3 rounded-full bg-white/50 hover:bg-white/70 transition-all duration-300">
                        <i className="fab fa-linkedin text-blue-600"></i>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
