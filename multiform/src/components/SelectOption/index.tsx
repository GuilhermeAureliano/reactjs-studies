import * as C from './styles';

type Props = {
    title: string;
    description: string;
    icon: string;
    selectd: boolean;
    onClick: () => void;
}

export const SelectOption = ({title, description, icon, selectd, onClick}: Props) => {
    return (
        <C.Container onClick={onClick} selected={selectd}>
            <C.Icon>{icon}</C.Icon>
            
            <C.Info>
                <C.Title>{title}</C.Title>
                <C.Description>{description}</C.Description>
            </C.Info>

        </C.Container>
    );
}