import React from "react";

interface SubSiteProps {
    title: string;
    children?: React.ReactNode;
}

export default function SubSite({title, children}: SubSiteProps) {

    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}