import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import useElementOnScreen from '../assets/useElementOnScreen';

const SingleService = ({service, updateCurrentSlide, currentSlide}) => {
    const slideRef = useRef(null);
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1
    }
    const isVisibile = useElementOnScreen(options, slideRef)

    useEffect(() => {
        if (isVisibile) {
          if (!(currentSlide === service.title)) { 
            updateCurrentSlide(service.title)
          }
        }
      }, [isVisibile, currentSlide, service, updateCurrentSlide])
  return (
    <Col ref={slideRef}>
        <img src={service.icon} alt={service.title} />
        <h1>{service.title}</h1>
        <p>{service.text}</p>
    </Col>
  )
}

export default SingleService

const Col = styled.div`
    background: #FFFFFF;
    box-shadow: 2px 2px 10px 0px #00000026;
    border-radius: 10px;
    height: 310px;
    width: 310px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;

    @media (max-width: 450px) {
        transform: scale(0.7);
    }

    img {
        width: 70px;
        height: 70px;
        object-fit: contain;
    }

    h1 {
        text-align: center;
        color: #3E3E3E;
        font-weight: 500;
        font-size: 21px;
        margin: 10px 0px;
    }
    
    p {
        color: #3E3E3E;
        text-align: center;
    }
`