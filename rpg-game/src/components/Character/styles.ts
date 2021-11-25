import styled from "styled-components";

export const Container = styled.div<{size: number, left: number, top: number, sidePos: number}>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-image: url('/assets/char.png');
    background-position: 0px ${props => props.sidePos}px;
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
`;

export const Name = styled.div`
    background-color: #FFF;
    color: #000;
    padding: 3px;
    border-radius: 5px;
    position: absolute;
    font-size: 10px;
    text-align: center;
    margin-top: -20px;
`;