import React from 'react';

const stackCategories = [
    {
        title: 'Frontend',
        skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
        title: 'Backend & Database',
        skills: ['Node.js', 'Express.js', 'Python', 'Java', 'MongoDB', 'MySQL']
    },
    {
        title: 'Frameworks & Tools',
        skills: ['Frappe Framework', 'Git', 'GitHub', 'Postman', 'Figma', 'VS Code']
    },
    {
        title: 'Cloud',
        skills: ['CloudStack', 'AWS Basics']
    }
];

export default function Stack() {
    return (
        <section className="du-section du-section--alt" id="stack">
            <div className="du-section__head" data-aos="fade-up">
                <span className="du-eyebrow">Toolkit</span>
                <h2 className="du-section__title">Tech Stack</h2>
            </div>

            <div className="du-stack-wrap">
                {stackCategories.map((category, idx) => (
                    <div className="du-stack-category" key={idx} data-aos="fade-up" data-aos-delay={80 + (idx * 40)}>
                        <h3 className="du-stack-category__title">{category.title}</h3>
                        <div className="du-stack-cloud">
                            {category.skills.map((item, i) => (
                                <span className="du-stack-pill glass-panel" key={i}>{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
