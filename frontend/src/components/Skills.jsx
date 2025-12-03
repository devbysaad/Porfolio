import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = ({ skills }) => {
    const sectionRef = useRef(null);
    const skillsRef = useRef([]);

    useEffect(() => {
        if (!skills || skills.length === 0) return;

        const ctx = gsap.context(() => {
            skillsRef.current.forEach((skill, index) => {
                if (skill) {
                    gsap.from(skill, {
                        scrollTrigger: {
                            trigger: skill,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        },
                        opacity: 0,
                        y: 30,
                        scale: 0.9,
                        duration: 0.6,
                        ease: 'back.out(1.7)',
                        delay: index * 0.1
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [skills]);

    return (
        <section ref={sectionRef} id="skills" className="py-20 md:py-32 bg-[#0d0d0d] px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="display-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-12 md:mb-16 animate-fade-up">
                    <span className="gradient-text">SKILLS</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {skills && skills.length > 0 ? (
                        skills.map((skillGroup, index) => (
                            <div
                                key={skillGroup._id || index}
                                ref={el => skillsRef.current[index] = el}
                                className="bento-item hover-tilt group relative overflow-hidden"
                            >
                                {/* Hover Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-coral-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6 uppercase tracking-tight group-hover:text-teal-400 transition-colors duration-300">
                                        {skillGroup.category}
                                    </h3>

                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="badge-unique text-xs hover:bg-teal-500 hover:text-black transition-all duration-300 cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Corner Accent */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-400 py-12">
                            <p>Loading skills...</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Skills;
