import React, { useEffect, useRef } from 'react';
import './CSS/about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

import profileImage from '../assets/profile.jpg';
import project1 from '../assets/project1.jpeg';
import project2 from '../assets/project2.jpeg';

export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            offset: 220
        });
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_nicinac', 'template_liecrop', form.current, {
                publicKey: 'xxa5TfoomBMBFVawf',
            })
            .then(
                () => {
                    alert('Message sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    alert('Failed to send message. Try again.');
                }
            );
    };

    return (
        <section id="about" className="about-section">
            {/* === Hero Section === */}
            <div className="about-container">
                <div className="about-text" data-aos="fade-right" data-aos-delay="200">
                    <p className="intro-tag typing">Dishant Upadhyay</p>
                    <h1 className="headline" data-aos="flip-left" data-aos-delay="300">
                        I craft <span className="highlight">digital</span> solutions<br />that make an impact
                    </h1>
                    <p className="subtitle" data-aos="fade-left" data-aos-delay="500">
                        Software Engineer • Full-Stack Developer • UI/UX Designer • React Developer
                    </p>
                    <div className="status-badges" data-aos="zoom-in" data-aos-delay="700">
                        <span className="badge green">● Open to Work</span>
                        <span className="badge green">● Available</span>
                    </div>
                    <a
                        href="/Dishant_Upadhyay_Resume.pdf"
                        download
                        className="resume-btn"
                        data-aos="fade-right"
                        data-aos-delay="800"
                    >
                        Download Resume
                    </a>
                </div>

                <img
                    src={profileImage}
                    alt="Dishant Upadhyay"
                    className="profile-pic"
                    data-aos="zoom-in-up"
                    data-aos-delay="400"
                />
            </div>

            {/* === Tech Stack === */}
            <div className="tech-stack-section" data-aos="fade-up">
                <h2 className="tech-title" data-aos="zoom-out" data-aos-delay="100">My Tech Stack</h2>
                <div className="tech-stack">
                    {[
                        { title: "Languages", items: "Java, JavaScript, Python" },
                        { title: "Frontend", items: "React.js, HTML5, CSS3, Bootstrap" },
                        { title: "Backend", items: "Node.js, Express.js" },
                        { title: "Database", items: "MongoDB, MySQL" },
                        { title: "Tools & Platforms", items: "Git, GitHub, Postman, VS Code" },
                    ].map((tech, i) => (
                        <div
                            className="tech-category"
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={300 + i * 150}
                        >
                            <h3>{tech.title}</h3>
                            <p>{tech.items}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* === About Me === */}
            <div className="about-block">
                <h2 className="title" data-aos="flip-up" data-aos-delay="200">
                    About <span className="highlight">Me</span>
                </h2>
                <div className="about-content">
                    <div className="about-left" data-aos="fade-left" data-aos-delay="300">
                        <h3 className="sub-title">A Tech Enthusiast with a Passion for Innovation</h3>
                        <p>
                            I blend creativity with technical expertise to develop solutions that are not just functional but transformative.
                            With basics of ML, full-stack development, UI/UX design, and mobile application development, I offer
                            a comprehensive skill set to tackle diverse technological challenges.
                        </p>
                        <p>
                            My approach is driven by a deep understanding of user needs, business objectives, and technological possibilities.
                            I believe in creating solutions that are not only aesthetically pleasing but also deliver exceptional performance
                            and user experience.
                        </p>
                        <div className="tag-list" data-aos="zoom-in" data-aos-delay="600">
                            {['Java', 'HTML', 'JavaScript', 'Node.js', 'React.js', 'Python', 'Figma'].map((tag, i) => (
                                <span className="badge" key={i} data-aos="fade" data-aos-delay={100 * (i + 1)}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* === Projects === */}
            <div className="projects-section">
                <h2 className="title" data-aos="flip-up">Featured <span className="highlight">Projects</span></h2>
                <div className="project-grid">
                    <div className="project-card" data-aos="flip-left" data-aos-delay="300">
                        <img src={project1} alt="Movie Recommendation" className="project-img" />
                        <h3 className="project-title">Movie Recommendation System</h3>
                        <p className="project-domain">React • Flask • ML</p>
                    </div>
                    <div className="project-card" data-aos="flip-right" data-aos-delay="500">
                        <img src={project2} alt="E-commerce UI" className="project-img" />
                        <h3 className="project-title">E-Commerce UI in Figma</h3>
                        <p className="project-domain">Figma • UI/UX</p>
                    </div>
                </div>

                <div className="view-all-container" data-aos="zoom-in-up" data-aos-delay="700">
                    <button className="view-all-btn" onClick={() => window.location.href = "https://github.com/Disu2004?tab=repositories"}>
                        View All Projects
                    </button>
                </div>
            </div>

            {/* === Contact === */}
            <div className="contact-section">
                <h2 className="title" data-aos="fade-up">Contact <span className="highlight">Me</span></h2>
                <form ref={form} onSubmit={sendEmail} className="contact-form" data-aos="fade-left" data-aos-delay="400">
                    <input type="text" name="user_name" placeholder="Your Name" required />
                    <input type="email" name="user_email" placeholder="Your Email" required />
                    <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                    <button type="submit" className="submit-btn">Send</button>
                </form>
            </div>

            {/* === Footer === */}
            <footer className="footer" data-aos="fade-up" data-aos-delay="200">
                <div className="footer-container">
                    <div className="footer-brand" data-aos="fade-right">
                        <h2 className="footer-name">Dishant Upadhyay</h2>
                        <p className="footer-tagline">Turning ideas into real-world digital experiences.</p>
                    </div>

                    <div className="footer-links" data-aos="zoom-in">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="https://github.com/Disu2004?tab=repositories">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact" data-aos="fade-left">
                        <h4>Contact Info</h4>
                        <p>📍 Veraval, Gujarat</p>
                        <p>📧 dishantu2004@gmail.com</p>
                        <p>🎓 Marwadi University</p>
                        <p>📞 +91 9327149074</p>
                        <div className="footer-socials">
                            <a href="https://github.com/Disu2004" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/dishant-upadhyay-857425269" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/dish_ant2004/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Dishant Upadhyay. All Rights Reserved.</p>
                </div>
            </footer>
        </section>
    );
}
