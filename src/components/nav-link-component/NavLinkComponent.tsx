'use client';

import React, { FC } from 'react';
import Link from 'next/link';

type IProps = {
    path: string;
    children: React.ReactNode;
};

const NavLinkComponent: FC<IProps> = ({ path, children }) => {
    return (
        <Link href={path} className="nav-link">
            {children}
        </Link>
    );
};

export default NavLinkComponent;
