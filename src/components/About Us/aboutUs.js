import React from 'react'
import myImage from '../../images/Aman_Image.jpg';
import './aboutUs.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const aboutUs = () => {

    Aos.init({
    duration : 1000,
    offset : 150});
    return (
        <div id = "About">
            <div className = "aboutContainer">
                <h1 className = "aboutUS" data-aos="flip-left">About Us</h1>

                <div className = "rowContainer">
                    <div className = "colFourContainer">
                          <img src = {myImage} className = "imgContainer" alt = "portfolioImage" data-aos = "flip-up"/>

                          <h2 className = "nameStyle" 
                          data-aos="fade-up"
                          data-aos-anchor-placement="bottom-bottom">Aman</h2>
                    </div>

                    <div className = "colEightContainer">
                           <p className = "IntroParagraph"
                           data-aos="fade-right"
                           data-aos-offset="300"
                           data-aos-easing="ease-in-sine">Hello! Aman this side, I have completed my Bachelor of Technology from Guru Tegh Bahadur Institute of Technology with good aggregate up to 86.77%. I'm <strong>Frontend</strong> and <strong>Data Structure</strong> Enthusiast and Beginner in <strong>Competitive Coding</strong>. I have 3 month of
                           experience as a <strong>Full Stack Web Developer</strong> at <strong>Supercharge</strong> and currently working in <strong>Hughes Systique Corporation</strong> as a <strong>Associate Software Engineer</strong>. </p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default aboutUs
