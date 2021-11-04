import { Item } from '../../types/Item';
import * as C from './styles';

import { categories } from '../../data/categories';
import { useState } from 'react';

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {

    const[dataInput, setDataInput] = useState('');
    const[categoryInput, setCategoryInput] = useState('');
    const[titleInput, setTitleInput] = useState('');
    const[valueInput, setValueInput] = useState(0);

    const handleButtonClick = () => {
        let newItem: Item = {
            date: new Date(dataInput),
            category: categoryInput,
            title: titleInput,
            value: valueInput
        }
        onAdd(newItem);
        clearInputs();
    }
    
    const clearInputs = () => {
        setDataInput('');
        setCategoryInput('');
        setTitleInput('');
        setValueInput(0);
    }

    let categoryKeys: string[] = Object.keys(categories);

    return (
        <C.Container>
            <C.InputLabel>
                <C.InputTitle>Data</C.InputTitle>
                <C.Input type='date' value={dataInput} onChange={ e => setDataInput(e.target.value)}/>
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>Categoria</C.InputTitle>
                <C.Select value={categoryInput} onChange={e => setCategoryInput(e.target.value)}>
                    <>
                        <option></option>
                        {categoryKeys.map((cur) => (
                            <option value={cur}>{categories[cur].title}</option>
                        ))}
                    </>
                </C.Select>
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>Título</C.InputTitle>
                <C.Input type='text' value={titleInput} onChange={e => setTitleInput(e.target.value)}/>
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>Valor</C.InputTitle>
                <C.Input type='number' value={valueInput} onChange={e => setValueInput(parseFloat(e.target.value))}/>
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>&nbsp;</C.InputTitle>
                <C.Button onClick={handleButtonClick}>Adicionar</C.Button>
            </C.InputLabel>
        </C.Container>
    );
}