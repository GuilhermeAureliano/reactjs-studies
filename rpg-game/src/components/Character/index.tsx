import * as C from './styles';
import { CharacterSides } from '../../types/CharacterSides';


type Props = {
    name: string;
    x: number;
    y: number;
    side: CharacterSides;
}

export const Character = ({x, y, side, name}: Props) => {
    const size = 30;
    const sidePos = {
        down: 0,
        left: -30,
        right: -60,
        up: -90
    }

    return (
        <C.Container
            size={size}
            left={x * size}
            top={y * size}
            sidePos={sidePos[side] ?? 0}
        >
            <C.Name>{name}</C.Name>
        </C.Container>

    );
}