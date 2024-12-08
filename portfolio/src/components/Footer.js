import { useEffect } from "react"
import './Footer.css'
import messaging from '../images/chat (1).gif'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from "react-router-dom";
//import lottie from 'lottie-web';

gsap.registerPlugin(ScrollTrigger);



export default function Footer() {

    const location = useLocation();

        // Check if we're on the contact page to apply a different style
        const isContactPage = location.pathname === "/contact";

        
    useEffect(() => {

        

    // Load the Lottie animation
    // lottie.loadAnimation({
    //     container: document.getElementById('animated-icon'), // The container element
    //     renderer: 'svg', // Render as SVG
    //     loop: true,      // Loop the animation
    //     autoplay: true,  // Start automatically
    //     path: '../images/connect.json' // Path to your Flaticon JSON file
    // });


    function getInTouch(){

        const getInTouch = document.querySelector('.get-in-touch');
    
        gsap.fromTo(getInTouch, {y: "0"}, {y: "-15%", ease: "power1.inOut",
    
        scrollTrigger: {
          trigger: getInTouch,
          start: 'top 80%',
          end: "top 60%",
          scrub: 3, //5 second delay
          //markers: true,
        }}
        );
      }
      getInTouch()

    }, [])
         
        return(
            <>
            <div id={isContactPage ? "about-footer" : "default-footer"} className="footer">
                {/* <div id="animated-icon" style={{ width: '200px', height: '200px' }}></div> */}

                <div className="footer-section">
                    <div className="connect">
                        <img src={messaging} alt='messaging' style={{ width: '100px', height: '100px'}}/>
                        <h1>Let's Connect</h1>
                    </div>


                    <div className="connect-button">
                        <hr/>
                        <div className="flex-end">
                            <div className="get-in-touch flex-end">Get in touch</div>
                        </div>
                    </div>

                    <div className="connect-details">
                        <div className="email">
                            <a href="mailto:Tanisharampersad24@gmail.com" className="email-button">Tanisharampersad24@gmail.com</a>
                        </div>
                        <div className="number">
                            <a href="tel:+27 84 827 8120">+27 84 827 8120</a>
                        </div>
                    </div>

                    <div className="socials">
                        <div className="socials-section">
                            <h4>SOCIALS</h4>
                            <div className="socials-list">
                                <a className="linkedin" target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/tanisha-rampersad-18269b14a/'>
                                    <p id='social-link linked'>Linkedin</p>
                                </a>
                                
                                <a className="facebook" target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/Tanish244/'>
                                    <p id='social-link'>Facebook</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
               
            </>
        )
}