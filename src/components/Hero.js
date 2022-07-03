import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <HeroFrame>
        <img src="https://i.postimg.cc/G2WM53y7/lefthand.png" alt="lefthand" className='lefthand' />
        <h1>With us there’ll be no delay. <br /> You’ll have all <span>hands on doc(s)</span></h1>
        <a href="mailto:contact@handsondocs.com?subject=Service%20Request">Request a service</a>
        <img src="https://i.postimg.cc/m25cfcDg/righthand.png" alt="righthand" className="righthand" />
    </HeroFrame>
  )
}

export default Hero

const HeroFrame = styled.div`
    background: #212121;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 110px 0px;
    position: relative;
    height: calc(100vh - 165px);

    @media (max-width: 1400px) {
        height: max-content;
        padding: 200px 0px;
    }

    @media (max-width: 500px) {
        padding: 100px 30px;
    }

    h1 {
        text-align: center;
        color: #FFFFFF;

        span {
            color: #3E39EC;
        }

        @media (max-width: 1200px) {
            width: 100%;
        }

        @media (max-width: 500px) {
            font-size: 1.5rem;
        }
    }

    a {
        color: #FFFFFF;
        background: #3E39EC;
        padding: 10px;
        border-radius: 5px;
        margin-top: 45px;
        text-decoration: none;
        filter: brightness(0.8);
        transition: ease-in-out 0.4s;

        &:hover {
            filter: brightness(1.1);
            box-shadow: 1px 1px 2px #8a8a8a;
        }
    }

    .lefthand {
        position: absolute;
        left: 0px;
        width: 30%;
        object-fit: contain;
        transition: ease-in-out 0.4s; 

        @media (max-width: 1100px) {
            width: 20%;
        }

        @media (max-width: 750px) {
            bottom: 30px;
            width: 30%;
        }

        @media (max-width: 360px) {
            bottom: 0px;
        }
    }

    .righthand {
        position: absolute;
        right: 0px;
        width: 30%;
        object-fit: contain;
        transition: ease-in-out 0.4s; 

        @media (max-width: 1100px) {
            width: 20%;
        }

        @media (max-width: 750px) {
            display: none;
        }
    }
`