// import './Navbar.css';
import copyright from '../images/copyright.png'
import React from 'react'
import { useEffect } from 'react'; 
import hamburger from '../images/hamburger.png';
import { HashLink as Link} from 'react-router-hash-link';
import gsap from 'gsap';
import { useLocation } from "react-router-dom";



export default function Navbar() {

  const location = useLocation();

        // Check if we're on the contact page to apply a different style
        const isCPage = location.pathname === "/contact";

  useEffect(() => {

    // navigation links
    let navLink = document.querySelectorAll('#navigationLink');

    // Add click event listener to each navigation link
    navLink.forEach((link) => {
      link.addEventListener('click', () => {
        // Scroll to the top of the page
        gsap.to(window, { duration: 1, scrollTo: { y: 0, autoKill: true } });
      });
    });

    // Hover dot effect on the navigation section
    let navText = document.querySelectorAll('#navigationLink');
    let dots = document.querySelectorAll('.dot');

    navText.forEach((nav, index) => {
      const dot = dots[index];

      nav.addEventListener('mouseenter', () => {
        dot.classList.add('dot--visible');
      });

      nav.addEventListener('mouseleave', () => {
        dot.classList.remove('dot--visible');
      });
    });

    // Cleanup event listeners when component unmounts
    return () => {
      navLink.forEach((link) => {
        link.removeEventListener('click', () => {
          gsap.to(window, { duration: 1, scrollTo: { y: 0, autoKill: true } });
        });
      });

      navText.forEach((nav, index) => {
        const dot = dots[index];
        nav.removeEventListener('mouseenter', () => {
          dot.classList.add('dot--visible');
        });
        nav.removeEventListener('mouseleave', () => {
          dot.classList.remove('dot--visible');
        });
      });
    };
  }, []);
  
  
      return(
        <>
          <nav className='navigation' id={isCPage ? "about-contact" : "default-contact"}>
            <div className='navFirst navResponsive'>
              <h3><img src={copyright} alt="copyright" /><Link id='code' to='/'>Code by Tanisha</Link></h3>
            </div>

            <div className='dot'></div>
  
            <div className='navEnd'>
                <ul>
                    <li className='nav-item'>
                    <Link to='#work' className='link'> { "/Work"}</Link>
                        <div className='d-padding'>
                            <div className='dot'></div>
                        </div>
                    </li>
                    <li className='nav-item'>
                    <Link className='link' to="/about">{ "/About"}</Link>
                        <div className='d-padding'>
                        <div className='dot'></div>
                        </div>
                    </li>
                    <li className='nav-item'>
                    <Link className='link' to="/contact">{ "/Contact"}</Link>
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