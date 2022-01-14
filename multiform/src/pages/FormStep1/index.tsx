import { useNavigate } from 'react-router-dom';

import * as C from './styles';

import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {

    const history = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1 // Atualizar o passo atual
        });
    }, []);

    const handleNextStep = () => {
        if (state.name != '') {
            history('/step2');
        } else {
            alert('Preencha os dados!');
        }
    }

    const handleNameChange = (evt: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: evt.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo</p>
                <hr/>
                <label>
                    Seu nome completo
                    <input 
                        type='text'
                        autoFocus={true}
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <C.Button>
                    <button onClick={handleNextStep}>Próximo</button>
                </C.Button>
            </C.Container>
        </Theme>
    );
}