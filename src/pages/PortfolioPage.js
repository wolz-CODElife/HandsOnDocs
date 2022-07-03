import React from 'react'
import styled from 'styled-components'
import PortfolioHero from '../components/PortfolioHero'
import PortfolioList from '../components/PortfolioList'

const PortfolioPage = () => {
  return (
    <PortfolioFrame>
      <PortfolioHero />
      <PortfolioList />
    </PortfolioFrame>
  )
}

export default PortfolioPage

const PortfolioFrame = styled.div`

`