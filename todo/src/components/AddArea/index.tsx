import { useState, KeyboardEvent } from 'react';

import * as C from './styles';

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {

    const[inputText, setInputText] = useState('');

    const handleKeyUp = (evt: KeyboardEvent) => {
        if (evt.code === 'Enter' && inputText != '' ) {
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <C.Container>
            <div className="image">➕</div>
            <input
                type="text"
                placeholder="Nova tarefa"
                value={inputText}
                onChange={evt => setInputText(evt.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
}