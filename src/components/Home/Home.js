import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Home.css';

import SomeDetails from './SomeDetails/SomeDetails';


const Home = () => {
    return (
        <div className="header-area">


        
                <Header></Header>
                <SomeDetails></SomeDetails>
                {/* <Footer></Footer> */}
               
    

        </div>
    );
};

export default Home;