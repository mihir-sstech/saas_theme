import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { driverDetails, makeApiCall, useGoogleMapLoader } from '../../../Api/api';
import CustomLoader from '../../spinner/CustomLoader';
import './TrackingDetails.css';
import TrackingHeader from './tracking-header/TrackingHeader';
import TrackingMapCompo from './tracking-map/TrackingMapCompo';
import TrackingDataSection from './tracking-data/TrackingDataSection';

const TrackingDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [trackingData, setTrackingData] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [toastMsg, setToastMsg] = useState("");
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
          alert(res.response.data.message || "Invalid Code");
          navigate("/");
        } else {
          setIsLoading(true);
          const trackingRes = await getTrackingDetails(queryStr);
          if(trackingRes.status === driverDetails.SUCCESS_CODE) {
            setTrackingData(trackingRes.data.data);
          } else {
            alert(trackingRes?.response?.data?.message || "Something went wrong")
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
      if(toastMsg) {
        setTimeout(() => {
          setToastMsg("");
        }, 5000)
      }
    }, [toastMsg])

  const handleTrackingSearch = async () => {
    if(searchText) {
      setIsLoading(true);
      const res = await getTrackingDetails(searchText);
      if(res.status === driverDetails.SUCCESS_CODE) {
        setTrackingData(res.data.data);
        const newSearchParams = new URLSearchParams(location.search);
        newSearchParams.set('code', res.data.data.tracking_code || res.data.data.consignment_no);
        navigate(`${location.pathname}?${newSearchParams.toString()}`);
      } else {
        setToastMsg(res?.response?.data?.message || "Something went wrong");
      }
      setIsLoading(false);
      setSearchText("");
    }
  };

  if(isLoading || !isLoaded) return <CustomLoader />

  return (
    <section className='tracking-details-container'>
      {/* Header */}
      <TrackingHeader handleTrackingSearch={handleTrackingSearch} searchText={searchText} setSearchText={setSearchText} toastMsg={toastMsg} setToastMsg={setToastMsg} />
      {/* Section */}
      <div className='tracking-details-section'>
        {/* Google Map Section */}
        <TrackingMapCompo />
        {/* Tracking Details Section */}
        <TrackingDataSection />
      </div>
    </section>
  )
}

export default TrackingDetails