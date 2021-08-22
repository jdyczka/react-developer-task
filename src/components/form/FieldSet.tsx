import React, { ReactNode } from "react";

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