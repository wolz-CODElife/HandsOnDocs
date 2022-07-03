import React from 'react'
import styled from 'styled-components'
import { InstructionList } from '../assets/data'

const HowWeWork = () => {
  return (
    <HowWeWorkFrame>
        <h1>How It Works</h1>
        <div className="table">
            {InstructionList.map(item => (
                <div className="grid" key={item.num}>
                    <div className="num">{item.num}</div>
                    <div className="col">
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
            <img src="https://i.postimg.cc/Y2PMB577/penup.png" alt="pen up" className="hand" />
        </div>
    </HowWeWorkFrame>
  )
}

export default HowWeWork

const HowWeWorkFrame = styled.div`
    padding: 120px 220px;
    min-height: 564px;

    @media (max-width: 920px) {
        padding: 100px 100px;
    }

    @media (max-width: 680px) {
        padding: 100px 100px;
        padding-bottom: 0px;
    }

    @media (max-width: 550px) {
        padding: 100px 30px;
    }

    h1 {
        color: #3E39EC;
        text-align: left;
        margin-left: 25px;
    }
    
    .table {
        width: 750px;
        max-width: 80%;
        position: relative;

        @media (max-width: 680px) {
            max-width: 100%;
        }
        
        .grid {
            display: grid;
            grid-template-columns: 25px 1fr;
            margin: 40px 0px;

            .num {
                font-weight: 500;
                font-size: 24px;
                color: #3E39EC;
            }

            .col {
                h2 {
                    font-weight: 500;
                    font-size: 24px;
                }
            }

            @media (max-width: 680px) {
                margin-bottom: 0px;
            }
        }

        .hand {
            position: absolute;
            bottom: 0px;
            right: -130px;
            width: 130px;
            height: 300px;
            object-fit: contain;

            @media (max-width: 680px) {
                position: relative;
                height: 135px;
                width: 55px;
                left: 80%;
            }
        }
    }
`