import React from 'react';

const projects = [
    {
        img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&q=80',
        title: 'PlaceSmart',
        subtitle: 'Placement Preparation Platform',
        desc: 'Comprehensive placement prep with curated DSA problems, aptitude tests, mock interviews, and company-specific roadmaps.',
        tags: ['React', 'Node.js', 'MongoDB', 'Express'],
        num: '01',
        link: 'https://github.com/Disu2004',
    },
    {
        img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900&q=80',
        title: 'Movie Recommender',
        subtitle: 'ML-Powered Discovery Engine',
        desc: 'Collaborative filtering recommendation engine with an interactive React frontend for personalised movie discovery.',
        tags: ['React', 'Flask', 'Python', 'ML'],
        num: '02',
        link: 'https://github.com/Disu2004',
    },
    {
        img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80',
        title: 'MyStocks',
        subtitle: 'Stock Market Tracker',
        desc: 'Full CRUD stock app with live price simulation, portfolio tracking, and watchlist management.',
        tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
        num: '03',
        link: 'https://github.com/Disu2004',
    },
    {
        img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=900&q=80',
        title: 'GSRTC UI Clone',
        subtitle: 'Figma Redesign',
        desc: 'Full UI/UX overhaul of the Gujarat GSRTC bus booking portal, modernising the entire user journey and visual system.',
        tags: ['Figma', 'UI/UX', 'Prototyping'],
        num: '04',
        link: 'https://github.com/Disu2004',
    },
];

export default function Projects() {
    return (
        <section className="du-section" id="projects">
            <div className="du-section__head" data-aos="fade-up">
                <span className="du-eyebrow">Featured Work</span>
                <h2 className="du-section__title">Projects</h2>
            </div>

            <div className="du-proj-list">
                {projects.map((p, i) => (
                    <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="du-proj-row glass-panel"
                        key={i}
                        data-aos="fade-up"
                        data-aos-delay={i * 80}
                    >
                        <div className="du-proj-row__img-wrap">
                            <img src={p.img} alt={p.title} className="du-proj-row__img" />
                            <span className="du-proj-row__num glass-panel">{p.num}</span>
                        </div>
                        <div className="du-proj-row__body">
                            <div className="du-proj-row__head">
                                <div>
                                    <h3 className="du-proj-row__title">{p.title}</h3>
                                    <p className="du-proj-row__subtitle">{p.subtitle}</p>
                                </div>
                                <span className="du-proj-row__arrow">↗</span>
                            </div>
                            <p className="du-proj-row__desc">{p.desc}</p>
                            <div className="du-proj-row__tags">
                                {p.tags.map((t, j) => <span key={j}>{t}</span>)}
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="du-proj-more" data-aos="fade-up">
                <button
                    className="du-btn du-btn--outline"
                    onClick={() => window.open('https://github.com/Disu2004?tab=repositories', '_blank')}
                >
                    View all on GitHub →
                </button>
            </div>
        </section>
    );
}
