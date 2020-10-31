import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Typical from 'react-typical'
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import creative1 from "./image/creative1.png";
import creative2 from "./image/creative2.png";
import creative3 from "./image/creative3.png";
import creative4 from "./image/creative4.png";
import creative5 from "./image/creative5.png";
import './CreativeAgency.css';
import { Button } from 'react-bootstrap';

const CreativeAgency = () => {
  return (
    <section className='some-works text-center py-5 mb-5'>
      <h1 className='someWorks-title py-5'> <Typical
                            steps={['Creative Agency', 1000,' ',1000]}
                            loop={Infinity}
                            wrapper="p"
                        /></h1>
      <h4>A full-stack project for people's needs  <br/>where people can get
        technical services,and they can give their feedback .</h4>
      <OwlCarousel className='owl-theme mt-5'
        loop
        autoplay
        autoplayTimeout={2000}
        margin={20}
        dots
      >

        <div><img src={creative1} className="cursor-image" alt="" /></div>
        <div><img src={creative2} className="cursor-image" alt="" /></div>
        <div><img src={creative3} className="cursor-image" alt="" /></div>
        <div><img src={creative4} className="cursor-image" alt="" /></div>
        <div><img src={creative5} className="cursor-image" alt="" /></div>
      </OwlCarousel>
      <a href=' https://creative-agency-dhaka.web.app/' target="_blank" rel="noopener noreferrer" download>
        <Button className="message mb-2 mr-2">
          <i className="fas fa-download" />
                            Live Website
                        </Button>
                  
      </a>
      <a href='https://github.com/Fahim-Ahmeed/creative-agency-client' target="_blank" rel="noopener noreferrer" download>
        <Button className="download mb-2 mr-2">
          <i className="fas fa-download" />
                            Github
                        </Button>
                  
      </a>
      <h3>### Technology</h3>
      <div className="text-center">
        <Button className="mb-2 mr-2">React</Button>
        <Button className="mb-2 mr-2">React Router</Button>
        <Button className="mb-2 mr-2">JavaScript</Button>
        <Button className="mb-2 mr-2">Node</Button>
        <Button className="mb-2 mr-2">MongoDB</Button>
        <Button className="mb-2 mr-2">Firebase Authentication</Button>
      </div>
    </section>
  );
};

export default CreativeAgency;