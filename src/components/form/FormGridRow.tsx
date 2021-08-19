import React, { ReactElement, ReactNode } from "react";
import Form from "./Form";

import SubSite from "../SubSite";

interface FieldSetProps {
    children: ReactNode;
    remarks?: ReactNode;
}

export default function FormGridRow({ children, remarks }: FieldSetProps) {


    return (
        <div className="sm:grid sm:grid-cols-8 sm:gap-4 sm:items-start my-4">
            <div className='sm:col-span-5'>
                {children}
            </div>
            <div className="hidden text-tiny font-normal sm:block sm:col-span-2">
                {remarks}
            </div>
        </div>
    )
}