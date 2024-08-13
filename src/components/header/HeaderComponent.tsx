import React from 'react';
import NavLinkComponent from "@/components/nav-link-component/NavLinkComponent";
import './header-component.css';

const HeaderComponent = () => {
    return (
        <div className="menuComponent">
            <ul className='menuNavig'>
                <li>
                    <NavLinkComponent path={'/'}>Home</NavLinkComponent>
                </li>
                <li>
                    <NavLinkComponent path={'movies'}>Movie</NavLinkComponent>
                </li>
                <li>
                    <NavLinkComponent path={'series'}>Series</NavLinkComponent>
                </li>
                <li>
                    <NavLinkComponent path={'cartons'}>Cartoons</NavLinkComponent>
                </li>
                <li>
                    <NavLinkComponent path={'cartoon-series'}>Cartoon Series</NavLinkComponent>
                </li>
            </ul>


        </div>
    );
};

export default HeaderComponent;