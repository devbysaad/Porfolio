import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
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
                y: 40,
                duration: 0.8,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 md:py-32 bg-[#0d0d0d] px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="display-font text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-12 md:mb-16 animate-fade-up">
                    <span className="gradient-coral">EDU</span>
                    <span className="text-white">CATION</span>
                </h2>

                <div ref={cardRef} className="bento-item max-w-4xl">
                    <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                        <div className="text-4xl md:text-5xl font-bold opacity-20">01</div>
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                Computer Science
                            </h3>
                            <p className="font-semibold mb-3 md:mb-4 text-sm md:text-base" style={{ color: 'var(--color-coral)' }}>
                                Air University Islamabad • 2021 - 2025
                            </p>
                            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4 md:mb-6">
                                Focused on software engineering principles, data structures, algorithms, and modern web technologies.
                                Developed strong foundation in computer science fundamentals while building practical projects.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="badge-unique text-xs hover:bg-coral-500 hover:text-black transition-all duration-300">Data Structures</span>
                                <span className="badge-unique text-xs hover:bg-coral-500 hover:text-black transition-all duration-300">Algorithms</span>
                                <span className="badge-unique text-xs hover:bg-coral-500 hover:text-black transition-all duration-300">Software Engineering</span>
                                <span className="badge-unique text-xs hover:bg-coral-500 hover:text-black transition-all duration-300">Database Systems</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
