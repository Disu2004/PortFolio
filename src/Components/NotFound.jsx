import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CSS/about.css'; // Reuses your global theme

export default function NotFound() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }, []);

    return (
        <section className="about-section">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    justifyContent: 'center',
                    height: '80vh',
                    color: '#ffffff'
                }}
            >
                <h1
                    data-aos="zoom-in"
                    style={{
                        fontSize: '6rem',
                        color: '#00ffc8',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                    }}
                >
                    404
                </h1>
                <h2 data-aos="fade-up" data-aos-delay="300" style={{ fontSize: '2rem', marginBottom: '10px' }}>
                    Page Not Found
                </h2>
                <p
                    data-aos="fade-up"
                    data-aos-delay="500"
                    style={{ fontSize: '1rem', color: '#bbb', maxWidth: '500px', marginBottom: '30px' }}
                >
                    The page you’re looking for doesn’t exist or has been moved.
                </p>
                <a
                    href="/"
                    className="resume-btn"
                    data-aos="zoom-in-up"
                    data-aos-delay="700"
                >
                    Back to Home
                </a>
            </div>
        </section>
    );
}
