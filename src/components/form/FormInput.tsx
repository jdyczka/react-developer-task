import React from "react";

interface FormInputProps {
    text?: string;
    value: string;
    name?: string;
    type: string;
}

export default function FormInput({text, value, name, type}: FormInputProps) {

    return (
        <label>
            <input 
                type={type} 
                value={value} 
                name={name || ''}
                />
            <div>{text}</div>
        </label>
    )
}