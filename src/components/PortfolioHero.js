import React from 'react'
import styled from 'styled-components'

const PortfolioHero = () => {
  return (
    <HeroFrame>
        <img src="https://i.postimg.cc/YSC1hP4R/Whitelogo.png" alt="logo" />
    </HeroFrame>
  )
}

export default PortfolioHero

const HeroFrame = styled.div`
    background-color: #3E39EC;
    background-image: url('https://i.postimg.cc/V6n5bghL/portfolio.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 680px) {
        height: 30vh;
    }

    img {
        width: 500px;
        height: 100px;
        max-width: 80%;
        object-fit: contain;
    }
`