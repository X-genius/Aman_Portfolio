import React from 'react';
import ProgressBar from "./progressBar";
import Aos from 'aos';
import 'aos/dist/aos.css';
import './progressBar.css';

const Skill = () => {

    Aos.init({duration : 1000});

    return (
        <div className = "progressContainer" id = "skills">
            <div data-aos = "zoom-in">
            <h1 className = "skillName">Skills</h1>
            </div>

        <div data-aos = "fade-up-right">
        <h2 className = "LanguageName">Html</h2>
        <div className = "progressBar">
            <ProgressBar bgColor={"#00695c"} completed={95}/>
        </div>
        </div>

        <div data-aos = "fade-up-left">
        <h2 className = "LanguageName">CSS</h2>
        <div className = "progressBar">
            <ProgressBar bgColor={"#123def"} completed={90}/>
        </div>
        </div>

        <div data-aos = "fade-up-left">
        <h2 className = "LanguageName">Bootstrap</h2>
        <div className = "progressBar">
            <ProgressBar bgColor={"#6a1b9a"} completed={100}/>
        </div>
        </div>


        <div data-aos = "fade-up-left">
        <h2 className = "LanguageName">Javascript</h2>
        <div className = "progressBar">
            <ProgressBar bgColor={"#fed123"} completed={95}/>
        </div>
        </div>

        <div data-aos = "fade-up-left">
        <h2 className = "LanguageName">Typescript</h2>
        <div className = "progressBar">
            <ProgressBar bgColor={"green"} completed={95}/>
        </div>
        </div>

        <div data-aos = "zoom-in">
        <h2 className = "LanguageName">React</h2>
        <div className = "progressBar">
            <ProgressBar bgColor={"#612abc"} completed={90}/>
        </div>
        </div>

        <div data-aos = "fade-up-left">
        <h2 className = "LanguageName">Material UI</h2>
        <div className = "progressBar">
            <ProgressBar bgColor={"#00695c"} completed={85}/>
        </div>
        </div>


        <div data-aos = "zoom-in">
        <h2 className = "LanguageName">Jest / React Testing Library</h2>
        <div className = "progressBar">
            <ProgressBar bgColor={"#123def"} completed={80}/>
        </div>
        </div>

        <div data-aos = "zoom-out">
        <h2 className = "LanguageName">Version Control (Github, Gitlab, ClearCase)</h2>
        <div className = "progressBar">
            <ProgressBar bgColor={"#6a1b9a"} completed={95}/>
        </div>
        </div>

        </div>
    )
}

export default Skill
