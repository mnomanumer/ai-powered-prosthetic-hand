import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const Contact = () => {
    return (
        <div className="bg-surface-gray min-h-screen pb-16">
            <PageBanner
                title="Get in Touch"
                subtitle="Have questions about the project or want to collaborate? Reach out into the future."
                variant="blue"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-primary rounded-xl shadow-lg p-10 text-white">
                        <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <Mail className="w-6 h-6 mr-4 mt-1 text-accent" />
                                <div>
                                    <p className="font-semibold">Email</p>
                                    <p className="text-gray-300">mnoman.umer1@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="w-6 h-6 mr-4 mt-1 text-accent" />
                                <div>
                                    <p className="font-semibold">Phone</p>
                                    <p className="text-gray-300">+92 310 1167169</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 mr-4 mt-1 text-accent" />
                                <div>
                                    <p className="font-semibold">Lab Location</p>
                                    <p className="text-gray-300">
                                        Madinat-ul-Hikma,<br />
                                        Hamdard University Karachi
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-primary-dark rounded-lg">
                            <p className="text-sm italic">
                                "We are committed to making prosthetic technology accessible to everyone."
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-xl shadow-lg p-10">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-10 px-3 bg-gray-50 border" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary h-10 px-3 bg-gray-50 border" placeholder="you@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary p-3 bg-gray-50 border" placeholder="How can we help?"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                                    Send Message
                                    <Send className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
