    import React from 'react';
    import './Home.css';
    import Navbar from './Navbar';
    import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";


    function Home() {
    return (
        <div className="home-container">
        <Navbar />
        <div className="profile-section">
        <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Profile" className="profile-photo" />
            <h2 className="profile-name">RINTO RAHMAT PUTRA LASE</h2>
            <p className="profile-description">Programmer – UI/ UX Design – Analytics </p>

            <div className="social-icons">
                <a href="https://www.instagram.com/rhmt_putraaa/profilecard/?igsh=Y3h2NDZ2YjE1bXZh" className="social-icon"><FaInstagram /></a>
                <a href="https://www.facebook.com/profile.php?id=100028193507207&mibextid=ZbWKwL" className="social-icon"><FaFacebook /></a>
                <a href="https://www.linkedin.com/in/rinto-rahmat-putra-lase-526807228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon"><FaLinkedin /></a>
                <a href="https://wa.me/6282165526837" className="social-icon"><FaWhatsapp  /></a>
            </div>
        </div>
        </div>
    );
    }

    export default Home;