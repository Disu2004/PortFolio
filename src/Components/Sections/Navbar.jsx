import React, { useState, useEffect } from 'react';

export const navLinks = ['Experience', 'Education', 'Stack', 'Projects', 'Contact'];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(() =>
        localStorage.getItem('du-theme') || 'dark'
    );

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('du-theme', theme);
    }, [theme]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 48);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

    return (
        <nav className={`du-nav ${scrolled ? 'du-nav--scrolled' : ''}`}>
            <div className="du-nav__inner">
                <a href="#home" className="du-nav__logo">
                    DU<span className="du-nav__dot">.</span>
                </a>

                <ul className={`du-nav__links ${menuOpen ? 'du-nav__links--open' : ''}`}>
                    {navLinks.map(n => (
                        <li key={n}>
                            <a href={`#${n.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                                {n}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="du-nav__right">
                    <button
                        className="du-theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? '☀' : '☾'}
                    </button>
                    <a href="/Dishant_Upadhyay_Resume.pdf" download className="du-nav__resume">
                        Resume ↓
                    </a>
                    <button
                        className={`du-burger ${menuOpen ? 'du-burger--open' : ''}`}
                        onClick={() => setMenuOpen(v => !v)}
                        aria-label="Toggle menu"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </div>
        </nav>
    );
}
