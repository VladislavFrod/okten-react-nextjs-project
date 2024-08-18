'use client'
import React, {FC} from 'react';
import NavLinkComponent from "@/components/nav-link-component/NavLinkComponent";
import './menu-component.css';

const MenuComponent: FC = () => {

    return (
        <div className="men-component">
            <ul className='menu-navig'>
                <li>
                    <NavLinkComponent path={'/'}>Home</NavLinkComponent>
                </li>
                <li>
                    <NavLinkComponent path={'/movies'}>Movie</NavLinkComponent>
                </li>
                {/*<li>*/}
                {/*    <NavLinkComponent path={'/series'}>Series</NavLinkComponent>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <NavLinkComponent path={'/popular'}><p>Popular</p></NavLinkComponent>*/}
                {/*</li>*/}
            </ul>
        </div>
    );
};

export default MenuComponent;
