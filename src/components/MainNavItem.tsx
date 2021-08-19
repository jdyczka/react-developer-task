import React from "react";
import { Link } from "react-router-dom";
import { ReactElement } from "react";

interface MainNavItemProps {
    icon: ReactElement;
    title: string;
    path: string;
}

export default function MainNavItem({icon, title, path}: MainNavItemProps) {

    return (
        <li className='py-3 border-b border-grey flex items-center'>
            <div className="w-5 text-center">
                {icon}
            </div>
            <Link className='inline px-7' to={path}>{title}</Link>
        </li>
    )
}