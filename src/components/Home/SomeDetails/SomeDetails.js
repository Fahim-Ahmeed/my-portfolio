import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Typical from 'react-typical'
import myImage from '../../../image/myImage.png';
import './SomeDetails.css'
import SendMessage from './sendMeessage/SendMessage';

const SomeDetails = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <section>
            <div className="row w-75 offset-1 mt-5 pt-5">
                <div className="col-md-5 col-sm-12 offset-1" ><img src={myImage} alt="fahim ahmed" className="img-fluid main-img" />
                </div>
                <div className="col-md-6 col-sm-12">
                    <h2><span className="hi">Hi, i am</span><br /><span >Fahim Ahmed</span></h2>
                    <h3 className="profession">
                        <Typical
                            steps={['MERN Stack Developer', 1000, 'Programmer', 1000, 'Software Engineer', 1500]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </h3>
                    <p >Passionate, proficient, and hard-working web developer. Strong knowledge in responsive design with HTML5, CSS3, flexbox, Bootstrap, ES6 JavaScript. I also have solid knowledge working with React, React Router, Node Js, Express js, MongoDB, Firebase, Heroku. committed to make a difference</p>
                    <a href='https://drive.google.com/u/0/uc?id=1WhXuT38IyRYp24IpNw_ROSCCL6WN2Exz&export=download' target="_blank" rel="noopener noreferrer" download>
                        <Button className="download mb-2 mr-2">
                            <i className="fas fa-download" />
                            Download Resume
                        </Button>
                    </a>
                    <Button onClick={openModal} className="message mb-2 ">Send message</Button>
                    <SendMessage modalIsOpen={modalIsOpen} closeModal={closeModal}></SendMessage>
                </div>

            </div>
        </section>
    );
};

export default SomeDetails;