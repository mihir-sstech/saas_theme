import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import driverLogo from "../../../../assets/images/logodriver.png"

const TrackingHeader = ({setTrackingData}) => {
    const [searchText, setSearchText] = useState("");

    console.log("search--", searchText);

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
                    <input type='text' placeholder='Tracking Code / Consignment No' onChange={(e) => setSearchText(e.target.value)} value={searchText} />
                    {searchText.length > 0 && (
                        <p className='cancel-icon' onClick={() => setSearchText("")}>x</p>
                    )}
                </div>
                {searchText.length > 0 && (
                    <button className='tracking-search-btn'>Search</button>
                )}
                </div>
        </article>
    </section>
  )
}

export default TrackingHeader