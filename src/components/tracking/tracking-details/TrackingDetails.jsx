import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { driverDetails, makeApiCall } from '../../../Api/api';
import CustomLoader from '../../spinner/CustomLoader';

const TrackingDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [trackingData, setTrackingData] = useState(null);
  const params = useLocation();
  const navigate = useNavigate();

  const getTrackingDetails = async (trackingCode) => {
    try {
      const res = await makeApiCall({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}get-tracking-details/${trackingCode}`,
      });
      return res;
    } catch (error) {
      console.log("Error--", error);
    }
  };

  useEffect(() => {
    const verifyTrackingCode = async () => {
      const urlStr = params.search;
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

  if(isLoading) return <CustomLoader />

  return (
    <div>TrackingDetails</div>
  )
}

export default TrackingDetails