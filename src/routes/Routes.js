import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'

const PagesRoutes = ({homeRef, aboutRef, servicesRef, joinRef}) => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage homeRef={homeRef} aboutRef={aboutRef} servicesRef={servicesRef} joinRef={joinRef}  />} />
    </Routes>
  )
}

export default PagesRoutes