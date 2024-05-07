import React, { useEffect, useRef, useState } from 'react'
import { Form, Modal, Spinner, Toast } from 'react-bootstrap'
import './TrackingModal.css'
import { makeApiCall } from '../../Api/api';

const TrackingModal = ({isTrackingModalOpen, toggleTrackingModal }) => {
    const [initFormData, setInitFormData] = useState({
        tracking_code: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [toastMsg, setToastMsg] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        if(isTrackingModalOpen) {
            setInitFormData({tracking_code: ""});
            setToastMsg("");
            setIsLoading(false);
            inputRef.current.focus();
        }
    }, [isTrackingModalOpen])

    useEffect(() => {
        if(toastMsg) {
            setTimeout(() => {
                setToastMsg("");
            }, 5000)
        }
    }, [toastMsg])

    const handleInputChange = (e) => {
        const {value} = e.target;
        setInitFormData((prev) => ({
            ...prev,
            tracking_code: value
        }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!initFormData.tracking_code) return;
        try {
            setIsLoading(true);
            const trackingData = {
                tracking_code: initFormData.tracking_code
            }
            const res = await makeApiCall({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}job-tracking-code`,
                data: trackingData,
            })
            if(res.status === 200) {
                alert("success");
            } else {
                setToastMsg(res.response.data.message || "Invalid Code")
            }
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
    <Modal show={isTrackingModalOpen} onHide={toggleTrackingModal} centered> 
        <Modal.Body style={{position: "relative"}} className='tracking-modal'>
          <Modal.Header closeButton className='modal-header'></Modal.Header>
          <article className='modal-container'>
            <Form className='tracking-form' onSubmit={handleSubmit}>
                <section className='tracking-header'>Tracking</section> 
                <Form.Control ref={inputRef} type="text" onChange={(e) => handleInputChange(e)} value={initFormData.tracking_code} className='tracking-input' placeholder="Enter Tracking Code / Consignment No." />
                <section style={{display: "flex", justifyContent: "center"}}>
                    <button className="tracking-search-button" type='submit' disabled={!initFormData.tracking_code || isLoading}>
                        {isLoading ? (
                            <>
                            Track My Job 
                            <Spinner animation="border" role="status" size='sm' style={{marginLeft: "10px"}}>
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            </>
                        ) : (
                            <>Track My Job</>
                        )}
                    </button>
                </section>
            </Form>
          </article>
        {toastMsg && (
            <Toast bg='danger' className='toast-compo'>
                <Toast.Body className='toast-msg'>{toastMsg}</Toast.Body>
            </Toast>
        )}
        </Modal.Body>
      </Modal>
  )
}

export default TrackingModal