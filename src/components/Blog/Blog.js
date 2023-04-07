import React from 'react';
import Header from '../Home/Header/Header';
import { useLocation } from 'react-router-dom';

const Blog = () => {
    let history=useLocation();
    return (
        <>
        {
            history.pathname==='/blog'?
            
            <div>
            <Header></Header>
            <h3 className="text-center">blog Comming soon</h3>
        </div>
            :
            <div>
            <h3 className="text-center">blog Comming soon</h3>
        </div>
        }
        </>
        
    );
};

export default Blog;