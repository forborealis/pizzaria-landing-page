import React from 'react';
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLinkedin } from 'react-icons/si';

const Footer = () => {
    return (
    <div className="footer-wrapper">
        <div className="footer-section-one">
            <div className="footer-icons">
                <BsTwitter/>
                <FaFacebookF/>
                <FaInstagram/>
                <SiLinkedin/>
            </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Testimonials</span>
                <span>work</span>
            </div>
            <div className="footer-section-columns">
                <span>111-1111-1111</span>
                <span>pizzaria@mail.com</span>
                <span>contact@mail.com</span>
            </div>
            <div className="footer-section-columns">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
    );
};

export default Footer;