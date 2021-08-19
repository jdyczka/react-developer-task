import React from "react";
import { Link } from "react-router-dom";
import { ReactElement } from "react";

interface SecondaryNavItemProps {
    icon?: ReactElement;
    title: string;
    path: string;
}

export default function SecondaryNavItem({icon, title, path}: SecondaryNavItemProps) {

    return (
        <li className='flex md:py-3 md:border-b md:border-grey md:flex md:items-center'>
            <div className="hidden md:block md:w-5 md:text-center">
                {icon}
            </div>
            <Link className='inline md:px-7' to={path}>{title}</Link>
        </li>
    )
}