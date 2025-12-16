import React from 'react';
import HeroSection from '../components/HeroSection';
import { TrendingUp, DollarSign, Cpu } from 'lucide-react';

const Overview = () => {
    return (
        <div className="bg-surface-gray min-h-screen">
            <HeroSection />

            {/* The Gap Analysis Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
                        Bridging the Gap
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        The prosthetic market faces a critical dilemma: High performance is unaffordable, while affordable options lack functionality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: The Problem */}
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-red-500">
                        <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-6 mx-auto">
                            <DollarSign className="h-6 w-6 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 text-center mb-4">High Cost</h3>
                        <p className="text-gray-600 text-center">
                            State-of-the-art myoelectric hands can cost upwards of <strong>$10,000 - $50,000</strong>, making them inaccessible to the majority of amputees, especially in developing nations.
                        </p>
                    </div>

                    {/* Card 2: The Limitation */}
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-yellow-500">
                        <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-6 mx-auto">
                            <Cpu className="h-6 w-6 text-yellow-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Limited Dexterity</h3>
                        <p className="text-gray-600 text-center">
                            Affordable alternatives often rely on simple mechanical switches or basic sensors, resulting in <strong>clunky, unnatural movements</strong> that frustrate users.
                        </p>
                    </div>

                    {/* Card 3: Our Solution */}
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border-t-4 border-accent transform scale-105 ring-2 ring-accent ring-opacity-20">
                        <div className="flex items-center justify-center w-12 h-12 bg-accent-light rounded-full mb-6 mx-auto">
                            <TrendingUp className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-primary text-center mb-4">Our Solution</h3>
                        <p className="text-gray-600 text-center">
                            By leveraging <strong>Deep Learning Neural Networks</strong> to decode complex EMG signals, we achieve high-fidelity control using standard <strong>Arduino hardware</strong> and 3D printed components.
                        </p>
                        <div className="mt-6 text-center">
                            <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide">High Accuracy</span>
                            <span className="inline-block bg-accent text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide ml-2">Low Cost</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Overview;
