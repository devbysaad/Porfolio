import { useState, useEffect } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { getProjects, getSkills, getContact } from './services/api';
import './App.css';

function App() {
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [projectsData, skillsData, contactData] = await Promise.all([
                    getProjects(),
                    getSkills(),
                    getContact()
                ]);

                setProjects(projectsData);
                setSkills(skillsData);
                setContact(contactData);
                setError(null);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Failed to load portfolio data. Please make sure the backend server is running.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d0d0d] noise-bg">
                <div className="loader-unique mb-8"></div>
                <div className="text-center">
                    <h2 className="text-2xl font-bold" style={{ color: 'var(--color-teal)' }}>LOADING</h2>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0d0d0d] px-4 noise-bg">
                <div className="bento-item max-w-md text-center p-10">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">CONNECTION ERROR</h2>
                    <p className="text-gray-400 mb-6">{error}</p>
                    <button onClick={() => window.location.reload()} className="btn-unique">
                        RETRY
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="App min-h-screen noise-bg">
            <Header contact={contact} />
            <Summary />
            <Skills skills={skills} />
            <Experience />
            <Projects projects={projects} />
            <Education />
            <ContactForm />
            <Footer contact={contact} />
        </div>
    );
}

export default App;
