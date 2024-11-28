import { useEffect } from "react"
import { HashLink as Link} from 'react-router-hash-link';
//import gsap from 'gsap';
import './Amaranth.css'
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
        
        </div>
    )
}