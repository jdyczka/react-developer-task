import React from "react";
import { Link } from "react-router-dom";
import { ReactElement } from "react";

interface NavItemProps {
    icon?: ReactElement;
    title: string;
    path: string;
    wrapperStyles: string;
    iconStyles: string;
    linkStyles: string;
    handleClick(): void;
}

export default function NavItem({icon, title, path, wrapperStyles, iconStyles, linkStyles, handleClick}: NavItemProps) {

    return (
        <li className={wrapperStyles}>
            <div className={iconStyles}>
                {icon}
            </div>
            <Link className={linkStyles} to={path} onClick={handleClick}>{title}</Link>
        </li>
    )
}