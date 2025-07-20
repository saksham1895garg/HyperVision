"use client";

import Image from 'next/image'
import React from 'react'

const Main = () => {
    return (
        <main>
            <video src="/videos/hero-video.mp4" autoPlay loop muted></video>
            <section className='main-sec'>
                <div className="main-hyper-details">
                    <div className="main-title-details">
                        <h1 className='vision-title'>Vison to <span className='invotate'>Innovate</span></h1>
                        <h2 className='collaborate'>Collaborate.</h2>
                        <h2 className='elevate'>Elevate.</h2>
                    </div>
                    <div className="main-hero-info">
                        <p>HyperVision is a community of innovators, thinkers, and creators dedicated to pushing boundaries and shaping the future through technology and collaboration.</p>
                    </div>
                    <div className="join-main-btns">
                        <button className='join-us'>Join Us</button>
                        <button className='explore-events'>Explore Events</button>
                    </div>
                </div>
                <div className="main-hyper-logo-section">
                    <Image src="/logo.png" className='main-hyper-logo' alt="hyper-logo" width={400} height={400}></Image>
                </div>
            </section>
        </main>
    )
}

export default Main