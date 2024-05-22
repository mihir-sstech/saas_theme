import React, { lazy, Suspense } from "react";
// Route Specific
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
// All HOME PAGE ROUTES
import HomePage from "../views/HomePage";
import { ToastContainer } from "react-toastify";
import CustomLoader from "../components/spinner/CustomLoader";
const NotFound = lazy(() => import("../views/NotFound"));
const TrackingDetails = lazy(() => import("../components/tracking/tracking-details/TrackingDetails"));

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ color: "white" }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* NotFound Route */}
        <Route path="/tracking" element={
          <Suspense fallback={<CustomLoader />}>
            <TrackingDetails />
          </Suspense>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
