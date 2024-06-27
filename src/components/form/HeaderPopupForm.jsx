import React, { useEffect, useState } from 'react'
import { Modal, Toast } from 'react-bootstrap'
import './HeaderPopupForm.css'

const HeaderPopupForm = ({isContactModalOpen, toggleContactModal }) => {
    const [initFormData, setInitFormData] = useState({
        name: "",
        email:"",
        message:""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [toastMsg, setToastMsg] = useState('');

    const handleInputChange = (e) => {
        const {value} = e.target;
        setInitFormData((prev) => ({
            ...prev,
        }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        } catch (error) {
            console.log("Err--", error);
        } finally {
            setIsLoading(false);
            setInitFormData({
                tracking_code: ""
            });
        }
    };  

  return (
    <Modal show={isContactModalOpen} onHide={toggleContactModal} centered className='tracking-modal-parent'> 
    <Modal.Body style={{position: "relative"}} className='tracking-modal'>
      <Modal.Header closeButton className='modal-header'></Modal.Header>
      <section className='form-title'>Contact Us</section> 
      <article className='modal-container'>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="messages"></div>
          <div className="row controls">
            <div className="col-12">
              <div className="form-group mb-20">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  name="name"
                  required
                />
              </div>
            </div>
            {/* End .col */}
  
            <div className="col-12">
              <div className="form-group mb-20">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email Address"
                  name="email"
                  required
                />
              </div>
            </div>
            {/* End .col */}
  
            <div className="col-12">
              <div className="form-group mb-30">
                <label htmlFor="sendMessage">Message*</label>
                <textarea
                  className="form-control"
                  id="sendMessage"
                  placeholder="Your message"
                  name="sendMessage"
                  required
                ></textarea>
              </div>
            </div>
            {/* End .col */}
  
            <div className="col-12">
              <button type="submit" className="theme-btn-seven form-btn w-100">Send Message</button>
            </div>
            {/* End .col */}
          </div>
        </form>
        {toastMsg && (
          <Toast bg='danger' className='toast-compo'>
            <Toast.Body className='toast-msg'>{toastMsg}</Toast.Body>
          </Toast>
        )}
      </article>
    </Modal.Body>
  </Modal>
  
  )
}

export default HeaderPopupForm