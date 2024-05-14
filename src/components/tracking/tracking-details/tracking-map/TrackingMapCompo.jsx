import React, { useEffect, useState } from "react";
import "./TrackingMapCompo.css";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import CAR_ICON from "../../../../assets/images/map-images/CarIcon.png";
import PICKUP_ICON from "../../../../assets/images/map-images/Pickup.png";
import DROPOFF_ICON from "../../../../assets/images/map-images/Dropoff.png";
import { openImageInNewTab } from "../../../../utils/helper";

const TrackingMapCompo = ({ trackingData, isLoaded, isMobileScreen }) => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [pickupLocation, setPickupLocation] = useState(null);
  const [dropoffLocation, setDropoffLocation] = useState(null);
  const [driverPosition, setDriverPosition] = useState(null);
  const [map, setMap] = useState(null);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [selectedPickup, setSelectedPickup] = useState(null);
  const [selectedDropoff, setSelectedDropoff] = useState(null);

  useEffect(() => {
    if (
      trackingData?.job_details?.pickup_details?.pickup_latitude &&
      trackingData?.job_details?.pickup_details?.pickup_longitude
    ) {
      setPickupLocation({
        lat: Number(trackingData.job_details.pickup_details.pickup_latitude),
        lng: Number(trackingData.job_details.pickup_details.pickup_longitude),
      });
      setCurrentPosition({
        lat: Number(trackingData.job_details.pickup_details.pickup_latitude),
        lng: Number(trackingData.job_details.pickup_details.pickup_longitude),
      });
    }
    if (
      trackingData?.job_details?.dropoff_details?.dropoff_latitude &&
      trackingData?.job_details?.dropoff_details?.dropoff_longitude
    ) {
      setDropoffLocation({
        lat: Number(trackingData.job_details.dropoff_details.dropoff_latitude),
        lng: Number(trackingData.job_details.dropoff_details.dropoff_longitude),
      });
    }
    if (
      trackingData?.job_details?.driver_details?.driver_latitude &&
      trackingData?.job_details?.driver_details?.driver_longitude
    ) {
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

      // Get the center and calculate the zoom level
      const center = bounds.getCenter();
      let zoom = calculateZoomLevel(bounds, map.getDiv());

      if (zoom > 10) {
        zoom = zoom - 1;
      }

      // Set the map center and zoom level
      map.setCenter(center);
      map.setZoom(zoom);
    }
  }, [isLoaded, map, driverPosition, pickupLocation, dropoffLocation]);

  function calculateZoomLevel(bounds, mapDiv) {
    const WORLD_DIM = { height: 256, width: 256 };
    const ZOOM_MAX = 21;

    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();

    const latFraction = Math.abs(ne.lat() - sw.lat()) / 180.0;

    const lngDiff = ne.lng() - sw.lng();
    const lngFraction = (lngDiff < 0 ? lngDiff + 360 : lngDiff) / 360.0;

    const latZoom = zoom(mapDiv.offsetHeight, WORLD_DIM.height, latFraction);
    const lngZoom = zoom(mapDiv.offsetWidth, WORLD_DIM.width, lngFraction);

    return Math.min(latZoom, lngZoom, ZOOM_MAX);
  }

  function zoom(mapPx, worldPx, fraction) {
    return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
  }

  useEffect(() => {
    if (currentPosition !== null) {
      if (map && currentPosition.lat !== 0 && currentPosition.lng !== 0) {
        map.panTo(currentPosition);
      }
    }
  }, [map, currentPosition]);

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
          center={currentPosition}
          // zoom={12}
          onLoad={(map) => setMap(map)}
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
                      scaledSize: new window.google.maps.Size(70, 70),
                    }}
                    title={trackingData?.job_details?.driver_details.name}
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
              {/* {pathCoordinates.length > 0 && currentPosition !== null && (
            <Polyline
              // path={pathCoordinates}
              path={[currentPosition, pickupLocation]}
              options={{
                strokeColor: "#0000FF",
                strokeOpacity: 1,
                strokeWeight: 2,
              }}
            />
          )} */}

              {/* Polyline for the continuous path updates */}
              {/* <Polyline
            path={pathCoordinates}
            options={{
              strokeColor: "#0000FF",
              strokeOpacity: 1,
              strokeWeight: 2,
            }}
          /> */}

              {pickupLocation !== null &&
                trackingData?.job_details?.pickup_details && (
                  <Marker
                    position={pickupLocation}
                    icon={{
                      url: PICKUP_ICON,
                      scaledSize: new window.google.maps.Size(40, 40),
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
                      scaledSize: new window.google.maps.Size(40, 40),
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
