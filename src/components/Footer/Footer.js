import React from 'react'
import {FaFacebookSquare , FaGithub , FaLinkedinIn , FaInstagram} from 'react-icons/fa';
import styled from 'styled-components';
import './Footer.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


const FaFacebook = styled(FaFacebookSquare)`
color : #fff;
height : 50px;
width : 50px;
padding : 0px 5px 0px 5px;
margin: 0px 10px;
cursor : pointer;
    
    &:hover
    {
      color: #000000;
      background: #3cdce7;
      transform: scale(0.9);
      transition: 0.4s ease-out;
    }
`;

const FaLinkedin = styled(FaLinkedinIn)`
color : #fff;
height : 50px;
width : 50px;
padding : 0px 5px 0px 5px;
margin: 0px 10px;

&:hover
    {
      color: #000000;
      background: #3cdce7;
      transform: scale(0.9);
      transition: 0.4s ease-out;
    }

`;

const FaGit = styled(FaGithub)`
color : #fff;
height : 50px;
width : 50px;
padding : 0px 5px 0px 5px;
margin: 0px 10px;

&:hover
    {
      color: #000000;
      background: #3cdce7;
      transform: scale(0.9);
      transition: 0.4s ease-out;
    }

`;

const FaInsta = styled(FaInstagram)`
color : #fff;
height : 50px;
width : 50px;
padding : 0px 5px 0px 5px;
margin: 0px 10px;

&:hover
    {
      color: #000000;
      background: #3cdce7;
      transform: scale(0.9);
      transition: 0.4s ease-out;
    }

`;
const Footer = () => {

    Aos.init({
      offset : 150,
      duration: 1000
    });

    return (
        <>
                <div className = "FooterContainer" id = "footer" >

                        <div className = "Favicon">
                        <div data-aos="zoom-in-right" data-aos-delay="300" data-aos-offset = "50">
                        <a href = "https://www.facebook.com/aman.baghel.3" >
                          <FaFacebook/>
                        </a></div>

                        <div data-aos = "fade-up" data-aos-delay="300" data-aos-offset = "50">
                        <a href = "https://www.linkedin.com/in/aman-baghel-56467518b/">      
                             <FaLinkedin /> </a></div>

                        <div data-aos = "fade-down" data-aos-delay="600" data-aos-offset = "50">
                        <a href = "https://github.com/X-genius" >      
                             <FaGit/> </a></div>


                          <div data-aos = "zoom-in-left" data-aos-delay="300" data-aos-offset = "50">
                             <a href = "https://www.instagram.com/amanbaghel255/">      
                             <FaInsta/> </a></div>
                        </div>

                        <h3 className = "FooterMention">Aman <span className = "copyright">&#169;2021</span></h3>
                </div>
        </>
    )
}

export default Footer
