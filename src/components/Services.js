import React from 'react'
import styled from 'styled-components'
import { servicesList } from '../assets/data'

const Services = () => {
  return (
    <ServicesFrame>
        <h1>What we can do for you</h1>
        <div className="grid">
            {servicesList.map(service => (
                <div className="col" key={service.title}>
                    <img src={service.icon} alt={service.title} />
                    <h1>{service.title}</h1>
                    <p>{service.text}</p>
                </div>
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

    h1 {
        color: #FFFFFF;
        text-align: center;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 50px;
        margin: 55px 0px;

        .col {
            background: #FFFFFF;
            box-shadow: 2px 2px 10px 0px #00000026;
            border-radius: 10px;
            height: 310px;
            width: 310px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 30px;

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
        }
    }
`