import React from 'react';
import NavLinkComponent from "@/components/nav-link-component/NavLinkComponent";

const GenresSidebarComponent = () => {
    return (
        <div>
            <li>
                <NavLinkComponent path={'militants'}>Militants</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'biography'}>Biography</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'westerns'}>westerns</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'military'}>Military</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'detectives'}>Detectives</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'Documentary'}>documentary</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'drama'}>drama</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'historical'}>Historical</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'comedy'}>Comedy</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'criminal'}>Criminal</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'melodramas'}>Melodramas</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'cartoons'}>cartoons</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'music'}>Music</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'adventures'}>Adventures</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'family'}>Family</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'sports'}>Sports</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'thrillers'}>Thrillers</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'horror'}>Horror</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'fantastic'}>Fantastic</NavLinkComponent>
            </li>
        </div>
    );
};

export default GenresSidebarComponent;