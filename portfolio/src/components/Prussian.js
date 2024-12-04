import { useEffect } from "react";
import './Prussian.css'
import { HashLink as Link } from "react-router-hash-link";
import arrow from "../images/right-arrow (1).png";
import Spline from '@splinetool/react-spline';


export default function Prussian() {
    useEffect(() => {

    });

    return(
        <>
            <div className="back-button">
                <Link to="/Amaranth">
                    <button>Back to Home</button>
                </Link>
            </div>

            <section className="heading">
                <h2>Prussian & Co.</h2>

                <div className="project-about-section">
                    <div className="about-prussian">
                        <p className="role-heading">About</p>
                        <div className="horizontal-line">
                            <hr />
                        </div>
                        <p>Prussian & Co. is a creative concept for an e-commerce platform designed to sell men's suits 
                            crafted from premium fabrics. The project focuses on elegance and functionality, catering to the 
                            modern gentleman.
                        </p>
                    </div>

                    <div className="role">
                        <p className="role-heading">Role/Services</p>
                        <div className="horizontal-line">
                            <hr />
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
                        <h2>Amaranth's old website</h2>

                        <div className="top-section">
                            {/* <video id="myVideo" className="prussian-cart" src={} autoPlay loop muted playsInline >
                                Your browser does not support the video tag.
                            </video> */}
                            <p>
                                The inspiration to redesign Amaranth Spa's website came from recognizing the spa's 
                                untapped potential to better connect with both existing and new customers. The outdated 
                                design and poor usability were limiting the spa's ability to communicate its unique offerings 
                                and stand out in a competitive market. 
                            </p>
                        </div>
                    </div>

                    <br/>

                    <div className="new-prussian">
                        <h2>Amaranth's Redesign</h2>

                        <div className="prussian-top-section">
                            <div className="paragraph-prussian">
                                <p>Drawing inspiration from modern wellness brands and trends 
                                    in digital design, the objective was to create a website that not only reflected the luxurious and 
                                    tranquil experience of Amaranth Spa but also provided a seamless, engaging interface for users, 
                                    intuitive navigation, vibrant visuals, and a refreshed brand identity.</p>

                                <br/> 

                                <p>Technologies used: HTML, CSS, Javascript, React, GSAP, Figma</p>
                            </div>
                            {/* <video id="video" className="prussian-backend" src={} autoPlay loop muted playsInline >
                                Your browser does not support the video tag.
                            </video>    */}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}