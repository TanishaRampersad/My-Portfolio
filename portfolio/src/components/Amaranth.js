import { useEffect} from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Amaranth.css";
import arrow from "../images/right-arrow (1).png";
//import * as THREE from "three";
//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from 'gsap'
//import Spline from '@splinetool/react-spline';
//import { Viewer } from '@splinetool/viewer';


export default function Amaranth() {
    useEffect(() => {

        //window load
        gsap.to(window, { duration: 1, scrollTo: { y: 0, autoKill: true } });


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

           // Dynamically load the script
            const script = document.createElement('script');
            script.src = "https://unpkg.com/@splinetool/viewer@1.9.46/build/spline-viewer.js";
            script.type = 'module';
            script.async = true;
            document.body.appendChild(script);

            // Cleanup script when component unmounts
            return () => {
            document.body.removeChild(script);
            };
    }, []);

    return (
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
                        <hr />
                    </div>
                    <p className="role-text">Design and Development</p>
                </div>
                <div className="visit-site">
                    <div className="site">
                        <p>Live Site</p>
                        <img className="arrow" src={arrow} alt="arrow" />
                    </div>
                </div>
            </section>
            <section className="amaranth-model" style={{width: '50%', height: '60vh', }}>
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
        </div>
    );
}
