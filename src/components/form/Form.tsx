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
    test: string;
}

export default function Form() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<FormData>({
        defaultValues: {
            ldlc: 250,
            test: 'test'
        }
    });

    const onSubmit = handleSubmit((data: any) => {
        console.log(data, errors);
    });

    console.log(watch('risk'))

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
                        <RadioInput {...register('risk')} name='risk' text='Niskie' value='low' />
                        <RadioInput {...register('risk')} name='risk' text='Umiarkowane' value='moderate' />
                        <RadioInput {...register('risk')} name='risk' text='Wysokie' value='high' />
                        <RadioInput {...register('risk')} name='risk' text='Bardzo wysokie' value='very-high' />
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
                        <FormInput {...register('ldlc')} type='number'/>
                    </FieldSet>
                </FormGridRow>

                <FormGridRow>
                    <p className='font-bold text-lg'>Jednostka dla stężenia LDL-C:</p>
                </FormGridRow>
                <FormGridRow>
                    <FieldSet>
                        <RadioInput {...register('ldlcUnit')} name='ldlc-unit' text='mg/dl' value='low' />
                        <RadioInput {...register('ldlcUnit')} name='ldlc-unit' text='mmol/l' value='moderate' />
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