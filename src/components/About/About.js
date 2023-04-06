import React, { useState } from 'react';
import myImage4 from '../../image/myImage4.jpeg';
import Header from '../Home/Header/Header';
import Typical from 'react-typical'
import './About.css';
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import Webskills from './WebSkills/Webskills';
import Education from './Education/Education';
import Personalinfo from './Personalinfo/Personalinfo';

const About = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <section className="about">
            <Header></Header>
            <div className="row w-75 offset-1 ">
                <div className="col-md-6 col-sm-12">
                    <h2><span className="hi">Let me introduce...</span><br />
                        <span>I am </span>
                        <span >Fahim Ahmed</span></h2>
                    <h3 className="profession">
                        <Typical
                            steps={['Creative', 1000, 'Confident', 1000, 'Hard worker', 1500]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </h3>
                    <p >
                        <Typical
                            steps={[' Passionate, proficient, and hard-working web developer. Strong knowledge in responsive design with HTML5, CSS3, flexbox, Bootstrap, ES6 JavaScript. I also have solid knowledge working with React, React Router, Node Js, Express js, MongoDB, Firebase, Heroku. committed to make a difference.', 2000]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </p>
                    <h6>You can follow me there</h6>
                    <a
                        href="https://www.linkedin.com/in/fahim-ahmed-a7978a1b1/"
                        className="linkedin social"
                    >
                        < FaLinkedin size="30" />
                    </a>
                    <a
                        href="https://github.com/Fahim-Ahmeed"
                        className="github social"
                    >
                        < FaGithub size="30" />
                    </a>
                    <a href="https://www.facebook.com/fahimsahriar.fahad.leo.messi10/" className="facebook social">
                        < FaFacebook size="30" />
                    </a>
                    <a
                        href="https://www.instagram.com/fahim_sahriar_fahad/?hl=en"
                        className="instagram social"
                    >
                        < FaInstagram size="30" />
                    </a>
                </div>
                <div className="col-md-5 col-sm-12 offset-1" ><img src={myImage4} id='image4' alt="fahim ahmed" className="img-fluid main-img" />
                </div>
            </div>
        
                <section className="row justify-content-center description">
                    <Webskills></Webskills>
                    <Education></Education>
                    <Personalinfo></Personalinfo>
                    <footer> <small>&copy; Fahim Ahmed {new Date().getFullYear()} | All Right Reserved</small></footer>
                </section>
            
        </section>
    );
};

export default About;