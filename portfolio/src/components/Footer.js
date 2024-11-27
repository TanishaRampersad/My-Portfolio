import { useEffect } from "react"
import './Footer.css'
import messaging from '../images/chat (1).gif'
//import lottie from 'lottie-web';

export default function Footer() {
    useEffect(() => {

    // Load the Lottie animation
    // lottie.loadAnimation({
    //     container: document.getElementById('animated-icon'), // The container element
    //     renderer: 'svg', // Render as SVG
    //     loop: true,      // Loop the animation
    //     autoplay: true,  // Start automatically
    //     path: '../images/connect.json' // Path to your Flaticon JSON file
    // });

    }, [])
         
        return(
            <>
            <div className="footer">
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

                    <div className="socials">
                        <div className="socials-section">
                            <h4>SOCIALS</h4>
                            <div className="socials-list">
                                <p id='social-link'>Linkedin</p>
                                <p id='social-link'>Facebook</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
               
            </>
        )
}