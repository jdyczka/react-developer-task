import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";
import RadioInput from "./RadioInput";
import FormInput from "./FormInput";
import FormGridRow from "./FormGridRow";
import FieldSet from "./FieldSet";

interface FormData {
    risk: 1.05 | 0.95 | 0.7 | 0.5;
    treated: boolean;
    ldlc: number;
    ldlcUnit: 'mg/dl' | 'mmol/l';
}

export default function Form() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { isValid }
    } = useForm<FormData>({
        mode: 'onChange',
        defaultValues: {
            ldlcUnit: 'mg/dl'
        },
    });

    const onSubmit = handleSubmit(({ risk, treated, ldlc, ldlcUnit }: FormData) => {
        console.log(risk, treated, ldlc, ldlcUnit)
        let result = 100 * risk - (treated ? 40 : 0) - 0.1 * ldlc;
        if (ldlcUnit === 'mmol/l') result /= 18;
        alert( result < 0 
            ? 'Leczenie niewymagane'
            : `Możliwe leczenie: ${result.toFixed(2)} ${ldlcUnit}`
        );
        reset();
    });

    return (
        <form className='lg:flex lg:flex-col lg:flex lg:flex-col lg:flex-grow lg:justify-between' onSubmit={onSubmit}>
            <div>
                <FormGridRow remarks={<p className='font-bold text-lg'>Pomoc:</p>}>
                    <p className='font-bold text-lg'>Ryzyko naczyniowe pacjenta:</p>
                </FormGridRow>
                <FormGridRow remarks={(<>
                    <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi massa, vehicula vel lorem ut, tristique laoreet ipsum.</p>
                    <p>Quisque sed lectus non lacus mattis tincidunt.</p>
                </>)}>
                    <FieldSet>
                        <RadioInput {...register('risk', { required: true })} text='Niskie' value='1.05' />
                        <RadioInput {...register('risk', { required: true })} text='Umiarkowane' value='0.95' />
                        <RadioInput {...register('risk', { required: true })} text='Wysokie' value='0.7' />
                        <RadioInput {...register('risk', { required: true })} text='Bardzo wysokie' value='0.5' />
                    </FieldSet>
                </FormGridRow>
                <FormGridRow>
                    <FieldSet>
                        <FormInput {...register('treated')} type='checkbox' text='Pacjent leczony statyną' />
                    </FieldSet>
                </FormGridRow>

                <FormGridRow>
                    <p className='font-bold text-lg'>Aktualne stężenie LDL-C:</p>
                </FormGridRow>
                <FormGridRow remarks={(
                    <p>Wpisz aktualnego stężenia / prowadzony pacjent</p>
                )}>
                    <FieldSet>
                        <FormInput {...register('ldlc', { required: true, min: 0 })} type='number'/>
                    </FieldSet>
                </FormGridRow>

                <FormGridRow>
                    <p className='font-bold text-lg'>Jednostka dla stężenia LDL-C:</p>
                </FormGridRow>
                <FormGridRow>
                    <FieldSet>
                        <RadioInput {...register('ldlcUnit', { required: true })} text='mg/dl' value='mg/dl' />
                        <RadioInput {...register('ldlcUnit', { required: true })} text='mmol/l' value='mmol/l' />
                    </FieldSet>
                </FormGridRow>
            </div>

            <FormGridRow>
                <div className="text-center bg-grey fixed bottom-0 inset-x-0 p-6 lg:static lg:bg-transparent">
                    <input type="submit" value="Możliwe leczenie" disabled={!isValid} />
                </div>
            </FormGridRow>

        </form >
    )
}