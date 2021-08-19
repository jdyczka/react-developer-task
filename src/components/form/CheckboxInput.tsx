import React from "react";
import FormInput from "./FormInput";

interface CheckboxInputProps {
    text: string;
    value: string;
}

export default function CheckboxInput({text, value}: CheckboxInputProps) {

    return (
        <FormInput type='checkbox' text={text} value={value} />
    )
}