'use client'

import React from 'react';
import Image from "next/image";
import logo from "@/assets/logo/logo.png";
import './header.css';
import SearchComponent from "@/components/search/SearchComponent";
import ThemeToggle from "@/components/change/ThemeToggle";

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <Image src={logo} alt="logo" className='header-logo'/>
                <h2 className='kino-cove'>KinoCove</h2>
            </div>
            <SearchComponent/>
          <ThemeToggle/>
        </header>
    );
};

export default Header;