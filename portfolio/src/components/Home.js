import { useEffect } from "react"
import gsap from 'gsap';
import './Home.css'
import dash from '../images/horizontal-line-remove-button.png'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
    useEffect(() => {

      function infiniteScroll() {
        const name = document.querySelector('.myNameSection h1');

        /// Duplicate the content to ensure a seamless loop
        name.innerHTML += name.innerHTML;  // Duplicate the text inside the <h1> element

        gsap.set('.myNameSection', { overflow: 'hidden' }); 

        const nameWidth = name.offsetWidth / 2; // text is (half since it's duplicated)


        gsap.fromTo(name, {
            x: 0,
        }, {
            x: -nameWidth, // Move the text to the left by its own width
            duration: 40, 
            ease: "none", 
            repeat: -1, // Infinite loop
            repeatDelay: 0 
        });
    }

    infiniteScroll()




    /* video horizontal scroll */

    function horizontalScroll() {

      const firstRow = document.querySelector('.first-row')
      const secondRow = document.querySelector('.second-row')

      const tween = gsap.to(firstRow, {x: 160, ease: "power1:Out"})

      ScrollTrigger.create({
        trigger: firstRow,
        start: "top bottom",
        animation: tween,
        end: "bottom top",
        scrub: true
      })

      const secondTween = gsap.to(secondRow, {x: -160, ease: "power1:Out"})

      ScrollTrigger.create({
        trigger: secondRow,
        start: "top bottom",
        animation: secondTween,
        end: "bottom top",
        scrub: true
      })
  }

  horizontalScroll()





    })
   
    return(
        <>
        <section className="banner">
            <div className="flex">
                <div className="banner-text">
                    <h3 className="h3">"Exploring the intersection of design, development and imagination"</h3>
                </div>
            </div>


          {/* First Option */}
            {/* <div className="dotted-section">
                <div className="scroll-div"></div>

                <div className="scroll">
                    <p>Scroll to see my work</p>
                </div>
            </div>

            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 2200 2200"
              style={{ enableBackground: 'new 0 0 2200 2200', transform: 'scale(0.6)', color: 'white'  }}
              xmlSpace="preserve"
              
            >
            
              <g id="Objects" style={{ transform: "translateY(-44%)" }}>
                <path
                  d="M1659.566,1027.076c14.145,14.787,32.825,27.271,54.022,36.102c20.117,8.381,41.347,13.838,61.877,19.115
                  c18.578,4.775,37.788,9.713,55.695,16.751c42.927,16.872,71.544,46.319,76.551,78.77c2.639,17.107,0.816,52.219-41.042,95.153
                  c-6.031,6.186-12.011,12.119-17.794,17.858c-19.884,19.73-38.664,38.368-55.666,63.274
                  c-26.201,38.381-40.195,84.788-42.583,141.439l-37.307-15.849l44.438,105.34l44.438-105.34l-36.533,15.521
                  c2.386-53.337,15.511-96.874,39.936-132.654c16.195-23.725,34.482-41.872,53.844-61.084c5.826-5.782,11.851-11.761,17.968-18.035
                  c19.919-20.431,52.268-61.617,45.126-107.911c-5.83-37.786-37.938-71.597-85.889-90.443c-18.766-7.375-38.43-12.43-57.447-17.318
                  c-20.019-5.146-40.719-10.466-59.842-18.434c-32.859-13.69-69.257-42.228-72.867-81.267c-3.399-36.754,24.022-69.917,52.706-86.479
                  c15.267-8.814,32.57-18.805,107.958-29.723c4.099-0.594,6.941-4.398,6.348-8.498c-0.593-4.1-4.401-6.938-8.498-6.347
                  c-36.674,5.311-78.241,11.331-113.308,31.578c-18.055,10.425-33.899,25.385-44.616,42.125
                  c-11.979,18.714-17.349,39.021-15.525,58.727C1633.454,989.977,1643.14,1009.905,1659.566,1027.076z"
                />
              </g>
            </svg> */}



            {/* Second option*/}

            <div className="myNameSection">
              <h1>Tanisha Rampersad <img className="dash" src={dash} alt='circle'/> Tanisha Rampersad <img className="dash" src={dash} alt='circle'/> </h1>
            </div>



        </section>



        <section className="work">
          <div className="table1">
            <table>
              <tr>
                <th>CREATIVE PROJECTS</th>
              </tr>
              <tr>
                <td><p className="move-left">Amaranth Spa</p> <p className="move-right">Design and Development</p></td>
              </tr>
              <tr>
                <td><p className="move-left">Prussian Shopping Cart</p> <p className="move-right">Development</p></td>
              </tr>
              <tr>
                <td><p className="move-left">Flipkart</p> <p className="move-right">Design</p></td>
              </tr>
              <tr>
                <td><p className="move-left">Stripe</p> <p className="move-right">Design</p></td>
              </tr>
            </table>
          </div>

          <div className="table2">
            <table>
              <tr>
                <th>OTHER WORK</th>
              </tr>
              <tr>
                <td><p className="move-left">Woolworths Workshop</p> <p className="move-right">Design Workshop Facilitation</p></td>
              </tr>
            </table>
          </div>

        </section>


        <section className="extra-work">

          <div className="videos">

            <div className="first-row">
              <div className="box one">
                <img alt=''/>
              </div>

              <div className="box two">
                <img alt=''/>
              </div>

              <div className="box three">
                <img alt=''/>
              </div>
            </div>

            <div className="second-row">
              <div className="box four">
                <img alt=''/>
              </div>

              <div className="box five">
                <img alt=''/>
              </div>

              <div className="box six">
                <img alt=''/>
              </div>
            </div>

          </div>

        </section>

        </>
    )
}