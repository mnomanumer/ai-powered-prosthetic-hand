import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Overview from './pages/Overview';
import ResearchTeam from './pages/ResearchTeam';
import SystemArchitecture from './pages/SystemArchitecture';
import ExperimentalValidation from './pages/ExperimentalValidation';
import SystemAnatomy from './pages/SystemAnatomy';
import Contact from './pages/Contact';
import RealTimeDemo from './pages/RealTimeDemo';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMoveHandler = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-accent pointer-events-none z-50 hidden md:block"
      animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // Custom easing for premium feel
    className="flex-grow w-full"
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Overview /></PageWrapper>} />
        <Route path="/team" element={<PageWrapper><ResearchTeam /></PageWrapper>} />
        <Route path="/architecture" element={<PageWrapper><SystemArchitecture /></PageWrapper>} />
        <Route path="/validation" element={<PageWrapper><ExperimentalValidation /></PageWrapper>} />
        <Route path="/anatomy" element={<PageWrapper><SystemAnatomy /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/demo" element={<PageWrapper><RealTimeDemo /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-surface-gray text-text-main cursor-none-optional">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow flex flex-col">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
