import React, { ReactElement, ReactNode } from "react";
import Form from "./Form";

import SubSite from "../SubSite";

interface FieldSetProps {
    children: ReactNode;
}

export default function FieldSet({ children }: FieldSetProps) {


    return (
        <fieldset className='border rounded-md border-dark bg-lightgrey lg:bg-transparent'>
            {children}
        </fieldset>
    )
}