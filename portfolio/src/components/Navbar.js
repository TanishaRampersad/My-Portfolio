import './Navbar.css';
import copyright from '../images/copyright.png'
import React from 'react'
import { useEffect } from 'react'; 
import hamburger from '../images/hamburger.png';
import { HashLink as Link} from 'react-router-hash-link';
import gsap from 'gsap';


export default function Navbar() {

    useEffect(() => {  
      let navLink = document.querySelectorAll('#navigationLink');
  
      navLink.forEach (link => {
        link.addEventListener('click', () => {
          gsap.to(window, { duration: 1, scrollTo: { y: 0, autoKill: true } });
        })
      })
  
  
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
  
    });
  
  
      return(
        <>
          <nav>
            <div className='navFirst navResponsive'>
              <h3><img src={copyright} alt="copyright" />Code by Tanisha Rampersad</h3>
            </div>
  
            <div className='navEnd'>
                <ul>
                    <li className='nav-item'>
                    <Link id="navigationLink" className='link'to="/">Home</Link>
                        <div className='d-padding'>
                            <div className='dot'></div>
                        </div>
                    </li>
                    <li className='nav-item'>
                    <Link id="navigationLink" className='link' to="/specials">Specials</Link>
                        <div className='d-padding'>
                        <div className='dot'></div>
                        </div>
                    </li>
                    <li className='nav-item'>
                    <Link id="navigationLink" className='link' to="/packages">Packages</Link>
                        <div className='d-padding'>
                            <div className='dot'></div>
                        </div>
                    </li>
    
                    <li className='nav-item'>
                    <Link id="navigationLink" className='link' to="/massages">Massages</Link>
                        <div className='d-padding'>
                            <div className='dot'></div>
                        </div>
                    </li>
    
                    <li className='nav-item'>
                    <Link id="navigationLink" className='link' to="/contact">Contact</Link>
                        <div className='d-padding'>
                            <div className='dot'></div>
                        </div>
                    </li>

                    {/* <div className='hamburger-menu'> */}
                    <img className="menu" src={hamburger} alt="hamburger menu"></img>
                    <p className='vLine'>|</p>
                    {/* </div> */}
                </ul>
            </div>
  
        </nav>
        </>
      )
  }