import React, { FormEventHandler, forwardRef } from "react";

interface RadioInputProps {
    onChange: FormEventHandler<HTMLInputElement>;
    onBlur: FormEventHandler<HTMLInputElement>;
    name: string;
    value: string;
    text: string;
}

const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(({ onChange, onBlur, name, value, text }, ref) => (
    <label>
        <input
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            type='radio'
            value={value}
        />
        <div>{text}</div>
    </label>
));

export default RadioInput;