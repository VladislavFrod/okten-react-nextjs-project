import React from 'react';
import Image from 'next/image'; // Імпортуйте компонент Image з Next.js
import logo from '../../assets/logo/logo.png';
import './footer-component.css'

const FooterComponent = () => {
    return (
        <footer>
            <div className='logo'>
                <Image src={logo} alt="logo" className='footer-logo'/>
                <h2 className='kino-cove'>KinoCove</h2>
            </div>
            <div>
            <p>© 2024 KinoCove. The best movie theater for movies and TV
                series online.<br/>
                All rights reserved, no copying allowed.</p>
            </div>
        </footer>
    );
};

export default FooterComponent;
