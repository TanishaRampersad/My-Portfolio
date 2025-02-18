import { useEffect } from "react"
import './Contact.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HashLink as Link } from "react-router-hash-link";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {




    useEffect(() => {

        function submitReload(){
            const submit = document.querySelector('.submitButton');

            submit.addEventListener('click', () => {
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            })
        }

        submitReload()

        function submitAnimation() {
            const submit = document.querySelector('.submitButton');

            const tween = gsap.to(submit, {x: 180, ease: 'power1.inOut'})

            ScrollTrigger.create({
                trigger: submit,
                start: 'top 100%',
                end: 'top 40%',
                animation: tween,
                scrub: 3,
            })
        }

        submitAnimation()
        

    })

    
    return(
        <>
            <div className="contact-link-section">
                <section className="contact-home-link">
                    <Link className="contact-link-to-home" to="/">
                        <h1>Go back home</h1>
                    </Link>
                </section>
    
                <div className="contactSection">
                    <div className="center">

                        <section className="contactSection1">
                            <div className="contact-heading">
                                <h1>Get in Touch</h1>
                            </div>

                            <form  action="https://api.web3forms.com/submit" method="POST" className="contactForm">
                                <hr className="contactLine"/>
                                <input type="hidden" name="access_key" value="f2f9a11f-6c9b-4b81-bcbe-64d4e0a4ae3e"></input>

                                <label htmlFor="userName">Your name?</label>
                                <input type="text" id="userName" name="user-name" placeholder="David Brown*"></input>

                                <hr className="contactLine"/>
                                <label htmlFor="userEmail">Your email?</label>
                                <input type="text" id="userEmail" name="user-email" placeholder="Davidbrown@gmail.com*"></input>

                                <hr className="contactLine"/>
                                <label htmlFor="userOrganisation">Name of your organisation?</label>
                                <input type="text" id="userOrganisation" name="userOrganisation" placeholder="David & Brown pty (Ltd)*"></input>

                                <hr className="contactLine"/>
                                <label htmlFor="">What type of collaboration are you interested in?</label>
                                <select  name="collaboration">
                                    <option>Hire me</option>
                                    <option>Chat with me</option>
                                    <option>Start a project together</option>
                                </select>

                                <hr className="contactLine"/>
                                <label htmlFor="userMessage">Your message?</label>
                                <textarea id="userMessage" name="message" rows="4" placeholder="Type your message here..."></textarea>

                                <div className="submit-container">
                                    <hr/>
                                    <div className='submitButton'><input type="submit" value="Submit"></input></div>
                                </div>
                            </form>
                        </section>

                        <section className="contactSection2">
                            <div className="topContact">
                                <h5>Contact details</h5>

                                <p>Tanisharampersad24@gmail.com</p>
                                <p>+27 84 827 8120</p>
                            </div>

                            <div className="bottomContact">
                                <h5>Socials</h5>
                                
                                <a className="L" target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/tanisha-rampersad-18269b14a/'>
                                    <p>Linkedin</p>
                                </a>

                                <a className="F" target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/Tanish244/'>
                                    <p>Facebook</p>
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}