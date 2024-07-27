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
                           data-aos-easing="ease-in-sine">I'm Aman and I have completed my Bachelor of Technology from Guru Tegh Bahadur Institute of Technology with a commendable CGPA of <strong>9.32</strong>. I am passionate about <strong>Frontend Development</strong> with over <strong>3 years and 2 months of experience</strong> as a <strong>Software Engineer</strong>, I am currently employed at <strong>Blue Yonder</strong> in the role of <strong>Software Engineer</strong>. </p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default aboutUs
