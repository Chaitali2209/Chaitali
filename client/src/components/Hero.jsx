import React from 'react'
import './Hero.css';
import Header from './Header.jsx'
import hero_image from '../assets/img/Yoga-2.png'
import hero_image_back from '../assets/hero_image_back.png'
import Heart from '../assets/heart.png'
import Calories from '../assets/calories.png'
import {motion} from "framer-motion"
import NumberCounter from "number-counter"

const Hero = () => {
    const mobile = window.innerWidth<=768? true: false;
    const transition ={type: 'string', duration: 3}
  return (
    <div className="hero" id='home'>
        <div className="blur blur-h"></div>
        <div className="left-h">
            {/* <Header /> */}
            
            <div className="the-best-ad">
                <motion.div initial={{left: mobile ? "165px": "238px"}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type: 'tween'} }>
                    
                </motion.div>
                <span>Yoga Planner for PCOS .</span>
            </div>

            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Deal</span>
                    <span> With</span>
                </div>
                <div>
                    <span>PCOS with help of SAKHI's Yoga Planner</span>
                </div>
                <div>
                    <span>In Here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>

            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={100} start={70} delay='4' prefix="+" />
                    </span>
                    <span>Yoga Poses</span>
                </div>
                <div>
                    <span>
                        <NumberCounter end={7} start={1} delay='4' prefix='+' /> 
                    </span>
                    <span>Meaditation routine</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={50} start={10} delay='4' prefix="+" />
                    </span>
                    <span>Fitness Programs</span>
                </div>
            </div>

            {/* <div className="hero-btn">
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div> */}
        </div>
        <div className="right-h">
            {/* <button className='btn'>Join Now</button> */}
            <motion.div className='heart-rate' initial={{left: mobile ? "0" : "-22px"}}
                    whileInView={{left: mobile ? "-45px" : "110px"}}
                    transition={transition}>
                {/* <img src={Heart} alt="" width='70px'/> */}
                {/* <span>Heart Rate</span><span>116 bpm</span> */}
            </motion.div>
            <img src={hero_image} alt="" className='hero-image'/>
            <motion.img src={hero_image_back} alt="" className='hero-image-back'  
                    initial={{right: "11rem"}}
                    whileInView={{right: '20rem'}}
                    transition={transition}/>
            <motion.div className="calories" 
                    initial={{left: mobile ? "0" : "15rem"}}
                    whileInView={{left: mobile ? "": "-25rem"}}
                    transition={transition}
            >
                {/* <img src={Calories} alt="" /> */}
                {/* <div>
                    <span>Health Maintained</span><span>Regular Yoga</span>
                </div> */}
            </motion.div>
        </div>
    </div>
  )
}

export default Hero
