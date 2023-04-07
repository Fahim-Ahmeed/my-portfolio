import React, { Fragment } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './Home.css';
import SomeDetails from './SomeDetails/SomeDetails';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Project from '../Project/Project';


const Home = () => {
    
    return (
        <div className="header-area">


        
                <Header></Header>
                <SomeDetails></SomeDetails>
                <Project></Project>
                 {/* <Blog></Blog> */}
                 <br/>
                <About></About> 
                {/* <Footer></Footer> */}
               
    

        </div>
    );
};

export default Home;