import React from 'react';
import { useState, useEffect, useRef } from 'react';

// --- DATA (Extracted from your resume) ---
const portfolioData = {
    name: "LOCHAN VALLABHANENI",
    title: "Cybersecurity Engineer | Building Intelligent Defenses with AI & ML",
    email: "choudarylochan@gmail.com",
    linkedin: "https://linkedin.com/in/lochan-vallabhaneni",
    github: "https://github.com/LochanVallabhaneni",
    about: {
        p1: "I am a results-driven Cybersecurity Engineer with a B.Tech in Computer Science and Engineering, specializing in Cyber Security. My passion lies at the intersection of artificial intelligence and security, where I focus on developing intelligent systems to combat modern cyber threats.",
        p2: "Through hands-on projects like designing an Autonomous SOC and an AI-powered firewall, and my internship experience at Zscaler focusing on Zero Trust Architecture, I have developed a strong foundation in both theoretical concepts and practical application. I am driven to create robust, automated, and proactive security solutions."
    },
    skills: [
        { name: 'Python (Pandas, NumPy)', level: '95%' },
        { name: 'AI & Machine Learning (scikit-learn, TensorFlow)', level: '90%' },
        { name: 'Cybersecurity Tools (Nmap, Wireshark, Nessus)', level: '90%' },
        { name: 'Web Development (React, JS, HTML, CSS)', level: '85%' },
        { name: 'Databases (SQL, MySQL)', level: '85%' },
        { name: 'Cloud & DevOps (AWS, Git/GitHub)', level: '80%' },
    ],
    projects: [
        {
            title: 'Autonomous Cloud Security Operations Center (Auto-SOC)',
            category: 'ai-ml',
            image: 'https://placehold.co/600x400/020617/3b82f6?text=Auto-SOC',
            tags: ['AI/ML', 'Cloud Security', 'Python', 'scikit-learn', 'SIEM', 'AWS'],
            description: "<p>Designed and developed an AI-powered Autonomous Security Operations Center (SOC) capable of monitoring, detecting, and responding to cloud security threats in real time.</p><p>The system automates alert triaging, incident prioritization, and response workflows to significantly reduce Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR). Leveraged tools like AWS CloudTrail, SIEM platforms, Python, scikit-learn, and Flask/Django for backend automation and alert visualization.</p>",
            liveLink: '#',
            repoLink: '#'
        },
        {
            title: 'Intelligent Firewall Anomaly Detection with Semantic Analysis and Hybrid Learning',
            category: 'ai-ml',
            image: 'https://placehold.co/600x400/0f172a/4f46e5?text=AI+Firewall',
            tags: ['Deep Learning', 'Python', 'NLP', 'BERT', 'CNN', 'VAE'],
            description: "<p>Designed and implemented an Al-powered intelligent firewall that integrates semantic analysis and hybrid deep learning models (CNN + VAE) to detect advanced cyber threats.</p><p>Employed Natural Language Processing (NLP) using BERT embeddings to semantically analyze firewall logs and extract contextual threat indicators. Combined Convolutional Neural Networks (CNNs) for spatial pattern recognition with Variational Autoencoders (VAES) for detecting zero-day and unseen anomalies.</p>",
            liveLink: '#',
            repoLink: '#'
        },
        {
            title: 'Zero Trust Architecture Implementation',
            category: 'cloud-security',
            image: 'https://placehold.co/600x400/1e293b/10b981?text=Zero+Trust',
            tags: ['Zscaler', 'ZTNA', 'SWG', 'Cloud Firewall', 'Security'],
            description: "<p>Gained hands-on experience with Zero Trust Architecture during an internship at Zscaler. Focused on real-world applications of least privilege access, secure authentication, and network micro-segmentation.</p><p>Worked with cloud-native security tools and explored Zero Trust Network Access (ZTNA) through interactive labs and real-life security scenarios. Studied core cloud security technologies like Secure Web Gateway (SWG), cloud firewalls, and identity-based policy controls used in enterprise-grade networks.</p>",
            liveLink: '#',
            repoLink: '#'
        }
    ],
    experience: [
        {
            role: 'Zero Trust Cloud Security Intern',
            company: 'Zscaler',
            period: 'April 2024 - June 2024',
            description: 'Gained hands-on experience with Zero Trust Architecture, focusing on real-world applications of least privilege access, secure authentication, and network micro-segmentation. Worked with cloud-native security tools like SWG and cloud firewalls, and explored ZTNA through interactive labs. Learned to recognize and mitigate common cloud threats such as lateral movement and data exfiltration.'
        },
        {
            role: 'B.Tech in Computer Science (Cyber Security)',
            company: 'Institute of Aerounautical Engineering',
            period: '2020 - 2024',
            description: 'Completed a comprehensive curriculum focused on cybersecurity principles, computer science fundamentals, and software engineering. Maintained a GPA of 7.48/10.'
        }
    ]
};

// --- COMPONENTS ---

const CursorLight = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.setProperty('--x', `${e.clientX}px`);
                cursorRef.current.style.setProperty('--y', `${e.clientY}px`);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <div
            ref={cursorRef}
            className="cursor-light"
        ></div>
    );
};

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#experience', label: 'Experience' },
    ];

    const scrollTo = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="container">
                <a href="#" onClick={() => scrollTo('#hero')} className="logo">
                    {portfolioData.name}
                </a>
                <nav className="nav-links">
                    {navLinks.map(link => (
                        <a key={link.label} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}>{link.label}</a>
                    ))}
                </nav>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }} className="contact-btn">
                    Contact
                </a>
                <button onClick={() => setMenuOpen(!menuOpen)} className="menu-btn">
                    <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>
            {menuOpen && (
                <div className="mobile-menu">
                    {navLinks.map(link => (
                        <a key={link.label} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}>{link.label}</a>
                    ))}
                    <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}>Contact</a>
                </div>
            )}
        </header>
    );
};

const Hero = () => (
    <section id="hero" className="hero-section">
        <div className="container">
            <h1 className="hero-title">
                {portfolioData.name}
            </h1>
            <p className="hero-subtitle">
                {portfolioData.title}
            </p>
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }); }} className="cta-btn">
                View My Work
            </a>
        </div>
    </section>
);

const About = () => (
    <section id="about" className="about-section">
        <div className="container content">
            <div className="profile-pic">
                <img src="https://placehold.co/300x300/1e293b/94a3b8?text=LV" alt="Lochan Vallabhaneni" />
            </div>
            <div className="text">
                <h2>About Me</h2>
                <p>{portfolioData.about.p1}</p>
                <p>{portfolioData.about.p2}</p>
            </div>
        </div>
    </section>
);

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2>Technical Skills</h2>
                <div className="skills-grid">
                    {portfolioData.skills.map(skill => (
                        <div key={skill.name} className="skill-item">
                            <div className="header">
                                <span>{skill.name}</span>
                                <span>{skill.level}</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-bar-fill" style={{ width: skill.level }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const filters = ['all', 'ai-ml', 'cloud-security'];

    const filteredProjects = activeFilter === 'all'
        ? portfolioData.projects
        : portfolioData.projects.filter(p => p.category === activeFilter);

    return (
        <>
            <section id="projects" className="projects-section">
                <div className="container">
                    <h2>Projects Showcase</h2>
                    <p className="subtitle">A selection of projects that demonstrate my passion for building intelligent security solutions.</p>
                    <div className="filters">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={activeFilter === filter ? 'active' : ''}
                            >
                                {filter.replace('-', ' / ').toUpperCase()}
                            </button>
                        ))}
                    </div>
                    <div className="projects-grid">
                        {filteredProjects.map(project => (
                            <div key={project.title} onClick={() => setSelectedProject(project)} className="project-card">
                                <div className="image">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className="content">
                                    <h3>{project.title}</h3>
                                    <div className="tags">
                                        {project.tags.slice(0, 3).map(tag => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <a href="#">View Details &rarr;</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </>
    );
};

const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) onClose();
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="modal-close-btn">&times;</button>
                <div className="modal-body">
                    <h3>{project.title}</h3>
                    <div className="project-image">
                        <img src={project.image} alt={project.title} />
                    </div>
                    <div className="tags">
                        {project.tags.map(tag => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                    <div className="description" dangerouslySetInnerHTML={{ __html: project.description }}></div>
                    <div className="links">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">View Live</a>
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Experience = () => (
    <section id="experience" className="experience-section">
        <div className="container">
            <h2>Experience & Education</h2>
            <div className="experience-timeline">
                {portfolioData.experience.map((item, index) => (
                    <div key={index} className="experience-item">
                        <p className="period">{item.period}</p>
                        <h3>{item.role}</h3>
                        <p className="company">{item.company}</p>
                        <p className="description">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section id="contact" className="contact-section">
        <div className="container">
            <h2>Let's Connect</h2>
            <p>I'm actively seeking new opportunities to apply my skills in AI and cybersecurity. If you have a challenging project or role in mind, I'd love to hear from you.</p>
            <a href={`mailto:${portfolioData.email}`} className="email-link">
                {portfolioData.email}
            </a>
            <div className="social-links">
                <a href={portfolioData.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        </div>
    </footer>
);


// --- MAIN APP ---
export default function App() {
    return (
        <div className="app-container">
            <CursorLight />
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}