import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';  
import Footer from './Footer'; 
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { useLocation } from 'react-router-dom';
import './Layout.css';

//import MouseFollower from "mouse-follower";
//import 'mouse-follower/dist/mouse-follower.min.css';

gsap.registerPlugin(ScrollToPlugin);



export default function Layout() {
  const { pathname } = useLocation();


  useEffect(() => {

    function Scroll(){
      if(pathname === '/about'){
        document.querySelector('.about-me').scrollIntoView({
          behavior: 'smooth', // Smooth scrolling
          block: 'start',     // Align to the top of the section
        });
      }
    }

    Scroll()

    window.scrollTo({ top: 0, behavior: 'smooth' });

  }, [pathname])


  return (
    <div className='layout'>
      <header>
        <Navbar />
      </header>

      <div className='main'>
        <Outlet />  {/* This renders the current route's component */}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}