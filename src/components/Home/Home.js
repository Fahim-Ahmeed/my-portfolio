import React from 'react';
import Header from './Header/Header';
import './Home.css';

import SomeDetails from './SomeDetails/SomeDetails';


const Home = () => {
    return (
        <div className="header-area">


            {/* <BgParticles> */}
                <Header></Header>
                <SomeDetails></SomeDetails>
         


        </div>
    );
};

export default Home;