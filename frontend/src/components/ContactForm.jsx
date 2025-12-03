import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const sectionRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(formRef.current, {
                scrollTrigger: {
                    trigger: formRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
            const response = await axios.post(`${API_URL}/message/send`, formData);

            setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
            setFormData({ name: '', email: '', message: '' });

            // Animate success
            gsap.from('.success-message', {
                scale: 0.8,
                opacity: 0,
                duration: 0.4,
                ease: 'back.out(1.7)'
            });
        } catch (error) {
            console.error('Contact form error:', error);
            setStatus({
                type: 'error',
                message: error.response?.data?.message || 'Failed to send message. Please try again or email me directly.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section ref={sectionRef} id="contact" className="py-20 md:py-32 bg-[#0d0d0d] px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="display-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-12 md:mb-16 animate-fade-up">
                    <span className="gradient-text">GET IN</span>
                    <br />
                    <span className="text-white">TOUCH</span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* Left - Info */}
                    <div className="animate-slide-left">
                        <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8 accent-block">
                            Have a project in mind? Let's work together to create something amazing!
                        </p>
                        <div className="space-y-4">
                            <div>
                                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-1">Email</div>
                                <a href="mailto:dev.bysaad@gmail.com" className="text-base md:text-lg font-semibold animated-underline break-all" style={{ color: 'var(--color-teal)' }}>
                                    dev.bysaad@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div ref={formRef} className="bento-item animate-slide-right">
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div>
                                <label className="block text-white font-semibold mb-2 uppercase text-xs md:text-sm tracking-wider">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 md:px-6 py-3 md:py-4 bg-[#0d0d0d] border border-gray-800 rounded-2xl text-white focus:outline-none transition-colors text-sm md:text-base focus:border-teal-500"
                                    style={{ borderColor: formData.name ? 'var(--color-teal)' : '' }}
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block text-white font-semibold mb-2 uppercase text-xs md:text-sm tracking-wider">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 md:px-6 py-3 md:py-4 bg-[#0d0d0d] border border-gray-800 rounded-2xl text-white focus:outline-none transition-colors text-sm md:text-base focus:border-teal-500"
                                    style={{ borderColor: formData.email ? 'var(--color-teal)' : '' }}
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-white font-semibold mb-2 uppercase text-xs md:text-sm tracking-wider">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 md:px-6 py-3 md:py-4 bg-[#0d0d0d] border border-gray-800 rounded-2xl text-white focus:outline-none transition-colors resize-none text-sm md:text-base focus:border-teal-500"
                                    style={{ borderColor: formData.message ? 'var(--color-teal)' : '' }}
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            {status.message && (
                                <div className={`success-message p-3 md:p-4 rounded-2xl text-sm md:text-base ${status.type === 'success'
                                    ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                                    : 'bg-red-500/10 border border-red-500/30 text-red-400'
                                    }`}>
                                    {status.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="btn-unique w-full disabled:opacity-50 disabled:cursor-not-allowed px-6 py-4 text-sm md:text-base"
                            >
                                {loading ? 'SENDING...' : 'SEND MESSAGE'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
