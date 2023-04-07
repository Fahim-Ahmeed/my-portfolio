import React from 'react';
import Header from '../Home/Header/Header';
import'./Project.css';
import CreativeAgency from './CreativeAgency/CreativeAgency';
import TravelGuru from './travelGuru/TravelGuru';
import VolunteerWork from './VolunteerWork/VolunteerWork';
import Footer from '../Home/Footer/Footer';
import { useHistory ,useLocation} from 'react-router-dom';


const Project = () => {
    var history=useLocation();
    console.log(history.pathname)
    return (
        <>
        { 
            history.pathname==='/project'?
            <div className="project">
            <Header></Header>
            <CreativeAgency></CreativeAgency>
            <VolunteerWork></VolunteerWork>
            <TravelGuru></TravelGuru>
            <Footer></Footer>
        </div>
            :
            <div className="project">
            <CreativeAgency></CreativeAgency>
            <VolunteerWork></VolunteerWork>
            <TravelGuru></TravelGuru>
        </div>
           
        }
        </>
    );
};

export default Project;