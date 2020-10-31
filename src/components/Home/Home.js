import React from 'react';
import Header from './Header/Header';
import './Home.css';

import SomeDetails from './SomeDetails/SomeDetails';
import BgParticles from './BgParticles/BgParticles';


const Home = () => {
    return (
        <div className="header-area">


            {/* <BgParticles> */}
                <Header></Header>
                <SomeDetails></SomeDetails>
            {/* </BgParticles> */}


        </div>
    );
};

export default Home;