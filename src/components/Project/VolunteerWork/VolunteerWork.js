import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import '../CreativeAgency/CreativeAgency.css';
import volunteer1 from './image/volunteer1.png';
import volunteer2 from './image/volunteer2.png';
import volunteer3 from './image/volunteer3.png';
import volunteer4 from './image/volunteer4.png';
import volunteer5 from './image/volunteer5.png';
import volunteer6 from './image/volunteer6.png';
import { Button } from 'react-bootstrap';

const VolunteerWork = () => {
    return (
        <section className='some-works text-center py-5 mb-5'>
            <h1 className='someWorks-title py-5'>Volunteer Networks</h1>
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
                <div><img src={volunteer1} className="cursor-image" alt="" /></div>
                <div><img src={volunteer2} className="cursor-image" alt="" /></div>
                <div><img src={volunteer3} className="cursor-image" alt="" /></div>
                <div><img src={volunteer4} className="cursor-image" alt="" /></div>
                <div><img src={volunteer5} className="cursor-image" alt="" /></div>
                <div><img src={volunteer6} className="cursor-image" alt="" /></div>
            </OwlCarousel>
            <a href='  https://volunteer-service.netlify.app' target="_blank" rel="noopener noreferrer" download>
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

export default VolunteerWork;