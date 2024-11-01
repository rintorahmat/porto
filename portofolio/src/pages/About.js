import React from 'react';
import './About.css';
import Navbar from './Navbar';
import { FaUniversity } from "react-icons/fa";
import { BsPersonArmsUp } from "react-icons/bs";
import { GiStairsGoal } from "react-icons/gi";
import { GiSkills } from "react-icons/gi";

function About() {
  return (
    <div className="about-container">
        <Navbar />
        <div className="about-section">
            <h2 className="section-title"><BsPersonArmsUp className="section-icon"/>Personal Information</h2>
            <p>Hello! I am Rinto Rahmat Putra Lase, Fresh graduate student of the Informatics Engineering study program at Mikroskil University, with a GPA of 3.53 on a 4.0 scale. I have skills in several programming languages ​​such as HTML, CSS, JavaScript, Python, MySQL, also have skills in the field of Figma application prototyping, Adobe Photoshop editing applications, Microsoft Office operating skills and UI/UX Design. Apart from the skills above, I also have a high dedication to learning and developing, and am ready to contribute positively and professionally to the surrounding environment. I can also easily change and learn new things to support and improve my skills and abilities.
            </p>
        </div>

        <div className="about-section">
        <h2 className="section-title"><FaUniversity className="section-icon" /> Education
            </h2>
            <ul className="education-list">
                <li>
                    <strong>SMK Swasta Pembda Nias</strong> - <em>Computer and Network Engineering</em> <br />
                    <span>Tahun Masuk: 2017</span> | <span>Tahun Tamat: 2020</span>
                </li>
                <li>
                    <strong>Universitas Mikroskil</strong> - <em>Informatics Engineering</em> <br />
                    <span>Tahun Masuk: 2020</span> | <span>Tahun Tamat: 2024</span>
                </li>
            </ul>
        </div>

        <div className="about-section">
            <h2 className="section-title"><GiStairsGoal className="section-icon"/>Final Grades</h2>
            <p>
            My current GPA is 3.53, reflecting my dedication and hard work throughout my studies.
            </p>
        </div>

        <div className="about-section">
            <h2 className="section-title"><GiSkills className="section-icon"/>Skills</h2>
            <ul className="skills-list">
            <li>Programming (JavaScript, Python, C, C#)</li>
            <li>UI/UX Design</li>
            <li>Data Analytics</li>
            <li>React.js</li>
            <li>HTML & CSS</li>
            <li>GIT</li>
            </ul>
        </div>
    </div>
  );
}

export default About;
