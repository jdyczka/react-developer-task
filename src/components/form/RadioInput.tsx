import React from "react";
import FormInput from "./FormInput";

interface RadioInputProps {
    text: string;
    value: string;
    name: string;
}

export default function RadioInput({text, value, name}: RadioInputProps) {

    return (
        <FormInput type='radio' name={name} text={text} value={value} />
    )
}