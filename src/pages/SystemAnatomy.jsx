import React from 'react';
import { Cpu, Zap, Box, Anchor, Activity } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const SystemAnatomy = () => {
    return (
        <div className="bg-surface-gray min-h-screen pb-16">
            <PageBanner
                title="System Anatomy"
                subtitle="Inside the Bio-Mechatronic fusion. Where low-cost hardware meets high-grade engineering."
                variant="dark"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

                {/* Component Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Component 1: The Brain */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all">
                        <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                            <img src="/assets/arduino.png" alt="Arduino Nano" className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">The Brain (Microcontroller)</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                We use an <strong>Arduino Nano/Uno</strong> as the central processing unit. It handles signal digitization and executes the lightweight inference model.
                            </p>
                            <ul className="text-sm text-gray-500 list-disc list-inside">
                                <li>16MHz Clock Speed</li>
                                <li>Low Power Consumption</li>
                                <li>Cost: &lt; $5</li>
                            </ul>
                        </div>
                    </div>

                    {/* Component 2: The Muscles */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all">
                        <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                            <img src="/assets/servo.png" alt="Servo Motor" className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">The Muscles (Actuators)</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                <strong>MG996R High-Torque Servo Motors</strong> provide the necessary grip force. Tendon-driven mechanism mimics human biological tendons.
                            </p>
                            <ul className="text-sm text-gray-500 list-disc list-inside">
                                <li>11kg/cm Stall Torque</li>
                                <li>Metal Gears for Durability</li>
                                <li>Cost: ~$4 each</li>
                            </ul>
                        </div>
                    </div>

                    {/* Component 3: The Senses */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all">
                        <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                            <img src="/assets/emg_sensor.png" alt="EMG Sensor" className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">The Senses (EMG Sensors)</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                <strong>Differential EMG Sensors</strong> place on specific muscle groups (Flexor/Extensor) to capture intent with high signal-to-noise ratio.
                            </p>
                            <ul className="text-sm text-gray-500 list-disc list-inside">
                                <li>Dry Electrode Technology</li>
                                <li>Adjustable Gain</li>
                                <li>Non-invasive</li>
                            </ul>
                        </div>
                    </div>

                    {/* Component 4: The Structure */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all md:col-span-2 lg:col-span-3">
                        <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <img
                                    src="/assets/exploded_view.png"
                                    alt="Exploded View of Prosthetic Hand"
                                    className="w-full h-auto rounded-lg shadow-sm"
                                />
                                <p className="text-center text-xs text-gray-400 mt-2">Figure 2: Modular Assembly Breakdown</p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">3D Printed Exoskeleton</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Lightweight & Durable</h3>
                                        <p className="text-gray-600">
                                            Printed using <strong>PLA+ (Polylactic Acid)</strong> filament. It offers the perfect balance of tensile strength and weight, ensuring the hand is comfortable to wear for extended periods.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Modular Design</h3>
                                        <p className="text-gray-600">
                                            Every finger, palm link, and servo mount is modular. If a part breaks, it can be reprinted and replaced in minutes for pennies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default SystemAnatomy;
