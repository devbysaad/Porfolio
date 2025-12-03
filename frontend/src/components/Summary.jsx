import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Summary = () => {
    const sectionRef = useRef(null);
    const statsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate stats cards
            statsRef.current.forEach((stat, index) => {
                if (stat) {
                    gsap.from(stat, {
                        scrollTrigger: {
                            trigger: stat,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        },
                        opacity: 0,
                        scale: 0.8,
                        y: 20,
                        duration: 0.5,
                        ease: 'back.out(1.7)',
                        delay: index * 0.1
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 md:py-32 bg-[#0d0d0d] px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* Left - Title */}
                    <div className="animate-slide-left">
                        <h2 className="display-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 md:mb-8">
                            <span className="gradient-coral">ABOUT</span>
                            <br />
                            <span className="text-white">ME</span>
                        </h2>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-4 md:space-y-6 animate-slide-right">
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed accent-block">
                            I am a passionate <span style={{ color: 'var(--color-teal)' }} className="font-semibold">Full Stack Engineer</span> with expertise in building{' '}
                            <span style={{ color: 'var(--color-teal)' }} className="font-semibold">production-grade applications</span> using{' '}
                            <span style={{ color: 'var(--color-teal)' }} className="font-semibold">modern JavaScript frameworks</span>.
                        </p>

                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            My focus is on creating <span style={{ color: 'var(--color-coral)' }} className="font-semibold">clean, maintainable architecture</span> and developing{' '}
                            <span style={{ color: 'var(--color-coral)' }} className="font-semibold">scalable backend systems</span> that power exceptional user experiences.
                        </p>
                    </div>
                </div>

                {/* Stats Bento Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-20">
                    <div ref={el => statsRef.current[0] = el} className="bento-item hover-tilt text-center p-6 md:p-8">
                        <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">2+</div>
                        <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">Years Exp</div>
                    </div>
                    <div ref={el => statsRef.current[1] = el} className="bento-item hover-tilt text-center p-6 md:p-8">
                        <div className="text-4xl md:text-5xl font-bold mb-2 gradient-coral">10+</div>
                        <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">Projects</div>
                    </div>
                    <div ref={el => statsRef.current[2] = el} className="bento-item hover-tilt text-center p-6 md:p-8">
                        <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">100%</div>
                        <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">Satisfaction</div>
                    </div>
                    <div ref={el => statsRef.current[3] = el} className="bento-item hover-tilt text-center p-6 md:p-8">
                        <div className="text-4xl md:text-5xl font-bold mb-2 text-white">∞</div>
                        <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">Learning</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;
