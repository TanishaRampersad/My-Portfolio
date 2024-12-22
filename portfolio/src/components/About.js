import { useEffect } from "react";
import './About.css';
import tan from '../images/tan.jpg';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HashLink as Link } from "react-router-hash-link";
//import coconut from '../images/me-cocontut.jpg';
//import me from '../images/Ime.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    useEffect(() => {

        function textAnimation() {
            const text = document.querySelector('#closingTag')

           const textAnime = gsap.to(text, {y: -30, ease: 'power1.inOut', opacity:1, duration: 2})

           ScrollTrigger.create({
            trigger: text,
            animation: textAnime,
            start: 'top 90%',
            end: 'top 50%',
           })
        }

        textAnimation()


        function heading(){
            const heading = document.querySelector('.hText')

            gsap.to(heading, {
                opacity: 1,
                ease:'power1.inOut',
                duration: 1.5,
                delay: 0.5,
            })
        }

        heading()

    })

    return(
        <>
            <section className="about-me">

                <section className="about-contact-home-link">
                    <Link className="about-contact-link-to-home" to="/">
                        <h1>Go back home</h1>
                    </Link>
                </section>

                <div className="heading-aboutMe">
                    <p className="hText">My journey into the world of Product design and Front-end development began with a simple question: 
                        How do tech people design and build beautiful websites? This curiosity quickly evolved into a 
                        passion of creating fully functional user experiences.
                    </p>
                </div>
                <div className="aboutMe-first-paragraph">
                    <div className="about-flex">
                        <img src={tan} alt='Tanisha'/>
                        <div className="about-p">
                            <p>With a solid foundation in HTML, CSS, and JavaScript, I build responsive, interactive web interfaces. 
                                My current toolkit includes React for dynamic applications, Three.js for 3D experiences, and GSAP for 
                                mesmerizing animations. I thrive to transform complex ideas into intuitive and visually stunning designs.
                            </p>
                            {/* <br/> */}
                            {/* <p>
                                Design begins with the user. By deeply understanding their needs, behaviors, and emotions, 
                                I craft experiences that feel truly meaningful. 
                            </p> */}
                            {/* <br/> */}
                            <p>Every project is an opportunity to blend art and 
                                functionality—whether through thoughtful micro-interactions or animated objects and models that 
                                seamlessly complement the rest of the design, evoking emotions while serving a clear purpose.
                            </p> 
                            {/* <br/> */}
                            {/* <br/> */}
                            <p>
                                {/* Fueled by curiosity and creativity, I constantly experiment with new tools and techniques to 
                                push boundaries of interactivity, creating innovative and memorable web experiences. */}
                                Passionate about innovation, I explore new tools and techniques to push the boundaries of web interactivity.
                            </p>

                        </div>
                       
                    </div>
                </div>

                {/* <p>With a solid foundation in HTML, CSS, and JavaScript, I build responsive, interactive web interfaces. 
                    My current toolkit includes React for dynamic applications, Three.js for 3D experiences, and GSAP for 
                    mesmerizing animations. I thrive to transform complex ideas into intuitive and visually stunning designs.
                </p> */}

                {/* <p>Design begins with the user. By deeply understanding their needs, behaviors, and emotions, 
                    I craft experiences that feel truly meaningful. Every project is an opportunity to blend art and 
                    functionality—whether through thoughtful micro-interactions or animated objects and models that 
                    seamlessly complement the rest of the design, evoking emotions while serving a clear purpose. 
                    Fueled by curiosity and creativity, I constantly experiment with new tools and techniques to 
                    push boundaries of interactivity, creating innovative and memorable web experiences.
                </p> */}

                <div className="aboutMe-connection">
                    <p id='closingTag'>Let’s create something amazing together! Whether you have an idea you’d like to bring to life or just 
                        want to chat about design and development, I’d love to hear from you.
                    </p>
                </div>

            </section>
        </>
    )
    
}