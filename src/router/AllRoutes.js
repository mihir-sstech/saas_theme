import React from "react";
// Route Specific
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

// All HOME PAGE ROUTES
import ProductLandingDark from "../views/all-home-pages/ProductLandingDark";
import ComingSoon from "../views/all-home-pages/ComingSoon";

// All INNER PAGES ROUTES START FROM BELLOW

// PAGES DROPDOWN ALL ROUTES
// Team inner pages
import Team1 from "../views/inner-pages/pages/team/Team1";
import Team2 from "../views/inner-pages/pages/team/Team2";
import Team3 from "../views/inner-pages/pages/team/Team3";
import Team4 from "../views/inner-pages/pages/team/Team4";
import Team5 from "../views/inner-pages/pages/team/Team5";
import Team6 from "../views/inner-pages/pages/team/Team6";
import TeamDetailsV1 from "../views/inner-pages/pages/team/TeamDetailsV1";
import TeamDetailsV2 from "../views/inner-pages/pages/team/TeamDetailsV2";
import Faq from "../views/inner-pages/pages/Faq";
import FaqDetails from "../views/inner-pages/pages/FaqDetails";

// Contact us inner pages
import ContactCustomerSupport from "../views/inner-pages/pages/contact/ContactCustomerSupport";
import ContactEventOrganizer from "../views/inner-pages/pages/contact/ContactEventOrganizer";
import ContactProjectManagement from "../views/inner-pages/pages/contact/ContactProjectManagement";
import ContactDocumentation from "../views/inner-pages/pages/contact/ContactDocumentation";

// About us inner pages
import AboutCustomerSupport from "../views/inner-pages/pages/about/AboutCustomerSupport";
import AboutEventOrganizer from "../views/inner-pages/pages/about/AboutEventOrganizer";
import AboutProjectManagement from "../views/inner-pages/pages/about/AboutProjectManagement";
import AboutDocumentation from "../views/inner-pages/pages/about/AboutDocumentation";

// Pricing inner pages
import PricingCustomerSupport from "../views/inner-pages/pages/pricing/PricingCustomerSupport";
import PricingEventOrganizer from "../views/inner-pages/pages/pricing/PricingEventOrganizer";
import PricingProjectManagement from "../views/inner-pages/pages/pricing/PricingProjectManagement";

// FEATURES DROPDOWN ALL ROUTES
import Login from "../views/inner-pages/features/miscellaneous/Login";
import SignUp from "../views/inner-pages/features/miscellaneous/SignUp";
import TermsConditions from "../views/inner-pages/features/miscellaneous/TermsConditions";
import SolutionMangement from "../views/inner-pages/features/SolutionMangement";
import ProductCustomerSupport from "../views/inner-pages/features/ProductCustomerSupport";
import FeaturesCustomerSupport from "../views/inner-pages/features/FeaturesCustomerSupport";

// SERVICE PAGES ROUTES
import ServiceV1 from "../views/inner-pages/service/ServiceV1";
import ServiceV2 from "../views/inner-pages/service/ServiceV2";
import ServiceV3 from "../views/inner-pages/service/ServiceV3";
import ServiceV4 from "../views/inner-pages/service/ServiceV4";
import ServiceDetails from "../views/inner-pages/service/ServiceDetails";

// DOCS DROPDOWN ALL ROUTES
import DocFullWidth from "../views/inner-pages/docs/DocFullWidth";
import DocFullWidthBanner from "../views/inner-pages/docs/DocFullWidthBanner";
import DocBox from "../views/inner-pages/docs/DocBox";
import DocBoxWithBanner from "../views/inner-pages/docs/DocBoxWithBanner";
import Changelog from "../views/inner-pages/docs/Changelog";

// PORTFOLIO DROPDOWN ALL ROUTES
import PortfolioV1 from "../views/inner-pages/portfolio/PortfolioV1";
import PortfolioV2 from "../views/inner-pages/portfolio/PortfolioV2";
import PortfolioV3 from "../views/inner-pages/portfolio/PortfolioV3";
import PortfolioV4 from "../views/inner-pages/portfolio/PortfolioV4";
import PortfolioV5 from "../views/inner-pages/portfolio/PortfolioV5";
import PortfolioDetailsV1 from "../views/inner-pages/portfolio/PortfolioDetailsV1";

// BLOGS DROPDOWN ALL ROUTES
import BlogV1 from "../views/inner-pages/blog-pages/BlogV1";
import BlogV2 from "../views/inner-pages/blog-pages/BlogV2";
import BlogV3 from "../views/inner-pages/blog-pages/BlogV3";
import BlogV4 from "../views/inner-pages/blog-pages/BlogV4";
import BlogV5 from "../views/inner-pages/blog-pages/BlogV5";
import BlogV6 from "../views/inner-pages/blog-pages/BlogV6";
import BlogDetails from "../views/inner-pages/blog-pages/BlogDetails";

// Not Found Page
import NotFound from "../views/NotFound";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<ProductLandingDark />} />
        <Route path="/coming-soon" element={<ComingSoon />} />

        {/* Pages Dropdown Routes */}
        <Route path="/team-1" element={<Team1 />} />
        <Route path="/team-2" element={<Team2 />} />
        <Route path="/team-3" element={<Team3 />} />
        <Route path="/team-4" element={<Team4 />} />
        <Route path="/team-5" element={<Team5 />} />
        <Route path="/team-6" element={<Team6 />} />
        <Route path="/team-details-v1" element={<TeamDetailsV1 />} />
        <Route path="/team-details-v2" element={<TeamDetailsV2 />} />
        {/* faq inner pages */}
        <Route path="/faq" element={<Faq />} />
        <Route path="/faq-details" element={<FaqDetails />} />
        {/* contact us inner pages */}
        <Route path="/contact-cs" element={<ContactCustomerSupport />} />
        <Route path="/contact-eo" element={<ContactEventOrganizer />} />
        <Route path="/contact-pm" element={<ContactProjectManagement />} />
        <Route path="/contact-doc" element={<ContactDocumentation />} />
        {/* about us inner pages */}
        <Route path="/about-cs" element={<AboutCustomerSupport />} />
        <Route path="/about-eo" element={<AboutEventOrganizer />} />
        <Route path="/about-pm" element={<AboutProjectManagement />} />
        <Route path="/about-doc" element={<AboutDocumentation />} />
        {/* pricing inner pages */}
        <Route path="/pricing-cs" element={<PricingCustomerSupport />} />
        <Route path="/pricing-eo" element={<PricingEventOrganizer />} />
        <Route path="/pricing-pm" element={<PricingProjectManagement />} />

        {/* Feature Dropdown Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/solution-management" element={<SolutionMangement />} />
        <Route
          path="/product-customer-support"
          element={<ProductCustomerSupport />}
        />
        <Route
          path="/features-customer-support"
          element={<FeaturesCustomerSupport />}
        />

        {/* Service inner pages */}
        <Route path="/service-v1" element={<ServiceV1 />} />
        <Route path="/service-v2" element={<ServiceV2 />} />
        <Route path="/service-v3" element={<ServiceV3 />} />
        <Route path="/service-v4" element={<ServiceV4 />} />
        <Route path="/service-details" element={<ServiceDetails />} />

        {/* inner pages Docs   */}
        <Route path="/doc-full-width" element={<DocFullWidth />} />
        <Route path="/doc-full-width-banner" element={<DocFullWidthBanner />} />
        <Route path="/doc-box" element={<DocBox />} />
        <Route path="/doc-box-with-banner" element={<DocBoxWithBanner />} />
        <Route path="/changelog" element={<Changelog />} />

        {/* inner Portfolio pages Dropdown   */}
        <Route path="/classic-style" element={<PortfolioV1 />} />
        <Route path="/grid-two-col" element={<PortfolioV2 />} />
        <Route path="/grid-three-col" element={<PortfolioV3 />} />
        <Route path="/gallery-slider" element={<PortfolioV4 />} />
        <Route path="/grid-single" element={<PortfolioV5 />} />
        <Route path="/portfolio-details-v1" element={<PortfolioDetailsV1 />} />

        {/* inner Blog pages Dropdown   */}
        <Route path="/blog-v1" element={<BlogV1 />} />
        <Route path="/blog-v2" element={<BlogV2 />} />
        <Route path="/blog-v3" element={<BlogV3 />} />
        <Route path="/blog-v4" element={<BlogV4 />} />
        <Route path="/blog-v5" element={<BlogV5 />} />
        <Route path="/blog-v6" element={<BlogV6 />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />

        {/* NotFound Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
