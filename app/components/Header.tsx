"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SocialLink from './ui/SocialLink';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Header = () => {
    const navLinks = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
    ];

    const [activeLink, setActiveLink] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.getElementById(link.id));
            const scrollPosition = window.scrollY + 150;

            for (const section of sections) {
                if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setActiveLink(section.id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navLinks]);


    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                        Your Name
                    </h1>
                    <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                        Senior Web Developer
                    </h2>
                    <p className="mt-4 max-w-xs leading-normal">
                        I build exceptional and accessible digital experiences for the web.
                    </p>
                </motion.div>
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    className="group flex items-center py-3"
                                    href={`#${link.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(link.id);
                                    }}
                                >
                                    <span className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${activeLink === link.id ? 'w-16 bg-slate-200' : ''}`}></span>
                                    <span className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeLink === link.id ? 'text-slate-200' : ''}`}>
                                        {link.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 flex items-center"
            >
                <SocialLink href="https://github.com" icon={<Github className="h-6 w-6" />} />
                <SocialLink href="https://linkedin.com" icon={<Linkedin className="h-6 w-6" />} />
                <SocialLink href="https://twitter.com" icon={<Twitter className="h-6 w-6" />} />
                <SocialLink href="mailto:youremail@example.com" icon={<Mail className="h-6 w-6" />} />
            </motion.div>
        </header>
    );
};

export default Header;