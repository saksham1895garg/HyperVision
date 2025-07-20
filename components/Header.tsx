import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const Header = () => {
    return (
        <header>


            <div className="logo-main-conn">
                <div className="logo-div">
                    <Image src="/logo.png" alt="logo" width={100} height={100} className="logo-img" priority={true} />
                </div>
                <h1 className='main-logo-title'>HyperVision</h1>
            </div>

            <nav>
                <ul className="nav-links">
                    <li className="nav-link"><Link href="#home">Home</Link></li>
                    <li className="nav-link"><Link href="#events">Events</Link></li>
                    <li className="nav-link"><Link href="#projects">Projects</Link></li>
                    <li className="nav-link"><Link href="#team">Team</Link></li>
                    <li className="nav-link"><Link href="#contact">Contact</Link></li>
                </ul>
            </nav>

            <div className="socials-header">
                <FaInstagram className='head-insta-logo' />
                <FaLinkedin className='head-link-logo' />
            </div>


        </header>
    )
}

export default Header