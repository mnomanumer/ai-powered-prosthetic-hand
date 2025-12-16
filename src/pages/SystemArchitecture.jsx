import React from 'react';
import { Activity, Cpu, Database, Zap, ArrowRight, Layers } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const SystemArchitecture = () => {
    // ... steps array (unchanged) ...
    const steps = [
        {
            id: 1,
            title: 'Signal Acquisition',
            icon: <Activity className="w-8 h-8 text-white" />,
            description: 'Surface EMG sensors capture tiny electrical signals from the residual muscle capabilities.',
            color: 'bg-blue-600',
        },
        {
            id: 2,
            title: 'Preprocessing',
            icon: <Layers className="w-8 h-8 text-white" />,
            description: 'Raw signals are filtered to remove noise (50Hz hum) and normalized for consistent processing.',
            color: 'bg-indigo-600',
        },
        {
            id: 3,
            title: 'Deep Learning',
            icon: <Cpu className="w-8 h-8 text-white" />,
            description: 'A trained Neural Network classifies the signal patterns into distinct gestures (Open, Close, Point).',
            color: 'bg-purple-600',
        },
        {
            id: 4,
            title: 'Actuation Control',
            icon: <Zap className="w-8 h-8 text-white" />,
            description: 'The Arduino microcontroller sends precise PWM signals to servo motors to move the fingers.',
            color: 'bg-accent',
        },
    ];

    return (
        <div className="bg-surface-gray min-h-screen pb-24">
            <PageBanner
                title="System Architecture"
                subtitle="From biological signals to mechanical motion. Our pipeline ensures high-speed, accurate control."
                variant="blue"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

                {/* Pipeline Visualization */}
                <div className="relative mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-display font-bold text-gray-900">End-to-End Processing Pipeline</h2>
                        <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="glass-card p-2 rounded-2xl shadow-xl max-w-5xl mx-auto overflow-hidden bg-white">
                        <div className="relative w-full h-[400px] bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center">
                            {/* Using object-contain with a specific height to reduce whitespace */}
                            <img
                                src="/assets/architecture_diagram.png"
                                alt="System Architecture Diagram"
                                className="w-full h-full object-contain p-4 mix-blend-multiply" // Added mix-blend to help it sit better
                            />
                        </div>
                        <div className="p-4 bg-gray-50 border-t border-gray-100">
                            <p className="text-center text-sm font-medium text-text-muted">Figure 1: Signal flow from EMG sensors to prosthetic actuation</p>
                        </div>
                    </div>
                </div>

                {/* Hardware Visuals & Process Breakdown */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Left: Component Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="glass-card bg-white p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                            <div className="h-40 mb-6 flex items-center justify-center bg-blue-50/50 rounded-xl group-hover:bg-blue-50 transition-colors">
                                <img src="/assets/emg_sensor.png" alt="EMG Sensor" className="h-32 object-contain drop-shadow-md" />
                            </div>
                            <h3 className="text-xl font-bold text-primary-dark mb-2">Signal Acquisition</h3>
                            <p className="text-text-muted text-sm">High-sensitivity MyoWare sensors detecting micro-volts of muscle activity.</p>
                        </div>
                        <div className="glass-card bg-white p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                            <div className="h-40 mb-6 flex items-center justify-center bg-indigo-50/50 rounded-xl group-hover:bg-indigo-50 transition-colors">
                                <img src="/assets/arduino.png" alt="Arduino Microcontroller" className="h-32 object-contain drop-shadow-md" />
                            </div>
                            <h3 className="text-xl font-bold text-primary-dark mb-2">Processing Unit</h3>
                            <p className="text-text-muted text-sm">Arduino Uno/Nano running real-time inference and servo control loops.</p>
                        </div>
                    </div>

                    {/* Right: Steps List */}
                    <div className="flex flex-col justify-center space-y-6">
                        {steps.map((step) => (
                            <div key={step.id} className="flex bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow items-center">
                                <div className={`${step.color} p-3 rounded-lg shadow-lg mr-5`}>
                                    {step.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">{step.title}</h4>
                                    <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Deep Learning Detail Section (Glassmorphism) */}
                <div className="glass-panel p-8 md:p-12 rounded-3xl mt-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -z-10"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h3 className="text-3xl font-display font-bold text-primary-dark mb-6">Why Deep Learning?</h3>
                            <p className="text-lg text-text-main mb-6 leading-relaxed">
                                Traditional pattern recognition often struggles with the variability of muscle signals causes by sweat, fatigue, or electrode shift.
                            </p>
                            <p className="text-lg text-text-main mb-8 leading-relaxed">
                                Our <span className="text-accent-dark font-bold">Neural Network model</span> is trained on diverse datasets, allowing it to adapt to these non-linear changes and maintain high accuracy ({'>'}95%) where basic thresholding fails.
                            </p>

                            <div className="inline-flex items-center px-6 py-3 bg-white/50 border border-primary/10 rounded-full text-primary-dark font-medium shadow-sm">
                                <Activity className="w-5 h-5 mr-2 text-accent" />
                                Adapts to user intent, not just raw signal strength
                            </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/40">
                            <div className="bg-primary-dark p-4 flex items-center">
                                <Database className="w-5 h-5 mr-2 text-accent" />
                                <h3 className="text-white font-bold text-lg">Neural Network Model Structure</h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-6">
                                    <li className="flex group">
                                        <div className="flex-shrink-0 relative">
                                            <span className="h-8 w-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm font-bold border border-green-200 group-hover:scale-110 transition-transform">1</span>
                                            <div className="absolute top-8 left-1/2 w-0.5 h-full bg-gray-200 -z-10"></div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-bold text-gray-900">Input Layer (Time-Domain)</h4>
                                            <p className="text-gray-500 text-sm mt-1">Receives multi-channel EMG data frames (Window size: 200ms).</p>
                                        </div>
                                    </li>
                                    <li className="flex group">
                                        <div className="flex-shrink-0 relative">
                                            <span className="h-8 w-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold border border-blue-200 group-hover:scale-110 transition-transform">2</span>
                                            <div className="absolute top-8 left-1/2 w-0.5 h-full bg-gray-200 -z-10"></div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-bold text-gray-900">Hidden Layers (Feature Extraction)</h4>
                                            <p className="text-gray-500 text-sm mt-1">Convolutional (1D CNN) layers extract spatial features, followed by Dense layers.</p>
                                        </div>
                                    </li>
                                    <li className="flex group">
                                        <div className="flex-shrink-0">
                                            <span className="h-8 w-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-bold border border-purple-200 group-hover:scale-110 transition-transform">3</span>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-bold text-gray-900">Output Layer (Classification)</h4>
                                            <p className="text-gray-500 text-sm mt-1">Softmax probability distribution across 5 gesture classes.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SystemArchitecture;
