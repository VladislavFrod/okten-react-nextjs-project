import React from 'react';
import NavLinkComponent from "@/components/nav-link-component/NavLinkComponent";
import {options} from "@/constants/apiConfig";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLinkComponent path={'/'}>Home</NavLinkComponent>
                </li>
                <li>
                    <NavLinkComponent path={'movies'}>Movie</NavLinkComponent>
                </li>
            </ul>


        </div>
    );
};

export default HeaderComponent;