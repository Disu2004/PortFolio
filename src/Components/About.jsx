import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CSS/about.css';

import Navbar from './Sections/Navbar';
import Hero from './Sections/Hero';
import Experience from './Sections/Experience';
import Education from './Sections/Education';
import Stack from './Sections/Stack';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';

export default function About() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true, offset: 100, easing: 'ease-out-quart' });
    }, []);

    return (
        <div className="du-root">
            <Navbar />
            <Hero />
            <Experience />
            <Education />
            <Stack />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}