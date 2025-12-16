import React from 'react';
import { User, Award, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';

const ResearchTeam = () => {
    const team = [
        {
            name: 'Ms. Aqsa Nadir',
            role: 'Project Supervisor',
            bio: 'Lecturer, Faculty of Engineering, Sciences and Technology, Hamdard University Karachi.',
            image: null // Placeholder
        },
        {
            name: 'Muhammad Noman Umer',
            role: 'Project Lead',
            bio: 'BS AI-7 | CMS ID: 2960-2022. Focusing on AI implementation and system integration.',
            image: null
        },
        {
            name: 'Atif Ali Siddiqui',
            role: 'Team Member',
            bio: 'BS AI-7 | CMS ID: 2294-2022. Hardware connectivity and sensor optimization.',
            image: null
        },
        {
            name: 'Jibran George',
            role: 'Team Member',
            bio: 'BS AI-7 | CMS ID: 2565-2022. 3D modeling and mechanical assembly.',
            image: null
        }
    ];

    return (
        <div className="bg-surface-gray min-h-screen pb-16">
            <PageBanner
                title="Our Research Team"
                subtitle="Dedicated innovators bridging the gap between biological intent and mechanical precision."
                variant="blue"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                            className="bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl overflow-hidden flex flex-col items-center p-8 transition-all duration-300"
                        >
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 p-1 mb-6 shadow-inner relative overflow-hidden">
                                {member.image ? (
                                    <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover" />
                                ) : (
                                    <div className="w-full h-full rounded-full flex items-center justify-center bg-gray-50 text-gray-400">
                                        <User className="w-16 h-16" />
                                    </div>
                                )}
                            </div>
                            <h3 className="text-2xl font-display font-bold text-gray-900">{member.name}</h3>
                            <p className="text-accent font-medium mb-4">{member.role}</p>
                            <p className="text-gray-600 text-center text-sm mb-6 leading-relaxed bg-blue-50/50 p-3 rounded-lg border border-blue-100/50">{member.bio}</p>

                            <div className="flex space-x-4">
                                <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-primary hover:bg-blue-50 transition-colors border border-gray-100">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-primary hover:bg-blue-50 transition-colors border border-gray-100">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-primary hover:bg-blue-50 transition-colors border border-gray-100">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResearchTeam;
