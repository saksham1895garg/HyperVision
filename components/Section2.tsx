import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import InstagramEmbed2 from './instagram/InstaPost2';


const Section2 = () => {
    return (
        <>
            <section className='our-work'>
                <div className="main-sec-2-upper-sec">
                    <h1 className='our-work-title'>Our Work</h1>
                    <div className="follow-us">
                        <a href="https://www.instagram.com/hypervision.tech/" target="_blank" rel="noopener noreferrer">Follow Us</a>
                        <FaInstagram className='insta-logo' />
                    </div>
                </div>
                <div className="insta-conn">
                    <div className="insta1">
                        <InstagramEmbed2 permalink="https://www.instagram.com/reel/DIG5S7FNn8V/?utm_source=ig_embed&amp;utm_campaign=loading" />
                    </div>
                    <div className="insta1">
                        <InstagramEmbed2 permalink="https://www.instagram.com/reel/DHycYOUBAx7/?utm_source=ig_embed&amp;utm_campaign=loading" />
                    </div>
                    <div className="insta1">
                        <InstagramEmbed2 permalink="https://www.instagram.com/reel/DEPGdxGBg6m/?utm_source=ig_embed&amp;utm_campaign=loading" />
                    </div>
                    <div className="insta1">
                        <InstagramEmbed2 permalink="https://www.instagram.com/reel/C_8GtC_pqQu/?utm_source=ig_embed&amp;utm_campaign=loading" />
                    </div>
                </div >
            </section >
            <section className='apply-now-section'>
                <h2 className='ready-to-join'>Ready to Join HyperVision?</h2>
                <p className='apply-now-info'>Become part of a community that's shaping the future through innovation and collaboration.</p>
                <button className='apply-now-btn' onClick={() => window.open("https://forms.gle/hypervisionApplicationForm", "_blank")}>Apply Now</button>
            </section>
        </>
    )
}

export default Section2