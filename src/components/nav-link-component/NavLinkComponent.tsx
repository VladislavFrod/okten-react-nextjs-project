'use client'

import React, {FC} from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";

import './nav-link.css';

type IProps = {
    path: string,
    children: React.ReactNode,
}

const NavLinkClientComponent: FC<IProps> = ({path, children}) => {

    let pathname = usePathname();
    return (
        <div>
            <Link href={path} className={pathname === path ? 'active' : ''}>
                {children}
            </Link>
        </div>
    );
};

export default NavLinkClientComponent;