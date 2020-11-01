import React from 'react';
import { Button } from 'react-bootstrap';
import { FaTools,FaDatabase} from 'react-icons/fa';
import { RiComputerFill} from 'react-icons/ri';


const Webskills = () => {
    return (
        <div className="col-md-3 col-sm-8 about-section first-child">
            <h4 >SKILLS</h4>
            <h6 style={{display:'inline'}}>Web<RiComputerFill/>:</h6><p style={{display:'inline'}}>JavaScript,ES6, React, Redux, PHP,React Router, JQuery, REST API,Node,MongoDB,Expressjs</p>
            <br/>
            <h6 style={{display:'inline'}}>Tools<FaTools/>:</h6><p style={{display:'inline'}}>Git, Webpack, VSCode, Chrome Dev Tool,Netlify,Heroku</p>
            <br/>
            <h6 style={{display:'inline'}}>Database <FaDatabase/>:</h6><p style={{display:'inline'}}>MongoDB,MySQL</p>
        </div>
    );
};

export default Webskills;