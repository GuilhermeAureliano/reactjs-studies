import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 13px;
        color: #8888D4;
    }
    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }
    hr {
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }
    
    label {
        font-size: 13px;

        input {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25CD89;
            border-radius: 10px;
            color: #FFF;
            outline: 0;
            font-size: 15px;
            background-color: #02044A;
        }
    }

    button {
        background-color: #25CD89;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;

        &:hover {
            background-color: #3CB371;
        }
    }

    .backButton {
        background-color: #2F3136;
        color: #FFF;
        font-size: 14px;
        text-decoration: none;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
        margin-right: 15px;

        &:hover {
            background-color: #111111;
        }
    }
`;

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
