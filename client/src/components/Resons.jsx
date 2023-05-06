import React from 'react'
import './Resons.css'
import image1 from "../assets/img/yoga-1.png"
import image2 from "../assets/img/Yoga-3.png"
import image3 from "../assets/img/Yoga-5 (2).png"
import image4 from "../assets/img/Yoga-6.png"
import nb from "../assets/nb.png"
import adidas from "../assets/adidas.png"
import nike from "../assets/nike.png"
import tick from "../assets/tick.png"


const Resons = () => {
    return (
        <div className='Reasons' id='reasons'>
            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className="right-r">
                <span className='right-r-span1'>Yoga and Exercise as a key to deal with PCOS</span>
                <div>
                    <span className='stroke-text'>Benefits</span>
                    <span> of Yoga</span>
                </div>

                <div className='details-r'>
                    <div>
                        <img src={tick} alt="" />
                        <span>Yoga improves strength, balance and flexibility.</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Yoga helps you manage stress.</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Yoga can mean more energy and brighter moods.</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>Yoga promotes better self-care.</span>
                    </div>
                </div>
                {/* <span style={{ color: 'var(--gray)', fontWeight: "normal" }}>OUR PARTNERS</span>
                <div className="partners">
                    <img src={nb} alt="" />
                    <img src={nike} alt="" />
                    <img src={adidas} alt="" />
                </div> */}
            </div>

        </div>
    )
}

export default Resons
