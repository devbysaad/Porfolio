import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardRef.current, {
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                x: -50,
                duration: 0.8,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 md:py-32 bg-[#0d0d0d] px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="display-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-12 md:mb-16 animate-fade-up">
                    <span className="text-white">EXPER</span>
                    <span className="gradient-text">IENCE</span>
                </h2>

                <div ref={cardRef} className="bento-item max-w-4xl">
                    <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                        <div className="text-4xl md:text-5xl font-bold opacity-20">01</div>
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                Full Stack Web Application Developer
                            </h3>
                            <p className="font-semibold mb-3 md:mb-4 text-sm md:text-base" style={{ color: 'var(--color-teal)' }}>
                                Freelance • 2022 - Present
                            </p>
                            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4 md:mb-6">
                                Specializing in end-to-end development of modern web applications using the MERN stack.
                                Delivering high-quality, scalable solutions with focus on clean code, performance optimization,
                                and seamless user experiences.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="badge-unique text-xs hover:bg-teal-500 hover:text-black transition-all duration-300">Modular Architecture</span>
                                <span className="badge-unique text-xs hover:bg-teal-500 hover:text-black transition-all duration-300">Next.js & React</span>
                                <span className="badge-unique text-xs hover:bg-teal-500 hover:text-black transition-all duration-300">AI Integration</span>
                                <span className="badge-unique text-xs hover:bg-teal-500 hover:text-black transition-all duration-300">Real-time Processing</span>
                                <span className="badge-unique text-xs hover:bg-teal-500 hover:text-black transition-all duration-300">Scalable Deployment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
