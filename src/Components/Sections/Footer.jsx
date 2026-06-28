import React from 'react';
import { navLinks } from './Navbar';

export default function Footer() {
    return (
        <footer className="du-footer">
            <div className="du-footer__inner">
                <div className="du-footer__brand">
                    <span className="du-footer__logo">Dishant<em>.</em></span>
                    <span className="du-footer__tagline">Turning ideas into digital experiences.</span>
                </div>
                <div className="du-footer__links">
                    {navLinks.map(n => (
                        <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>
                    ))}
                </div>
                <p className="du-footer__copy">© {new Date().getFullYear()} Dishant Upadhyay</p>
            </div>
        </footer>
    );
}
