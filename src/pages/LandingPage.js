import React from 'react'
import styled from 'styled-components'
import About from '../components/About'
import Hero from '../components/Hero'
import HowWeWork from '../components/HowWeWork'
import Services from '../components/Services'

const LandingPage = ({homeRef, aboutRef, servicesRef, joinRef}) => {
  return (
    <LandingFrame>
      <div ref={homeRef}>
        <Hero />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={joinRef}>
        <HowWeWork />
      </div>
    </LandingFrame>
  )
}

export default LandingPage

const LandingFrame = styled.div`

`

