import React from "react";
import { Link } from "react-router-dom";

interface MainNavItemProps {
    icon: string;
    title: string;
    path: string;
}

export default function MainNavItem({icon, title, path}: MainNavItemProps) {

    return (
        <li>
            <Link to={path}>{title}</Link>
        </li>
    )
}