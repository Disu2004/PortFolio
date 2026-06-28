import React from 'react';

const experience = [
    {
        period: '2024 — Present',
        company: 'STP Web Hosting',
        role: 'Jr. Software Developer',
        tag: 'Current',
        tagClass: 'tag-green',
        desc: 'Building and maintaining full-stack web solutions for clients using React.js, Node.js and Express to deliver production-grade digital products.',
        accent: '#22c55e',
    },
    {
        period: 'Jun 2024 — Jul 2024',
        company: 'HackVeda',
        role: 'Web Development Intern',
        tag: 'Internship',
        tagClass: 'tag-sky',
        desc: '1-month intensive internship focused on frontend and full-stack web development, building real-world projects under mentorship.',
        accent: '#38bdf8',
    },
];

export default function Experience() {
    return (
        <section className="du-section du-section--alt" id="experience">
            <div className="du-section__head" data-aos="fade-up">
                <span className="du-eyebrow">Work Experience</span>
                <h2 className="du-section__title">Where I've Worked</h2>
            </div>

            <div className="du-exp-grid">
                {experience.map((e, i) => (
                    <div
                        className="du-exp-card glass-panel"
                        key={i}
                        data-aos="fade-up"
                        data-aos-delay={i * 100}
                        style={{ '--card-accent': e.accent }}
                    >
                        <div className="du-exp-card__top">
                            <div className="du-exp-card__dot" style={{ background: e.accent }} />
                            <span className={`du-tag ${e.tagClass}`}>{e.tag}</span>
                        </div>
                        <p className="du-exp-card__period">{e.period}</p>
                        <h3 className="du-exp-card__company">{e.company}</h3>
                        <p className="du-exp-card__role">{e.role}</p>
                        <p className="du-exp-card__desc">{e.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
