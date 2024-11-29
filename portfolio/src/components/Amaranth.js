import { useEffect } from "react"
import { HashLink as Link} from 'react-router-hash-link';
//import gsap from 'gsap';
import './Amaranth.css'
import arrow from '../images/right-arrow (1).png'
//import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function Amaranth() {
    useEffect(() => {
    })

    return(
        <div className="amaranth">
            <section className="home-link">
                <Link>
                    <h1>Back to Home</h1>
                </Link>
            </section>


            <section className="heading">
                <h2>Amaranth</h2>

                <div className="role">
                    <p className="role-heading">Role/Services</p>

                    <div className="horizontal-line">
                        <hr/>
                    </div>
                    <p className="role-text">Design and Development</p>
                </div>


                <div className="visit-site">
                    <div className="site">Live Site<img className="arrow" src={arrow}alt='arrow'/></div>
                </div>
            </section>
        
        </div>
    )
}