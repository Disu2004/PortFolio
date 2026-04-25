import React, { useEffect, useRef, useState } from 'react';
import './CSS/about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

import profileImage from '../assets/image.png';

export default function About() {
    const [toast, setToast] = useState({ show: false, success: true });
    const [sending, setSending] = useState(false);
    const form = useRef();

    useEffect(() => {
        AOS.init({ duration: 800, once: false, mirror: true, offset: 160 });
    }, []);

    const showToast = (success) => {
        setToast({ show: true, success });
        setTimeout(() => setToast({ show: false, success: true }), 4500);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true);
        emailjs
            .sendForm('service_nicinac', 'template_liecrop', form.current, {
                publicKey: 'xxa5TfoomBMBFVawf',
            })
            .then(() => {
                showToast(true);
                form.current.reset();
            })
            .catch((err) => {
                console.error(err);
                showToast(false);
            })
            .finally(() => setSending(false));
    };

    const stack = [
        { label: 'Languages',   items: ['Java', 'JavaScript', 'Python'] },
        { label: 'Frontend',    items: ['React.js', 'HTML5', 'CSS3', 'Bootstrap'] },
        { label: 'Backend',     items: ['Node.js', 'Express.js'] },
        { label: 'Database',    items: ['MongoDB', 'MySQL'] },
        { label: 'Design',      items: ['Figma', 'UI/UX Design'] },
        { label: 'Tools',       items: ['Git', 'GitHub', 'Postman', 'VS Code'] },
    ];

    const experience = [
        {
            period: '2024 — Present',
            company: 'STP Web Hosting',
            role: 'Jr. Software Developer',
            tag: 'Current',
            tagClass: 'tag-green',
            desc: 'Building and maintaining full-stack web solutions for clients. Working with React.js, Node.js and Express to deliver production-grade digital products and web applications.',
            accent: '#00e676',
        },
        {
            period: 'Jun 2024 — Jul 2024',
            company: 'HackVeda',
            role: 'Web Development Intern',
            tag: 'Internship',
            tagClass: 'tag-purple',
            desc: '1-month intensive internship focused on frontend and full-stack web development. Built real-world projects using HTML, CSS, JavaScript, and React.js under mentorship.',
            accent: '#b388ff',
        },
    ];

    const education = [
        {
            period: '2022 — 2026',
            company: 'Marwadi University',
            role: 'B.Tech — Computer Engineering',
            tag: 'Education',
            tagClass: 'tag-blue',
            desc: 'Bachelor of Technology in Computer Engineering with a specialisation in full-stack development, machine learning fundamentals, and software design.',
            highlight: '🎓  CGPA 8.93 / 10.0  —  First Class Distinction',
            accent: '#448aff',
        },
        {
            period: '2019 — 2021',
            company: 'Govt. Boys High School, Veraval',
            role: 'HSC — Science Stream',
            tag: 'HSC',
            tagClass: 'tag-orange',
            desc: 'Completed Higher Secondary Certificate in Science stream with Physics, Chemistry and Mathematics as core subjects.',
            highlight: '📋  77%  —  Gujarat Secondary & Higher Secondary Education Board',
            accent: '#ff9800',
        },
        {
            period: 'Until 2019',
            company: 'Maniben Kotak High School, Veraval',
            role: 'SSC — Secondary School Certificate',
            tag: 'SSC',
            tagClass: 'tag-teal',
            desc: 'Completed Secondary School Certificate from Maniben Kotak High School, Veraval with a strong academic foundation.',
            highlight: '📋  75%  —  Gujarat Secondary Education Board',
            accent: '#26c6da',
        },
    ];

    // Projects with online images matching dark background theme (dark/tech aesthetic from Unsplash)
    const projects = [
        {
            img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
            alt: 'PlaceSmart',
            title: 'PlaceSmart — Placement Preparation App',
            desc: 'Comprehensive placement preparation platform with curated DSA problems, aptitude tests, mock interviews, and company-specific preparation roadmaps.',
            tags: ['React', 'Node.js', 'MongoDB', 'Express'],
            num: '01',
            link: 'https://github.com/Disu2004',
        },
        {
            img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
            alt: 'Movie Recommendation',
            title: 'Movie Recommendation System',
            desc: 'ML-powered engine using collaborative filtering with an interactive React frontend for personalised movie discovery.',
            tags: ['React', 'Flask', 'Machine Learning'],
            num: '02',
            link: 'https://github.com/Disu2004',
        },
        {
            img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
            alt: 'MyStocks',
            title: 'MyStocks — Stock Market App',
            desc: 'Sample stock market application featuring full CRUD operations, live price simulation, portfolio tracking, and watchlist management.',
            tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
            num: '03',
            link: 'https://github.com/Disu2004',
        },
        {
            img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
            alt: 'GSRTC UI',
            title: 'GSRTC UI Clone — Figma',
            desc: 'Full UI/UX redesign of the Gujarat GSRTC bus booking portal, modernising the entire user journey and visual system.',
            tags: ['Figma', 'UI/UX', 'Prototyping'],
            num: '04',
            link: 'https://github.com/Disu2004',
        },
    ];

    return (
        <div className="port-root">

            {/* ── Toast Notification ── */}
            <div className={`port-toast ${toast.show ? 'toast-visible' : ''} ${toast.success ? 'toast-ok' : 'toast-err'}`}>
                <div className="toast-ico-wrap">
                    <span className="toast-ico">{toast.success ? '✓' : '✕'}</span>
                </div>
                <div className="toast-text">
                    <p className="toast-head">{toast.success ? 'Message sent!' : 'Send failed'}</p>
                    <p className="toast-sub">{toast.success ? "I'll get back to you soon 👋" : 'Please try again later.'}</p>
                </div>
            </div>

            {/* ── Navbar ── */}
            <nav className="port-nav">
                <span className="port-logo">DU<span className="logo-dot">.</span></span>
                <ul className="port-navlinks">
                    {['Experience', 'Education', 'Stack', 'Projects', 'Contact'].map(n => (
                        <li key={n}><a href={`#${n.toLowerCase()}`}>{n}</a></li>
                    ))}
                </ul>
                <a href="/Dishant_Upadhyay_Resume.pdf" download className="nav-resume-btn">Resume ↓</a>
            </nav>

            {/* ── Hero ── */}
            <section className="port-hero">
                <div className="hero-noise" />
                <div className="hero-grid-lines" />
                <div className="hero-inner">
                    <div className="hero-left">
                        <div className="avail-pill" data-aos="fade-down">
                            <span className="avail-dot" />Open to opportunities
                        </div>
                        <h1 className="hero-name" data-aos="fade-right" data-aos-delay="100">
                            Dishant<br /><em>Upadhyay</em>
                        </h1>
                        <p className="hero-roles" data-aos="fade-right" data-aos-delay="200">
                            Software Engineer &nbsp;·&nbsp; Full-Stack Developer &nbsp;·&nbsp; UI/UX Designer
                        </p>
                        <p className="hero-bio" data-aos="fade-right" data-aos-delay="300">
                            I build digital experiences that are fast, elegant, and impactful — 
                            from pixel-perfect interfaces to robust backend systems.
                        </p>
                        <div className="hero-cta" data-aos="fade-up" data-aos-delay="400">
                            <a href="#contact" className="btn-primary">Get in touch</a>
                            <a href="/Dishant_Upadhyay_Resume.pdf" download className="btn-ghost">Download CV</a>
                        </div>
                    </div>
                    <div className="hero-right" data-aos="fade-left" data-aos-delay="200">
                        <div className="hero-img-frame">
                            <img src={profileImage} alt="Dishant Upadhyay" className="hero-img" />
                            <div className="hero-img-glow" />
                        </div>
                        <div className="hero-stat-card" data-aos="zoom-in" data-aos-delay="500">
                            <span className="stat-num">8.93</span>
                            <span className="stat-label">CGPA · First Class Distinction</span>
                        </div>
                      
                    </div>
                </div>
                <div className="hero-scroll-cue">
                    <span className="scroll-label">Scroll</span>
                    <span className="scroll-bar" />
                </div>
            </section>

            {/* ── Experience ── */}
            <section className="port-section" id="experience">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-eyebrow">01 / Journey</span>
                    <h2 className="section-title">Work Experience</h2>
                </div>
                <div className="timeline">
                    <div className="tl-spine" />
                    {experience.map((e, i) => (
                        <div className="tl-row" key={i} data-aos="fade-up" data-aos-delay={i * 120}>
                            <div className="tl-meta">
                                <span className="tl-period">{e.period}</span>
                                <div className="tl-dot" style={{ background: e.accent, boxShadow: `0 0 12px ${e.accent}60` }} />
                            </div>
                            <div className="tl-card">
                                <div className="tl-card-top">
                                    <div>
                                        <h3 className="tl-company">{e.company}</h3>
                                        <p className="tl-role">{e.role}</p>
                                    </div>
                                    <span className={`tl-tag ${e.tagClass}`}>{e.tag}</span>
                                </div>
                                <p className="tl-desc">{e.desc}</p>
                                {e.highlight && (
                                    <div className="tl-highlight">{e.highlight}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Education ── */}
            <section className="port-section port-alt" id="education">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-eyebrow">02 / Education</span>
                    <h2 className="section-title">Academic Background</h2>
                </div>
                <div className="timeline">
                    <div className="tl-spine" />
                    {education.map((e, i) => (
                        <div className="tl-row" key={i} data-aos="fade-up" data-aos-delay={i * 120}>
                            <div className="tl-meta">
                                <span className="tl-period">{e.period}</span>
                                <div className="tl-dot" style={{ background: e.accent, boxShadow: `0 0 12px ${e.accent}60` }} />
                            </div>
                            <div className="tl-card">
                                <div className="tl-card-top">
                                    <div>
                                        <h3 className="tl-company">{e.company}</h3>
                                        <p className="tl-role">{e.role}</p>
                                    </div>
                                    <span className={`tl-tag ${e.tagClass}`}>{e.tag}</span>
                                </div>
                                <p className="tl-desc">{e.desc}</p>
                                {e.highlight && (
                                    <div className="tl-highlight">{e.highlight}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Stack ── */}
            <section className="port-section" id="stack">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-eyebrow">03 / Toolkit</span>
                    <h2 className="section-title">Tech Stack</h2>
                </div>
                <div className="stack-grid">
                    {stack.map((s, i) => (
                        <div className="stack-card" key={i} data-aos="fade-up" data-aos-delay={i * 70}>
                            <span className="stack-label">{s.label}</span>
                            <div className="stack-pills">
                                {s.items.map((item, j) => (
                                    <span className="stack-pill" key={j}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── About ── */}
            <section className="port-section port-alt" id="about-blk">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-eyebrow">04 / About</span>
                    <h2 className="section-title">Who I Am</h2>
                </div>
                <div className="about-grid">
                    <div data-aos="fade-right" data-aos-delay="100">
                        <h3 className="about-sub">A Tech Enthusiast with a Passion for Innovation</h3>
                        <p className="about-p">
                            I blend creativity with technical expertise to develop solutions that are not just
                            functional but transformative. With experience in ML basics, full-stack development,
                            UI/UX design, and mobile application development, I offer a comprehensive skill set
                            to tackle diverse technological challenges.
                        </p>
                        <p className="about-p">
                            My approach is driven by a deep understanding of user needs, business objectives,
                            and technological possibilities — crafting solutions that are aesthetically pleasing
                            and deliver exceptional performance.
                        </p>
                    </div>
                    <div className="about-tags-wrap" data-aos="fade-left" data-aos-delay="200">
                        {['Java', 'HTML5', 'CSS3', 'JavaScript', 'Node.js', 'React.js', 'Python', 'Figma', 'MongoDB', 'Express.js'].map((t, i) => (
                            <span className="about-tag" key={i}>{t}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Projects ── */}
            <section className="port-section" id="projects">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-eyebrow">05 / Work</span>
                    <h2 className="section-title">Featured Projects</h2>
                </div>
                <div className="proj-grid">
                    {projects.map((p, i) => (
                        <div className="proj-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                            <div className="proj-img-wrap">
                                <img src={p.img} alt={p.alt} className="proj-img" />
                                <div className="proj-overlay">
                                    <span className="proj-num-big">{p.num}</span>
                                </div>
                            </div>
                            <div className="proj-body">
                                <h3 className="proj-title">{p.title}</h3>
                                <p className="proj-desc">{p.desc}</p>
                                <div className="proj-tags">
                                    {p.tags.map((t, j) => <span key={j}>{t}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="proj-more" data-aos="fade-up" data-aos-delay="200">
                    <button
                        className="btn-ghost"
                        onClick={() => window.open('https://github.com/Disu2004?tab=repositories', '_blank')}
                    >
                        View all on GitHub &nbsp;→
                    </button>
                </div>
            </section>

            {/* ── Contact ── */}
            <section className="port-section port-alt" id="contact">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-eyebrow">06 / Let's Talk</span>
                    <h2 className="section-title">Get In Touch</h2>
                </div>
                <div className="contact-grid">
                    <div className="contact-left" data-aos="fade-right" data-aos-delay="100">
                        <p className="contact-lead">
                            Open to freelance projects, full-time roles, and interesting collaborations.
                            Let's build something great together.
                        </p>
                        <div className="contact-items">
                            <a href="mailto:dishantu2004@gmail.com" className="contact-item">
                                <span className="ci-ico">✉</span>
                                <span>dishantu2004@gmail.com</span>
                            </a>
                            <a href="tel:+919327149074" className="contact-item">
                                <span className="ci-ico">☎</span>
                                <span>+91 93271 49074</span>
                            </a>
                            <div className="contact-item">
                                <span className="ci-ico">📍</span>
                                <span>Veraval, Gujarat, India</span>
                            </div>
                        </div>
                        <div className="socials">
                            <a href="https://github.com/Disu2004" target="_blank" rel="noreferrer" className="social-ico"><i className="fab fa-github" /></a>
                            <a href="https://www.linkedin.com/in/dishant-upadhyay-857425269" target="_blank" rel="noreferrer" className="social-ico"><i className="fab fa-linkedin" /></a>
                            <a href="https://www.instagram.com/dish_ant2004/" target="_blank" rel="noreferrer" className="social-ico"><i className="fab fa-instagram" /></a>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="contact-form" data-aos="fade-left" data-aos-delay="200">
                        <div className="form-row">
                            <div className="form-field">
                                <label>Name</label>
                                <input type="text" name="user_name" placeholder="Your name" required />
                            </div>
                            <div className="form-field">
                                <label>Email</label>
                                <input type="email" name="user_email" placeholder="your@email.com" required />
                            </div>
                        </div>
                        <div className="form-field">
                            <label>Message</label>
                            <textarea name="message" rows="5" placeholder="Tell me about your project..." required />
                        </div>
                        <button type="submit" className="btn-primary btn-send" disabled={sending}>
                            {sending ? <><span className="btn-spinner" />Sending...</> : 'Send Message →'}
                        </button>
                    </form>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className="port-footer">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <p className="footer-logo">Dishant<span>.</span></p>
                        <p className="footer-tagline">Turning ideas into real-world digital experiences.</p>
                    </div>
                    <div className="footer-col">
                        <p className="footer-col-head">Navigation</p>
                        <a href="/">Home</a>
                        <a href="#experience">Experience</a>
                        <a href="#education">Education</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="footer-col">
                        <p className="footer-col-head">Social</p>
                        <a href="https://github.com/Disu2004" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/dishant-upadhyay-857425269" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://www.instagram.com/dish_ant2004/" target="_blank" rel="noreferrer">Instagram</a>
                    </div>
                    <div className="footer-col">
                        <p className="footer-col-head">Contact</p>
                        <span>dishantu2004@gmail.com</span>
                        <span>+91 93271 49074</span>
                        <span>Veraval, Gujarat</span>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Dishant Upadhyay · All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}