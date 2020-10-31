import React from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const SendMessage = ({ modalIsOpen, closeModal }) => {
   
   
  const sendEmail =(e)=>{
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_bs3k1ec', e.target, 'user_9Wdaqay53IZHTWqXDxLOK')
      .then((result) => {
          console.log(result.text);
          closeModal()
          console.log('kaj hoise')
          alert('your message sending successfully')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center">Get in touch</h2>
                <form className="p-5"onSubmit={sendEmail} >
                    <div className="row mx-auto">
                    <div className="form-group col-md-8 mx-auto">
                        <input type="text" required   name="name" placeholder="Your Name" className="form-control" />
                    </div>
                    <div className="form-group col-md-8 mx-auto">
                        <input type="text" required   name="email" placeholder="Your email" className="form-control" />
                    </div>
                    <div className="form-group col-md-8 mx-auto">
                        <input type="text" required style={{height:'100px'}} name="message"  placeholder="Your Message" className="form-control" />
                    </div>
                    
                   
                    <div className="form-group col-md-8 mx-auto text-right">
                    <button className="btn btn-dark ">Send message</button>
                    </div>
                    </div>
                </form>
            
            </Modal>
        </div>
    );
};

export default SendMessage;