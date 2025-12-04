import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ projects }) => {
    const sectionRef = useRef(null);
    const projectsRef = useRef([]);

    useEffect(() => {
        if (!projects || projects.length === 0) return;

        const ctx = gsap.context(() => {
            projectsRef.current.forEach((project, index) => {
                if (project) {
                    gsap.from(project, {
                        scrollTrigger: {
                            trigger: project,
                            start: 'top 80%',
                            end: 'bottom 20%',
                            toggleActions: 'play none none reverse'
                        },
                        opacity: 0,
                        y: 50,
                        duration: 0.8,
                        ease: 'power3.out',
                        delay: index * 0.1
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [projects]);

    const getProjectImage = (projectName) => {
        const name = projectName.toLowerCase();
        const baseURL = import.meta.env.VITE_API_URL?.replace('/api', '') || 'https://porfolio-backend-server-deployment.vercel.app';

        if (name.includes('creavix')) {
            return `${baseURL}/images/creavix.png`;
        } else if (name.includes('mood') || name.includes('song') || name.includes('player')) {
            return `${baseURL}/images/moody-tunes.png`;
        }
        return null;
    };

    return (
        <section ref={sectionRef} id="projects" className="py-20 md:py-32 bg-[#0d0d0d] px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="display-font text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-12 md:mb-16 animate-fade-up">
                    <span className="gradient-coral">PRO</span>
                    <span className="text-white">JECTS</span>
                </h2>

                <div className="space-y-6 md:space-y-8">
                    {projects && projects.length > 0 ? (
                        projects.map((project, index) => {
                            const projectImage = getProjectImage(project.name);

                            return (
                                <div
                                    key={project._id || index}
                                    ref={el => projectsRef.current[index] = el}
                                    className="bento-item hover-tilt group"
                                >
                                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                                        {/* Project Number & Title */}
                                        <div>
                                            <div className="text-5xl md:text-6xl font-bold mb-3 md:mb-4 opacity-20">0{index + 1}</div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:text-teal-400 transition-colors">
                                                {project.name}
                                            </h3>
                                        </div>

                                        {/* Description & Details */}
                                        <div className="md:col-span-2">
                                            {/* Project Image */}
                                            {projectImage && (
                                                <div className="mb-4 md:mb-6 rounded-2xl overflow-hidden border border-gray-800 group-hover:border-teal-500 transition-colors bg-gray-900/50">
                                                    <img
                                                        src={projectImage}
                                                        alt={project.name}
                                                        className="w-full h-48 md:h-64 object-contain group-hover:scale-105 transition-transform duration-500"
                                                        loading="lazy"
                                                        onError={(e) => {
                                                            console.error('Image failed to load:', projectImage);
                                                            e.target.style.display = 'none';
                                                        }}
                                                    />
                                                </div>
                                            )}

                                            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-4 md:mb-6">
                                                {project.description}
                                            </p>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                                                {project.technologies.slice(0, 6).map((tech, techIndex) => (
                                                    <span key={techIndex} className="badge-unique text-xs hover:bg-teal-500 hover:text-black transition-all duration-300">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Links */}
                                            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn-unique text-center inline-block px-6 py-3"
                                                    >
                                                        VIEW LIVE
                                                    </a>
                                                )}

                                                {project.githubUrl && (
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn-outline rounded-full text-center inline-block px-6 py-3"
                                                    >
                                                        GITHUB
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="text-center text-gray-400 py-12">
                            <p className="text-lg md:text-xl">Loading projects...</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
