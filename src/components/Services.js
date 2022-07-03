import React, { useState } from 'react'
import styled from 'styled-components'
import { servicesList } from '../assets/data'
import SingleService from './SingleService'

const Services = () => {
    const [currentSlide, setCurrentSlide] = useState("Product Documentations")
  return (
    <ServicesFrame>
        <h1>What we can do for you</h1>
        <div className="grid">
            {servicesList.map(service => (
                <SingleService key={service.title} service={service} updateCurrentSlide={setCurrentSlide} currentSlide={currentSlide} />
            ))}
        </div>
        <div className="points">
            {servicesList.map(({title}) => (
                <span key={title} className={currentSlide === title ? "active" : ""}></span>
            ))}
        </div>
    </ServicesFrame>
  )
}

export default Services

const ServicesFrame = styled.div`
    background: #212121;
    padding: 100px;
    min-height: 700px;

    @media (max-width: 680px) {
        padding: 50px;
        min-height: max-content;
    }

    @media (max-width: 500px) {
        padding: 30px;
        min-height: max-content;
    }

    h1 {
        color: #FFFFFF;
        text-align: center;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 50px;
        margin: 55px 0px;
        

        @media (max-width: 1250px) {
            max-width: 100%;
            padding: 70px;
            overflow-x: auto;
        }

        @media (max-width: 680px) {
            padding: 20px;
            margin: 25px 0px;
        }

        @media (max-width: 450px) {
            padding: 0px;
            grid-gap: 0px;
            margin: 0px 0px;
        }
    }

    .points {
        align-items: center;
        justify-content: center;
        display: none;

        @media (max-width: 750px) {
            display: flex;
        }


        span {
            height: 10px;
            width: 10px;
            background: #737272;
            margin: 0px 10px;
            border-radius: 50%;
            
            &.active {
                background: #FFFFFF;
            }
        }
    }
`