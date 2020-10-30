import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import myImage from '../../../image/myImage.png';
import SendMessage from './sendMeessage/SendMessage';

const SomeDetails = () => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <section>
            <div className="row w-75 offset-1 mt-5 pt-5">
                <div className="col-md-6 col-sm-12">
                    <h2><span style={{ color: ' #4412b9' }}>Hi, i am</span><br /><span style={{ fontStyle: 'inherit' }}>Fahim Ahmed</span></h2>
                    <p >I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                    <a href='https://drive.google.com/u/0/uc?id=1WhXuT38IyRYp24IpNw_ROSCCL6WN2Exz&export=download' target="_blank" rel="noopener noreferrer" download>
                        <Button className="download mr-2">
                            <i className="fas fa-download" />
                            Download Resume
                        </Button>
                    </a>
                    <Button onClick={openModal}  className="message ">Send message</Button>
                    <SendMessage modalIsOpen={modalIsOpen} closeModal={closeModal}></SendMessage>
                </div>
                <div className="col-md-5 col-sm-12 offset-1" >
                    <img src={myImage} alt="fahim ahmed" className="img-fluid" />
                </div>
            </div>
        </section>
    );
};

export default SomeDetails;