import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [toast, setToast] = useState({ show: false, success: true });
    const [sending, setSending] = useState(false);
    const form = useRef();

    const showToast = (success) => {
        setToast({ show: true, success });
        setTimeout(() => setToast({ show: false, success: true }), 4000);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true);
        emailjs.sendForm('service_nicinac', 'template_liecrop', form.current, {
            publicKey: 'xxa5TfoomBMBFVawf',
        })
        .then(() => { showToast(true); form.current.reset(); })
        .catch(err => { console.error(err); showToast(false); })
        .finally(() => setSending(false));
    };

    return (
        <section className="du-section du-section--alt" id="contact">
            {/* ── Toast ── */}
            <div className={`du-toast glass-panel ${toast.show ? 'du-toast--show' : ''} ${toast.success ? '' : 'du-toast--err'}`}>
                <span className="du-toast__icon">{toast.success ? '✓' : '✕'}</span>
                <div>
                    <p className="du-toast__title">{toast.success ? 'Message sent!' : 'Send failed'}</p>
                    <p className="du-toast__sub">{toast.success ? "I'll get back to you soon." : 'Please try again later.'}</p>
                </div>
            </div>

            <div className="du-section__head" data-aos="fade-up">
                <span className="du-eyebrow">Let's Talk</span>
                <h2 className="du-section__title">Get In Touch</h2>
                <p className="du-section__sub">
                    Open to freelance work, full-time roles, and interesting collaborations.
                </p>
            </div>

            <div className="du-contact-wrap">
                <div className="du-contact-info" data-aos="fade-up" data-aos-delay="80">
                    <a href="mailto:dishantu2004@gmail.com" className="du-contact-chip glass-panel">
                        <span className="du-contact-chip__ico">✉</span>
                        dishantu2004@gmail.com
                    </a>
                    <a href="tel:+919327149074" className="du-contact-chip glass-panel">
                        <span className="du-contact-chip__ico">☎</span>
                        +91 93271 49074
                    </a>
                    <span className="du-contact-chip glass-panel">
                        <span className="du-contact-chip__ico">📍</span>
                        Veraval, Gujarat, India
                    </span>
                </div>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="du-contact-form glass-panel"
                    data-aos="fade-up"
                    data-aos-delay="140"
                >
                    <div className="du-form-row">
                        <div className="du-field">
                            <label>Name</label>
                            <input type="text" name="user_name" placeholder="Your name" required />
                        </div>
                        <div className="du-field">
                            <label>Email</label>
                            <input type="email" name="user_email" placeholder="your@email.com" required />
                        </div>
                    </div>
                    <div className="du-field">
                        <label>Message</label>
                        <textarea name="message" rows="5" placeholder="Tell me about your project..." required />
                    </div>
                    <button type="submit" className="du-btn du-btn--primary du-btn--wide" disabled={sending}>
                        {sending ? <><span className="du-spinner" /> Sending…</> : 'Send Message →'}
                    </button>
                </form>

                <div className="du-socials" data-aos="fade-up" data-aos-delay="200">
                    <a href="https://github.com/Disu2004" target="_blank" rel="noreferrer" className="du-social glass-panel">
                        <i className="fab fa-github" />
                    </a>
                    <a href="https://www.linkedin.com/in/dishant-upadhyay-857425269" target="_blank" rel="noreferrer" className="du-social glass-panel">
                        <i className="fab fa-linkedin" />
                    </a>
                    <a href="https://www.instagram.com/dish_ant2004/" target="_blank" rel="noreferrer" className="du-social glass-panel">
                        <i className="fab fa-instagram" />
                    </a>
                </div>
            </div>
        </section>
    );
}
