import React, { useEffect, useState } from 'react'
import './TrackingMapCompo.css'
import { GoogleMap } from '@react-google-maps/api';

const TrackingMapCompo = ({trackingData, isLoaded}) => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [pickupLocation, setPickupLocation] = useState(null);
  const [dropoffLocation, setDropoffLocation] = useState(null);
  const [driverPosition, setDriverPosition] = useState(null);
  const [map, setMap] = useState(null);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [selectedPickup, setSelectedPickup] = useState(null);
  const [selectedDropoff, setSelectedDropoff] = useState(null);

  useEffect(() => {
    if(trackingData?.job_details?.pickup_details?.pickup_latitude && trackingData?.job_details?.pickup_details?.pickup_longitude) {
      setPickupLocation({
        lat: Number(trackingData.job_details.pickup_details.pickup_latitude),
        lng: Number(trackingData.job_details.pickup_details.pickup_longitude),
      });
      setCurrentPosition({
        lat: Number(trackingData.job_details.pickup_details.pickup_latitude),
        lng: Number(trackingData.job_details.pickup_details.pickup_longitude),
      });
    }
    if(trackingData?.job_details?.dropoff_details?.dropoff_latitude && trackingData?.job_details?.dropoff_details?.dropoff_longitude) {
      setDropoffLocation({
        lat: Number(trackingData.job_details.dropoff_details.dropoff_latitude),
        lng: Number(trackingData.job_details.dropoff_details.dropoff_longitude),
      });
    }
    if(trackingData?.job_details?.driver_details?.driver_latitude && trackingData?.job_details?.driver_details?.driver_longitude) {
      setDriverPosition({
        lat: Number(trackingData.job_details.driver_details.driver_latitude),
        lng: Number(trackingData.job_details.driver_details.driver_longitude),
      });
    }
  }, [trackingData]);

  useEffect(() => {
    if (
      isLoaded &&
      map &&
      // pathCoordinates.length > 0 &&
      driverPosition !== null &&
      driverPosition.lat &&
      driverPosition.lng &&
      pickupLocation !== null &&
      dropoffLocation.length > 0
    ) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(
        new window.google.maps.LatLng(
          Number(driverPosition?.lat),
          Number(driverPosition?.lng)
        )
      );
      bounds.extend(
        new window.google.maps.LatLng(pickupLocation?.lat, pickupLocation?.lng)
      );
      dropoffLocation.forEach((drop) => {
        bounds.extend(new window.google.maps.LatLng(drop.lat, drop.lng));
      });
      map.fitBounds(bounds);
    }
  }, [
    isLoaded,
    map,
    driverPosition,
    // pathCoordinates,
    pickupLocation,
    dropoffLocation,
  ]);

  useEffect(() => {
    if (currentPosition !== null) {
      if (map && currentPosition.lat !== 0 && currentPosition.lng !== 0) {
        map.panTo(currentPosition);
      }
    }
  }, [map, currentPosition]);

  return isLoaded && currentPosition !== null && (
    <section className='tracking-map-container'>
      <GoogleMap
      mapContainerStyle={{ width: "100%", height: "40em" }}
      center={currentPosition}
      zoom={10}
      onLoad={(map) => setMap(map)}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
      }}
      onClick={() => {
        // handleMapClick();
        setSelectedDropoff(null);
        setSelectedPickup(null);
        setSelectedDriver(null);
      }}
      id="ViewJobModal"
    ></GoogleMap>
    </section>
  )
}

export default TrackingMapCompo