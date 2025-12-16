import React from 'react';
import { motion } from 'framer-motion';
import NeuralBackground from './NeuralBackground';

const PageBanner = ({ title, subtitle, variant = "blue", image = null }) => {
    // Gradient variants with more depth
    const gradients = {
        blue: "from-primary-dark via-primary to-blue-900",
        cyan: "from-blue-900 via-primary-dark to-accent-dark",
        dark: "from-gray-900 via-primary-dark to-black",
        purple: "from-indigo-950 via-purple-900 to-indigo-900"
    };

    return (
        <div className={`relative h-64 md:h-80 w-full bg-gradient-to-r ${gradients[variant]} overflow-hidden flex items-center justify-center`}>

            {/* Live Interactive Neural Background */}
            <NeuralBackground />

            {/* 1. Abstract Medical/Tech Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"></div>

            {/* 2. Ambient Glow orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-light/30 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

            {/* 3. Image Background (Optional Override) */}
            {image && (
                <div className="absolute inset-0 z-0">
                    <img src={image} alt="Banner Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay blur-[2px] scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-gray via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-primary-dark/50 mix-blend-multiply"></div>
                </div>
            )}

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white tracking-tight mb-6 drop-shadow-xl"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-lg md:text-2xl text-blue-100 font-light max-w-2xl mx-auto leading-relaxed"
                >
                    {subtitle}
                </motion.p>
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
                    className="mt-8 h-1 w-32 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full"
                />
            </div>
        </div>
    );
};

export default PageBanner;
