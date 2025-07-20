import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { FaInstagram, FaPeopleLine } from "react-icons/fa6";
import InstagramEmbed2 from '@/components/instagram/InstaPost2';
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            <div className="main-footer-links">
                <div className="hyper-vision-conn-foot">
                    <div className="logo-footer">
                        <Image src={"/logo.png"} className='footer-logo' alt="hyper-logo" width={50} height={50}></Image>
                        <h4>HyperVision</h4>
                    </div>
                    <p className='footer-info'>Vision to Innovate. Collaborate. Elevate.</p>
                </div>
                <div className="footer-links">
                    <div className="footer-links-1">
                        <h4>Quick Links</h4>
                        <Link href={"/"}>Home</Link>
                        <Link href={"/"}>About Us</Link>
                        <Link href={"/"}>Our Work</Link>
                        <Link href={"/"}>Events</Link>
                    </div>
                    <div className="footer-links-2">
                        <h4>Connect</h4>
                        <Link href={"/"}>Instagram</Link>
                        <Link href={"/"}>LinkedIn</Link>
                        <Link href={"/"}>Twitter</Link>
                        <Link href={"/"}>Facebook</Link>
                    </div>
                </div>
                <div className="connect-footer">
                    <h4>Connect</h4>
                    <div className="all-footer-socials">
                        <FaInstagram />
                        <FaLinkedin />

                    </div>
                    <p className='last'>hypervision@example.com</p>
                    <p className='last'>+1 (123) 456-7890</p>

                </div>
            </div>
            <div className="divider">

            </div>
            <div className="foot-footer">
                <p>© 2023 HyperVision. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer