import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "./Form.css";
import RadioInput from "./RadioInput";
import CheckboxInput from "./CheckboxInput";
import FormInput from "./FormInput";
import FormGridRow from "./FormGridRow";
import FieldSet from "./FieldSet";

export default function Form() {


    return (
        <form className='lg:flex lg:flex-col lg:flex lg:flex-col lg:flex-grow lg:justify-between'>
            <div>
                <FormGridRow remarks={<p className='font-bold text-lg'>Pomoc:</p>}>
                    <p className='font-bold text-lg'>Ryzyko naczyniowe pacjenta:</p>
                </FormGridRow>
                <FormGridRow remarks={(<>
                    <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi massa, vehicula vel lorem ut, tristique laoreet ipsum.</p>
                    <p>Quisque sed lectus non lacus mattis tincidunt.</p>
                </>)}>
                    <FieldSet>
                        <RadioInput name='risk' text='Niskie' value='low' />
                        <RadioInput name='risk' text='Umiarkowane' value='moderate' />
                        <RadioInput name='risk' text='Wysokie' value='high' />
                        <RadioInput name='risk' text='Bardzo wysokie' value='very-high' />
                    </FieldSet>
                </FormGridRow>
                <FormGridRow>
                    <FieldSet>
                        <CheckboxInput text='Pacjent leczony statyną' value='false' />
                    </FieldSet>
                </FormGridRow>

                <FormGridRow>
                    <p className='font-bold text-lg'>Aktualne stężenie LDL-C:</p>
                </FormGridRow>
                <FormGridRow remarks={(
                    <p>Wpisz aktualnego stężenia / prowadzony pacjent</p>
                )}>
                    <FieldSet>
                        <FormInput type='number' value='250' />
                    </FieldSet>
                </FormGridRow>

                <FormGridRow>
                    <p className='font-bold text-lg'>Jednostka dla stężenia LDL-C:</p>
                </FormGridRow>
                <FormGridRow>
                    <FieldSet>
                        <RadioInput name='ldlc-unit' text='mg/dl' value='low' />
                        <RadioInput name='ldlc-unit' text='mmol/l' value='moderate' />
                    </FieldSet>
                </FormGridRow>
            </div>

            <FormGridRow>
                <div className="text-center bg-grey fixed bottom-0 inset-x-0 p-6 lg:static lg:bg-transparent">
                    <input type="submit" value="Możliwe leczenie" />
                </div>
            </FormGridRow>

        </form >
    )
}