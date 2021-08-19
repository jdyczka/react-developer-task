import React, { ReactElement } from "react";

interface SubSiteProps {
    title: string;
    icon?: ReactElement;
    children?: React.ReactNode;
}

export default function SubSite({ title, icon, children }: SubSiteProps) {

    return (
        <div className='lg:flex lg:flex-col lg:flex-grow'>
            <div className="flex items-center p-3 pr-14 border-b border-grey lg:h-100-px lg:border-0">
                <div className='text-yellow pr-3 lg:hidden'>
                    {icon}
                </div>
                <h2 className='font-black text-xl lg:font-normal lg:text-2xl'>{title}</h2>
            </div>
            <div className='lg:flex lg:flex-col lg:flex-grow'>
                {children}
            </div>
        </div>
    )
}