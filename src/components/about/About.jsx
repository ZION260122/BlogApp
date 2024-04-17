import React from 'react';
import './About.css';
import Footer from '../footer/Footer';

const About = ({ theme, setTheme }) => {

    const toggle_mode = () => {
        theme === 'light' ? setTheme("dark") : setTheme("light");
    }

    return (
        <div className={`about-eduford-content ${theme}`}>
            <h2>About Eduford</h2>
            <p>At Eduford, we believe in the <span className="emphasis">power of knowledge sharing and storytelling</span>. Our platform is dedicated to fostering a community of passionate writers and avid readers, where ideas are exchanged, and insights are gained.</p>

            <h3>Our Mission</h3>
            <p>Our mission at Eduford is to provide a platform where individuals can express themselves, share their expertise, and inspire others through the art of blogging. We aim to <span className="emphasis">democratize access to knowledge</span> and empower individuals to unleash their creativity and intellect.</p>

            <h3>What We Offer</h3>
            <ul>
                <li><span className="bold">Blogging Platform:</span> We provide a user-friendly blogging platform where writers can create and publish their articles on a wide range of topics, spanning from technology and science to literature and arts.</li>
                <li><span className="bold">Engaging Content:</span> Discover a diverse collection of articles written by experts, enthusiasts, and aspiring writers. From informative tutorials to thought-provoking essays, there's something for everyone at Eduford.</li>
                <li><span className="bold">Community Interaction:</span> Connect with like-minded individuals, engage in meaningful discussions, and build lasting connections within our vibrant community of bloggers and readers.</li>
            </ul>

            <h3>Our Vision</h3>
            <p>Our vision for Eduford is to become the premier destination for knowledge seekers and content creators alike. We envision a world where everyone has the opportunity to learn, grow, and contribute to the collective pool of human knowledge.</p>

            <h3>Join Us Today</h3>
            <p>Whether you're an aspiring writer looking to share your stories or a curious reader eager to explore new ideas, we invite you to join us on this journey of discovery and enlightenment. Together, let's make Eduford the ultimate hub for learning, inspiration, and creativity.</p>
            <Footer />
        </div>
    );
};

export default About;
