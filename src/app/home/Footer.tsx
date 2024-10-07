import React from 'react';
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-gray-100 bg-opacity-95 text-gray-700 py-8 mt-auto">
            <div className="container mx-auto px-4 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                    {/* Brand Info */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-900">ResumeReady</h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Empowering your career journey with modern resume-building tools.
                        </p>
                    </div>
                    
                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
                        <ul className="mt-2 space-y-2">
                            <li><Link href="/about" className="hover:text-blue-500">About Us</Link></li>
                            <li><Link href="/resume-builder" className="hover:text-blue-500">Resume Builder</Link></li>
                            <li><Link href="/resume-analyzer" className="hover:text-blue-500">Resume Analyzer</Link></li>
                        </ul>
                    </div>

                    {/* FBLA Connection */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold text-gray-900">Proudly Connected to FBLA</h4>
                        <a href="https://www.nhfbla.org" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://www.fbla.org/media/2024/07/Cybis-FBLA25-DTDDTL-Logo-web-res.png"
                                alt="FBLA Logo"
                                className="w-24 h-auto mt-4 mx-auto"
                            />
                        </a>
                    </div>
                    
                    {/* Social Media */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold text-gray-900">Follow Us</h4>
                        <ul className="mt-2 flex space-x-4 justify-center md:justify-start">
                            <li>
                                <a href="https://twitter.com/ResumeReadyFBLA" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg"
                                        alt="Twitter"
                                        className="w-6 h-6"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=61566551172677" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_(2019).svg"
                                        alt="Facebook"
                                        className="w-6 h-6"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/fblaresume" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                                        alt="Instagram"
                                        className="w-6 h-6"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-12 border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
                    © {new Date().getFullYear()} ResumeReady. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
