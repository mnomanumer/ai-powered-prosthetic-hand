import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-accent">AI-Powered Prosthetic Hand</h3>
                        <p className="text-gray-400 text-sm mt-2 max-w-md">
                            Bridging the gap between high performance and affordability.
                            Powered by Deep Learning and low-cost hardware.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                            <Mail className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Final Year Project. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
