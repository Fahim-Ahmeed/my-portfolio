import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import '../CreativeAgency/CreativeAgency.css';
import { Button } from 'react-bootstrap';
import travel1 from './image/travel1.png';
import travel2 from './image/travel2.png';
import travel3 from './image/travel3.png';
import travel4 from './image/travel4.png';

const TravelGuru = () => {
    return (
        <section className='some-works text-center py-5 mb-5'>
            <h1 className='someWorks-title py-5'>Trvel Guru</h1>
            <h4>A full stack volunteer service application for social
                people. <br />where they can get volunteer work according to their
                choice.</h4>
            <OwlCarousel className='owl-theme mt-5'
                loop
                autoplay
                autoplayTimeout={2000}
                margin={20}
                dots
            >
        
                <div><img src={travel1} className="cursor-image" alt="" /></div>
                <div><img src={travel2} className="cursor-image" alt="" /></div>
                <div><img src={travel3} className="cursor-image" alt="" /></div>
                <div><img src={travel4} className="cursor-image" alt="" /></div>
            </OwlCarousel>
            <a href=' https://travel-guru-wide.netlify.app/' target="_blank" rel="noopener noreferrer" download>
                <Button className="message mb-2 mr-2">
                    <i className="fas fa-download" />
                            Live Website
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

export default TravelGuru;