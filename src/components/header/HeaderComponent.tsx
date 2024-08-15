'use client'
import React, {FC} from 'react';
import NavLinkComponent from "@/components/nav-link-component/NavLinkComponent";
import './header-component.css';
import ThemeToggle from "@/components/change/ThemeToggle";
import SearchComponent from "@/components/search/SearchComponent";

const HeaderComponent: FC = () => {

    return (
        <div className="menuComponent bg-white dark:bg-gray-900 text-black dark:text-white">
            <ul className='menuNavig'>
                <li>
                    <NavLinkComponent path={'/'}>Home</NavLinkComponent>
                </li>
                <li>
                    <NavLinkComponent path={'/movies'}>Movie</NavLinkComponent>
                </li>
                <li>
                    <NavLinkComponent path={'/series'}>Series</NavLinkComponent>
                </li>
                <li>
                    <NavLinkComponent path={'/cartons'}>Cartoons</NavLinkComponent>
                </li>
                <li>
                    <NavLinkComponent path={'/cartoon-series'}>Cartoon Series</NavLinkComponent>
                </li>
                <li><ThemeToggle/></li>
            </ul>
            <SearchComponent/>
        </div>
    );
};

export default HeaderComponent;
