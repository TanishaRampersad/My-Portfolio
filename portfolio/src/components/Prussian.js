import { useEffect } from "react";
import './Prussian.css'
import { HashLink as Link } from "react-router-hash-link";
import arrow from "../images/right-arrow (1).png";
import Spline from '@splinetool/react-spline';
import cart from '../images/Prussian-cart.mp4';
import backend from '../images/Prussian-backend.mp4';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
//import LocomotiveScroll from 'locomotive-scroll';
//import 'locomotive-scroll/src/locomotive-scroll.css';

gsap.registerPlugin(ScrollTrigger);



export default function Prussian() {
    useEffect(() => {

        // Play/pause video when it's in view
        let isVideoPlaying = false; // To track if any video is currently playing

        gsap.to("#prussian", {
            scrollTrigger: {
                trigger: "#prussian",    
                start: "top 80%",       
                end: "bottom 20%",         
                onEnter: () => {
                    const video = document.getElementById("prussian");
                    if (video && video.paused && !isVideoPlaying) video.play(); // Play video when it's in view
                    isVideoPlaying = true;
                },
                onEnterBack: () => {
                    const video = document.getElementById("prussian");
                    if (video && video.paused && !isVideoPlaying) video.play(); // Play video when scrolling back into view
                    isVideoPlaying = true;
                },
                onLeave: () => {
                    const video = document.getElementById("prussian");
                    if (video && !video.paused) {
                        video.pause();   // Pause the video when it's out of view
                        isVideoPlaying = false; // Mark video as paused
                    }
                    if (video) video.currentTime = 0;  // Reset the video to the start when it leaves the view
                },
                onLeaveBack: () => {
                    const video = document.getElementById("prussian");
                    if (video && !video.paused) {
                        video.pause();   // Pause the video when it's out of view
                        isVideoPlaying = false;
                    }
                    if (video) video.currentTime = 0; 
                },
                onUpdate: (self) => {
                    console.log("Scroll progress:", self.progress); // Custom logic
                    // You can also update other elements here
                  },
            }
        });

        // Play/pause video when it's in view

        gsap.to("#backend-prussian", {
            scrollTrigger: {
                trigger: "#backend-prussian",    
                start: "top 80%",       
                end: "bottom 20%",         
                onEnter: () => {
                    const video = document.getElementById("backend-prussian");
                    if (video && video.paused && !isVideoPlaying) video.play(); 
                    isVideoPlaying = true;
                },
                onEnterBack: () => {
                    const video = document.getElementById("backend-prussian");
                    if (video && video.paused && !isVideoPlaying) video.play();
                    isVideoPlaying = true;
                },
                onLeave: () => {
                    const video = document.getElementById("backend-prussian");
                    if (video && !video.paused) {
                        video.pause();  
                        isVideoPlaying = false;
                    }
                    if (video) video.currentTime = 0; 
                },
                onLeaveBack: () => {
                    const video = document.getElementById("backend-prussian");
                    if (video && !video.paused) {
                        video.pause(); 
                        isVideoPlaying = false;
                    }
                    if (video) video.currentTime = 0; 
                },
                onUpdate: (self) => {
                    console.log("Scroll progress:", self.progress); // Custom logic
                    // You can also update other elements here
                  },
            }
        });



        //Horizontal line animation
        const horizontalLine = document.querySelectorAll('.firstLine')

        if (horizontalLine.length > 0) {
            horizontalLine.forEach((line) => {
                // Set initial width to 50%
                gsap.set(line, { width: '50%' });

                // Animate width from 50% to 100% with a loop
                gsap.fromTo(
                    line,
                    { width: '50%' },
                    {
                        width: '80%',
                        ease: 'power1.inOut',
                        duration: 3,
                        repeat: -1,
                        yoyo: true,
                        stagger: 2,
                        delay: 2,
                    }
                );
            });
        }


        const secondLine = document.querySelectorAll('.secondLine')

        // Ensure there are <hr> elements to animate
        if (secondLine.length > 0) {
            secondLine.forEach((line) => {
                // Set initial width to 50%
                gsap.set(line, { width: '50%' });

                // Animate width from 50% to 100% with a loop
                gsap.fromTo(
                    line,
                    { width: '30%' },
                    {
                        width: '80%',
                        ease: 'power1.inOut',
                        duration: 3,
                        repeat: -1,
                        yoyo: true,
                        // stagger: { amount: 2, from: "start", grid: "auto" }
                    }
                );
            });
        }


        function visitSite(){

            const visitSite = document.querySelector('.visit-site');
        
            gsap.fromTo(visitSite, {y: "0"}, {y: "-60%", ease: "power1.inOut",
        
            scrollTrigger: {
              trigger: visitSite,
              start: 'top 80%',
              end: "top 10%",
              scrub: 2, //5 second delay
              //markers: true,
              onUpdate: (self) => {
                console.log("Scroll progress:", self.progress); // Custom logic
                // You can also update other elements here
              },
            }}
            );
          }
          visitSite()


          let ticking = false;

            window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                // Your scroll-related logic here
                ticking = false;
                });

                ticking = true;
            }
            });


            // const scrollContainer = document.querySelector(".smoothScrollContainer");

            // const locomotiveScroll = new LocomotiveScroll({
            //   el: scrollContainer,
            //   smooth: true,
            // });

            // ScrollTrigger.scrollerProxy(".smoothScrollContainer", {
            //     scrollTop(value) {
            //       return arguments.length
            //         ? locomotiveScroll.scrollTo(value, { duration: 0 })
            //         : locomotiveScroll.scroll.instance.scroll.y;
            //     },
            //     getBoundingClientRect() {
            //       return {
            //         top: 0,
            //         left: 0,
            //         width: window.innerWidth,
            //         height: window.innerHeight
            //       };
            //     },
            //     pinType: document.querySelector(".smoothScrollContainer").style.transform
            //       ? "transform"
            //       : "fixed"
            //   });
              
            //   locomotiveScroll.on("scroll", ScrollTrigger.update);
            //   ScrollTrigger.refresh();
              

        
    });

    return(
        <div className="smoothScrollContainer">
            <div className="back-button">
                <section className="home-link">
                    <Link className="link-to-home" to="/">
                        <h1>Go back home</h1>
                    </Link>
                </section>
            </div>

            <section className="heading">
                <h2>Prussian & Co.</h2>

                <div className="project-about-section">
                    <div className="about-prussian">
                        <p className="role-heading">About</p>
                        <div className="horizontal-line">
                            <hr className="firstLine" />
                        </div>
                        <p>Prussian & Co. is a creative concept for an e-commerce platform designed to sell men's suits 
                            crafted from premium fabrics. The project focuses on elegance and functionality, catering to the 
                            modern gentleman.
                        </p>
                    </div>
ss
                    <div className="role">
                        <p className="role-heading">Role/Services</p>
                        <div className="horizontal-line">
                            <hr className="secondLine"  />
                        </div>
                        <p className="role-text">Development</p>
                    </div>
                </div>

                <div className="visit-site">
                    <div className="site">
                        <p>Live Site</p>
                        <img className="arrow" src={arrow} alt="arrow" />
                    </div>
                </div>
            </section>

            <section className="prussian-model">
                <main>
                    <Spline className="spline-prussian"
                        scene="https://prod.spline.design/IOVu1LriQt8hUyTz/scene.splinecode" 
                    />
                </main>
            </section>


            <section className="prussian-problem">
                <div className="prussian-text">
                    <div className="old-prussian">
                        <h2>Prussian & Co. Shopping Cart</h2>

                        <div className="top-section">
                            <video id="prussian" className="prussian-cart" src={cart} autoPlay loop muted playsInline >
                                Your browser does not support the video tag.
                            </video>
                            <p>
                            Developed a dynamic cart system, allowing users to seamlessly add, 
                            update, and remove items from their cart. Implemented localStorage functionality to persist cart data, 
                            ensuring items remain available across pages and sessions. This feature solves the problem of 
                            retaining user-selected items when navigating or refreshing the site, enhancing the overall shopping 
                            experience and usability.
                            </p>
                        </div>
                    </div>

                    <br/>

                    <div className="new-prussian">
                        <h2>Prussian & Co. Backend Checkout System</h2>

                        <div className="prussian-top-section">
                            <div className="paragraph-prussian">
                                <p>Took the initiative to explore backend development by using Node.js and Express to create a 
                                    seamless checkout experience. Integrated Stripe to handle secure payment processing and added 
                                    a custom thank-you page to enhance user satisfaction after purchase. 
                                </p>

                                <br/> 

                                <p>Technologies used: HTML, CSS, Javascript, Node.js, Express, Stripe</p>
                            </div>
                            <video id="backend-prussian" className="prussian-backend" src={backend} autoPlay loop muted playsInline >
                                Your browser does not support the video tag.
                            </video>   
                        </div>
                    </div>


                    <section className="prussian-responsive-layout">
                        <div className="prussian-mobile-devices">
                            <img alt=''/>
                            <img alt=''/>
                            <img alt=''/>
                        </div>
                    </section>

                </div>
            </section>
        </div>
    )
}