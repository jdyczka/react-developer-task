import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "./Form.css";
import RadioInput from "./RadioInput";
import CheckboxInput from "./CheckboxInput";
import FormInput from "./FormInput";

export default function Form() {


    return (
        <form>
            <p>Ryzyko naczyniowe pacjenta:</p>
            <fieldset>
                <RadioInput name='risk' text='Niskie' value='low' />
                <RadioInput name='risk' text='Umiarkowane' value='moderate' />
                <RadioInput name='risk' text='Wysokie' value='high' />
                <RadioInput name='risk' text='Bardzo wysokie' value='very-high' />
            </fieldset>
            <fieldset>
                <CheckboxInput text='Pacjent leczony statyną' value='false' />
            </fieldset>
            <p>Aktualne stężenie LDL-C:</p>
            <fieldset>
                <FormInput type='number' value='250' />
            </fieldset>
            <p>Jednostka dla stężenia LDL-C:</p>
            <fieldset>
                <RadioInput name='ldlc-unit' text='mg/dl' value='low' />
                <RadioInput name='ldlc-unit' text='mmol/l' value='moderate' />
            </fieldset>
            
            <div className="text-center bg-grey fixed bottom-0 inset-x-0 p-6">
                <input type="submit" value="Możliwe leczenie" />
            </div>
        </form>
    )
}