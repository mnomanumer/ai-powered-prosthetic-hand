import React from 'react';
import { Target, Zap, CheckCircle, PlayCircle, ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const ExperimentalValidation = () => {
    return (
        <div className="bg-surface-gray min-h-screen pb-16">
            <PageBanner
                title="Experimental Validation"
                subtitle="Rigorous testing confirms high accuracy (95.8%) and low latency in real-world scenarios."
                variant="cyan"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-xl shadow-lg text-center border-b-4 border-green-500">
                        <Target className="w-12 h-12 text-green-500 mx-auto mb-4" />
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">95.8%</h3>
                        <p className="text-gray-500 uppercase tracking-wide text-sm font-semibold">Classification Accuracy</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg text-center border-b-4 border-blue-500">
                        <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">120ms</h3>
                        <p className="text-gray-500 uppercase tracking-wide text-sm font-semibold">Processing Latency</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg text-center border-b-4 border-purple-500">
                        <CheckCircle className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">5/5</h3>
                        <p className="text-gray-500 uppercase tracking-wide text-sm font-semibold">Gestures Recognized</p>
                    </div>
                </div>

                {/* Link to Real Demo */}
                <div className="bg-primary p-12 rounded-2xl shadow-2xl text-center text-white mb-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <PlayCircle className="w-32 h-32" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 relative z-10">Experience the Live Demo</h3>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto relative z-10">
                        Our real-time gesture recognition environment is now fully integrated.
                        Interact with the mechanical prosthetic hand and visualize neural signals live.
                    </p>
                    <a
                        href="/demo"
                        className="inline-flex items-center px-8 py-4 bg-accent text-primary-dark font-bold rounded-full hover:bg-accent-light transition-all transform hover:scale-105 shadow-lg relative z-10"
                    >
                        Launch Interactive Demo
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default ExperimentalValidation;
