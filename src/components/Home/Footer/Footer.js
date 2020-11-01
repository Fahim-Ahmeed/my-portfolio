import React from 'react';
import "./Footer.css";
import { FaLinkedin,FaFacebook,FaGithub,FaInstagram} from 'react-icons/fa';

const Footer = () => {
    return (
      <div className="row footer">
       <div className="mx-auto">
          
       <a
                    href="https://www.linkedin.com/in/fahim-ahmed-a7978a1b1/"
                    className="linkedin social"
                >
                  < FaLinkedin size="30"/>
                </a>
                <a
                    href="https://github.com/Fahim-Ahmeed"
                    className="github social"
                >
                < FaGithub size="30"/>
                </a>
                <a href="https://www.facebook.com/fahimsahriar.fahad.leo.messi10/" className="facebook social">
                < FaFacebook size="30"/>
                </a>
                <a
                    href="https://www.instagram.com/fahim_sahriar_fahad/?hl=en"
                    className="instagram social"
                >
                    < FaInstagram size="30"/>
                </a>
               <footer> <small>&copy; Fahim Ahmed {new Date().getFullYear()} | All Right Reserved</small></footer>
       </div>
      </div>
       
    );
};

export default Footer;