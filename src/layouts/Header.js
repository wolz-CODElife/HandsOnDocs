import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Header = ({homeRef, aboutRef, servicesRef, joinRef}) => {
    const [navOpen, setNavOpen] = useState(false)
    const [route, setRoute] = useState(null)
    
    const handleScrollTo = (e, ref) => {
        e.preventDefault()
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
        if(navOpen) setNavOpen(false)
    }
    
    useEffect(() => {
        const thisPage = window.location.pathname.replace("/", "")
        setRoute(thisPage)
    }, [])

  return (
    <HeaderFrame>
        <a href="/" className='logo'>
            <img src="https://i.postimg.cc/YSC1hP4R/Whitelogo.png" alt="Whitelogo" />
        </a>
        {route !== 'portfolio' &&
            <div className="links">
                <a href="/" onClick={(e) => handleScrollTo(e, homeRef)} >Home</a>
                <a href="/" onClick={(e) => handleScrollTo(e, aboutRef)} >About Us</a>
                <a href="/" onClick={(e) => handleScrollTo(e, servicesRef)} >Services</a>
                <a href="/" onClick={(e) => handleScrollTo(e, joinRef)} >Join Us</a>
                <button onClick={() => setNavOpen(!navOpen)}>
                    {navOpen?
                        <img src="https://i.postimg.cc/rwMsmXMs/close.png" alt="hamburger" />
                        :
                        <img src="https://i.postimg.cc/cLnVnVHy/hamburger.png" alt="hamburger" />
                    }
                </button>
            </div>
        }
        {(navOpen && route !== "portfolio") &&
            <div className="mobile-nav">
                <a href="/" onClick={(e) => handleScrollTo(e, homeRef)} >Home</a>
                <a href="/" onClick={(e) => handleScrollTo(e, aboutRef)} >About Us</a>
                <a href="/" onClick={(e) => handleScrollTo(e, servicesRef)} >Services</a>
                <a href="/" onClick={(e) => handleScrollTo(e, joinRef)} >Join Us</a>
            </div>
        }
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

    @media (max-width: 680px) {
        padding: 34px 34px;
    }

    .logo {
        img {
            height: 27px;
            object-fit: contain;

            @media (max-width: 400px) {
                max-width:  70%;
            }
        }
    }

    .links {
        a {
            text-decoration: none;
            margin-left: 80px;
            color: #FFFFFF;

            &:hover {
                color: #3E39EA;
            }

            @media (max-width: 1100px) {
                display: none;
            }
        }

        button {
            background: none;
            border: none;
            cursor: pointer;
            display: none;

            img {
                width: 30px;
                height: 30px;
                object-fit: contain;
                transition: ease-in-out 0.4s;
            }

            @media (max-width: 1100px) {
                display: block;
            }
        }

    }

    .mobile-nav {
        position: absolute;
        top: 100px;
        left: 0px;
        height: 100vh;
        width: 100%;
        background: #212121;
        padding: 40px;
        display: none;
        transition: ease-in-out 0.4s;

        a {
            text-decoration: none;
            display: block;
            color: #FFFFFF;
            margin: 60px 0px;

            &:hover {
                color: #3E39EA;
            }
        }

        @media (max-width: 1100px) {
            display: block;
        }
    }
`