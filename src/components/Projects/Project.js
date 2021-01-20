import React from "react";
import RHImage from "../../images/blood_donation.jpg";
import FarmerImage from "../../images/Farmer-website.jpg";
import SweetImage from "../../images/sweet-shop-image.jpg";
import AutomationImage from "../../images/Automation-Testing.jpg";
import BlogWebsite from "../../images/BlogWebsite.jpg";
import "./Project.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = () => {
  Aos.init({ duration: 1000, offset: 150 });

  return (
    <div id="Projects">
      <div className="ProjectContainer">
        <h1 className="projectName" data-aos="zoom-in" data-aos-offset="50">
          Projects
        </h1>
        <div className="rowProject">
          <div
            className="col-4-Project"
            data-aos="fade-up-left"
            data-aos-offset="50"
          >
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <img src={RHImage} className="rhImage" alt="imageRh" />
                </div>

                <div class="flip-box-back">
                  <div>
                  <h2>RH+</h2>
                  <p>This Project help for needy person who want to blood and minimum cost of time.</p>
                  <div className = "LinksOfProject">
                  <a href="https://rhpositive.herokuapp.com/" >
                    view
                </a>
                </div>
                </div>
                </div>
               </div>
             </div>
          </div>
          <div
            className="col-4-Project"
            data-aos="zoom-in"
            data-aos-offset="50"
          >
              <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                <img src={FarmerImage} className="farmerImage" alt="imageKrishi"/>
                </div>

                <div class="flip-box-back">
                  <div>
                  <h2>KrishiUdhaan</h2>
                  <p>This Project based on farming culture, This project help to remove intermediators and farmer sell his/her crop
                    at actual money.
                  </p>
                  <div className = "LinksOfProject">
                  <a href="https://x-genius.github.io/KrishiUdhaan/">
                     view
                 </a> 
                </div>
                </div>
                </div>
               </div>
             </div>
          </div>
          <div
            className="col-4-Project"
            data-aos="fade-up-left"
            data-aos-offset="50"
          >
              <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                <img src={SweetImage} className="sweetImage" alt="imageSweet" />
                </div>

                <div class="flip-box-back">
                  <div>
                  <h2>My Sweet Shop</h2>
                  <p>This project provide simple and decent sweet shop look.
                  </p>
                  <div className = "LinksOfProject">
                  <a href="https://x-genius.github.io/sweet/">
                   view
                 </a> 
                </div>
                </div>
                </div>
               </div>
             </div>


          </div>
          <div
            className="col-4-Project"
            data-aos="zoom-in"
            data-aos-offset="50"
          >
             <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                <img
                src={AutomationImage}
                className="automationImage"
                alt="imageAuto"
              />
                </div>

                <div class="flip-box-back">
                  <div>
                  <h2>Automation Projects</h2>
                  <p>Provide github Link , In this Link three automation project available. These automation projects are
                    Automailer , Automated Piano , youtube to mp3 converter.
                    
                  </p>
                  <div className = "LinksOfProject">
                  <a href="https://github.com/X-genius?tab=repositories">
                    view
                 </a>
                </div>
                </div>
                </div>
               </div>
             </div>
             </div>

             <div
            className="col-4-Project"
            data-aos="zoom-in"
            data-aos-offset="50"
          >
             <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                <img
                src={BlogWebsite}
                className="BlogImage"
                alt="imageAuto"
              />
                </div>

                <div class="flip-box-back">
                  <div>
                  <h2>Blog Website</h2>
                  <p>This website based on mern stack, This website provide interface for the blogger to write his/her blog.
                  </p>
                  <div className = "LinksOfProject">
                  <a href="https://github.com/X-genius/FullStackBloggingWebsite">
                    view
                 </a>
                </div>
                </div>
                </div>
               </div>
             </div>
             </div>

      </div>
    </div>
    </div>
  );
};

export default Project;
