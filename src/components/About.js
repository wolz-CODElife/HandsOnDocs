import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <AboutFrame>
        <h1>Who we are</h1>
        <p>Software engineering and technical writing under one roof. HandsOnDocs is a team of technical writers that specialise in creating high-quality technical contents. You may know us by our past works.</p>
        <a href="/#">View Portfolio</a>
    </AboutFrame>
  )
}

export default About

const AboutFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 564px;

    h1 {
        color: #3E39EC;
        text-align: center;
    }

    p {
        text-align: center;
        width: 856px;
        max-width: 80%;
        margin: 20px 0px;
    }

    a {
        color: #FFFFFF;
        background: #3E39EC;
        padding: 10px;
        border-radius: 5px;
        text-decoration: none;
        filter: brightness(0.8);
        transition: ease-in-out 0.4s;

        &:hover {
            filter: brightness(1.1);
            box-shadow: 1px 1px 2px #8a8a8a;
        }
    }
`