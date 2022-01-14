import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';

import * as C from './styles';

import { SelectOption } from '../../components/SelectOption';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';

export const FormStep2 = () => {

    const history = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            history('/'); // Volta pra tela inicial
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2 // Atualizar o passo atual
            });
        }
    }, []);

    const handleNextStep = () => {
        if (state.name != '') {
            history('/step3');
        } else {
            alert("Preencha os dados!");
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    return (
       <Theme>
           <C.Container>
                <p>Passo 2/3 </p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual profissionalmente.</p>
                <hr />

                <SelectOption 
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos!"
                    icon="😅"
                    selectd={state.level === 0}
                    onClick={()=> setLevel(0)}
                />

                <SelectOption 
                    title="Sou experiente"
                    description="Já programo há 2 anos ou mais!"
                    icon="😎"
                    selectd={state.level === 1}
                    onClick={()=> setLevel(1)}
                />  

                <C.Button>
                    <Link to="/" className="backButton">Voltar</Link>
                    <button onClick={handleNextStep}>Próximo</button>
                </C.Button>

           </C.Container>
       </Theme>
    );
}