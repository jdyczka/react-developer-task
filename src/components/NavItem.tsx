import React from "react";
import { NavLink } from "react-router-dom";
import { ReactElement } from "react";

interface NavItemProps {
    icon?: ReactElement;
    title: string;
    path: string;
    wrapperStyles: string;
    iconStyles: string;
    textStyles: string;
    handleClick(): void;
}

export default function NavItem({ icon, title, path, wrapperStyles, iconStyles, textStyles, handleClick }: NavItemProps) {

    return (
        <li>
            <NavLink className={wrapperStyles} to={path} onClick={handleClick} activeClassName='text-yellow'>
                <div className={iconStyles}>
                    {icon}
                </div>
                <div className={textStyles}>{title}</div>
            </NavLink>
        </li>
    )
}