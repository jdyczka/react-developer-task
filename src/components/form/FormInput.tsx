import React, { FormEvent, FormEventHandler, forwardRef } from "react";

interface FormInputProps {
    onChange: FormEventHandler<HTMLInputElement>;
    onBlur: FormEventHandler<HTMLInputElement>;
    name: string;
    type: string;
    text?: string;
}

const FormInput = forwardRef<HTMLInputElement,FormInputProps>(({ onChange, onBlur, name, type, text = ''}, ref) => (
    <label>
        <input
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            type={type}
        />
        <div>{text}</div>
    </label>
))

export default FormInput;