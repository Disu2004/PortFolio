import React from 'react';

const education = [
    {
        period: '2022 — 2026',
        company: 'Marwadi University',
        role: 'B.Tech — Computer Engineering',
        tag: 'Degree',
        tagClass: 'tag-rose',
        highlight: 'CGPA 8.93 / 10.0  ·  First Class Distinction',
        desc: 'Specialisation in full-stack development, machine learning fundamentals, and software design.',
        accent: '#f43f5e',
    },
    {
        period: '2019 — 2021',
        company: 'Govt. Boys High School, Veraval',
        role: 'HSC — Science Stream',
        tag: 'HSC',
        tagClass: 'tag-orange',
        highlight: '77%  ·  GSEB',
        desc: 'Physics, Chemistry and Mathematics as core subjects.',
        accent: '#f97316',
    },
    {
        period: 'Until 2019',
        company: 'Maniben Kotak High School',
        role: 'SSC — Secondary School',
        tag: 'SSC',
        tagClass: 'tag-slate',
        highlight: '75%  ·  GSEB',
        desc: 'Strong academic foundation in core secondary subjects.',
        accent: '#64748b',
    },
];

export default function Education() {
    return (
        <section className="du-section" id="education">
            <div className="du-section__head" data-aos="fade-up">
                <span className="du-eyebrow">Academic Background</span>
                <h2 className="du-section__title">Education</h2>
            </div>

            <div className="du-edu-list glass-panel">
                {education.map((e, i) => (
                    <div
                        className="du-edu-row"
                        key={i}
                        data-aos="fade-up"
                        data-aos-delay={i * 80}
                    >
                        <div className="du-edu-row__marker" style={{ background: e.accent }} />
                        <div className="du-edu-row__body">
                            <div className="du-edu-row__top">
                                <div>
                                    <h3 className="du-edu-row__school">{e.company}</h3>
                                    <p className="du-edu-row__role">{e.role}</p>
                                </div>
                                <div className="du-edu-row__right">
                                    <span className={`du-tag ${e.tagClass}`}>{e.tag}</span>
                                    <span className="du-edu-row__period">{e.period}</span>
                                </div>
                            </div>
                            {e.highlight && (
                                <div className="du-edu-row__highlight" style={{ borderColor: e.accent + '44', color: e.accent }}>
                                    {e.highlight}
                                </div>
                            )}
                            <p className="du-edu-row__desc">{e.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
