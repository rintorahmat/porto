import React from 'react';
import { FaBriefcase, FaProjectDiagram } from 'react-icons/fa';
import './Experience.css';
import Navbar from './Navbar';

function Experience() {
  return (
    <div className="experience-container">
        <Navbar />
        <div className="experience-section">
            <h2 className="section-title">
            <FaBriefcase className="section-icon" /> Work Experience
            </h2>
            <ul className="experience-list">
            <li>
                <strong>Not Work Experience</strong>
            </li>
            </ul>
        </div>
        <div className="experience-section">
            <h2 className="section-title">
            <FaProjectDiagram className="section-icon" /> Project Experience
            </h2>
            <ul className="experience-list">
            <li>
                <strong>UI/ UX Design</strong> - <em>Group Project</em><br />
                <span>Description:</span> Built a functional prototype for an e-commerce platform, including product listings, search, and checkout features.
                <div>Tahun: 2023</div>
            </li>
            <li>
                <strong>UI/ UX Design</strong> - <em>personal Portfolio</em><br />
                <span>Description:</span> Built a functional prototype for an e-commerce platform, including product listings, search, and checkout features.
                <div>Tahun: 2024</div>
            </li>
            <li>
                <strong>Application C# Developed</strong> - <em>Personal Portfolio</em><br />
                <span>Description:</span> Create a desktop-based sales application using the C# language and utilizing the mySQl database function to store data
                <div>Tahun: 2023</div>
            </li>
            <li>
                <strong>Sentiment Analysis Application in Python</strong> - <em>Personal Thesis</em><br />
                <span>Description:</span> Create a website application to conduct review sentiment analysis using python, htmls, javascript and css
                <div>Tahun: 2024</div>
            </li>
            <li>
                <strong>Cashier Application in C Language</strong> - <em>Personal Portfolio</em><br />
                <span>Description:</span> Create a cashier application using the C programming language in its development
                <div>Tahun: 2024 2023</div>
            </li>
            </ul>
        </div>
    </div>
  );
}

export default Experience;
