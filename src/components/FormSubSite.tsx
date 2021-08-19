import React, { ReactElement } from "react";
import Form from "./form/Form";

import SubSite from "./SubSite";

interface FormSubSiteProps {
    title: string;
    icon?: ReactElement;
}

export default function FormSubSite({ title, icon }: FormSubSiteProps) {
    

    return (
        <SubSite title={title} icon={icon}>
            <div className="pb-100-px lg:pb-0 lg:flex lg:flex-col lg:flex-grow">
                <div className="p-4 lg:flex lg:flex-col lg:flex-grow">
                    <Form />
                </div>
            </div>
        </SubSite>
    )
}