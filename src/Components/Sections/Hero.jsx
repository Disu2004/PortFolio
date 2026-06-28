import React from 'react';
import profileImage from '../../assets/image.png';

export default function Hero() {
    return (
        <section className="du-hero" id="home">
            <div className="du-hero__left">
                <div className="du-avail" data-aos="fade-down">
                    <span className="du-avail__dot" />
                    Available for opportunities
                </div>

                <h1 className="du-hero__name" data-aos="fade-up" data-aos-delay="80">
                    Dishant<br />
                    <span className="du-hero__name--accent">Upadhyay</span>
                </h1>

                <p className="du-hero__roles" data-aos="fade-up" data-aos-delay="160">
                    Software Engineer &nbsp;·&nbsp; Full-Stack Developer &nbsp;·&nbsp; UI/UX Designer
                </p>

                <p className="du-hero__bio" data-aos="fade-up" data-aos-delay="220">
                    I craft digital experiences that are fast, elegant, and impactful —
                    from pixel-perfect interfaces to robust backend systems.
                </p>

                <div className="du-hero__stats" data-aos="fade-up" data-aos-delay="280">
                    <div className="du-hero__stat">
                        <span className="du-hero__stat-num">8.93</span>
                        <span className="du-hero__stat-label">CGPA</span>
                    </div>
                    <div className="du-stat-divider" />
                  
                    <div className="du-stat-divider" />
                    <div className="du-hero__stat">
                        <span className="du-hero__stat-num">4+</span>
                        <span className="du-hero__stat-label">Projects</span>
                    </div>
                </div>

                <div className="du-hero__cta" data-aos="fade-up" data-aos-delay="340">
                    <a href="#contact" className="du-btn du-btn--primary">Get in touch</a>
                    <a href="/Dishant_Upadhyay_Resume.pdf" download className="du-btn du-btn--outline">
                        Download CV
                    </a>
                </div>
            </div>

            <div className="du-hero__right" data-aos="fade-left" data-aos-delay="100">
                <div className="du-hero__img-wrap">
                    <div className="du-hero__img-ring" />
                    <img src={profileImage} alt="Dishant Upadhyay" className="du-hero__img" />
                    <div className="du-hero__badge du-hero__badge--tl">
                        <span className="du-hero__badge-icon">⚡</span>
                        <span>Full-Stack</span>
                    </div>
                    <div className="du-hero__badge du-hero__badge--br">
                        <span className="du-hero__badge-icon">🎓</span>
                        <span>First Class</span>
                    </div>
                </div>
            </div>

            <div className="du-hero__scroll">
                <span>scroll</span>
                <span className="du-hero__scroll-line" />
            </div>
        </section>
    );
}
