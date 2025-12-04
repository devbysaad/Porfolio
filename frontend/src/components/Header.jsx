import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Header = ({ contact }) => {
    const headerRef = useRef(null);
    const titleRef = useRef(null);
    const badgeRef = useRef(null);
    const contentRef = useRef(null);
    const cardsRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Badge animation
            gsap.from(badgeRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.6,
                ease: 'power3.out'
            });

            // Title animation
            gsap.from(titleRef.current.children, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                delay: 0.2
            });

            // Content animation
            gsap.from(contentRef.current.children, {
                opacity: 0,
                y: 30,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power2.out',
                delay: 0.6
            });

            // Buttons animation
            gsap.from(buttonsRef.current.children, {
                opacity: 0,
                scale: 0.8,
                duration: 0.5,
                stagger: 0.1,
                ease: 'back.out(1.7)',
                delay: 0.9
            });

            // Cards animation
            gsap.from(cardsRef.current.children, {
                opacity: 0,
                x: 50,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
                delay: 1
            });

            // Parallax effect for background accents
            gsap.to('.bg-accent-1', {
                y: -30,
                x: 20,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

            gsap.to('.bg-accent-2', {
                y: 20,
                x: -30,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }, headerRef);

        return () => ctx.revert();
    }, []);

    const handleResumeDownload = () => {
        const baseURL = import.meta.env.VITE_API_URL?.replace('/api', '') || 'https://porfolio-backend-server-deployment.vercel.app';
        window.open(`${baseURL}/resume/devbysaad_resume.pdf`, '_blank');
    };

    return (
        <header ref={headerRef} className="min-h-screen flex items-center relative overflow-hidden bg-[#0d0d0d] px-4 sm:px-6 lg:px-8 py-12">
            {/* Background Accents */}
            <div className="bg-accent-1 absolute top-20 right-10 w-48 md:w-64 h-48 md:h-64 rounded-full blur-3xl opacity-20" style={{ background: 'var(--color-teal)' }}></div>
            <div className="bg-accent-2 absolute bottom-20 left-10 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl opacity-10" style={{ background: 'var(--color-coral)' }}></div>

            <div className="max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Side - Bold Typography */}
                    <div>
                        <div ref={badgeRef} className="mb-4 md:mb-6">
                            <span className="badge-unique text-xs md:text-sm">FULL STACK ENGINEER</span>
                        </div>

                        <h1 ref={titleRef} className="display-font text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-4 md:mb-6">
                            <span className="gradient-text">PORT</span>
                            <br />
                            <span className="text-white">FOLIO</span>
                        </h1>

                        <div ref={contentRef} className="accent-block mb-6 md:mb-8">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
                                {contact?.name || 'MUHAMMAD SAAD'}
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-lg">
                                Building production-grade applications with modern JavaScript frameworks,
                                clean architecture, and scalable backend systems.
                            </p>
                        </div>

                        <div ref={buttonsRef} className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                            <a href="#projects" className="btn-unique text-center px-6 py-3 sm:px-8 sm:py-4">
                                VIEW WORK
                            </a>
                            <a href="#contact" className="btn-outline rounded-full text-center px-6 py-3 sm:px-8 sm:py-4">
                                GET IN TOUCH
                            </a>
                            <button
                                onClick={handleResumeDownload}
                                className="btn-outline rounded-full text-center px-6 py-3 sm:px-8 sm:py-4 flex items-center justify-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                RESUME
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Contact Info Cards */}
                    <div ref={cardsRef} className="grid grid-cols-2 gap-3 md:gap-4">
                        <div className="bento-item hover-tilt col-span-2 p-4 md:p-6">
                            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-2">Email</div>
                            <a href={`mailto:${contact?.email}`} className="text-sm md:text-lg font-semibold animated-underline break-all" style={{ color: 'var(--color-teal)' }}>
                                {contact?.email || 'dev.bysaad@gmail.com'}
                            </a>
                        </div>

                        <div className="bento-item hover-tilt p-4 md:p-6">
                            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-2">Phone</div>
                            <a href={`tel:${contact?.phone}`} className="text-sm md:text-lg font-semibold text-white">
                                {contact?.phone || '0333-5959-829'}
                            </a>
                        </div>

                        <div className="bento-item hover-tilt p-4 md:p-6">
                            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-2">Location</div>
                            <p className="text-sm md:text-lg font-semibold text-white">Pakistan</p>
                        </div>

                        <div className="bento-item hover-tilt p-4 md:p-6">
                            <a href={contact?.github} target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-2">GitHub</div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" style={{ color: 'var(--color-teal)' }} fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <span className="font-semibold text-white text-sm md:text-base">Profile</span>
                                </div>
                            </a>
                        </div>

                        <div className="bento-item hover-tilt p-4 md:p-6">
                            <a href={contact?.linkedin} target="_blank" rel="noopener noreferrer" className="block group">
                                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-2">LinkedIn</div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" style={{ color: 'var(--color-teal)' }} fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    <span className="font-semibold text-white text-sm md:text-base">Connect</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: 'var(--color-teal)' }}>
                    <div className="w-1 h-2 rounded-full mt-2" style={{ background: 'var(--color-teal)' }}></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
