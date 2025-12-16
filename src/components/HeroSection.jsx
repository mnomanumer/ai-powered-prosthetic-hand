import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NeuralBackground from './NeuralBackground';

const HeroSection = () => {
    return (
        <div className="relative bg-gradient-to-br from-primary-dark via-primary to-blue-900 overflow-hidden min-h-[90vh] flex items-center">
            {/* Live Interactive Neural Background */}
            <NeuralBackground />

            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full relative z-20">
                <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-4xl tracking-tight font-display font-extrabold text-white sm:text-5xl md:text-6xl drop-shadow-lg"
                            >
                                <span className="block xl:inline">AI-Powered EMG</span>{' '}
                                <span className="block text-accent-light drop-shadow-glow">Controlled Prosthetic Hand</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="mt-4 text-lg text-blue-100 sm:mt-8 sm:text-xl sm:max-w-lg sm:mx-auto md:mt-8 md:text-2xl lg:mx-0 font-light leading-relaxed"
                            >
                                Revolutionizing rehabilitation with bio-mimetic robotic hands.
                                Achieving biological precision using Deep Learning Neural Networks.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="mt-8 sm:mt-12 sm:flex sm:justify-center lg:justify-start gap-4"
                            >
                                <div className="rounded-md shadow">
                                    <Link
                                        to="/architecture"
                                        className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-primary-dark bg-accent hover:bg-accent-light hover:scale-105 transition-all shadow-lg shadow-accent/25"
                                    >
                                        View Architecture
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </div>
                                <div className="mt-3 sm:mt-0">
                                    <Link
                                        to="/anatomy"
                                        className="w-full flex items-center justify-center px-8 py-4 border border-white/20 text-lg font-semibold rounded-full text-white bg-white/10 hover:bg-white/20 backdrop-blur-md hover:scale-105 transition-all"
                                    >
                                        System Anatomy
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </main>
                </div>
            </div>

            {/* Hero Image with Seamless Blending and Floating Animation */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center lg:translate-x-12 pointer-events-none z-0"
            >
                <div className="relative w-full h-full flex items-center justify-end">
                    <img
                        src="/assets/prosthetic_hand.png"
                        alt="AI Powered Prosthetic Hand Render"
                        // Reduced scale from 110% to 90% (scale-90) to fix "too big" issue
                        className="h-[100%] w-auto object-cover object-left-top opacity-90 scale-90"
                        style={{
                            maskImage: 'linear-gradient(90deg, transparent 0%, black 40%, black 100%)',
                            WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 40%, black 100%)'
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSection;
