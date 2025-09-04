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
            <p>
                Lulusan S1 Teknik Informatika dari Universitas Mikroskil dengan pengalaman di bidang analisis data, administrasi, pengolahan data dengan ketelitian yang tinggi, inventaris logistik. Selain itu, saya juga memiliki kemampuan UI/UX Pemula serta penguasaan beberapa bahasa pemrograman. Saya suka menyelesaikan pekerjaan dengan detail dan akurat serta menyelesaikannya dengan cepat dan tepat. Kombinasi pengalaman administrative dan keterampilan teknis serta kecepatan saya dalam bekerja menjadikan saya lebih fleksibel dalam berbagai pekerjaan, baik yang bersifat manajerial maupun berbasi teknologi
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
