import React from 'react';
import Header from '../Home/Header/Header';
import CreativeAgency from './CreativeAgency/CreativeAgency';
import TravelGuru from './travelGuru/TravelGuru';
import VolunteerWork from './VolunteerWork/VolunteerWork';


const Project = () => {
    return (
        <div>
            <Header></Header>
            <h2 className="text-center mt-5 pt-5 ">My project</h2>
            <CreativeAgency></CreativeAgency>
            <VolunteerWork></VolunteerWork>
            <TravelGuru></TravelGuru>
        </div>
    );
};

export default Project;