import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
    const currentTheme = localStorage.getItem('current_theme');
    const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light');

    useEffect(() => {
        localStorage.setItem('current_theme', theme);
    }, [theme]);

    return (
        <div className='gap-provider'>
            <div className='footer-gap'></div>
            <footer className={`footer ${theme}`}>
            <div className={`container ${theme}`}>
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2>About Us</h2>
                        <p>At Eduford, we believe in the power of knowledge sharing and storytelling. Our platform is dedicated to fostering a community of passionate writers and avid readers, where ideas are exchanged, and insights are gained.</p>
                        <div className="contact">
                            <span><i className="fas fa-phone"></i> 123-456-7890</span>
                            <span><i className="fas fa-envelope"></i> info@example.com</span>
                        </div>
                    </div>
                    <div className="footer-section links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section contact-form">
                        <h2>Contact Us</h2>
                        <form>
                            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" />
                            <textarea name="message" className="text-input contact-input" placeholder="Your message"></textarea>
                            <button type="submit" className="btn contact-btn"><i className="fas fa-envelope"></i> Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 Eduford. All rights reserved.
            </div>
        </footer>
        </div>
    );
};

export default Footer;
