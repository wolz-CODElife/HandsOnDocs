import React from 'react'
import styled  from 'styled-components'

const Footer = () => {
  return (
    <FooterFrame>
      <a href="/" className='logo'>
          <img src="https://i.postimg.cc/YSC1hP4R/Whitelogo.png" alt="Whitelogo" />
      </a>
      <div className="links">
        <a href="mailto:contact@handsondocs.com?subject=Service%20Request">Start a project</a>
      </div>

      <p>FOLLOW US:</p>
      <div className="social">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <img src="https://i.postimg.cc/4xtymJPs/linkedin.png" alt="linkedin" />
        </a>
        <a href="https://twitter.com/handsondocs" target="_blank" rel="noopener noreferrer">
          <img src="https://i.postimg.cc/CKpyJ88n/twitter.png" alt="twitter" />
        </a>
      </div>
    </FooterFrame>
  )
}

export default Footer

const FooterFrame = styled.div`
  background: #3E39EA;
  padding: 58px 66px;

  @media (max-width: 680px) {
    padding: 29px 33px;
  }

  .logo {
      img {
          height: 27px;
      }
  }

  .links {
    display: flex;

    a {
      color: #FFFFFF;
      padding: 10px;
      border: 1px solid #FFFFFF;
      border-radius: 5px;
      margin-top: 45px;
      text-decoration: none;
      filter: brightness(0.8);
      transition: ease-in-out 0.4s;
      margin-right: 30px;

      &:hover {
          filter: brightness(1.1);
          box-shadow: 1px 1px 2px #8a8a8a;
      }
    }
  }

  p {
    color: #FFFFFF;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .social {
    a {
      img {
        width: 48px;
        height: 48px;
        margin-right: 10px;
      }
    }
  }
`