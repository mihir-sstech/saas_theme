import React from 'react'
import { Link } from 'react-router-dom'
import driverLogo from "../../../../assets/images/logodriver.png"
import './TrackingHeader.css'
import { X } from 'react-bootstrap-icons'

const TrackingHeader = ({handleTrackingSearch, searchText, setSearchText}) => {

  return (
    <section className='tracking-details-header-container'>
        <article className='tracking-details-header'>
            <div className="tracking-details-logo">
                <Link to={`/`}>
                    <img src={driverLogo} alt="Driver007 Logo" />
                </Link>
            </div>
            <div className="tracking-search-details">
                <div className='tracking-details-input'>
                    <input type='text' placeholder='Tracking Code / Consignment No / Order No' onChange={(e) => setSearchText(e.target.value)} value={searchText} />
                    {searchText.length > 0 && (
                        <p className='cancel-icon' onClick={() => setSearchText("")}><X width={20} height={20}/></p>
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