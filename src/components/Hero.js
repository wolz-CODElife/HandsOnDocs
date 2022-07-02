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

    h1 {
        width: 700px;
        text-align: center;
        color: #FFFFFF;

        span {
            color: #3E39EC;
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
    }

    .righthand {
        position: absolute;
        right: -5%;
    }
`