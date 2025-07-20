import React from 'react'
import { FaLightbulb } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { FaPeopleLine } from "react-icons/fa6";


const Section1 = () => {
    return (
        <section className='what-we-do'>
            <h1 className='what-we-do-title'>What We Do</h1>

            <div className="in-ele-col">
                <div className="inovate-div">
                    <FaLightbulb className='bulb' />
                    <h3 className='inovate-title'>Innovate</h3>
                    <p className='inovate-info'>We foster creativity and develop cutting-edge solutions to real-world problems through technology and design thinking.</p>
                </div>
                <div className="col-div">
                    <FaPeopleLine className='people' />
                    <h3 className='collaborate-title'>Collaborate</h3>
                    <p className='collaborate-info'>We bring together diverse minds to work on projects, share knowledge, and create meaningful connections.</p>
                </div>
                <div className="elobrate-div">
                    <GoGraph className='graph' />
                    <h3 className='elevate-title'>Elevate</h3>
                    <p className='elevate-info'>We help members grow their skills, build impressive portfolios, and prepare for successful careers in tech.</p>
                </div>

            </div>
        </section>
    )
}

export default Section1