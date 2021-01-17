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
                           data-aos-easing="ease-in-sine">Hello! Aman this side, I'm frontend enthusiastic as well as java Developer.
                           I'm pursuing Bachelor of Technology from Guru tegh bahadur institute of technology. I'm working on some technology stuffs
                           like <strong>Html , CSS , Bootstrap , Reactjs , Java</strong> and also improving score card in Data Structures working on some 
                           platforms like <strong>Leetcode , GeeksForGeeks.</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutUs
