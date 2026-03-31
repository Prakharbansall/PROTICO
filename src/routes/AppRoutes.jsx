import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Company from '../pages/Company'
import Solutions from '../pages/Solutions'
import Legal from '../pages/Legal'
import Perspectives from '../pages/Perspectives'
import ReachUs from '../pages/ReachUs'
import NotFound from '../pages/NotFound'

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}
function AppRoutes() {
  return (
<>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Company />} />
      <Route path="/services" element={<Solutions />} />
      <Route path='/insights' element={<Perspectives/>}/>
      <Route path='/contact' element={<ReachUs/>}/>
      <Route path="/legal" element={<Legal />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default AppRoutes