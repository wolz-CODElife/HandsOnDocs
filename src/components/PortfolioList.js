import React from 'react'
import styled from 'styled-components'
import { portfolioList } from '../assets/data'

const PortfolioList = () => {
  return (
    <Frame>
        <a href="/" className='back-link'>Go Back</a>
        <div className="grid">
          {portfolioList.map(item => (
            <div className="col" key={item.title}>
              <div className="img-cropper">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="aside">
                <div className="info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="profile">
                  <div className="author">
                    <img src={item.author?.img} alt={item.author.name} className='author-img'/>
                    <p>{item.author?.name}</p>
                  </div>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src="https://i.postimg.cc/0QDvddwt/external-link.png" alt="link" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
    </Frame>
  )
}

export default PortfolioList

const Frame = styled.div`
    padding: 50px 100px;

    @media (max-width: 1400px) {
        padding: 50px 50px;
    }

    @media (max-width: 500px) {
        padding: 50px 30px;
    }

    .back-link {
    }

    .grid {
      margin-top: 50px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;

      @media (max-width: 900px) {
        grid-template-columns: 1fr;
      }

      .col{
        display: flex;
        height: 300px;
        border: 1px solid #ccc;
        border-radius: 2px;

        @media (max-width: 1300px) {
          flex-direction: column;
        }

        @media (max-width: 900px) {
          flex-direction: row;
        }

        @media (max-width: 680px) {
          flex-direction: column;
        }

        @media (max-width: 500px) {
          height: unset;
        }
        

        .img-cropper {
          width: 220px;
          min-width: 220px;
          max-width: 220px;
          height: 100%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;

          @media (max-width: 1300px) {
            height: 140px;
            width: 100%;
            max-width: 100%;
          }

          @media (max-width: 900px) {
            width: 220px;
            min-width: 220px;
            max-width: 220px;
            height: 100%;
          }

          @media (max-width: 680px) {
            height: 140px;
            width: 100%;
            max-width: 100%;
          }

          img {
            height: 100%;

            @media (max-width: 1300px) {
              width: 100%;
              height: unset;
            }

            @media (max-width: 900px) {
              width: unset;
              height: 100%;
            }

            @media (max-width: 680px) {
              width: 100%;
              height: unset;
            }
          }
        }

        .aside {
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;

          .info {
            h3 {
              font-size: 22px;
            }

            p {
              font-size: 16px;
            }
          }

          .profile {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .author {
              display: flex;
              align-items: center;

              .author-img {
                width: 40px;
                height: 40px;
                object-fit: contain;
                border-radius: 50%;
                margin-right: 10px;
              }
            }

            a {
              transition: transform ease-in-out 0.4s;

              img {
                width: 25px;
                height: 25px;
                object-fit: contain;
              }

              &:hover {
                transform: scale(1.2);
              }
            }
          }
        }
      }
    }
`