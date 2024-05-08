import React, { lazy, Suspense } from "react";
// Route Specific
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
// All HOME PAGE ROUTES
import HomePage from "../views/HomePage";
import CustomSpinner from "../components/spinner/CustomSpinner";
const NotFound = lazy(() => import("../views/NotFound"));
const TrackingDetails = lazy(() => import("../components/tracking/tracking-details/TrackingDetails"));

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* NotFound Route */}
        <Route path="/tracking/" element={
          <Suspense fallback={<CustomSpinner />}>
            <TrackingDetails />
          </Suspense>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
