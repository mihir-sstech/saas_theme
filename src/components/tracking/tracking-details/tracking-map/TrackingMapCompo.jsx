import React, { useCallback, useEffect, useState } from "react";
import "./TrackingMapCompo.css";
import { GoogleMap, InfoWindow, Marker, Polyline } from "@react-google-maps/api";
import CAR_ICON from "../../../../assets/images/map-images/CarIcon.png";
import PICKUP_ICON from "../../../../assets/images/map-images/Pickup.png";
import DROPOFF_ICON from "../../../../assets/images/map-images/Dropoff.png";
import { capitalizeByCharacter, JOB_STATUS_JSON, openImageInNewTab } from "../../../../utils/helper";
import socket from "../../../../utils/socket";

const TrackingMapCompo = ({ trackingData, isLoaded, isMobileScreen }) => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [pickupLocation, setPickupLocation] = useState(null);
  const [dropoffLocation, setDropoffLocation] = useState(null);
  const [driverPosition, setDriverPosition] = useState(null);
  const [map, setMap] = useState(null);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [selectedPickup, setSelectedPickup] = useState(null);
  const [selectedDropoff, setSelectedDropoff] = useState(null);
  const [pathCoordinates, setPathCoordinates] = useState([]);

  useEffect(() => {
    const positions = [];

    // Set pickup location
    if (
      trackingData?.job_details?.pickup_details?.pickup_latitude &&
      trackingData?.job_details?.pickup_details?.pickup_longitude
    ) {
      const pickupLat = Number(trackingData.job_details.pickup_details.pickup_latitude);
      const pickupLng = Number(trackingData.job_details.pickup_details.pickup_longitude);
      setPickupLocation({
        lat: pickupLat,
        lng: pickupLng,
      });
      positions.push({ lat: pickupLat, lng: pickupLng });
    }

    // Set dropoff locations
    if (
      trackingData?.job_details?.dropoff_details?.dropoff_latitude &&
      trackingData?.job_details?.dropoff_details?.dropoff_longitude
    ) {
      const dropoffLat = Number(trackingData.job_details.dropoff_details.dropoff_latitude);
      const dropoffLng = Number(trackingData.job_details.dropoff_details.dropoff_longitude);
      setDropoffLocation({
        lat: dropoffLat,
        lng: dropoffLng,
      });
      positions.push({ lat: dropoffLat, lng: dropoffLng });
    }

    // Set driver location
    if (
      trackingData?.job_details?.driver_details?.driver_latitude &&
      trackingData?.job_details?.driver_details?.driver_longitude
    ) {
      const driverLat = Number(trackingData.job_details.driver_details.driver_latitude);
      const driverLng = Number(trackingData.job_details.driver_details.driver_longitude);
      setDriverPosition({
        lat: driverLat,
        lng: driverLng,
      });
      positions.push({ lat: driverLat, lng: driverLng })
    }

    // Calculate and set the current position
    if (positions.length > 0) {
      const midpointLat =
        positions.reduce((sum, pos) => sum + pos.lat, 0) /
        (positions.length);
      const midpointLng =
        positions.reduce((sum, pos) => sum + pos.lng, 0) / positions.length;
      setCurrentPosition({ lat: midpointLat, lng: midpointLng });
    }
  }, [trackingData]);

  useEffect(() => {
    if (
      Object.keys(trackingData?.job_details).length > 0 &&
      (trackingData?.job_details?.job_status === JOB_STATUS_JSON.accepted ||
        trackingData?.job_details?.job_status === JOB_STATUS_JSON.pickup ||
        trackingData?.job_details?.job_status === JOB_STATUS_JSON.running)
    ) {
      // Listen for a specific event
      socket.connect();
      socket.on("location_update", (data) => {
        const { job_id, latitude, longitude } = data;
        if (job_id === trackingData?.job_details?.jobId.toString()) {
          console.log("data--", data);
          const updatedCoordinates = [
            ...pathCoordinates,
            { lat: Number(latitude), lng: Number(longitude) },
          ];
          // console.log("updated--", updatedCoordinates);
          setPathCoordinates(updatedCoordinates);
          setDriverPosition({ lat: Number(latitude), lng: Number(longitude) });
        }
      });

      // Clean up when component unmounts
      socket.on("reconnect", (attemptNumber) => {
        console.log("Reconnected after attempt:", attemptNumber);
      });

      socket.on("reconnect_failed", () => {
        console.log("Reconnection failed");
      });
      console.log("socket--", socket);
      return () => {
        socket.off("location_update");
        console.log("disconnect");
        socket.disconnect();
      };
    }
  }, [trackingData?.job_details?.jobId]);

  useEffect(() => {
    if (
      isLoaded &&
      map &&
      driverPosition &&
      pickupLocation &&
      dropoffLocation
    ) {
      const bounds = new window.google.maps.LatLngBounds();

      // Extend the bounds to include all the necessary locations
      bounds.extend(
        new window.google.maps.LatLng(driverPosition.lat, driverPosition.lng)
      );
      bounds.extend(
        new window.google.maps.LatLng(pickupLocation.lat, pickupLocation.lng)
      );
      bounds.extend(
        new window.google.maps.LatLng(dropoffLocation.lat, dropoffLocation.lng)
      );
      map.fitBounds(bounds);
    }
  }, [isLoaded, map, driverPosition, pickupLocation, dropoffLocation, pathCoordinates]);

  const handleMapLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  return (
    isLoaded &&
    currentPosition !== null && (
      <section className="tracking-map-container">
        <GoogleMap
          mapContainerStyle={{
            width: isMobileScreen ? "100%" : "calc(100% - 400px)",
            height: isMobileScreen ? "20em" : "29em",
            outline: "none",
          }}
          center={currentPosition || { lat: 0, lng: 0 }}
          zoom={15}
          onLoad={handleMapLoad}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
            // zoomControl: false,
            disableDoubleClickZoom: true,
            clickableIcons: false,
            fullscreenControl: false,
            keyboardShortcuts: false,
            scrollwheel: false,
            // gestureHandling: isMobileScreen ? 'greedy' : 'none',
          }}
          onClick={() => {
            setSelectedDropoff(null);
            setSelectedPickup(null);
            setSelectedDriver(null);
          }}
          id="googleMapId"
        >
          {pickupLocation !== null && dropoffLocation !== null && (
            <>
              {driverPosition !== null &&
                trackingData?.job_details?.driver_details && (
                  <Marker
                    position={driverPosition}
                    icon={{
                      url: CAR_ICON,
                      scaledSize: isMobileScreen
                        ? new window.google.maps.Size(40, 40)
                        : new window.google.maps.Size(50, 50),
                    }}
                    title={capitalizeByCharacter(trackingData?.job_details?.driver_details.name, " ")}
                    onClick={() =>
                      setSelectedDriver(
                        trackingData?.job_details?.driver_details
                      )
                    }
                  />
                )}

              {selectedDriver !== null && (
                <InfoWindow
                  position={{
                    lat: Number(selectedDriver.driver_latitude),
                    lng: Number(selectedDriver.driver_longitude),
                  }}
                  onCloseClick={() => {
                    setSelectedDriver(null);
                  }}
                >
                  <div className="driver-details">
                    {selectedDriver.profile && (
                      <div className="driver-image">
                        <img
                          src={`${process.env.REACT_APP_USER_IMAGE_URL}/${selectedDriver.profile}`}
                          alt={selectedDriver.name}
                          onClick={() =>
                            openImageInNewTab(
                              `${process.env.REACT_APP_USER_IMAGE_URL}/${selectedDriver.profile}`
                            )
                          }
                        />
                      </div>
                    )}
                    <p className="driver-name-details">{selectedDriver.name}</p>
                  </div>
                </InfoWindow>
              )}

              {/* Polyline from currentPosition to pickupLocation */}
              {pathCoordinates.length > 0 && currentPosition !== null && (
                <Polyline
                  path={[currentPosition, pickupLocation]}
                  options={{
                    strokeColor: "#0000FF",
                    strokeOpacity: 1,
                    strokeWeight: 2,
                  }}
                />
              )}

              {/* Polyline for the continuous path updates */}
              <Polyline
                path={pathCoordinates}
                options={{
                  strokeColor: "#0000FF",
                  strokeOpacity: 1,
                  strokeWeight: 2,
                }}
              />

              {pickupLocation !== null &&
                trackingData?.job_details?.pickup_details && (
                  <Marker
                    position={pickupLocation}
                    icon={{
                      url: PICKUP_ICON,
                      scaledSize: isMobileScreen
                        ? new window.google.maps.Size(25, 25)
                        : new window.google.maps.Size(30, 30),
                    }}
                    title={
                      trackingData?.job_details?.pickup_details.pickup_address
                    }
                    onClick={() =>
                      setSelectedPickup(
                        trackingData?.job_details?.pickup_details
                      )
                    }
                  />
                )}

              {dropoffLocation !== null &&
                trackingData?.job_details?.dropoff_details && (
                  <Marker
                    position={dropoffLocation}
                    icon={{
                      url: DROPOFF_ICON,
                      scaledSize: isMobileScreen
                        ? new window.google.maps.Size(30, 30)
                        : new window.google.maps.Size(35, 35),
                    }}
                    title={
                      trackingData?.job_details?.dropoff_details.dropoff_address
                    }
                    onClick={() =>
                      setSelectedDropoff(
                        trackingData?.job_details?.dropoff_details
                      )
                    }
                  />
                )}

              {selectedPickup !== null && (
                <InfoWindow
                  position={{
                    lat: Number(selectedPickup.pickup_latitude),
                    lng: Number(selectedPickup.pickup_longitude),
                  }}
                  onCloseClick={() => setSelectedPickup(null)}
                >
                  <div className="pickup-details">
                    <p className="pickup-address-details">
                      Pickup : <span>{selectedPickup.pickup_address}</span>
                    </p>
                    <p
                      className="pickup-maps-details"
                      onClick={() =>
                        openImageInNewTab(
                          `https://www.google.com/maps/search/?api=1&query=${selectedPickup.pickup_latitude},${selectedPickup.pickup_longitude}`
                        )
                      }
                    >
                      View on Google Maps
                    </p>
                  </div>
                </InfoWindow>
              )}

              {selectedDropoff !== null && (
                <InfoWindow
                  position={{
                    lat: Number(selectedDropoff.dropoff_latitude),
                    lng: Number(selectedDropoff.dropoff_longitude),
                  }}
                  onCloseClick={() => setSelectedDropoff(null)}
                >
                  <div className="dropoff-details">
                    <p className="dropoff-address-details">
                      Dropoff : <span>{selectedDropoff.dropoff_address}</span>
                    </p>
                    <p
                      className="dropoff-maps-details"
                      onClick={() =>
                        openImageInNewTab(
                          `https://www.google.com/maps/search/?api=1&query=${selectedDropoff.dropoff_latitude},${selectedDropoff.dropoff_longitude}`
                        )
                      }
                    >
                      View on Google Maps
                    </p>
                  </div>
                </InfoWindow>
              )}
            </>
          )}
        </GoogleMap>
      </section>
    )
  );
};

export default TrackingMapCompo;
