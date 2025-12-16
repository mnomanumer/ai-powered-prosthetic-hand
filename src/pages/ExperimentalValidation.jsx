import React from 'react';
import { Target, Zap, CheckCircle, PlayCircle } from 'lucide-react';
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

                {/* Demo Video Placeholder */}
                <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-16">
                    <div className="bg-black aspect-w-16 aspect-h-9 relative h-96 flex items-center justify-center group cursor-pointer">
                        {/* Simulated video overlay */}
                        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity"></div>
                        <PlayCircle className="w-20 h-20 text-white z-10 opacity-80 group-hover:scale-110 transition-transform" />
                        <p className="absolute bottom-8 text-white z-10 font-bold text-lg">Watch Live Demonstration</p>
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Real-Time Control Test</h3>
                        <p className="text-gray-600">
                            Video demonstrating the user switching between "Open Hand", "Fist", and "Point" gestures seamlessly using the developed prototype.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ExperimentalValidation;
