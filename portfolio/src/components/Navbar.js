import './Navbar.css';
import copyright from '../images/copyright.png'
import React from 'react'
import { useState, useEffect } from 'react'; 
import hamburger from '../images/hamburger.png';
import { HashLink as Link} from 'react-router-hash-link';
import gsap from 'gsap';
import { useLocation } from "react-router-dom";



export default function Navbar() {

  const location = useLocation();
  const [navbarStyle, setNavbarStyle] = useState('');

        // Check if we're on the contact page to apply a different style
        const isCPage = location.pathname === "/contact";
        const isAboutPage = location.pathname === "/about";
        const isAmaranthPage = window.location.pathname === "/amaranth";
        const isPrussianPage = window.location.pathname === "/prussian";


  useEffect(() => {

     // Check if the page has already been reloaded
     const hasReloaded = localStorage.getItem('hasReloaded');
    

    function locationChange() {
      if (location.pathname === '/contact') {
        setNavbarStyle('about-contact');
      } else if (location.pathname === '/about') {
        setNavbarStyle('nav-about-page');
        if (!hasReloaded) {
          localStorage.setItem('hasReloaded', 'true');
          window.location.reload();
        }
      } else if (location.pathname === '/amaranth') {
        setNavbarStyle('nav-amaranth-page');
        if (!hasReloaded) {
          localStorage.setItem('hasReloaded', 'true');
          window.location.reload();
        }
      } else if (location.pathname === '/prussian') {
        setNavbarStyle('prussian-nav');
        if (!hasReloaded) {
          localStorage.setItem('hasReloaded', 'true');
          window.location.reload();
        }
      } else {
        setNavbarStyle('default-style');
      }
    }

    locationChange();

    // Scroll to top when a link is clicked
    const navLinks = document.querySelectorAll('#navigationLink');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        gsap.to(window, { duration: 1, scrollTo: { y: 0, autoKill: true } });
      });
    });

    return () => {
      // Cleanup event listeners when component unmounts
      navLinks.forEach((link) => {
        link.removeEventListener('click', () => {
          gsap.to(window, { duration: 1, scrollTo: { y: 0, autoKill: true } });
        });
      });

      localStorage.removeItem('hasReloaded');
    };
  }, [location]); // Effect runs whenever location changes
  
  
      return(
        <>
        <nav className={`navigation ${isCPage ? "about-contact" : "default-contact"} ${isAboutPage ? "nav-about-page" : "default-about"} ${isAmaranthPage ? "nav-amaranth-page" : "default-amaranth"} ${isPrussianPage ? "prussian-nav" : "default-prussian"} ${navbarStyle}`}>
            <div className='navFirst navResponsive'>
              <h3><img src={copyright} alt="copyright" /><Link id='code' to='/'>Code by Tanisha</Link></h3>
            </div>

            <div className='dot'></div>
  
            <div className='navEnd'>
                <ul className="nav-list">
                    <li className='nav-item'>
                    <Link to='#work' className='link textLink'> { "/Work"}</Link>
                        <div className='d-padding'>
                            <div className='dot'></div>
                        </div>
                    </li>

                    <li className='nav-item'>
                    <Link className='link textLink' to="/about">{ "/About"}</Link>
                        <div className='d-padding'>
                          <div className='dot'></div>
                        </div>
                    </li>

                    <li className='nav-item'>
                    <Link className='link textLink' to="/contact">{ "/Contact"}</Link>
                        <div className='d-padding'>
                            <div className='dot'></div>
                        </div>
                    </li>

                    <div className='hamburger-menu'>
                      <img className="menu" src={hamburger} alt="hamburger menu"></img>
                    </div>
                </ul>
            </div>
  
        </nav>
        </>
      )
  }