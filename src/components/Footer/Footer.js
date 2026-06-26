import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className="footer-overlay" id="contact-us">
                <div className="contact-us">
                   <h3 className='theme-color'>PHONE</h3>
                     <a href="tel:469-927-3317">469-927-3317</a>
                   </div>
                <div className="contact-us">
                    <h3 className='theme-color'>HOURS</h3>
                    <p>Monday - Friday: 9AM - 6PM.<br />Saturday: 10AM - 4PM.<br />Sunday: Closed.</p>
                </div>
                <div className="contact-us">
                    <h3 className='theme-color'>ADDRESS</h3>
                    <p>418 Power House Dr, McKinney, TX 75071.</p>
                </div>
            </div>
        </div>
        
        
    </footer>
  )
}

export default Footer