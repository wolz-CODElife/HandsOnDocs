import React from 'react'
import styled from 'styled-components'

const Header = ({homeRef, aboutRef, servicesRef, joinRef}) => {

    const handleScrollTo = (e, ref) => {
        e.preventDefault()
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

  return (
    <HeaderFrame>
        <a href="/" className='logo'>
            <img src="https://i.postimg.cc/YSC1hP4R/Whitelogo.png" alt="Whitelogo" />
        </a>
        <div className="links">
            <a href="/" onClick={(e) => handleScrollTo(e, homeRef)} >Home</a>
            <a href="/" onClick={(e) => handleScrollTo(e, aboutRef)} >About Us</a>
            <a href="/" onClick={(e) => handleScrollTo(e, servicesRef)} >Services</a>
            <a href="/" onClick={(e) => handleScrollTo(e, joinRef)} >Join Us</a>
        </div>
    </HeaderFrame>
  )
}

export default Header

const HeaderFrame = styled.div`
    background: #212121;
    padding: 68px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    z-index: 1000;
    width: 100%;

    .logo {
        img {
            height: 27px;
        }
    }

    .links {
        a {
            text-decoration: none;
            margin-left: 80px;
            color: #FFFFFF;
        }
    }
`