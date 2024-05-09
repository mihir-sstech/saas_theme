import React from 'react'
import { Link } from 'react-router-dom'
import driverLogo from "../../../../assets/images/logodriver.png"
import { Toast } from 'react-bootstrap'
import './TrackingHeader.css'

const TrackingHeader = ({handleTrackingSearch, searchText, setSearchText, toastMsg, setToastMsg}) => {

  return (
    <section className='tracking-details-header-container'>
        <article className='tracking-details-header'>
            <div className="tracking-details-logo">
                <Link to={`/`}>
                    <img src={driverLogo} alt="Driver007 Logo" />
                </Link>
            </div>
            {toastMsg && (
                <Toast bg='danger' className='toast-compo'>
                    <Toast.Body className='toast-msg'>
                        <span>{toastMsg}</span>
                        <span className='toast-cancel-icon' onClick={() => setToastMsg("")}>X</span>
                    </Toast.Body>
                </Toast>
            )}
            <div className="tracking-search-details">
                <div className='tracking-details-input'>
                    <input type='text' placeholder='Tracking Code / Consignment No / Order No' onChange={(e) => setSearchText(e.target.value)} value={searchText} />
                    {searchText.length > 0 && (
                        <p className='cancel-icon' onClick={() => setSearchText("")}>x</p>
                    )}
                </div>
                {searchText.length > 0 && (
                    <button className='tracking-search-btn' onClick={handleTrackingSearch}>Search</button>
                )}
                </div>
        </article>
    </section>
  )
}

export default TrackingHeader