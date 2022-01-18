import { ChangeEvent, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import * as C from './styles';

import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';

export const FormStep3 = () => {

    const history = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            history('/'); // Volta pra tela inicial
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3 // Atualizar o passo atual
            });
        }
    }, []);

    const handleNextStep = () => {
        if (state.email !== '' && state.github !== '') {
            console.log(state);
        } else {
            alert("Preencha os dados!")
        }
    }

    const handleEmailChange = (evt: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: evt.target.value
        });
    }

    const handleGithubChange = (evt: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: evt.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com os seus contatos.</p>
                <hr/>
                <label>
                    Qual seu email?
                    <input 
                        type='email'
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual seu github?
                    <input 
                        type='url'
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <C.Button>
                    <Link to="/step2" className="backButton">Voltar</Link>
                    <button onClick={handleNextStep}>Finalizar cadastro</button>
                </C.Button>
            </C.Container>
        </Theme>
    );
}