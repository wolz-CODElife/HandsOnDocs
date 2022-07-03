import React, { useRef } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import PagesRoutes from './routes/Routes'

const App = () => {
  const homeRef = useRef(null), aboutRef = useRef(null), servicesRef = useRef(null), joinRef = useRef(null)
  return (
    <Router>
      <Header homeRef={homeRef} aboutRef={aboutRef} servicesRef={servicesRef} joinRef={joinRef} />
      <HeaderSpace />
      <PagesRoutes homeRef={homeRef} aboutRef={aboutRef} servicesRef={servicesRef} joinRef={joinRef} />
      <Footer />
    </Router>
  )
}

export default App


const HeaderSpace = styled.div`
  height: 165px;
  width: 100%;

  @media (max-width: 680px) {
    height: 90px;
  }
`