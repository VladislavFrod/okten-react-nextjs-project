'use client'
import React, {FC} from 'react';
import NavLinkComponent from "@/components/nav-link-component/NavLinkComponent";
import './menu-component.css';

const MenuComponent: FC = () => {

    return (
        <div className="menuComponent">
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
                    <NavLinkComponent path={'/popular'}>Popular</NavLinkComponent>
                </li>
            </ul>
        </div>
    );
};

export default MenuComponent;
