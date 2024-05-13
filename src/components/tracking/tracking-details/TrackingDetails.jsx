import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { driverDetails, makeApiCall, useGoogleMapLoader } from '../../../Api/api';
import CustomLoader from '../../spinner/CustomLoader';
import './TrackingDetails.css';
import TrackingHeader from './tracking-header/TrackingHeader';
import TrackingMapCompo from './tracking-map/TrackingMapCompo';
import TrackingDataSection from './tracking-data/TrackingDataSection';
import { toast } from 'react-toastify';

const TrackingDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [trackingData, setTrackingData] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { isLoaded } = useGoogleMapLoader();

  const getTrackingDetails = async (trackingCode) => {
    try {
      const res = await makeApiCall({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}get-tracking-details/${trackingCode}`,
      });
      return res;
    } catch (error) {
      console.log("Error--", error);
      return error;
    }
  };

  useEffect(() => {
    const verifyTrackingCode = async () => {
      const urlStr = location.search;
      const index = urlStr.includes("?") ? urlStr.lastIndexOf("=") : 0;
      const queryStr = index > 0 ? urlStr.slice(index + 1) : urlStr;
      const trackingData = {
        tracking_code: queryStr
      }
      try {
        const res = await makeApiCall({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}job-tracking-code`,
          data: trackingData,
        })
        if(res.status !== driverDetails.SUCCESS_CODE) {
          navigate("/");
          toast.error(res.response.data.message || "Invalid Code"); 
        } else {
          setIsLoading(true);
          const trackingRes = await getTrackingDetails(queryStr);
          if(trackingRes.status === driverDetails.SUCCESS_CODE) {
            setTrackingData(trackingRes.data.data);
          } else {
            toast.error(trackingRes?.response?.data?.message || "Something went wrong")
          }
          setIsLoading(false);
        }
      } catch (error) {
        console.log("Error--", error);
      }
    }
    verifyTrackingCode();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the height based on the screen width
      if (window.innerWidth < 768) {
        setIsMobileScreen(true);
      } else {
        setIsMobileScreen(false);
      }
    };
    // Initial setup
    handleResize();
    // Event listener for window resize
    window.addEventListener("resize", handleResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTrackingSearch = async () => {
    if(searchText) {
      setIsLoading(true);
      const res = await getTrackingDetails(searchText);
      if(res.status === driverDetails.SUCCESS_CODE) {
        setTrackingData(res.data.data);
        const newSearchParams = new URLSearchParams(location.search);
        newSearchParams.set('code', res.data.data.tracking_details.tracking_code || res.data.data.tracking_details.consignment_no);
        navigate(`${location.pathname}?${newSearchParams.toString()}`);
      } else {
        toast.error(res?.response?.data?.message || "Something went wrong");
      }
      setIsLoading(false);
      setSearchText("");
    }
  };

  if(isLoading || !isLoaded) return <CustomLoader />

  return (
    <section className='tracking-details-container'>
      {/* Header */}
      <TrackingHeader handleTrackingSearch={handleTrackingSearch} searchText={searchText} setSearchText={setSearchText} />
      {/* Section */}
      {trackingData !== null && Object.keys(trackingData).length > 0 && (
        <div className='tracking-details-section'>
          {/* Google Map Section */}
          <TrackingMapCompo trackingData={trackingData} isLoaded={isLoaded} isMobileScreen={isMobileScreen} />
          {/* Tracking Details Section */}
          <TrackingDataSection trackingData={trackingData} isMobileScreen={isMobileScreen} />
        </div>
      )}
    </section>
  )
}

export default TrackingDetails