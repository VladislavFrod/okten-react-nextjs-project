import React from 'react';
import NavLinkComponent from "@/components/nav-link-component/NavLinkComponent";

const GenresSidebarComponent = () => {
    return (
        <div>
            <li>
                <NavLinkComponent path={'genres/militants'}>Militants</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'genres/biography'}>Biography</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'genres/westerns'}>westerns</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'genres/military'}>Military</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'genres/detectives'}>Detectives</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'genres/Documentary'}>documentary</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'genres/drama'}>drama</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'genres/historical'}>Historical</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'genres/comedy'}>Comedy</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'genres/criminal'}>Criminal</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'genres/melodramas'}>Melodramas</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'genres/cartoons'}>cartoons</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'genres/music'}>Music</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'genres/adventures'}>Adventures</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'genres/family'}>Family</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'genres/sports'}>Sports</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'genres/thrillers'}>Thrillers</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'genres/horror'}>Horror</NavLinkComponent>
            </li>
            <li>
                <NavLinkComponent path={'genres/fantastic'}>Fantastic</NavLinkComponent>
            </li>
        </div>
    );
};

export default GenresSidebarComponent;