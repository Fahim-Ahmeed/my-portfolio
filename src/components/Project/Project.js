import React from 'react';
import Header from '../Home/Header/Header';
import'./Project.css';
import CreativeAgency from './CreativeAgency/CreativeAgency';
import TravelGuru from './travelGuru/TravelGuru';
import VolunteerWork from './VolunteerWork/VolunteerWork';
import Footer from '../Home/Footer/Footer';


const Project = () => {
    return (
        <div className="project">
            <Header></Header>
            <CreativeAgency></CreativeAgency>
            <VolunteerWork></VolunteerWork>
            <TravelGuru></TravelGuru>
            <Footer></Footer>
        </div>
    );
};

export default Project;