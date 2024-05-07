import React from "react";
// Route Specific
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

// All HOME PAGE ROUTES
import ProductLandingDark from "../views/all-home-pages/ProductLandingDark";
// import ComingSoon from "../views/all-home-pages/ComingSoon";

// All INNER PAGES ROUTES START FROM BELLOW

// PAGES DROPDOWN ALL ROUTES
// Team inner pages

// SERVICE PAGES ROUTES

// Not Found Page
import NotFound from "../views/NotFound";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<ProductLandingDark />} />

        {/* Pages Dropdown Routes */}
       

        {/* Service inner pages */}
        {/* inner Portfolio pages Dropdown   */}

       
        <Route path="*" element={<NotFound />} />

        {/* NotFound Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
