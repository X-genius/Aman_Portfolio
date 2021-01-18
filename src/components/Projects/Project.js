import React from "react";
import RHImage from "../../images/blood_donation.jpg";
import FarmerImage from "../../images/Farmer-website.jpg";
import SweetImage from "../../images/sweet-shop-image.jpg";
import AutomationImage from "../../images/Automation-Testing.jpg";
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
            <a href="https://rhpositive.herokuapp.com/">
              <img src={RHImage} className="rhImage" alt="imageRh" />
            </a>
          </div>
          <div
            className="col-4-Project"
            data-aos="zoom-in"
            data-aos-offset="50"
          >
            <a href="https://x-genius.github.io/KrishiUdhaan/">
              <img
                src={FarmerImage}
                className="farmerImage"
                alt="imageKrishi"
              />
            </a>
          </div>
          <div
            className="col-4-Project"
            data-aos="fade-up-left"
            data-aos-offset="50"
          >
            <a href="https://x-genius.github.io/sweet/">
              <img src={SweetImage} className="sweetImage" alt="imageSweet" />
            </a>
          </div>
          <div
            className="col-4-Project"
            data-aos="zoom-in"
            data-aos-offset="50"
          >
            <a href="https://github.com/X-genius?tab=repositories">
              <img
                src={AutomationImage}
                className="automationImage"
                alt="imageAuto"
              />
            </a>
          </div>
        </div>
        {/* 
                <div className = "rowProject">
                    <div className = "col-12-Project" data-aos = "zoom-in" data-aos-offset = "50">
                    <a href = "https://github.com/X-genius?tab=repositories">
                            <img src = {AutomationImage} className = "automationImage" alt = "imageAuto"/>
                        </a>
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default Project;
