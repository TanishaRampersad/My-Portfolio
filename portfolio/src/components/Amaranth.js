import { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Amaranth.css";
import arrow from "../images/right-arrow (1).png";
import amaranthVideo from '../images/oldAmaranth.mp4';
import amarantBooking from '../images/amaranth-booking.mp4'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'
import Spline from '@splinetool/react-spline';

gsap.registerPlugin(ScrollTrigger);

export default function Amaranth() {
    useEffect(() => {
        // Dynamically load the script
        const script = document.createElement('script');
        script.src = "https://unpkg.com/@splinetool/viewer@1.9.46/build/spline-viewer.js";
        script.type = 'module';
        script.async = true;
        document.body.appendChild(script);

        // //Model render
        // const canvas = document.querySelector(".WebGL");

        // // Scene
        // const scene = new THREE.Scene();
        // scene.background = new THREE.Color('rgb:255, 255, 255');

        // // Sizes
        // const sizes = {
        //     width: window.innerWidth,
        //     height: 800,
        // };

        // // Camera
        // const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
        // camera.position.z = 1.5;
        // scene.add(camera);

        // camera.aspect = sizes.width / sizes.height
        // camera.updateProjectionMatrix() 

        // // Renderer
        // const renderer = new THREE.WebGLRenderer({ 
        //     canvas,
        //     antialias: true  //Anti-aliasing smooths out these jagged edges by blending the colors of the edge pixels with the background. 
        // });
        // renderer.setSize(sizes.width, sizes.height);
        // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3));

      


        //  // Lighting
        //  const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // White light, intensity 1
        //  directionalLight.position.set(2, 2, 3); // Front and slightly above
        //  scene.add(directionalLight);

        //  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        //  scene.add(ambientLight);


        // // Load GLTF Model
        // const loader = new GLTFLoader();
        // loader.load(
        //     "/amaranth_imac.gltf", // Correct path for your model
        //     (gltf) => {
        //         const model = gltf.scene;
        //         scene.add(model);

        //         // Model scale and position
        //         model.scale.set(6, 6, 1);
        //         model.position.set(0, 2.2, 0);

        //         renderer.render(scene, camera);
        //     },
        //     undefined,
        //     (error) => {
        //         console.error("An error occurred while loading the model:", error);
        //     }
        // );

        // // Handle resizing
        // const handleResize = () => {
        //     sizes.width = window.innerWidth;
        //     sizes.height = 800;

        //     camera.aspect = sizes.width / sizes.height;
        //     camera.updateProjectionMatrix();   //when the window is resized this helps it resize

        //     renderer.setSize(sizes.width, sizes.height);
        // };

        // window.addEventListener("resize", handleResize);

        // return () => {
        //     window.removeEventListener("resize", handleResize);
        // };


         // Play/pause video when it's in view
         gsap.to("#myVideo", {
            scrollTrigger: {
                trigger: "#myVideo",    
                start: "top 80%",       
                end: "bottom 20%",         
                onEnter: () => {
                    const video = document.getElementById("myVideo");
                    if (video.paused) video.play(); // Play video when it's in view
                },
                onEnterBack: () => {
                    const video = document.getElementById("myVideo");
                    if (video.paused) video.play(); // Play video when scrolling back into view
                },
                onLeave: () => {
                    const video = document.getElementById("myVideo");
                    if (!video.paused) {
                        video.pause();   // Pause the video when it's out of view
                    }
                    video.currentTime = 0;  // Reset the video to the start when it leaves the view
                },
                onLeaveBack: () => {
                    const video = document.getElementById("myVideo");
                    if (!video.paused) {
                        video.pause();   // Pause the video when it's out of view
                    }
                    video.currentTime = 0; 
                }
            }
        });

        // Play/pause video when it's in view
        gsap.to("#video", {
            scrollTrigger: {
                trigger: "#video",    
                start: "top 80%",       
                end: "bottom 20%",         
                onEnter: () => {
                    const video = document.getElementById("video");
                    if (video.paused) video.play(); 
                },
                onEnterBack: () => {
                    const video = document.getElementById("video");
                    if (video.paused) video.play();
                },
                onLeave: () => {
                    const video = document.getElementById("video");
                    if (!video.paused) {
                        video.pause();  
                    }
                    video.currentTime = 0; 
                },
                onLeaveBack: () => {
                    const video = document.getElementById("video");
                    if (!video.paused) {
                        video.pause(); 
                    }
                    video.currentTime = 0; 
                }
            }
        });

        // Cleanup script when component unmounts
        return () => {
            document.body.removeChild(script);
        };

       
    }, []); // Add an empty dependency array to run once when the component mounts

    return (
        <div className="amaranth">
            <section className="home-link">
                <Link>
                    <h1>Back to Home</h1>
                </Link>
            </section>
            <section className="heading">
                <h2>Amaranth</h2>

                <div className="project-about-section">
                    <div className="about-amaranth">
                        <p className="role-heading">About</p>
                        <div className="horizontal-line">
                            <hr />
                        </div>
                        <p>Amaranth is a Korean Spa & Massage Center located in the heart of Bangkok, Thailand. 
                            They use  traditional Korean practices, with high quality natural ingredients to rejuvenate 
                            the skin and soothe one’s soul.</p>
                    </div>

                    <div className="role">
                        <p className="role-heading">Role/Services</p>
                        <div className="horizontal-line">
                            <hr />
                        </div>
                        <p className="role-text">Design and Development</p>
                    </div>
                </div>

                <div className="visit-site">
                    <div className="site">
                        <p>Live Site</p>
                        <img className="arrow" src={arrow} alt="arrow" />
                    </div>
                </div>
            </section>

            <section className="amaranth-model" style={{ width: '40%', height: '60vh' }}>
                <spline-viewer 
                    url="https://prod.spline.design/6Pm5agL7JlZiEQp9/scene.splinecode"
                    style={{
                        width: '100%',
                        height: '100%',
                        transform: 'scale(2.1)', // Slightly enlarged the model
                        transformOrigin: 'center center' // Keep the model centered
                    }}
                ></spline-viewer>
            </section>

            <section className="amaranth-problem">
                <div className="amaranth-text">
                    <div className="old-amaranth">
                        <h2>Amaranth's old website</h2>

                        <div className="top-section">
                            <video id="myVideo" className="amaranth-old-website" src={amaranthVideo} autoPlay loop muted playsInline >
                                Your browser does not support the video tag.
                            </video>
                            <p>
                                The inspiration to redesign Amaranth Spa's website came from recognizing the spa's 
                                untapped potential to better connect with both existing and new customers. The outdated 
                                design and poor usability were limiting the spa's ability to communicate its unique offerings 
                                and stand out in a competitive market. 
                            </p>
                        </div>
                    </div>

                    <br/>

                    <div className="new-amaranth">
                        <h2>Amaranth's Redesign</h2>

                        <div className="amaranth-top-section">
                            <div className="paragraph-amaranth">
                                <p>Drawing inspiration from modern wellness brands and trends 
                                    in digital design, the objective was to create a website that not only reflected the luxurious and 
                                    tranquil experience of Amaranth Spa but also provided a seamless, engaging interface for users, 
                                    intuitive navigation, vibrant visuals, and a refreshed brand identity.</p>

                                <br/> 

                                <p>Technologies used: HTML, CSS, Javascript, React, GSAP, Figma</p>
                            </div>
                            <video id="video" className="amaranth-new-website" src={amarantBooking} autoPlay loop muted playsInline >
                                Your browser does not support the video tag.
                            </video>   
                        </div>
                    </div>

                </div>
            </section>

            <section className="responsive-layout">
                <h1>Mobile</h1>
                <div className="mobile-devices">
                    <Spline 
                        scene="https://prod.spline.design/N2ea0wk5AoFu2167/scene.splinecode"
                    />

                    <Spline
                        scene="https://prod.spline.design/QMTSpictZWi182hr/scene.splinecode" 
                    />
                    <Spline
                        scene="https://prod.spline.design/U1FTDD2NhwQZmHuj/scene.splinecode" 
                    />
                </div>
            </section>
        </div>
    );
}
